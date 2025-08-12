---
title: "Building a web search engine from scratch in two months with 3 billion neural embeddings"
author: "Wilson Lin"
siteName: "Wilson Lin"
pubDate: "2025-08-10T00:00:00.000Z"
lang: "en"
---

# Building a web search engine from scratch in two months with 3 billion neural embeddings

Published August 10, 202534 min read

[![Screenshot of SERP.](https://blog.wilsonl.in/search-engine/serp-rocksdb.png)](https://blog.wilsonl.in/search-engine/serp-rocksdb.png)

A while back, I decided to undertake a project to challenge myself: build a web search engine from scratch. Aside from the fun deep dive opportunity, there were two motivators:

*   Search engines seemed to be getting worse, with more SEO spam and less relevant quality content.
*   Transformer-based [text embedding models](https://huggingface.co/spaces/mteb/leaderboard) were taking off and showing amazing natural comprehension of language.

A simple question I had was: why couldn't a search engine _always_ result in top quality content? Such content may be rare, but the Internet's [tail is long](https://en.wikipedia.org/wiki/Long_tail), and better quality results should rank higher than the prolific inorganic content and engagement bait you see today.

Another pain point was that search engines often felt underpowered, closer to keyword matching than human-level intelligence. A reasonably complex or subtle query couldn't be answered by most search engines at all, but the ability to would be powerful:

[![SERP result of paragraph-length query.](https://blog.wilsonl.in/search-engine/serp-paragraph-cropped.png)](https://blog.wilsonl.in/search-engine/serp-paragraph-cropped.png)

Search engines cover broad areas of computer science, linguistics, ontology, NLP, ML, distributed systems, performance engineering, and so on. I thought it'd be interesting to see how much I could learn and cover in a short period. Plus, it'd be cool to have my own search engine. Given all these points, I dived right in.

In this post, I go over the 2-month journey end-to-end, starting from no infra, bootstrapped data, or any experience around building a web search engine. Some highlights:

*   A cluster of 200 GPUs generated a combined 3 billion [SBERT](https://huggingface.co/sentence-transformers/multi-qa-mpnet-base-dot-v1) embeddings.
*   At peak, hundreds of crawlers ingested 50K pages per second, culminating in an index of 280 million.
*   End-to-end query latency landed around 500 ms.
*   RocksDB and HNSW were [sharded](https://blog.wilsonl.in/corenn/) across 200 cores, 4 TB of RAM, and 82 TB of SSDs.

You can play around with a deployed instance of this search engine as a [live demo](#live-demo). Here's a high-level architecture map of the system that will be covered in this post:

*   [Proving ground](#proving-ground)
*   [Normalization](#normalization)
*   [Chunking](#chunking)
    *   [Semantic context](#semantic-context)
    *   [Statement chaining](#statement-chaining)
*   [Initial results](#initial-results)
*   [Crawler](#crawler)
*   [Pipeline](#pipeline)
*   [Storage](#storage)
*   [Service mesh](#service-mesh)
*   [GPU buildout](#gpu-buildout)
*   [Sharded HNSW](#sharded-hnsw)
*   [Optimizing latency](#optimizing-latency)
*   [Knowledge graph](#knowledge-graph)
*   [SERP](#serp)
    *   [AI assistant](#ai-assistant)
    *   [State tracking](#state-tracking)
*   [Search quality](#search-quality)
*   [Live demo](#live-demo)
*   [Costs](#costs)
*   [Conclusion and what's next](#conclusion-and-what's-next)

## Proving ground

I started off by creating a minimal playground to experiment if [neural embeddings](https://huggingface.co/spaces/mteb/leaderboard) were superior for search: take some web page, chunk it up, and see if I can answer complex indirect natural language queries with precision.

As an example, let's say I'm looking at the S3 documentation. Here are how some queries are answered by current systems, and how I envisioned they should be answered:

Query

Traditional search

Neural search

i want to use s3 instead of postgres but with databases i can tag some human comment with some file in another column

_Random results about Postgres, S3, files_

You can also specify custom metadata at the time that the object is stored.

why does CORS still not work after allowing all?

_Random snippet about CORS, "S3 not working", object permissions_

Bucket configurations have an eventual consistency model...

could files get lost or corrupted?

_(No result shown)_

If a PUT request is successful, your data is safely stored.

can i use s3 from lua?

_(No result shown)_

The architecture of Amazon S3 is designed to be programming language-neutral, ... With the REST API, you use standard HTTP requests to create, fetch, and delete buckets and objects.

Basically, the search engine should understand _intent_, not _keywords_:

*   Queries are understood as a whole instead of broken down into keywords and phrases.
*   No need for query engineering: operators, format, right words to use.
*   "Tip of the tongue", implicit, and conceptual queries are mapped correctly to the right answer.
*   You can ask multi-concept, complex, nuanced queries and surface non-obvious relationships.
*   It should be far less susceptible to keyword spam and SEO tactics.

This is already great for searches in general. But it'd also be great for finding insights, unnoticed connections, and hidden gems. You can ask some very sophisticated specific query, and the search engine will surface a [one-line sentence](https://en.wiktionary.org/wiki/needle_in_a_haystack) in an obscure quality essay. You could write a paragraph of your thoughts and views, and find other writers and areas with similar perspectives. You could query with phrases that signal quality and depth, to find content and communities of similar values.

Here's the sandbox flywheel I initially created to prove the concept:

1.  Grow set of gathered diverse raw web pages.
2.  Parse, normalize, augment, and embed them into a queryable HNSW index.
3.  Build and expand the test dataset of queries as I crawl, debug, experiment, and eval.
4.  Create a UI to introspect data at each stage, see failure points, and tune.

## Normalization

HTML represents content in tags which have various intents: layout, text, media, interactivity, metadata, and app programming. Since a search engine focuses on text content, the first step of any pipeline is to sanitize and regularize the noisy markup from a crawled page and extract out semantic text. [WHATWG](https://html.spec.whatwg.org/multipage/) already defines plenty of semantic elements and rules, which I subsetted into the following mini-spec:

*   Structures should be consistent: `table > (thead, tbody, tfoot) > tr > (th, td)`; `(ul, ol) > li`.
*   Only semantic text elements should be kept: `p, table, pre, blockquote, ul, ol, dl`.
*   Text is trimmed and collapsed; no loose or unexpected text nodes outside of `<p>`.
*   Flatten text trees so that retrieving and mutating text spans (which happens often) doesn't require traversing and reconciling trees.
*   Remove or unwrap as many nodes as possible: scripts, attributes, empty elements, `<head>`, comment nodes, foreign/layout elements.
*   If `main > article` exists, use it instead of whole page.

One goal is to remove all of the [chrome](https://www.nngroup.com/articles/browser-and-gui-chrome/) on a page as they're not part of the content, which pollute the context and distort meaning:

*   Menu bars, nav links, banners, footers, site information.
*   Comments sections, asides, links to other articles.
*   Interface elements, forms, controls, social media buttons.

These can get mixed up with the primary content and dilute the search engine's understanding of the page's actual content and intent, causing poor query results.

Removing these is straightforward if the page uses [semantic elements](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/) like `<article>` or [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles), but otherwise devolves into heuristics and NLP. Methods like pattern matching on classes and IDs is fraught, and removing content by accident is worse than keeping in noise. More advanced methods like [visually](https://developer.chrome.com/docs/chromium/headless) classifying DOM structure or training [statistical text models](https://fasttext.cc/) are possible given more time and resources.

Given HTML's laxness, many sites don't follow these rules rigorously, so you get undercoverage and overcoverage. Unfortunately, this even applies to some [big](https://en.wikipedia.org/) sites that could not be ignored, so I had to hard code some special rules for them ([much like a well-known browser](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/Quirks.cpp)).

Example special rules for en.wikipedia.org

    if re.match(r"^en\.wikipedia\.org/wiki/", url):
        if tag_name not in HEADING_ELEMS:
            last_heading = find_prev_sibling(child, lambda e: e.tagName in HEADING_ELEMS)
            if (
                last_heading
                and last_heading.tagName == "h2"
                and get_text_content(last_heading).replace("[edit]", "").strip()
                in ("Sources", "Further reading", "External links", "See also")
            ):
                # This is in a section we don't want to keep.
                continue
    
        classes = set(child.getAttribute("class").split(" "))
        if "hatnote" in classes: continue # Remove "meta" information about the Wikipedia article itself. See https://en.wikipedia.org/wiki/Wikipedia:Hatnote.
        if tag_name == "ol" and "references" in classes: continue # Remove section containing list of references.
        if tag_name == "table" and "sidebar" in classes: continue # Remove sidebar, which sometimes contains useful facts but often just contains "adjacent" information and links, and is hard to parse due to use of table for formatting (not semantics).
        if "thumb" in classes: continue # Remove figures.
        if "navbox" in classes: continue # Remove the navigation boxes at the bottom of the page.
        if "printfooter" in classes: continue # Remove the message "Retrieved from $url".
        if child.getAttribute("id") == "siteSub": continue # Remove the message "From Wikipedia, the free encyclopedia".
    
        if c.tagName == "sup" and "reference" in classes: continue # Remove numbered references around square brackets within body text.
        if "mw-jump-link" in classes: continue # Remove "Jump to content" link.
        if "mw-editsection" in classes: continue # Remove "[edit]" links.
        if "mw-ui-button" in classes: continue # Remove UI buttons.
        if "wb-langlinks-edit" in classes: continue # Remove "Edit links" link.
        if "mwe-math-fallback-image-display" in classes or "mwe-math-fallback-image-inline" in classes: continue # This is a fallback, we can remove it as we handle <math> elements.

There's a lot of rich structured data available on many pages. `<meta>` tags like [OpenGraph](https://ogp.me/) are well-known. There's also an entire [spec](https://schema.org/docs/gs.html) to representing [almost anything](https://schema.org/docs/full.html) in a web page for robots to consume. Search engines use these to power [enhanced rich results](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) and build their [knowledge graphs](https://en.wikipedia.org/wiki/Knowledge_Graph_\(Google\)). It's how they know something is mentioning a [movie](https://en.wikipedia.org/wiki/Steve_Jobs_\(film\)) and not a [book](https://en.wikipedia.org/wiki/Steve_Jobs_\(book\)) or [person](https://en.wikipedia.org/wiki/Steve_Jobs) to improve relevancy, discover new emerging [things](https://en.wikipedia.org/wiki/Ontology) in the world, and show fancy shopping, rating, carousel, and "near me" results.

## Chunking

Once the text is ready, the next step is to [chunk it](https://www.pinecone.io/learn/chunking-strategies/). Most embedding models can't take in whole-page inputs and tend to [lose representational power at such lengths](https://jina.ai/news/long-context-embedding-models-are-blind-beyond-4k-tokens/) anyway. Embedding at the page level is also too coarse, not helpful for pinpointing.

A common approach is to simply split at every _n_ characters or words. But this can crudely cut off words, grammar, and structure that destroy meaning. My approach was to break into sentences, a natural coherent boundary, using a trained [sentencizer](https://spacy.io/api/sentencizer). These models are trained on a large corpus of texts and have a good understanding of grammar and syntax for high accuracy. I found spaCy's model to work the best here, handling subtleties like abbreviations, decimals, URLs, and informal style grammar.

It seemed to me that breaking into sentences would be a good atomic unit of detail: enough to pinpoint the exact relevant part or answer to a query, useful for featured direct snippets or result highlights. This would also allow building larger embedding units (e.g. paragraph sized) with more control over length while still maintaining semantic coherence.

### Semantic context

But a big problem with chunking is context. A sentence builds on top of previous sentences, the containing paragraph, current section, actively discussed concepts, and so on. Indirect references ("it", "the", "then", etc.) lose meaning if chunk is broken off from establishing context.

An initial step was to leverage the normalized semantic document tree. For example:

*   Headings indicate nesting or splitting sections; the content under a `<h2>` is associated with that heading's text.
*   Table headings indicate labels for cells in each row; paragraphs indicate semantic text break points; `<dd>` is associated with its `<dt>`; and so on.
*   A "leading" sentence like _Here are the suggested values:_ before a list explains what that list is and so would be associated with that list.

Therefore, a page like:

> ## PostgreSQL Performance Tuning Guide
> 
> …
> 
> ## Connection Settings
> 
> …
> 
> ### Maximum connections
> 
> Each connection uses a new process. This is different to most other database systems. Therefore, the setting may have surprising performance impact. Due to this design, connections use more resources than in a thread-based system, and so require extra consideration. Here are some recommended values:
> 
> *   If you are using version 16 or greater:
>     
>     Environment
>     
>     Recommended Setting
>     
>     …
>     
>     Development
>     
>     100
>     
>     …
>     
>     Web Application
>     
>     200-400
>     
>     …
>     
>     Data Warehouse
>     
>     50-100
>     
>     …
>     
>     Microservices
>     
>     20-50 per service
>     
>     …
>     
> *   If you are using version 15:
>     
>     Environment
>     
>     Recommended Setting
>     
>     …
>     
>     Development
>     
>     100
>     
>     …
>     
>     Web Application
>     
>     200-400
>     
>     …
>     
>     Data Warehouse
>     
>     50-100
>     
>     …
>     
>     Microservices
>     
>     20-50 per service
>     
>     …
>     
> 
> …

would represent the first "Development" table row as

    [
      "PostgreSQL Performance Tuning Guide", // (heading 1)
      "Connection Settings", // (heading 2)
      "Maximum connections", // (heading 3)
      "Here are some recommended values:", // (leading statement before list)
      "If you are using version 16 or greater:", // (leading statement before table)
      "Environment: Development | Recommended Setting: 100 | …", // denormalized row to provide column headings as context
    ].join("\n")
    

rather than

    "Development | 100 | …"
    

which loses meaning due to lack of context.

This context also provides disambiguation and relevancy. In the above example, both tables are only differentiated by the version mention before each table.

### Statement chaining

This doesn't resolve the problem of nearby local context: follow on sentences, anaphora, etc. To tackle this further, I trained a [DistilBERT](https://huggingface.co/distilbert/distilbert-base-uncased) classifier model that would take a sentence and the preceding sentences, and label which one (if any) it depends upon in order to retain meaning. Therefore, when embedding a statement, I would follow the "chain" backwards to ensure all dependents were also provided in context.

This also had the benefit of labelling sentences that should never be matched, because they were not "leaf" sentences by themselves.

[![Screenshot of the statement labeller UX.](https://blog.wilsonl.in/search-engine/statement-labeller.png)](https://blog.wilsonl.in/search-engine/statement-labeller.png)

The built internal statement labeller UX for quick labelling with instructions.

[![Screenshot of the statement debug view.](https://blog.wilsonl.in/search-engine/admin-statement-chain-debug.png)](https://blog.wilsonl.in/search-engine/admin-statement-chain-debug.png)

A statement with its semantic context and AI-labelled antecedent dependent statement.

Using the previous web page, here is an example:

    [
      "PostgreSQL Performance Tuning Guide", // heading 1
      "Connection Settings", // heading 2
      "Maximum connections", // heading 3,
      "Each connection uses a new process.", // necessary to understand the sentence
      // ...skipped unnecessary sentences
      "Due to this design, connections use more resources than in a thread-based system, and so require extra consideration.", // the target sentence
    ].join("\n")
    

Another example that has multiple hops:

    [
      "PostgreSQL Performance Tuning Guide", // heading 1
      "Connection Settings", // heading 2
      "Maximum connections", // heading 3
      "Each connection uses a new process.", // to understand the next line
      "This is different to most other database systems.", // to understand the next line
      "Therefore, the setting may have surprising performance impact.", // the target sentence
    ].join("\n")
    

Chunking while preserving context is a hard problem. Anthropic has an interesting analysis and offer their own approach [here](https://www.anthropic.com/news/contextual-retrieval). Another approach that I would experiment with is [late chunking](https://jina.ai/news/late-chunking-in-long-context-embedding-models/).

## Initial results

I built a UX to visualize and interact with pages in my sandbox and test out queries. The results seemed to be pretty good.

For example, on [this S3 documentation page](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html), using a natural language question gave multiple relevant direct answers, not just keyword matches, from disparate snippets that weren't simply in sections directly related to the query:

[![Prototype search results for "when should i use multipart uploads?" over S3 documentation.](https://blog.wilsonl.in/search-engine/poc-when-should-i-use-multipart-uploads.png)](https://blog.wilsonl.in/search-engine/poc-when-should-i-use-multipart-uploads.png)

Here's another example, querying [this web page](https://www.psychologytoday.com/us/blog/understanding-the-anxious-mind/202303/are-you-a-life-optimizer-what-to-do-about-perfectionism), where the search engine matched against "It's not worth it", which is arguably the most relevant and direct response, but without context would not make sense and therefore not get matched. The other matches also provide more relevant perspectives to the query.

[![Prototype search results for "is perfectionism worth it?" over a blog post on perfectionism.](https://blog.wilsonl.in/search-engine/poc-is-perfectionism-worth-it.png)](https://blog.wilsonl.in/search-engine/poc-is-perfectionism-worth-it.png)

Here are more examples, where the query has very different keywords to their answers, and don't directly refer to them, yet are good matches:

[![](https://blog.wilsonl.in/search-engine/poc-im-charged-for-invisible-space.png)](https://blog.wilsonl.in/search-engine/poc-im-charged-for-invisible-space.png)

I'm trying to figure out why my billed usage is higher than my actual usage. Without using words from the answer (which I don't know), the search engine finds me the relevant answer.

[![](https://blog.wilsonl.in/search-engine/poc-race-conditions.png)](https://blog.wilsonl.in/search-engine/poc-race-conditions.png)

The search engine is able to pick up information _related in concept_ to race conditions, despite the article not mentioning "race conditions".

[![](https://blog.wilsonl.in/search-engine/poc-can-i-use-lua.png)](https://blog.wilsonl.in/search-engine/poc-can-i-use-lua.png)

AWS doesn't have an SDK for Lua. Instead of just giving back no or nonsense results, it points out that I can use the REST API, accessible to all languages.

[![](https://blog.wilsonl.in/search-engine/poc-what-do-i-pay-for.png)](https://blog.wilsonl.in/search-engine/poc-what-do-i-pay-for.png)

What do I get charged? Without knowing the words and concepts around what S3 multipart upload charges for, and no article section called "what you pay", the search engine knows what to surface.

[![](https://blog.wilsonl.in/search-engine/poc-how-can-i-attach-some-human-english-comment-to-a-file.png)](https://blog.wilsonl.in/search-engine/poc-how-can-i-attach-some-human-english-comment-to-a-file.png)

The search engine explains what a file is in S3 and how I can achieve my goal. Note that the keywords in the query and results basically don't overlap.

More direct queries that have straightforward (but not exact keyword matching) answers are also matched well:

[![Screenshot of first result of query "can i know upload without knowing size ahead of time".](https://blog.wilsonl.in/search-engine/poc-can-i-upload-without-knowing-size-ahead-of-time.png)](https://blog.wilsonl.in/search-engine/poc-can-i-upload-without-knowing-size-ahead-of-time.png) [![Screenshot of first result of query "can uploads be interrupted".](https://blog.wilsonl.in/search-engine/poc-can-uploads-be-interrupted.png)](https://blog.wilsonl.in/search-engine/poc-can-uploads-be-interrupted.png)

Plenty of important snippets and statements lie within rich markup like nested table rows, lists, and definitions:

[![Screenshot of query for "what permissions do i need to upload".](https://blog.wilsonl.in/search-engine/poc-what-permissions-do-i-need-to-upload.png)](https://blog.wilsonl.in/search-engine/poc-what-permissions-do-i-need-to-upload.png)

## Crawler

I felt confident that the pipeline and resulting embeddings deliver good results, so I moved on to building out the actual search engine, starting with a Node.js crawler. Some requirements:

*   A form of work stealing for distributing tasks is likely needed as how long requests take varies significantly.
*   Trust nothing: control and verify DNS resolution, URLs, redirects, headers, and [timers](https://en.wikipedia.org/wiki/Slowloris_\(cyber_attack\)).
*   Origins often rate limit by IP, so tasks should be distributed across crawlers and handle origin-specific rate limits.
*   Lots of requests = lots of potential memory leaks. Manage resources (sockets, keepalives, pools) strictly, and use streaming wherever possible to keep memory O(1).

The approach ended up being:

*   up to N-per-origin concurrent Promises, which are essentially green threads as primary workload is async I/O
*   self-imposed sliding window and concurrency rate limiting per origin, with jittered delays between requests and exponential backoff between failures
*   use Node.js streams to fetch, decompress, and ingest in fixed-sized buffers for memory usage stability

Each node grabs a diverse set of URLs from the DB across domains, which is then randomly work-stolen across green threads. This multi-level stochastic queues setup reduces contention from needing global coordination, frequent polling due to the high-throughput nature, and excessive hitting of any single origin, compared to simply ordered polling from a global crawl queue.

Origins that are rate limited get excluded when polling for more URLs, and existing polled tasks get sent back to global queue.

[![Diagram of multi-level crawl queues.](https://blog.wilsonl.in/search-engine/multi-level-crawl-queues.png)](https://blog.wilsonl.in/search-engine/multi-level-crawl-queues.png)

A surprising failure point was DNS. EAI\_AGAIN and SERVFAIL caused a non-insignificant amount of failures. DNS resolution for every crawl was done manually to verify that the resolved IP was not a private IP, to avoid leaking internal data.

There's a surprising amount of detail that I overlook normally. For example, URLs seem straightforward, but can actually be subtle to deal with. All URLs, before entering the system, were strictly processed as they were central to many systems and records:

*   They must have `https:` protocol, not `ftp:`, `data:`, `javascript:`, etc.
*   They must have a valid [eTLD](https://publicsuffix.org/list/) and [hostname](https://en.wikipedia.org/wiki/Hostname#Syntax), and can't have ports, usernames, or passwords.
*   Canonicalization is done to deduplicate. All components are percent-decoded then re-encoded with a minimal consistent charset. Query parameters are dropped or sorted. Origins are lowercased.
*   Some URLs are extremely long, and you can run into rare limits like HTTP headers and database index page sizes.
*   Some URLs also have [strange characters](https://en.wikipedia.org/wiki/C0_and_C1_control_codes) that you wouldn't think would be in a URL, but will get rejected downstream by systems like [PostgreSQL](https://www.postgresql.org/docs/current/datatype-character.html#:~:text=the%20character%20with%20code%20zero%20\(sometimes%20called%20NUL\)%20cannot%20be%20stored) and [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html).

## Pipeline

[![Search engine pipeline state and data flow diagram.](https://blog.wilsonl.in/search-engine/pipeline.png)](https://blog.wilsonl.in/search-engine/pipeline.png)

Each web page was stored in PostgreSQL with a state shown in the above diagram. Workers would poll from PostgreSQL directly using `SELECT ... FOR UPDATE SKIP LOCKED` transactions, transitioning the state once completed. However, lots of long transactions and single-row lock → read → update queries from many distant connections is not efficient with PostgreSQL, so a Rust coordinator service was introduced:

*   Kept entire queue state in memory, and efficiently tracked heartbeats and expiration.
*   Handled locking, state transitions, and integrity via faster in-memory state.
*   Used efficient RPC over multiplexed HTTP/2 with clients and only a few PostgreSQL connections to the DB with queued batched upserts.

This in-memory queue was designed for high throughput:

*   An `Arc<Mutex<Task>>` was shared between three data structures:
    *   HashMap `task ID -> task` for fetching and mutating tasks.
    *   Binary heap over tasks, keyed by visibility timeouts, for making expired polled tasks available again.
    *   Grouped by origin (`origin` -> `list of tasks in that origin`) for fair scheduling across origins, with separate tracked list of available origins.
    *   Random polling within origin list, with O(1) [`swap_remove`](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.swap_remove) of self-indexed position (which also means only one other self-indexed position needs updating, no mass shift-down-by-one).
*   Graceful drift handling was adopted over global locking:
    *   Atomicity maintained via per-task locks.
    *   Changes in timeout (e.g. heartbeats) don't mutate heap; instead, the latest expiration is re-checked when background loop goes through timeout heap.
    *   An available origin that becomes empty isn't removed from available origins list until next access (poller), amortizing costs.
    *   `Arc<Mutex<Task>>` is source of truth; data structures are merely indices that may be stale (e.g. completed tasks in heap, empty origins in list, phantom polled task).

The result was efficient sublinear complexity for all operations:

Operation

Time complexity

Process

**Push task**

O(1)

HashMap insert + Vec push to origin list + update task's stored index

**Pop random**

O(k) average  
_k = excluded origins_

O(1) random index into origins list → O(1) random index into origin's tasks  
→ O(1) swap\_remove using stored index → O(log n) heap push

**Complete task**

O(1)

HashMap lookup → lock task → state transition  
→ O(1) swap\_remove from origin list using stored index

**Heartbeat**

O(1)

HashMap lookup → update timeout in-place (no heap rebuild)

**Release timeouts**

O(log n) per task

Heap pop → check if expired  
→ if yes: O(1) push to origin list; if no: O(log n) re-push to heap

**Find task**

O(1)

Direct HashMap lookup

Each task only occupied around 100 bytes of memory, so despite being memory-bound in theory, in reality it was scalable to 1 billion active tasks on a typical 128 GB RAM server.

This also helped with the multi-level stochastic queue setup described previously. Thousands of crawlers all frequently polling a random set of URLs that avoid an arbitrary set of origins, as well as sending back rate limited origin URLs, is a hard database query to optimize for, but more straightforward if global state is kept in memory via a central coordinator.

An interesting optimization was to try and reduce the memory impact of buffering so many URLs in memory:

*   [Interning](https://en.wikipedia.org/wiki/String_interning): avoided copies, which was helpful.
*   [Zstd](https://en.wikipedia.org/wiki/Zstd): doesn't work well on small strings, even with custom trained dictionary.
*   [Trie](https://en.wikipedia.org/wiki/Trie): high memory usage in reality due to pointer widths, usize offsets, sparseness, node allocations.
*   Custom compression algorithm that tries to find patterns in URL components: UUIDs, enums, base64, etc. This was very CPU expensive.

Eventually, this in-memory system was retired in favor of a queue service. SQS had very low concurrent rate limits that could not keep up with the throughput of thousands of workers across the pipeline. SQS was also very expensive, [charging per message](https://aws.amazon.com/sqs/pricing/). I decided to write an [open source RocksDB-based queue](https://github.com/wilsonzlin/queued) that was as simple as SQS, while able to perform 300K operations per second from a single node.

In order to persist the multi-level random/fair scheduling, I appended crawl tasks with a random initial [visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) to approximate shuffling and therefore diversify origins in any sequence of polled tasks. Crawler nodes polled a very large batch rather than one-by-one to continue avoiding excessive global polling via the multi-level queues approach.

## Storage

I initially chose Oracle Cloud for infra needs due to their [very low egress costs](https://www.oracle.com/cloud/networking/virtual-cloud-network/pricing/) with 10 TB free per month. As I'd store terabytes of data, this was a good reassurance that if I ever needed to move or export data (e.g. processing, backups), I wouldn't have a hole in my wallet. Their compute was also [far cheaper](https://www.oracle.com/cloud/pricing/) than other clouds, while still being a reliable major provider.

Their object storage service was the initial place for storing raw pages and derived data, and it was similar to S3 in function and performance. However, that quickly ran into scaling issues due to frequency of large-sized writes, which was expected as services like S3 have quite low rate limits — there are [hard limits](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html), but also dynamic per-account/bucket quotas and high rates of 500s during periods of internal auto scaling. Since it's a managed shared service, I couldn't manually scale or adjust those.

For a while afterwards, I stored blobs in PostgreSQL alongside regular row data as it was manually scalable and I had it set up already. Typically you'd never do this as fat columns can cause chokepoints like write amplification around logging, bloating caches, and exceeding disk page sizes. However, PostgreSQL does have a mechanism called [TOAST](https://www.postgresql.org/docs/current/storage-toast.html) which chunks and stores these large blobs in a separate table "out of the way", mitigating some of these issues.

This worked for a while, but eventually also hit limits. PostgreSQL was already struggling to keep up with merely inserting metadata rows at the high processing rate of the pipeline, and the additional workload of writing large blobs at those rates tipped it over the edge — I was seeing crawls that were taking minutes to ingest, and frequent vacuuming to reduce bloat that caused complete database stalls. There were a series of attempts to stretch PostgreSQL to avoid migrating:

*   Avoiding any indices, transactions, FKs/constraints, joins, sequences, complex queries, wide columns, or fat tables.
*   Moving all upserts to the Rust coordinator RPC service that pooled connections and queued and [batched](https://www.tigerdata.com/blog/boosting-postgres-insert-performance) them.
*   Moving to bare metal machines with low latency NVMe SSDs and [atomic writes](https://www.sqlite.org/atomiccommit.html).
*   Using [Citus](https://www.citusdata.com/), which keeps the design constraints of PostgreSQL but splits into horizontal shards to scale out writes and spread the overhead.

But fundamentally, this workload was not suited for the way PostgreSQL is designed:

*   Updates create new tuples rather than updating in place, causing bloat and necessitating vacuuming that compete for I/O, but is needed for non-blocking concurrency with ACID guarantees via [MVCC](https://www.postgresql.org/docs/current/mvcc.html).
*   Every upsert is a tree lookup to a likely random page (given no predictability to crawled URLs), hitting many random pages (causing cache thrashing), and rewriting an entire page for only one entry (write amplification).
*   Every upsert also requires checking constraints and modifying separate index trees (e.g. primary keys, uniqueness).
*   These changes are double-written due to the WAL, which is at the larger page (not record) level to provide [torn write protection](https://wiki.postgresql.org/wiki/Full_page_writes), increasing write amplification.
*   Connections are resource-heavy processes, have lots of state tracking, and execute sequentially, not optimized for thousands of few-row writers.
*   SQL queries are very general and powerful, so things like the wire protocol, query planning, and transaction isolation add a lot of overhead for simple INSERTs.

Using Citus did not help much to mitigate these overheads as they caused order of magnitude slower writes compared to raw disk I/O. It also added a coordinator, distributed query planner, and intra-cluster connections that I did not control or understand well. PostgreSQL does a lot of work for relational and ACID functionality, but what I needed was a barebones KV store with fast write performance. So I turned to [RocksDB](https://rocksdb.org/) for both records/metadata and blobs.

RocksDB directly resolves many of the aforementioned limitations:

*   Writes are sequentially written to the WAL (of records, not pages), and kept sorted in [memory](https://github.com/facebook/rocksdb/wiki/Memtable). Only much later are they sequentially written to disk as SSTs in the background. This avoids much random I/O and write amplification.
*   Fast simple path to inserts, directly going into MemTables, skipping much of the RDBMS machinery.
*   Direct [embeddable library](https://docs.rs/rocksdb/latest/rocksdb/) function calls rather than wire protocols and connections. I can choose a more efficient, simpler, multiplexing protocol like HTTP/2, that scales to thousands of inserters.
*   It still has features like immediately visible writes, atomic batch updates, and [snapshot consistency](https://github.com/facebook/rocksdb/wiki/Iterator#consistent-view).

Keen to avoid the previous experience and migration due to slow writes, I configured RocksDB from the beginning to optimize for writes and make full use of the NVMe SSDs.

RocksDB configuration I used

    fn rocksdb_opts() -> rocksdb::Options {
      let mut opt = rocksdb::Options::default();
      // Maximize disk I/O utilization.
      opt.set_max_background_jobs(num_cpus::get() as i32 * 2);
      opt.set_bytes_per_sync(1024 * 1024 * 4);
    
      // Enable BlobDB.
      opt.set_enable_blob_files(true);
      opt.set_min_blob_size(1024);
      opt.set_enable_blob_gc(true);
    
      // Use more RAM for better performance.
      // https://github.com/facebook/rocksdb/wiki/Block-Cache.
      let block_cache = Cache::new_lru_cache(1024 * 1024 * 1024 * 32);
      let mut bbt_opt = BlockBasedOptions::default();
      opt.set_write_buffer_size(1024 * 1024 * 256);
    
      // Enable partitioned index filters: https://github.com/facebook/rocksdb/wiki/Partitioned-Index-Filters
      // NOTE: We cannot use HashSearch as that requires a prefix extractor.
      bbt_opt.set_index_type(BlockBasedIndexType::TwoLevelIndexSearch);
      bbt_opt.set_bloom_filter(10.0, false);
      bbt_opt.set_partition_filters(true);
      bbt_opt.set_metadata_block_size(4096);
      bbt_opt.set_cache_index_and_filter_blocks(true);
      bbt_opt.set_pin_top_level_index_and_filter(true);
      bbt_opt.set_pin_l0_filter_and_index_blocks_in_cache(true);
    
      // Optimize for point lookups.
      // Don't use `optimize_for_point_lookup()`, which just sets a custom BlockBasedOptions; we'll use our own custom options instead.
      // NOTE: We don't enable memtable_whole_key_filtering as that uses a lot more memory for an unknown performance benefit (key lookups in memory should already be fast, and memtables should not be that large).
      // https://github.com/facebook/rocksdb/wiki/BlobDB#performance-tuning
      bbt_opt.set_block_size(1024 * 64);
      bbt_opt.set_block_cache(&block_cache);
      bbt_opt.set_format_version(5);
      // https://github.com/facebook/rocksdb/blob/25b08eb4386768b05a0748bfdb505ab58921281a/options/options.cc#L615.
      bbt_opt.set_data_block_index_type(DataBlockIndexType::BinaryAndHash);
      bbt_opt.set_data_block_hash_ratio(0.5);
      // https://github.com/facebook/rocksdb/wiki/RocksDB-Bloom-Filter#ribbon-filter.
      // Don't set this too high, as benefits drop off exponentially while memory increases linearly.
      bbt_opt.set_ribbon_filter(10.0);
      opt.set_block_based_table_factory(&bbt_opt);
      opt
    }

I tuned it for point lookups (the dominant access pattern): bloom filters, hash indices, partitioned indices, and large block caches. For writes, large write buffers and thread pools were used to saturate disk I/O.

The most interesting feature of RocksDB was [BlobDB](https://github.com/facebook/rocksdb/wiki/BlobDB). Large values may have an outsized impact on [compaction](https://github.com/facebook/rocksdb/wiki/Compaction) performance due to exacerbating write amplification. BlobDB mitigates this by storing large blobs in separate files outside the normal SSTs, leaving only small pointers there. This was highly relevant due to the large blobs I had, and made it possible to use RocksDB for both metadata/records and blobs.

Eventually I ran into the disk I/O limits, so I decided to scale out via sharding. A typical go-to is [consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing), which allows shards and nodes to expand and contract for future growth or node loss. However, it's not straightforward to implement and therefore harder to guarantee correctness via simplicity, especially around inserts and rebalance operations. Instead, I opted for a fixed set of 64 RocksDB shards, which simplified operations and client routing, while providing enough distribution capacity for the foreseeable future.

Reads and writes get routed by the [xxHash](https://xxhash.com/) of keys. Since the set of nodes almost never changes, the shard mapping was simply a static file distributed with code, requiring no metadata or discovery service. After this sharding, the coordinator service quickly became the bottleneck, as the I/O traffic and request volume of 64 shards went through one machine, so it was later dropped and clients directly read from and wrote to RocksDB shard nodes.

For representing rows, I used Serde-defined types with custom compact keys to reduce de/serialization time and storage. I used [MessagePack](https://msgpack.org/index.html) instead of an [even faster, more compact](https://github.com/djkoloski/rust_serialization_benchmark) format as those are typically tied to Rust and are sensitive to field ordering, and I opted for some extra insurance against both.

    #[skip_serializing_none]
    #[derive(Serialize, Deserialize, Debug)]
    pub struct Resource {
      #[serde(rename = "1")]
      pub state: ResourceState,
      #[serde(rename = "2")]
      pub http_status: Option<u16>,
      #[serde(rename = "3")]
      pub original_content_encoding: Option<String>,
      ..
    }
    

At its peak, this system could ingest 200K writes per second across thousands of clients (crawlers, parsers, vectorizers). Each web page not only consisted of raw source HTML, but also normalized data, contextualized chunks, hundreds of high dimensional embeddings, and lots of metadata.

## Service mesh

As the system expanded in complexity, I needed a way to discover service instances rather than hard code IPs, and communicate securely across the Internet (as I began to leverage cheaper resources elsewhere).

I used mTLS as a universal way to provide encryption + authentication, simpler than handling the myriad of protocols and auth methods for each service in its own way. A custom root CA was generated, and then a certificate and key was generated for each node at the OS level.

HTTP/2 was adopted as the protocol, and MessagePack the serialization mechanism: binary, self-describing, and supported timestamps and maps. This scaffolding allowed easily setting up and using new services via a tuned universal internal client SDK. HTTP/2 was a good protocol as I had many long fat pipes over the public Internet across nodes, not as low latency or reliable as private datacenter networks. It provided multiplexing and simple request and retry semantics, a benefit over many other protocols (e.g. PostgreSQL). mTLS + HTTP/2-based RPC made secure private service calls simple no matter where my infra resided.

An internal DNS service was also implemented: a control plane to see and edit internal DNS entries, and a [CoreDNS](https://coredns.io/) daemon on all nodes to serve DNS requests, intercepting requests to internal DNS names and proxying the rest. I initially tried to simply use public DNS names for internal infra, but this was too unreliable, with many internal requests failing simply due to transient DNS resolution timeouts or failures.

I did also try ZeroTier and Tailscale, providing a single package for encrypted and authenticated communications, DNS, routing, and discovery. But they often had issues at scale (delays and transient errors joining, propagating, and discovering changes), and traffic limitations and overhead — at the time, they could not easily saturate 10 Gbps connections and consumed a lot of CPU usage. They were also harder to use within Docker containers due to touching lower networking stack layers. In the end, HTTP + mTLS was much more straightforward, required no special networking, and saturated connections with almost no overhead. It was also safer, like [Zero Trust](https://www.beyondcorp.com/), as services could be publicly exposed and not rely on security via routing, firewalls or secrets, which are easy to misconfigure or leak.

systemd services were used for setting up definitions (e.g. env vars, limits), accounting (via cgroups), and management tools and logs (via journald). It seemed like a good trade off:

*   Simple yet comprehensive without custom scripts and workflows. Easy to debug on any out-of-the-box Linux machine.
*   Lightweight framework: declarative, structured, but no building images, repos, deployment opinions, etc.
*   No performance overhead and multiple layers of abstraction.

## GPU buildout

My initial prototype used OpenAI embeddings, available via API. That became economically infeasible as I scaled, so I set out to run inference myself.

In search of the most cost effective scalable solution, I discovered [Runpod](https://www.runpod.io/), who offer high performance-per-dollar GPUs like the RTX 4090 at far cheaper per-hour rates than AWS and Lambda. These were operated from tier 3 DCs with stable fast networking and lots of reliable compute capacity.

A key concern was GPU efficiency: they are expensive so I wanted to make sure they're fully utilized. Essentially, this meant that the operations before and after inference should not block the GPU:

*   Polling for pending jobs and fetching input data
*   Parsing and tokenizing input data
*   Processing and storing output embeddings

These Runpod workers were far from my main infra, so the long fat pipe was a concern. The latency meant that the GPU could finish inference before inputs and outputs could be transferred. Therefore, I implemented a Rust pipeline wrapping the Python core inference that could:

*   operate each stage asynchronously without blocking upstream steps
*   signal backpressure to pause upstream stages and not overwhelm system resources

These traits gave the benefit of dynamic tuning — I did not have to manually tune or limit based on specific hardware and data; the pipeline would fill up as quickly as any subsystem could handle, then signal backpressure to prevent overflowing, leading to peak efficiency automatically, as well as handling any bursts and slowdowns (e.g. network outages). Each stage utilized different hardware (CPU, networking, RAM, GPU) so a simple serial execution would needlessly block and idle resources.

A minor feature was the use of IPC over named pipes to talk to the Python process, rather than repeated subprocess spawns, reading/writing files, or spinning up a local HTTP/RPC server. Nowadays, I'd probably use [PyO3](https://github.com/PyO3/pyo3) or [candle-rs](https://github.com/huggingface/candle).

Using job queues also meant autorecovery when workers died. This made it trivial to use cheaper preemptible workers and scale up and down at any time. The result was a service that generated 100K embeddings per second across 250 GPUs at peak, with 90% average GPU utilization.

## Sharded HNSW

I used [HNSW](https://github.com/nmslib/hnswlib) as the algorithm and index for low latency vector searches. It's an in-memory optimized graph data structure that allows for sublinear [ANN](https://en.wikipedia.org/wiki/Nearest_neighbor_search) querying. I go into detail about ANN, graph algorithms, and HNSW [in this post](https://blog.wilsonl.in/graph-vector-search/).

As the HNSW index began to outgrow the available RAM on a single machine, I investigated ways to scale it. Existing vector databases were overly complex to operationalize and slow at ingesting and querying due to serving broader needs. They also required subtle tuning and knowledge of various indexing methods and trade offs that would affect recall.

I decided to stick with tried-and-true HNSW and uniformly shard it into 64 nodes, enough to scale for the foreseeable future. This retained the same low latency and high accuracy, since each shard is queried in parallel and remains a high-quality (not quantized or downgraded) full HNSW index, while now scalable to far larger combined index sizes.

However, the downside to this is that it requires lots of expensive RAM, and maintains the HNSW limitations of lack of updatability. Whenever I needed to update the index, it involved loading giant HNSW indices into the RAM of builder nodes, inserting the new embeddings, and performing a full dump. I decided to dive deep into this and built a vector database that uses cheaper disk and can perform live graph updates, downsizing the entire cluster to one machine with only 128 GB RAM and requiring no complex update pipelines, while still retaining high recall over 3 billion embeddings. It's an open source vector DB called **CoreNN**, which I go into detail in [this blog post](https://blog.wilsonl.in/corenn/).

## Optimizing latency

The user experience of a search engine is interesting, as there is an emphasis on latency specifically and not flashiness or sophisticated design. Many search engines feel different from the typical modern app: they lack loading indicators and animations, have plain designs and not much interactivity, and stream in like a "traditional" web page. As such, instant results is a baseline user expectation for search engines. To optimize for responsiveness, I sought to reduce latency at all layers of the stack.

I used [Cloudflare Argo](https://www.cloudflare.com/en-au/application-services/products/argo-smart-routing/) so that users hit closer edge PoP servers, which then routes via internal Cloudflare [private networks](https://en.wikipedia.org/wiki/Wide_area_network) rather than the Internet, meaning fewer hops, [drops](https://en.wikipedia.org/wiki/Packet_loss), and congestion. Cloudflare also uses HTTP/3 at these edge PoPs, which reduces handshake overhead and head-of-line blocking. Setting up read replicas across the globe was too expensive.

Rather than making many client-server round-trip API requests, the app server fetches all necessary data and prepares the entire response page on the [server side](https://developer.mozilla.org/en-US/docs/Glossary/SSR), minified and compressed. An endpoint handler defines the rendered tree with Promises (that start executing immediately in background) at subtrees that need fetched data, and a custom SSR framework eagerly streams out HTML as it traverses, awaiting each Promise only when reached to not block ready content. This is done to reduce [TTFB](https://en.wikipedia.org/wiki/Time_to_first_byte) and make the page feel responsive by streaming in rather than appear all at once after a long delay.

    class Element {
      // Core rendering loop.
      private async streamInner(out: Writable) {
        // Write eagerly.
        out.write(`<${this.tagName}`);
        for (const [n, v] of Object.entries(this.attrs)) {
          out.write(` ${htmlEscape(n)}="${htmlEscape(v)}"`);
        }
        out.write(">");
        for (const cRaw of this.children) {
          // Lazily await.
          const c = await cRaw;
          if (typeof c == "string") {
            out.write(htmlEscape(c));
          } else {
            await c.streamInner(out);
          }
        }
        if (!VOID_ELEMS.has(this.tagName)) {
          out.write(`</${this.tagName}>`);
        }
      }
    }
    
    // Example endpoint definition.
    const endpoint = () => (
      h(".page",
        // Subtrees can be Promises.
        (async () => {
          const results = await fetchResults();
          return h(".results", ...results.map(r => (
            h(".result", ...)
          )));
        })(),
        // All Promises begin executing concurrently without delay.
        (async () => {
          const profile = await fetchProfile();
          ...
        })(),
      ),
    );
    

JSX would probably be more elegant, but would've required some work to customize transpilation and the runtime (to handle Promises).

In terms of throughput of internal services, the RocksDB and HNSW shards already provided ample read capacity. The only scaling that was done for queries was to introduce a vectorizer service for generating embeddings for queries. This ran on CPU as the limited batching plus latency of distant GPUs negated any gains via fast floating point operations.

## Knowledge graph

I wanted to reproduce the [knowledge panel](https://support.google.com/knowledgepanel/answer/9163198?hl=en) that shows on the right side of search results. Wikipedia and Wikidata seemed like good sources to populate this panel, but their APIs are slow and rate limited. Fortunately, they offer [full exports](https://dumps.wikimedia.org/) of all their data on a regular cadence, which I used to build local optimized indices and query services.

Wikipedia offers nice structured data for articles (e.g. [Australia](https://en.wikipedia.org/api/rest_v1/page/summary/Australia)) that contains a relevant image, an extract, and a reference to a Wikidata [item](https://www.wikidata.org/wiki/Help:Items). These have associated properties that describe their relationships to other entities, useful for populating the "quick facts" (e.g. date of birth) in a knowledge panel. Combined, they form a good initial system for knowledge panels:

*   Articles form the base set of knowledge panels.
*   The title + summary are combined to generate embeddings for retrieving the relevant knowledge panel to show for a query.
*   The image, title, description, and summary are shown in the top half of the panel.
*   If there's a linked Wikidata item, that entity is looked up in the knowledge base and specific associated properties are retrieved.

Not all Wikipedia articles should be shown as knowledge panels (e.g. lists), and embedding retrieval may not give the most relevant results (e.g. showing a specific adjacent article rather than the base/broader topic). Similarly, not all Wikidata properties are worth showing. There are also lots of other data sources available to incorporate. So there are still lots of improvements to be had, but it worked well as a good starting point.

## SERP

The resulting search engine results page ([SERP](https://en.wikipedia.org/wiki/Search_engine_results_page)) looks like this:

[![Screenshot of final SERP without AI features.](https://blog.wilsonl.in/search-engine/serp-rocksdb.png)](https://blog.wilsonl.in/search-engine/serp-rocksdb.png)

I aimed for a clean minimal look to go for the "signal over noise" aesthetic. The specific statement snippets show up under "fact" pages like docs and wikis, to give quick references and answers for queries. Another example:

[![Screenshot of SERP with statement snippets.](https://blog.wilsonl.in/search-engine/serp-protein-in-chicken.png)](https://blog.wilsonl.in/search-engine/serp-protein-in-chicken.png)

What's great is the comparable lack of SEO spam. For example, I queried "best programming blogs" on a well known search engine and compared it to mine:

[![](https://blog.wilsonl.in/search-engine/serp-blogs-theirs.png)](https://blog.wilsonl.in/search-engine/serp-blogs-theirs.png)

Results from a major search engine.

[![](https://blog.wilsonl.in/search-engine/serp-blogs-mine.png)](https://blog.wilsonl.in/search-engine/serp-blogs-mine.png)

Results from my search engine.

Here's an example of finding some interesting writings and insights around a query:

[![Screenshot of SERP for "the case for/against crypto" query.](https://blog.wilsonl.in/search-engine/serp-crypto.png)](https://blog.wilsonl.in/search-engine/serp-crypto.png)

As mentioned in the beginning, the search engine is able to understand very complex queries, including entire paragraphs about ideas. For example, I entered an entire paragraph from an LLM discussion, and found some interesting high quality essays revolving around that and adjacent topics:

[![Screenshot of SERP for a paragraph about self-worth and high achievers.](https://blog.wilsonl.in/search-engine/serp-paragraph.png)](https://blog.wilsonl.in/search-engine/serp-paragraph.png)

The above UI is from the modernized [live demo](#live-demo).

### AI assistant

As LLMs were taking off around the time (which has only grown since), I decided to see if I could add some subtle useful AI features. I thought they could be helpful in three ways:

*   Provide a very quick concise answer to a straightforward query that doesn't need research.
*   Have conversations with an AI assistant.
*   Summarize results relative to the query.

It resulted in helpful augmentation without ruining the search experience:

[![](https://blog.wilsonl.in/search-engine/serp-ai-s3.png)](https://blog.wilsonl.in/search-engine/serp-ai-s3.png)

AI features give quick answers, related questions, and more tailored summaries, while still leaving main experience as is.

[![](https://blog.wilsonl.in/search-engine/serp-guarantee-clause.png)](https://blog.wilsonl.in/search-engine/serp-guarantee-clause.png)

I found the statement snippets to be helpful for official references, while AI provides a quick direct answer.

I found it especially useful for programming queries, where I often knew what was right and just needed a quick refresher. The AI quick answer was very concise and to the point, which aligned with my needs.

[![](https://blog.wilsonl.in/search-engine/serp-ai-go-init-map.png)](https://blog.wilsonl.in/search-engine/serp-ai-go-init-map.png)

It's able to remain clear even for more complex queries, while high quality results remain ranked at the top if you want to dive deeper:

[![](https://blog.wilsonl.in/search-engine/serp-parted.png)](https://blog.wilsonl.in/search-engine/serp-parted.png)

### State tracking

Tracking clicks is useful for improving search quality and finding "dead zones", spam results, and poor ranking. To prevent abuse, all results go through an `/act` URL with an AES-256-GCM encrypted data string containing important result data, which tracks important metrics and then redirects to the result URL.

Since the app is entirely SSR, it used [PRG](https://en.wikipedia.org/wiki/Post/Redirect/Get) to handle client actions. Often, there's a need to show or alter some UX upon redirecting after the action to indicate to the user the result. This means some state needed to be persisted across the POST to the GET, which I decided to use one-off cookies to relay the state, skipping the need for any server-side state. This also allowed the app to remain JS-free.

## Search quality

Two big things I learnt about search engine quality:

1.  Quantity is quality. If a search engine can't find something, it's not useful.
2.  Crawling and filtering is the most difficult and most important aspect.

The first point was obvious in retrospect. It's a limitation of my search engine; due to time and resource constraints, I was unable to crawl the whole web. Since the web and space of information is so large, this means large uneven gaps in search results.

The second point was tricky. The Internet is such a large search space, that figuring out direction and filtering is basically a necessity, to avoid picking up entire swathes of junk, spiralling in ever more deserted corners of the web, or going too deep in one area and leaving gaps in others. Yet this is a hard problem to solve, without a clear immediate starting point or obvious direction/implementation. It has to operate on large amounts of unstructured data, which often means complex [language](https://en.wikipedia.org/wiki/Natural_language_processing) and [network](https://en.wikipedia.org/wiki/Network_theory#Link_analysis) analysis, at the scale of the web. Determining authenticity, trust, originality, accuracy, and quality automatically is not trivial.

I have ideas about how to tackle this, and if I started over I would put more emphasis on researching and developing this aspect first. Infamously, search engines use [thousands of signals](https://www.google.com/intl/en_us/search/howsearchworks/how-search-works/ranking-results/) on ranking and filtering pages, but I believe newer transformer-based approaches towards content evaluation and link analysis should be simpler, cost effective, and more accurate. I also believe agentic search will play a big role in the near future, being able to comprehend, filter, rank, and beam search instead of simple retrieval.

At query time, some basic quality filters are applied:

*   Non-English.
*   Pages with empty titles or contents.
*   Matches [blocklists](https://github.com/hagezi/dns-blocklists).
*   Duplicates, measured using [Jaccard similarity](https://en.wikipedia.org/wiki/Jaccard_index) of [trigrams](https://en.wikipedia.org/wiki/Trigram).

## Live demo

[![Screenshot of demo SERP.](https://blog.wilsonl.in/search-engine/serp-demo.png)](https://blog.wilsonl.in/search-engine/serp-demo.png)

I have re-deployed the search engine as a usable demo with a more modern minimalist app that focuses on search results only.

I've added LLM-based reranking and filtering, which those two final sliders represent. I'm experimenting to see if using the latest general intelligence LLMs can help achieve better reranking and filtering without the need for a custom model and training data. [Groq](https://groq.com/) is the inference backend to ensure low latency responses — general intelligence at subsecond latency seems like a powerful underrated tool.

Because this is a demo environment, it's not as low latency as the regular production setup. As mentioned in [search quality](#search-quality), there will be noticeable gaps in search result quality for various queries due to incomplete index and quality filtering. The index cutoff is around August 2023.

Play around with the live demo at [search.wilsonl.in](https://search.wilsonl.in/).

## Costs

I sought out ways to leverage lesser-known order-of-magnitude cost efficiencies as it was a side project:

Component

Typical

Optimized

Comparison

Vector database, billion 768-dim. inserts

Turbopuffer writes + storage — $3578.88

[CoreNN](https://blog.wilsonl.in/corenn/) on Hetzner Auction — $150

Turbopuffer is 23.86×

Memory-heavy server, RAM TB month

AWS EC2 r7a — $7011.53

Hetzner Auction — $164.00

AWS is 42.75×

Storage server, NVMe TB month

AWS i4g — $243.30

Hetzner Auction — $6.63

AWS is 36.70×

Internet egress, TB month

AWS — $92.16

Oracle Cloud — $8.70

AWS is 10.59×

NVIDIA GPU (FP16), hour

AWS g6e (362 TFLOPS) — $1.86

Runpod RTX 4090 (660 TFLOPS) — $0.79

AWS is 4.28× (normalized)

Write-heavy KV store, billion 1 KB writes

AWS DynamoDB on-demand — $5000

RocksDB on Hetzner Auction — $125

AWS is 40×

Blob store, billion 100 KB writes

AWS S3 PUTs and storage — $5000 + $2300

BlobDB on Hetzner Auction — $250

AWS is 29.2×

Queue, billion messages

AWS SQS (push + poll + delete) — $1200

[queued](https://github.com/wilsonzlin/queued) — ~$0

AWS is ~∞×

CPU on-demand, core month

AWS EC2 m7a — $83.52

Oracle Cloud E4 — $18.00

AWS is 4.63×

Not only did these low-hanging cost savings save a lot of money when added up, they lowered the barrier that made the project feasible at all, and able to scale on constrained and commodity resources. I was surprised at the lower cost than I expected going in, given the size of the infra and data, involving hundreds of GPUs and terabytes of data.

However, I did have to stop indexing as it was a solo project paid out of pocket. I estimate that this search engine project could be sustained by around 10K $5/month subscriptions, which is not very high for adding another indigenous search index to the limited handful that currently exist in the world, especially one focused on quality and not ads. I think optimizing towards building an index of quality over quantity is also useful for [training LLMs](https://arxiv.org/pdf/2407.21783#page=5).

There was one surprise when I revisited costs: OpenAI charges an unusually low [$0.0001 / 1M tokens](https://platform.openai.com/docs/pricing#embeddings) for batch inference on their latest embedding model. Even conservatively assuming I had 1 billion crawled pages, each with 1K tokens (abnormally long), it would only cost **$100** to generate embeddings for all of them. By comparison, running my own inference, even with cheap Runpod spot GPUs, would cost on the order of 100× more expensive, to say nothing of [other](https://cohere.com/pricing) [APIs](https://jina.ai/embeddings/). This wasn't available at the time, so I couldn't take advantage of this, but I'm keeping it in mind for future projects.

## Conclusion and what's next

I find that one of the biggest values of neural embeddings is the ability to find great content, insights, and references. These often reside in essays and documentations, and are article-like content. Queries that are just "bookmarks" (e.g. `python download windows`) or exact phrase matching require a very broad index (including very obscure pages) but also don't leverage intelligence or comprehension; bookmarks could be indexed only by `<title>` keywords and URL substrings. Given this, one direction I want to explore is a more focused index that selects specifically for high quality interesting content across the long tail of the web. In general, exploring how to have sub-engines for more accurate, tailored, relevant, and efficient results for different domains and intents is worthwhile.

Embeddings do seem to be far more powerful than traditional search, and seeing the superior quality results (when the index has enough data) made me excited about the future of search and retrieval. With typical search engines, the more specific you get, the worse the results. Being able to narrow down and zoom in via a very specific query to find exactly what you want (quality, vibe, perspective, thought, idea, etc.) via obscure insights and relationships is very powerful and underexplored.

Despite the rise of LLMs, I think that search will always play a role: LLMs can't and shouldn't memorize all knowledge, using parameters that could be used for more intelligence and capability. Instead, LLMs can offload that to representations of knowledge via these efficient dense indices, which would also mean less hallucinations and more up-to-date information. Perhaps we will have community-maintained open-source local search indices alongside our open-source local models.

Besides [systematic data quality assurance](#search-quality), there are other low hanging optimizations to explore:

*   Is it possible to leverage existing crawling infrastructure like [Common Crawl](https://commoncrawl.org/)?
*   Could [static embeddings](https://huggingface.co/blog/static-embeddings), which are 400x faster to infer, be used?
*   Embedding models: [late chunking](https://jina.ai/news/late-chunking-in-long-context-embedding-models/), quantization, long context (to avoid chunking), incorporating new knowledge without re-generating all embeddings, and leveraging [ONNX](https://onnx.ai/).
*   Leveraging data APIs, dumps, and agreements rather than crawling.
*   Rewriting the crawler and parser in Rust for order of magnitude speedups.

I plan on posting further write-ups on this project, including:

*   A deeper analysis of the crawled index, with large scale visual and textual content evaluations and [semantic maps](https://umap-learn.readthedocs.io/en/latest/).
*   Building a dataset from the crawled data, to test recall of the search engine, and compare it to how much knowledge LLMs memorize.
*   An [io\_uring](https://man7.org/linux/man-pages/man7/io_uring.7.html) based KV store written from scratch that did not make it to production.
*   An investigation into how agentic search, [ultrafast](https://groq.com/) [LLM](https://www.cerebras.ai/) reranking and filtering, and generative UX could alter the search experience.

You can subscribe to my [email newsletter](https://wilsonzlin.kit.com/) or [RSS feed](https://blog.wilsonl.in/rss.xml), or follow me on [X](https://x.com/wilsonzlin) to keep updated on these new posts and other projects I'm working on.

If you found this post interesting, you may also be interested in the [Hackerverse](https://blog.wilsonl.in/hackerverse/), where I do something similar on a smaller scale (over Hacker News), and [CoreNN](https://blog.wilsonl.in/corenn/), a billion-scale vector database developed in response to lack of scalability of existing solutions during this project.
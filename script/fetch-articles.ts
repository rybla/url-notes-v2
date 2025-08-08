import {
  fetchArticle,
  generateSummary,
  generateTags,
  getMarkdownContent,
} from "@/article";
import { cacheJson, cacheText } from "@/cache";
import { error, log } from "@/console";
import { fetchFeed } from "@/feed";
import { RssFeedConfig, type Article } from "@/ontology";
import { show } from "@/utility";
import filenamifyUrl from "filenamify-url";
import * as fs from "fs/promises";
import path from "path";

// -----------------------------------------------------------------------------

const dirpath_feeds = "input/feed";
const filenames_feeds = await fs.readdir(dirpath_feeds);
// log(show({ filenames_feeds }));

const feeds = await Promise.all(
  filenames_feeds.map(
    async (filename_feed) =>
      await fetchFeed(
        RssFeedConfig.parse(
          await Bun.file(path.join(dirpath_feeds, filename_feed)).json(),
        ),
      ),
  ),
);
// log(show({ feeds }));

for (const feed of feeds) {
  log(`fetching articles from feed: ${feed.config.name}`);
  for (const item of feed.rss.items.slice(0, feed.config.maxItems)) {
    try {
      const url = item.link;
      if (!url) continue;

      log(`fetching article at url: ${url}`);

      const article = await cacheJson(
        `output-1/article/${filenamifyUrl(url)}.json`,
        async () => {
          const article: Article | null = await fetchArticle(url);
          if (!article) return null;
          // fill in some extra info from the feed item
          article.title = article.title ?? item.title ?? url;
          article.summary =
            item.summary ?? article.excerpt ?? item.contentSnippet;
          article.tags = article.tags ?? item.categories ?? [];
          article.publishedTime = article.publishedTime ?? item.pubDate;
          return article;
        },
      );
      if (!article) continue;
    } catch (e: unknown) {
      if (e instanceof Error) {
        error(e.toString());
      } else {
        log("[unrecognized exception]", e);
      }
    }
  }
}

// -----------------------------------------------------------------------------

process.exit(0);

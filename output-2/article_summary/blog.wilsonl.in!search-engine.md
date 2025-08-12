*   **Objective**: Build a web search engine from scratch in two months, leveraging neural embeddings for semantic search over traditional keyword matching.
*   **Scale & Performance**:
    *   Indexed 280 million pages, generating 3 billion SBERT embeddings.
    *   Crawled at a peak of 50,000 pages per second.
    *   Achieved ~500ms end-to-end query latency.
    *   Infrastructure scaled across 200 cores, 4 TB RAM, 82 TB of SSDs, and a 200 GPU cluster.
*   **Core Technical Stack**:
    *   **Storage**: Migrated from PostgreSQL to a sharded RocksDB deployment to handle high write throughput (200K writes/sec). Utilized RocksDB's `BlobDB` feature to efficiently store large HTML content outside the primary LSM-tree, mitigating write amplification.
    *   **Vector Index**: Started with a sharded in-memory HNSW implementation. Later developed `CoreNN`, a custom, open-source, disk-based vector database to handle 3 billion embeddings with live updates, reducing the memory footprint from a large cluster to a single machine.
    *   **Crawling & Pipeline**: Built a high-throughput pipeline using a custom RocksDB-based queue (`queued`) for task management, replacing a Rust-based in-memory coordinator and commercial services (like SQS) that couldn't meet the performance/cost requirements.
    *   **Service Mesh**: Implemented a custom service mesh using mTLS over HTTP/2 for secure, efficient, and multiplexed inter-service communication, preferring it over VPN solutions for performance and simplicity.
*   **Data Processing & Semantics**:
    *   **Normalization**: Developed a sophisticated HTML normalization pipeline to extract semantic content, using heuristics and custom rules to remove non-content elements ("chrome").
    *   **Chunking**: Implemented a multi-layered chunking strategy to preserve semantic context for embeddings:
        1.  Split text into sentences using `spaCy`.
        2.  Prepended contextual information from the document structure (e.g., headings).
        3.  Trained a `DistilBERT` model to identify and chain dependent sentences, resolving anaphora and local context.
*   **Serving & Frontend**:
    *   Used a custom server-side rendering (SSR) framework that streams HTML as data-fetching Promises resolve, minimizing Time To First Byte (TTFB).
    *   The application was designed to be JS-free, handling user actions via the Post/Redirect/Get (PRG) pattern with state relayed through one-off cookies.

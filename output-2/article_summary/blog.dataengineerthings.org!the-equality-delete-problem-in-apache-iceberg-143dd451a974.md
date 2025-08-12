*   **Core Problem:** Streaming Change Data Capture (CDC) from transactional databases (e.g., Postgres) to Apache Iceberg is difficult due to handling `DELETE` operations. `UPDATE`s are often `DELETE` + `INSERT`, compounding the issue.
*   **Iceberg Delete Mechanisms:**
    *   **Position Delete:** Deletes by exact file path and row number. Fast for queries but impractical for streaming CDC, as it requires a pre-query to find the row's physical location, adding latency and I/O.
    *   **Equality Delete:** Deletes by matching column values (e.g., primary key). Natural for CDC as it doesn't require location information, but degrades query performance via "merge-on-read" and requires periodic compaction.
*   **Engine Support for Equality Deletes:**
    *   **Snowflake:** Supported for Snowflake-managed tables, but *not* for externally managed tables (e.g., using AWS Glue).
    *   **Databricks:** No support for any row-level deletes (neither equality nor position).
    *   **Amazon Redshift:** Supports equality deletes for externally managed tables.
*   **RisingWave's Solution:**
    *   **Hybrid Write Strategy:** Uses efficient Position Deletes for keys updated within the same batch and Equality Deletes for all other changes, optimizing write performance.
    *   **Schedulable Compaction:** Implements a built-in, schedulable service to periodically merge equality delete files into base data files. This mitigates read amplification and controls costs.
    *   **Cross-Engine Compatibility:** Before exporting, it runs a targeted compaction to produce a "clean" version of the data with no delete files, ensuring compatibility with engines like Snowflake and Databricks that lack equality delete support.
    *   **Exactly-Once Semantics:** Achieved through a custom, idempotent commit log, ensuring data integrity with minimal overhead.

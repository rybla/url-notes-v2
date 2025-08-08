*   **Zitadel Actions:** The JavaScript engine for custom scripting does not support regex named capture groups.
*   **Microsoft Entra:** The OpenID discovery document does not advertise PKCE support, even though it is supported.
*   **EXIF Image Dimensions:** EXIF metadata can contain dimensions that differ from the actual image dimensions.
*   **YAML Whitespace:** Whitespace handling can be unintuitive.
*   **Windows Hidden Files:** Cannot be opened with the "w" flag, which causes issues when combined with the SMB "hide dot files" option.
*   **Git CRLF Conversion:** Automatic conversion of LF to CRLF on checkout can break bash scripts.
*   **Cloudflare Workers `fetch`:** Defaults to HTTP, which can cause redirect loops even when HTTPS is specified.
*   **Mobile GPS Stripping:** Some phones silently remove GPS metadata from images if the requesting app lacks location permissions.
*   **PostgreSQL `NOTIFY`:** `NOTIFY` is transactional, which can cause high write-ahead logging (WAL) frequency with certain adapters like the `socket.io-postgres-adapter`.
*   **npm Scripts:** Make a network call to the npm registry on each execution, making them inefficient for frequent operations like health checks.
*   **Dependency Bloat:** A community member is known for adding ~50 unnecessary packages to projects for "backwards compatibility."
*   **bcrypt Password Length:** The bcrypt implementation truncates passwords to the first 72 bytes.
*   **JavaScript `Date` Object:** Months are 0-indexed, while days and years are 1-indexed.
*   **Node.js ESM Imports:** Prior to v20.8, a CJS project importing an ES module that in turn imported a CJS module could cause a segfault.
*   **PostgreSQL Parameter Limit:** Queries are limited to 65,535 parameters, which can break large bulk insert operations.
*   **Secure Contexts:** Some Web APIs (e.g., Clipboard) are restricted to HTTPS or localhost environments.
*   **TypeORM `remove`:** The `remove` operation mutates the input entity by deleting its `id` property.

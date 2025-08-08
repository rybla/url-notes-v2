---
title: "Cursed Knowledge | Immich"
lang: "en"
---

# Cursed Knowledge | Immich

Cursed knowledge we have learned as a result of building Immich that we wish we never knew.

*   6/4/2025
    
    Zitadel Actions are cursed
    
    Zitadel is cursed because its custom scripting feature is executed with a JS engine that doesn't support regex named capture groups.
    
*   5/30/2025
    
    Entra is cursed
    
    Microsoft Entra supports PKCE, but doesn't include it in its OpenID discovery document. This leads to clients thinking PKCE isn't available.
    
*   5/5/2025
    
    Image dimensions in EXIF metadata are cursed
    
    The dimensions in EXIF metadata can be different from the actual dimensions of the image, causing issues with cropping and resizing.
    
*   4/1/2025
    
    YAML whitespace is cursed
    
    YAML whitespaces are often handled in unintuitive ways.
    
*   9/20/2024
    
    Hidden files in Windows are cursed
    
    Hidden files in Windows cannot be opened with the "w" flag. That, combined with SMB option "hide dot files" leads to a lot of confusion.
    
*   8/7/2024
    
    Carriage returns in bash scripts are cursed
    
    Git can be configured to automatically convert LF to CRLF on checkout and CRLF breaks bash scripts.
    
*   8/7/2024
    
    Fetch inside Cloudflare Workers is cursed
    
    Fetch requests in Cloudflare Workers use http by default, even if you explicitly specify https, which can often cause redirect loops.
    
*   7/21/2024
    
    GPS sharing on mobile is cursed
    
    Some phones will silently strip GPS data from images when apps without location permission try to access them.
    
*   7/3/2024
    
    PostgreSQL NOTIFY is cursed
    
    PostgreSQL does everything in a transaction, including NOTIFY. This means using the socket.io postgres-adapter writes to WAL every 5 seconds.
    
*   7/3/2024
    
    npm scripts are cursed
    
    npm scripts make a http call to the npm registry each time they run, which means they are a terrible way to execute a health check.
    
*   6/28/2024
    
    50 extra packages are cursed
    
    There is a user in the JavaScript community who goes around adding "backwards compatibility" to projects. They do this by adding 50 extra package dependencies to your project, which are maintained by them.
    
*   6/25/2024
    
    Long passwords are cursed
    
    The bcrypt implementation only uses the first 72 bytes of a string. Any characters after that are ignored.
    
    6/25/2024
    
*   1/31/2024
    
    JavaScript Date objects are cursed
    
    JavaScript date objects are 1 indexed for years and days, but 0 indexed for months.
    
*   1/9/2024
    
    ESM imports are cursed
    
    Prior to Node.js v20.8 using --experimental-vm-modules in a CommonJS project that imported an ES module that imported a CommonJS modules would create a segfault and crash Node.js
    
*   12/28/2023
    
    PostgreSQL parameters are cursed
    
    PostgresSQL has a limit of 65,535 parameters, so bulk inserts can fail with large datasets.
    
*   6/26/2023
    
    Secure contexts are cursed
    
    Some web features like the clipboard API only work in "secure contexts" (ie. https or localhost)
    
*   2/23/2023
    
    TypeORM deletes are cursed
    
    The remove implementation in TypeORM mutates the input, deleting the id property from the original object.
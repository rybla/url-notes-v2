*   **Objective**: Replace traditional blog comment systems (e.g., Disqus, self-hosted) with a solution built on the Bluesky social network and its underlying AT Protocol.
*   **Core Mechanism**:
    1.  A blog post is announced with a corresponding post on Bluesky.
    2.  The AT URI of the Bluesky post is added to the blog post's frontmatter.
    3.  A client-side component fetches the thread of replies to that Bluesky post using the public `getPostThread` API endpoint.
    4.  These replies are rendered as the comment section on the blog page.
*   **Technical Implementation**:
    *   **Protocol**: Leverages the AT Protocol, using DIDs (user IDs), CIDs (content IDs), and AT URIs (content addresses).
    *   **Frontend**: Built with React and integrated into an Astro site using a `client:load` directive.
    *   **Architecture**: Comprises three main components: a primary container for the thread, a recursive component for rendering nested replies (capped at 5 levels), and a component for handling rich media embeds.
    *   **Dependencies**: Uses the `@atcute/client` library for TypeScript types corresponding to the AT Protocol API responses.
*   **Features**:
    *   **Threading**: Renders nested replies recursively with visual indentation.
    *   **Rich Content**: Supports embedded images (with a responsive grid layout), external link previews (cards), and provides a graceful fallback for unknown embed types.
*   **Advantages**:
    *   **No Backend Maintenance**: Eliminates the need for a database, user management, or moderation tools on the blog owner's side.
    *   **Progressive Enhancement**: The blog remains functional even if the comment component fails to load.
    *   **Performance**: Offloads asset delivery (images) and API requests to Bluesky's optimized CDN and infrastructure.
    *   **Decentralization**: Avoids platform lock-in, with the theoretical ability to switch to different AT Protocol AppViews or build a custom one.

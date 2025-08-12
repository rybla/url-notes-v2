*   **Vulnerability:** The StarDict application on X11, with Debian's default configuration, transmits all user text selections (via the X11 primary selection mechanism) to remote servers over unencrypted HTTP.
*   **Root Cause:** The issue stems from two features enabled by default:
    1.  **Scan Functionality:** StarDict monitors and captures any text highlighted by the user system-wide.
    2.  **YouDao Plugin:** The `stardict-plugin` package, a default dependency, includes a plugin for the YouDao online dictionary that sends captured text to `dict.youdao.com` and `dict.cn` for translation.
*   **Security Impact:** All selected text, potentially including passwords, API keys, or private data, is sent in plaintext, making it vulnerable to network sniffing.
*   **System Context:**
    *   The vulnerability is specific to the X11 display server architecture, which allows applications to freely monitor clipboard/selection events.
    *   The behavior is not present on Wayland, as its security model isolates application inputs by default, thus breaking the "scan" feature.
*   **History & Maintenance:** This is a recurring problem. A similar bug was reported in 2009 and patched, but the YouDao plugin, added in 2016, does not respect the existing configuration flag meant to disable networked dictionaries.

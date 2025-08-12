*   **Project:** `wlgblock` is a screen locker for the Wayland display server protocol.
*   **Core Function:** It replaces the conventional password entry screen with a Gameboy emulator (`gbcc`) running a patched version of the Pokémon Crystal game.
*   **Unlock Mechanism:** The session is unlocked by solving an in-game puzzle. This involves entering a password within the game, which then writes a specific value to a designated RAM address.
*   **Wayland Implementation:**
    *   Utilizes the `ext-session-lock-v1` protocol, requiring a compatible compositor like Sway.
    *   Implements a custom low-level window using EGL and keyboard listeners directly, rather than relying on a UI toolkit like GTK or SDL.
    *   The locker is integrated into the `gbcc` emulator as a new, custom GUI backend.
*   **Game Hacking:**
    *   Requires a patched ROM of Pokémon Crystal, based on the `pret/pokecrystal` decompilation project.
    *   The patch modifies the game's assembly to add the password logic and a communication channel with the locker.
    *   The locker monitors a specific RAM address in the emulator; when the correct value appears (triggered by the in-game password), it unlocks the session.
*   **Build Process:** The project uses Nix for its development environment. Users must patch the game ROM, compile it, and then build `wlgblock`.

*   **Project:** `sbixel`, a simple pixel physics simulator.
*   **Language/Library:** Built with Rust and the `macroquad` graphics library.
*   **Core Logic:** Employs a "sector" system to optimize performance by only simulating active pixel areas.
*   **Configuration:** Simulation and performance settings are located in `src/def.rs`.
*   **Known Issues/Roadmap:** The author identifies needed improvements in water/sand simulation, rendering (which currently redraws the entire window each frame), and collision logic (`pixel_already_processed`). Future plans include gas simulation and static objects.
*   **Purpose:** Created as a personal project to learn Rust.

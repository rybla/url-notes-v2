*   **Objective:** Convert a "dumb" (unmanaged) TP-Link TL-SG1005D Gigabit switch into a managed switch to support VLANs.
*   **Problem:** Unmanaged switches lack VLAN tagging capabilities, which the author required for network segmentation (separating a wireless access point onto its own VLAN).
*   **Discovery:** Upon inspection, the unmanaged switch was found to use a Realtek RTL8366SB switch IC.
*   **Core Finding:** The RTL8366SB datasheet revealed that the chip itself possesses advanced management features, including VLAN support and port mirroring, typically found only in managed switches.
*   **Proposed Solution:** The IC's management features are configurable via an I2C interface by setting hexadecimal register values. The author plans to use an AVR microcontroller to send the necessary configuration commands to the switch IC, thereby enabling its latent managed capabilities.

*   **Vulnerability:** Custom Flipper Zero firmware can defeat the rolling code security used in many modern vehicles.
*   **Attack Vector:** The new attack requires capturing only a single, non-jammed keyfob transmission to gain full emulation of the keyfob's functions (lock, unlock, etc.).
*   **Side Effect:** The original keyfob is desynchronized from the vehicle's receiver and ceases to function.
*   **Potential Mechanisms:**
    *   Reverse engineering the pseudo-random number generator (PRNG) sequence from the single capture, possibly aided by previously leaked or brute-forced sequences.
    *   A "RollBack" attack, which replays captured codes in a specific sequence to trick the receiver into rolling back to a previous, valid code.
*   **Affected Brands:** Includes Chrysler, Dodge, Fiat, Ford, Hyundai, Jeep, Kia, Mitsubishi, and Subaru.
*   **Remediation:** No simple patch is available; may necessitate mass vehicle recalls.

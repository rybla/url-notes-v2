*   **Release Status**: Unofficial Debian release, but an official port of Debian GNU/Hurd. It is a snapshot of Debian "sid" as of August 2025, aligned with the Debian "Trixie" stable release.
*   **Architectures**: i386 and amd64 are supported, with ~72% of the Debian archive available for both.
*   **64-bit Support**: Now complete for amd64, utilizing userland disk drivers from NetBSD via the Rump layer.
*   **Filesystem**: Uses `xattr` by default for storing translator metadata, enabling easier bootstrapping from other operating systems with tools like `mmdebstrap`.
*   **Toolchain**: The Rust programming language has been ported and is now available.
*   **Hardware & Kernel**:
    *   Support for USB disks and CD-ROMs has been added through the Rump kernel layer.
    *   Symmetric Multi-Processing (SMP) packages are now available and functional.
    *   The console now uses `xkb` for keyboard layouts and supports framebuffers provided by multiboot loaders.
    *   Support for ACPI, RTC, APIC, and HPET has been added.
*   **Installation**: Available as a NETINST ISO or a pre-installed disk image, runnable in a VM like QEMU.

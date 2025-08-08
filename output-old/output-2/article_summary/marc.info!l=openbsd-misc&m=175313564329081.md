*   An OpenBSD user notes that the `src.tar.gz` and `sys.tar.gz` archives for version 7.7 expand to approximately 1.7GB.
*   A single directory, `sys/dev/pci/drm/amd`, which contains the AMD GPU driver, constitutes 499MB of the total size.
*   The bulk of the driver's size (458MB) is attributed to its `include` directory, which contains numerous C header files.
*   The author questions if this size is necessary and whether the driver's source can be reduced.

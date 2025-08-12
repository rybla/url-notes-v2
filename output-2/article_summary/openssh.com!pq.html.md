*   **Threat**: Future cryptographically-relevant quantum computers (QCs) are expected to break classical asymmetric cryptography, including algorithms used for key agreement and digital signatures in SSH.
*   **Attack Vector**: The primary concern is the "store now, decrypt later" attack, where encrypted SSH session data is captured today and decrypted years later once a sufficiently powerful QC is available.
*   **Mitigation**: OpenSSH has integrated post-quantum (PQ) key exchange algorithms to protect against this threat.
*   **Hybrid Algorithms**: The implemented PQ algorithms are hybrids, combining a classical algorithm (e.g., ECDH/x25519) with a PQ algorithm (e.g., ML-KEM or NTRU Prime). This ensures that the key exchange is at least as secure as the classical algorithm, even if the PQ component is broken.
*   **Implementations**:
    *   `sntrup761x25519-sha512`: Supported since OpenSSH 9.0.
    *   `mlkem768x25519-sha256`: Supported since OpenSSH 9.9 and is the default as of version 10.0.
*   **User Warnings**: OpenSSH 10.1 will issue a warning if a connection uses a non-PQ key exchange algorithm.
*   **Digital Signatures**: PQ digital signatures are not yet implemented. The risk is considered less urgent as there is no analogous "store now, decrypt later" attack for signatures.

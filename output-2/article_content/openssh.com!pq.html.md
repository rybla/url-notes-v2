---
title: "OpenSSH: Post-Quantum Cryptography"
lang: "en"
---

# OpenSSH: Post-Quantum Cryptography

* * *

OpenSSH supports a number of cryptographic key agreement algorithms considered to be safe against attacks from quantum computers. We recommend that all SSH connections use these algorithms.

OpenSSH has offered post-quantum key agreement (_KexAlgorithms_) by default since release 9.0 (2022), initially via the sntrup761x25519-sha512 algorithm. More recently, in OpenSSH 9.9, we have added a second post-quantum key agreement mlkem768x25519-sha256 and it was made the default scheme in OpenSSH 10.0.

To encourage migration to these stronger algorithms, OpenSSH 10.1 will warn the user when a non post-quantum key agreement scheme is selected. These warnings are displayed by default but may be disabled via the _WarnWeakCrypto_ option in [ssh\_config(5)](https://man.openbsd.org/ssh_config.5).

### Background

A quantum computer (QC) is a device capable of performing computations with information encoded as quantum states. Such a device could quickly solve particular problems that are intractable for existing "classical" computers.

The mathematics that underpin a number of cryptographic algorithms are among the problems that quantum computers are believed to be able to effectively solve. This means that a sufficiently-powerful quantum computer (a.k.a a "cryptographically-relevant" quantum computer) will be able to break them. Most affected is the cryptography used for key agreement and digital signatures, both of which play important roles in SSH.

Fortunately, quantum computers of sufficient power to break cryptography have not been invented yet. Estimates for when a cryptographically-relevant quantum computer will arrive, based on the rate of progress in the field, range from 5-20 years, with many observers expecting them to arrive in the mid-2030s.

The entire privacy of an SSH connection depends on cryptographic key agreement. If an attacker can break the key agreement then they are able to decrypt and view the entire session. The attacker need not perform this attack in real time; they may collect encrypted SSH sessions now and then decrypt them later once they have access to a quantum computer. This is referred to as a "store now, decrypt later" attack (also as "harvest now, decrypt later").

OpenSSH supports post-quantum cryptography to protect user traffic against this attack.

## FAQ

**I received a warning from ssh that directed me to this page. What should I do?**

As mentioned above, OpenSSH 10.1 started warning users when connections use cryptography that is not safe against quantum computers. If you received such a warning, it means that the server you connected to did not offer one of the two post-quantum key agreement algorithms that are being standardised for the SSH protocol: [mlkem768x25519-sha256](https://datatracker.ietf.org/doc/draft-ietf-sshm-mlkem-hybrid-kex/) and [sntrup761x25519-sha512](https://datatracker.ietf.org/doc/draft-josefsson-ntruprime-ssh/)

The ideal solution is to update the server to use an SSH implementation that supports at least one of these. OpenSSH versions 9.0 and greater support

sntrup761x25519-sha512 and versions 9.9 and greater support mlkem768x25519-sha256. If your server is already running one of these versions, then check whether the _KexAlgorithms_ option has disabled their use.

If you are unable to update the server and/or you prefer to accept the risk of continuing to use quantum-unsafe cryptography then the warning may be silenced via the _WarnWeakCrypto_ option in [ssh\_config(5)](https://man.openbsd.org/ssh_config.5). We recommend doing this selectively, for example:

Match host unsafe.example.com
    WarnWeakCrypto no

**Quantum computers don't exist yet, why go to all this trouble?**

Because of the "store now, decrypt later" attack mentioned above. Traffic sent today is at risk of decryption unless post-quantum key agreement is used.

**What about signature algorithms? You said they were at risk too**

Yes, most currently-used signature algorithms (including RSA and ECDSA) can be broken by a quantum computer. However, there is no risk to existing traffic in this situation (i.e. there is no analogous "store now, decrypt later"). The only urgency for signature algorithms is ensuring that all classical signature keys are retired in advance of cryptographically-relevant computers becoming a reality. OpenSSH will add support for post-quantum signature algorithms in the future.

**I don't believe we'll ever get quantum computers. This is a waste of time**

Some people consider the task of scaling existing quantum computers up to the point where they can tackle cryptographic problems to be practically insurmountable. This is a possibilty. However, it appears that most of the barriers to a cryptographically-relevant quantum computer are engineering challenges rather than underlying physics.

If we're right about quantum computers being practical, then we will have protected vast quantities of user data. If we're wrong about it, then all we'll have done is moved to cryptographic algorithms with stronger mathematical underpinnings.

**These post-quantum algorithms are new, are we sure they aren't broken?**

We're wary of this too. Though post-quantum key agreement algorithms have received a lot of concerted cryptographic attention over the last few years, it's possible that new attacks might be found.

To defend against this happening we have selected post-quantum algorithms with good safety margins, this means that even if they turn out to be weaker than expected they are still likely to be strong enough to be considered fit for purpose.

Additionally, all the post-quantum algorithms implemented by OpenSSH are "hybrids" that combine a post-quantum algorithm with a classical algorithm. For example

mlkem768x25519-sha256 combines ML-KEM, a post-quantum key agreement scheme, with ECDH/x25519, a classical key agreement algorithm that was formerly OpenSSH's preferred default. This ensures that the combined, hybrid algorithm is _no worse_ than the previous best classical algorithm, even if the post-quantum algorithm turns out to be completely broken by future cryptanalysis.
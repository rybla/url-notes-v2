---
title: "Debian GNU/Hurd 2025 released!"
---

# Debian GNU/Hurd 2025 released!

* * *

* * *

*   _To_: [debian-hurd@lists.debian.org](mailto:debian-hurd%40lists.debian.org), [bug-hurd@gnu.org](mailto:bug-hurd%40gnu.org)
*   _Subject_: Debian GNU/Hurd 2025 released!
*   _From_: Samuel Thibault <[samuel.thibault@gnu.org](mailto:samuel.thibault%40gnu.org)\>
*   _Date_: Sun, 10 Aug 2025 00:37:38 +0200
*   _Message-id_: <[\[🔎\]](https://lists.debian.org/msgid-search/aJfNsoKmx8mhKHDJ@begin) [aJfNsoKmx8mhKHDJ@begin](https://lists.debian.org/debian-hurd/2025/08/msg00038.html)\>
*   _Mail-followup-to_: [debian-hurd@lists.debian.org](mailto:debian-hurd%40lists.debian.org), [bug-hurd@gnu.org](mailto:bug-hurd%40gnu.org)

* * *

It is with huge pleasure that the Debian GNU/Hurd team announces the
release of Debian GNU/Hurd 2025.

This is a snapshot of Debian "sid" at the time of the stable Debian
"Trixie" release (August 2025), so it is mostly based on the same
sources.  It is not an official Debian release, but it is an official
Debian GNU/Hurd port release.

The installation ISO images can be downloaded from
[https://cdimage.debian.org/cdimage/ports/13.0/hurd-i386/](https://cdimage.debian.org/cdimage/ports/13.0/hurd-i386/) or
[https://cdimage.debian.org/cdimage/ports/13.0/hurd-amd64/](https://cdimage.debian.org/cdimage/ports/13.0/hurd-amd64/)
in the NETINST Debian flavor. Besides the friendly Debian installer, a
pre-installed disk image is also available, making it even easier to try
Debian GNU/Hurd. The easiest way to run it is inside a VM such as qemu:
[https://www.debian.org/ports/hurd/hurd-install](https://www.debian.org/ports/hurd/hurd-install)

Debian GNU/Hurd is currently available for the i386 and amd64
architectures with about 72% of the Debian archive, and more to come!


\* 64bit support is now complete, with the same archive coverage as i386
(actually a bit more since some packages are 64b-only)
\* This 64b support is completely using userland disk drivers from NetBSD
thanks to the Rump layer.
\* We now use xattr by default for recording translators, allowing to
bootstrap seamlessly from other OSes, with mmdebstrap for instance
\* Rust was ported to GNU/Hurd.
\* Support for USB disk and CD-ROM was added through Rump
\* Packages are now available for SMP support, which is quite working
\* The console is now using xkb for keyboard layouts, and supports
multiboot-provided framebuffer
\* Various other support were added (acpi, rtc, apic, hpet, ...)
\* Some documentation improvement was achieved
\* Various fixes have been included (irqs, nfsv3, libports, pipes corner
cases, ...)


Please make sure to read the configuration information
([https://www.debian.org/ports/hurd/hurd-install](https://www.debian.org/ports/hurd/hurd-install)), the FAQ
([https://www.gnu.org/software/hurd/faq.html](https://www.gnu.org/software/hurd/faq.html)) (or it latest version
([http://darnassus.sceen.net/~hurd-web/faq/](http://darnassus.sceen.net/~hurd-web/faq/)),
and the translator primer
([https://www.gnu.org/software/hurd/hurd/documentation/translator\_primer.html](https://www.gnu.org/software/hurd/hurd/documentation/translator_primer.html))
to get a grasp of the great features of GNU/Hurd.

We would like to thank all the people who have worked on GNU/Hurd in the
past ([https://www.gnu.org/software/hurd/history.html](https://www.gnu.org/software/hurd/history.html)).
There were not many people at any given time (and still not many people
today, please join!
([https://www.gnu.org/software/hurd/contributing.html](https://www.gnu.org/software/hurd/contributing.html))), but in the end a
lot of people have contributed one way or the other.

Thanks everybody!

* * *

**Reply to:**

*   [debian-hurd@lists.debian.org](mailto:debian-hurd@lists.debian.org?in-reply-to=%3CaJfNsoKmx8mhKHDJ@begin%3E&subject=Re:%20Debian%20GNU/Hurd%202025%20released!)
*   [Samuel Thibault (on-list)](mailto:samuel.thibault@gnu.org?in-reply-to=%3CaJfNsoKmx8mhKHDJ@begin%3E&subject=Re:%20Debian%20GNU/Hurd%202025%20released!&cc=debian-hurd@lists.debian.org)
*   [Samuel Thibault (off-list)](mailto:samuel.thibault@gnu.org?in-reply-to=%3CaJfNsoKmx8mhKHDJ@begin%3E&subject=Re:%20Debian%20GNU/Hurd%202025%20released!)

* * *

*   **Follow-Ups**:
    *   **[Re: Debian GNU/Hurd 2025 released!](https://lists.debian.org/debian-hurd/2025/08/msg00039.html)**
        *   _From:_ Dennis Clarke <dclarke@blastwave.org>

*   Prev by Date: **[Re: PATH\_MAX and LOGIN\_NAME\_MAX are not portable](https://lists.debian.org/debian-hurd/2025/08/msg00037.html)**
*   Next by Date: **[Re: Debian GNU/Hurd 2025 released!](https://lists.debian.org/debian-hurd/2025/08/msg00039.html)**
*   Previous by thread: **[Re: PATH\_MAX and LOGIN\_NAME\_MAX are not portable](https://lists.debian.org/debian-hurd/2025/08/msg00037.html)**
*   Next by thread: **[Re: Debian GNU/Hurd 2025 released!](https://lists.debian.org/debian-hurd/2025/08/msg00039.html)**
*   Index(es):
    *   [**Date**](https://lists.debian.org/debian-hurd/2025/08/maillist.html#00038)
    *   [**Thread**](https://lists.debian.org/debian-hurd/2025/08/threads.html#00038)
---
title: "RISC-V single-board computer for less than 40 euros"
author: "Christof Windeck"
siteName: "heise online"
pubDate: "2025-08-08T21:02:00+02:00"
lang: "en"
---

# RISC-V single-board computer for less than 40 euros

1.  RISC-V single-board computer for less than 40 euros
    *   [Differences of the Lite board](#nav_differences_of__0 "Differences of the Lite board")
    *   [Competitors](#nav_competitors_1 "Competitors")
    *   [Driver support remains poor](#nav_driver_support__2 "Driver support remains poor")

The StarFive Vision Five 2 single-board computer is no rocket and requires a willingness to experiment. Nevertheless, it is still one of the most attractive 64-bit RISC-V systems running Linux.

As part of a crowdfunding campaign, the new Vision Five 2 Lite version will be available for as little as 20 US dollars, excluding shipping costs, import sales tax and customs clearance fees charged by the transportation service provider. In return, you get the version with 2 GB RAM without a WLAN adapter. WLAN currently only costs 3 US dollars more, while StarFive charges 30 and 37 US dollars respectively for the versions with 4 or 8 GB RAM.

### Differences of the Lite board

Compared to the StarFive Vision Five 2 ([Single-board computer in test: StarFive VisionFive 2 with RISC-V chip](https://www.heise.de/tests/Einplatinencomputer-im-Test-StarFive-VisionFive-2-mit-RISC-V-Chip-7473680.html?from-en=1)), the Lite version has a slightly slower processor SoC: In the StarFive JH7110S, the RISC-V cores clock at a maximum of 1.25 GHz, while the JH7110 clocks at up to 1.5 GHz.

[According to the Kickstarter website,](https://www.kickstarter.com/projects/starfive/visionfive-2-lite-unlock-risc-v-sbc-at-199/) the [Lite board](https://www.kickstarter.com/projects/starfive/visionfive-2-lite-unlock-risc-v-sbc-at-199/) only [has](https://www.kickstarter.com/projects/starfive/visionfive-2-lite-unlock-risc-v-sbc-at-199/) one Ethernet port and a single USB 3.0 socket, and the M.2 slot is only connected with one PCIe lane.

StarFive is a Chinese company that was founded with the participation of the US company SiFive. SiFive supplies StarFive with the RISC-V cores of the [U74 type announced in 2018](https://www.heise.de/news/Quad-Core-RISC-V-Prozessor-fuer-Linux-SiFive-U74-4208828.html?from-en=1) for the JH7110. They are said to calculate at a similar speed to the eight-year-old ARM Cortex-A55, but are significantly slower according to our measurements.

### Competitors

In addition to the Vision Five 2 (VF2), which is still available, the StarFive JH7110 is also used on the single-board computers [Pine64 Star64](https://www.heise.de/news/Raspi-Konkurrent-Star64-Der-erste-RISC-V-Einplatinencomputer-von-Pine64-7247086.html?from-en=1), [OrangePi RV](https://www.heise.de/news/Raspberry-Pi-Alternative-mit-RISC-V-Orange-Pi-RV-10337391.html?from-en=1) and [Milk-V Mars](https://www.heise.de/news/Geologische-Evolutionszeiten-Ubuntu-fuer-naechstes-RISC-V-Board-9737073.html?from-en=1) as well as on the [DeepComputing DC-ROMA motherboard](https://www.heise.de/news/RISC-V-Modul-fuer-Framework-Laptop-jetzt-lieferbar-10047210.html?from-en=1) for the Framework Laptop.

Several single-board computers with the SpacemiT K1 alias Ky X1, which has eight RISC-V cores, are now also available, including [OrangePi RV2 (test)](https://www.heise.de/tests/Einplatinencomputer-Orange-Pi-RV2-mit-RISC-V-SoC-im-Test-10392527.html?from-en=1), BananaPi BPI-F3 and DC-ROMA II.

### Driver support remains poor

The graphics drivers for the GPU Imagination Technology BXE-4-32 integrated in the JH7110 are not making much progress. There are special Debian images with built-in drivers. However, the [open source drivers promised by Imagination](https://www.heise.de/news/Linux-Kernel-Entwickler-druecken-freie-Grafiktreiber-durch-9582895.html?from-en=1) in 2022 [do not seem to be available yet](https://gitlab.freedesktop.org/imagination/linux-firmware/-/issues/3).

Ubuntu "supports" various boards with JH7110 SoC, but only with Ubuntu Server without graphical desktop – [explicitly without GPU support](https://canonical-ubuntu-boards.readthedocs-hosted.com/en/latest/how-to/starfive-visionfive-2/).

[Fedora](https://fedoramagazine.org/risc-v-and-fedora-all-aboard/)'s RISC-V Special Interest Group (SIG) [calls the Vision Five 2 its "flagship board"](https://fedoramagazine.org/risc-v-and-fedora-all-aboard/). There are also suitable images for Fedora 41 and 42, although the developers do not go into more detail about GPU support.

([ciw](mailto:ciw@ct.de "Christof Windeck"))

Don't miss any news – follow us on [Facebook](https://www.facebook.com/heiseonlineEnglish), [LinkedIn](https://www.linkedin.com/company/104691972) or [Mastodon](https://social.heise.de/@heiseonlineenglish).

_This article was originally published in [German](https://www.heise.de/news/RISC-V-Einplatinencomputer-fuer-unter-40-Euro-10514884.html). It was translated with technical assistance and editorially reviewed before publication._
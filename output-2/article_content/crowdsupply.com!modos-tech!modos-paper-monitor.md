---
title: "Modos Paper Monitor"
siteName: "Crowd Supply"
lang: "en"
---

# Modos Paper Monitor

[Modos Tech](https://www.crowdsupply.com/modos-tech)  
[E-Paper](https://www.crowdsupply.com/e-paper)  
[FPGA Boards](https://www.crowdsupply.com/fpga-boards)

### A fast, low-latency, open-hardware e-paper monitor and dev kit

[![](https://www.crowdsupply.com/img/1080/ffe06499-b877-4d44-ac68-3d4b92521080/modos-both-horizontal_jpg_aa-md.jpg "Modos Paper Monitor")](https://www.crowdsupply.com/img/1080/ffe06499-b877-4d44-ac68-3d4b92521080/modos-both-horizontal_jpg_gallery-lg.jpg)

$62,210 raised

of $110,000 goal

57% Funded

37  
days left

Back this project to help bring it into existence.  
Funding ends on Sep 18, 2025 at 04:59 PM PDT.

#### $199 - $599

[View Purchasing Options](#products)

**Modos Paper Dev Kit** includes nearly everything you need to create an open-hardware e-paper monitor with a fast 75 Hz refresh rate, low latency, various screen-update configurations, multiple image modes, and flexible dithering options. It can be connected through HDMI or USB, and it works on Linux, macOS, and Windows. We are offering 6-inch and 13-inch monochrome kits, but the controller that powers both kits can be used with other panels as well.

[![](https://www.crowdsupply.com/img/8b97/7f41293c-97d2-48e3-80e4-b59dbaee8b97/modos-paper-monitor-13-front-back-wide-crop-01_jpg_md-xl.jpg)](https://www.crowdsupply.com/img/8b97/7f41293c-97d2-48e3-80e4-b59dbaee8b97/modos-paper-monitor-13-front-back-wide-crop-01_jpg_gallery-lg.jpg)

[![](https://www.crowdsupply.com/img/74ca/f63a2cfe-6b69-416c-9214-205091cd74ca/modos-paper-monitor-6-front-back-wide-crop-01_jpg_md-xl.jpg)](https://www.crowdsupply.com/img/74ca/f63a2cfe-6b69-416c-9214-205091cd74ca/modos-paper-monitor-6-front-back-wide-crop-01_jpg_gallery-lg.jpg)

## At the Cutting Edge of E-Paper

Twenty years ago, the release of the first e-paper devices marked a significant milestone in display technology, giving rise to e-readers and digital signage. Electrophoretic displays stand out for their unique qualities: they are easy on the eyes, mimic the aesthetics of paper, conserve power when idle, and offer high contrast with wide viewing angles even in direct sunlight.

In recent years, improvements in e-paper technology have expanded its applications beyond traditional e-readers. Despite these advancements, however, key challenges still hold back widespread adoption of e-paper devices:

*   **Proprietary Hardware and Software:** Most e-paper devices operate on closed, proprietary systems.
*   **Lack of Standards:** There is a shortage of best practices and guidelines for designing user interfaces optimized for e-paper.
*   **High Costs:** The expense of e-paper panels limits experimentation and broader adoption.

We built the Modos Developer Kit to allow engineers, product designers, programmers, and enthusiasts to re-purpose e-paper screens in creative ways. We’re also building a community that’s committed to establishing the standards, best practices, and guidelines needed to realize the full potential of e-paper technology. Join us on [Discord](https://discord.gg/6ktE6VxSyh) and by following us on [Mastodon](https://fosstodon.org/@modos), [Bluesky](https://bsky.app/profile/modostech.bsky.social), [Matrix](https://www.modos.tech/matrix), and [Twitter](https://x.com/Modostech).

## High Refresh Rate

Our Developer Kit leverages [Caster](https://github.com/Modos-Labs/Caster), an open-source FPGA-based electrophoretic display controller engineered for low-latency performance and capable of driving e-paper screens at up to 60 Hz. By dividing the screen into multiple update regions, the Caster processes and displays new images or text instantly, without waiting for previous updates to complete. Each pixel is managed independently, and early cancellation techniques ensure that pixels update as soon as new data is available. The result is smooth, responsive performance with high frame rates and superior contrast, ideal for dynamic content and fluid interactions.

## Compatible With a Variety of Screens

[![](https://www.crowdsupply.com/img/caf2/70975223-7b9f-4180-9d19-4103f316caf2/modos-mono-color-16x9_jpg_md-xl.jpg)](https://www.crowdsupply.com/img/caf2/70975223-7b9f-4180-9d19-4103f316caf2/modos-mono-color-16x9_jpg_gallery-lg.jpg)

Got a spare e-paper screen gathering dust or looking to re-purpose a display for your project? Our Developer Kit makes it simple. Compatible with a wide range of screens—from 6-inch up to 13.3-inch, in both monochrome and color—the kit lets you easily connect and reuse unused displays. With our monitor enclosure design files, you can build a custom monitor housing that perfectly fits your project’s needs.

Explore our [GitHub repository](https://github.com/Modos-Labs/Glider?tab=readme-ov-file#screen-list) for a complete list of compatible screens.

## User-Defined Modes & API

While commercial e-paper products rely on preset driving strategies (text, graphics, video modes) to cope with the technology’s limitations, our Developer Kit goes further. It offers full customization so you can tailor the display experience to your specific needs.

For example, the Hybrid Greyscale Mode allows the Caster to switch between a fast binary mode for quick updates and a slower, detailed greyscale mode for refined rendering. This minimizes latency and visual flashing by updating in binary first, then refining in greyscale as the image stabilizes.

With our C API, you gain direct control over screen and mode selection, letting you optimize the display for a wide range of applications. Our broader vision includes developing native e-paper applications and a protocol for seamless mode transitions based on content type.

## Features & Specifications

[![](https://www.crowdsupply.com/img/874a/64da1b5f-5a13-4eaa-88ba-3aa3f973874a/modos-pcb-front-back-01_jpg_md-xl.jpg)](https://www.crowdsupply.com/img/874a/64da1b5f-5a13-4eaa-88ba-3aa3f973874a/modos-pcb-front-back-01_jpg_gallery-lg.jpg)

### Driver Board Hardware Reference Design

*   Xilinx Spartan-6 LX16 FPGA running Caster gateware
*   DDR3-800 framebuffer memory
*   Video input supporting:
    *   USB Type-C DisplayPort Alt-Mode with on-board PTN3460 decoder
    *   DVI (via microHDMI connector) video input with on-board ADV7611 decoder
*   E-paper power supply with up to 1 A peak current on the ±15 V rail to support large panel sizes.
*   VCOM kick-back voltage measurement support
*   On-board STM32H750 microcontroller for USB communication, firmware upgrades, and standalone applications. Processing rate up to 133 MP/s when error-diffusion dithering enabled and 200 MP/s when disabled

### Caster FPGA Gateware Reference Design

*   Supports electrophoretic display panels with parallel interfaces (E Ink, OED, and DES)
*   Compatible with both monochrome and color-filter-array screens
*   Extremely low processing delay (<20 µs)
*   Supports binary, 4-level grayscale, and 16-level grayscale output modes
*   Latency-optimized binary and 4-level grayscale driving modes
*   Hybrid automatic binary and 16-level grayscale driving mode
*   Host software runtime controllable regional updates and mode switching
*   Hardware bayer dithering, blue-noise dithering, and error-diffusion dithering with no additional latency

## Comparisons

### E-Paper Monitors

Modos 13" Paper Dev Kit

[DASUNG 13.3" Paperlike HD-FT](https://shop.dasung.com/pages/13-3-dasung-paperlike-e-ink-monitor)

[Boox Mira 13.3" E-Ink Monitor](https://onyxboox.com/boox_mira)

[Waveshare EINK DISP 133](https://www.waveshare.com/wiki/EINK-DISP-133)

**Display**

Eink Carta 1000 (ED133UT3)

Eink Carta 1000 (ES133TT3)

Eink Carta 1200 (ES133TT5)

Eink Carta 1000 (ED133UT2)

**Screen Size**

13.3"

13.3"

13.3"

13.3"

**Screen Resolution**

1600 x 1200

2200 x 1650

2200 x 1650

1600 x 1200

**Maximum Frame rate**

75Hz

40Hz

~20Hz

~15Hz

**Interfaces**

HDMI & USB Type-C

HDMI

HDMI & USB Type-C

HDMI

**Touchscreen**

No

Yes

No

No

**Frontlight**

No

Yes

Yes

No

**Open Hardware**

Yes

No

No

No

**Programmable Modes**

Yes

No

No

No

**API for Display Controller**

Yes

No

No

No

**Price**

$599

$798

$800

$679

### E-Paper Dev Kits

Modos 6" Paper Dev Kit

[Waveshare e-paper HAT](https://www.waveshare.com/product/6inch-hd-e-paper-hat.htm)

[Inkplate 6 MOTION](https://www.crowdsupply.com/soldered/inkplate-6-motion)

[EPDiy](https://github.com/vroland/epdiy)

**Controller**

FPGA-based

None

ESP32-based

ESP32-based

**Display Technology**

E Ink

E Ink

E Ink

E Ink

**Screen Size**

6.0"

6.0"

6.0"

9.7"

**Programming Language Support**

Rust, Python, C

Python, C, C++

MicroPython, C, C++

MicroPython, C, C++

**Screen Resolution**

1448 x 1072

1448 x 1072

1024 × 758

1200 x 825

**Maximum Frame rate**

75Hz

< 2Hz

11Hz

Unknown

**Interfaces**

HDMI, USB Type-C

SPI, GPIO

USB Type-C, GPIO

GPIO

**Touchscreen**

No

No

No

N/A

**Frontlight**

No

No

Yes

N/A

**Open Hardware**

Yes

No

Yes

Yes

**Programmable Modes**

Yes

Yes

Yes

Yes

**API for Display Controller**

Yes

No

No

No

**Works With Other Panels**

Yes

No

No

Yes

**Power Consumption**

High

Low

Low

Low

**Price**

$200

$113

$195

N/A

## Support & Documentation

The Modos Developer Kit is open hardwayore built using open-source software, with all design files and source code available on [GitHub](https://github.com/Modos-Labs). Our [documentation](https://github.com/Modos-Labs/Glider) offers extensive information on electrophoretic displays, drawing from both public sources and our original research. This serves as a comprehensive guide for anyone looking to dive deeper into e-paper technology.

For additional support or to join the discussion, please visit [Discord](https://discord.gg/6ktE6VxSyh) and follow us on [Mastodon](https://fosstodon.org/@modos), [Bluesky](https://bsky.app/profile/modostech.bsky.social), [Matrix](https://www.modos.tech/matrix), and [Twitter](https://x.com/Modostech).

## Manufacturing Plan

The Modos Developer Kit has passed pre-production revisions and undergone thorough validation and testing. We have established partnerships with contract manufacturers in China, our chosen partner will handle board manufacturing and assembly. The panels are sourced directly from E Ink Corporation. With the Caster completed and the design finalized, we now have a full Bill of Materials (BOM) and supplier quotes in place as we prepare for production. Once the campaign concludes, manufacturing will commence, and we’ll keep you updated via campaign emails.

## Fulfillment & Logistics

After our production run is finished, we will package everything and send it to Crowd Supply’s fulfillment partner, Mouser Electronics, for distribution to backers worldwide. For more details about Crowd Supply’s fulfillment service, please refer to their guide under [Ordering, Paying, and Shipping](https://www.crowdsupply.com/guide/ordering-paying-shipping-details).

## Risks & Challenges

The development of the Modos Developer Kit has been ongoing for over a year. Throughout this time, the core functionalities of our display controller board have proven stable, allowing us to focus on refining the hardware design and solving engineering challenges. We are confident in the robustness of our final product.

That said, as with any hardware project, the production process and supply-chain management present inherent risks. To mitigate these risks, we have built strong partnerships with our suppliers and manufacturers. In the event of any setbacks, we are committed to minimizing delays and will keep our backers informed with transparent, timely updates throughout the process.

## Thank You to the NLnet Foundation and the NGI Zero Etrust Fund

Our team would like to acknowledge partial funding for development of Caster from the [NGI0 Entrust Fund](https://nlnet.nl/entrust/), a fund established by [NLnet](https://nlnet.nl/) with financial support from the European Commission’s [Next Generation Internet program](https://ngi.eu/).

[![](https://www.crowdsupply.com/img/61cb/337fff5a-1fde-4b80-948a-51e1481261cb/nlnet-grant-logo_jpg_md-xl.jpg)](https://www.crowdsupply.com/img/61cb/337fff5a-1fde-4b80-948a-51e1481261cb/nlnet-grant-logo_jpg_gallery-lg.jpg)

## In the Press

[![](https://www.crowdsupply.com/img/62b2/0ef55c88-8cc7-49ea-ad44-ba18bec462b2/hackster-logo-mark.svg "Hackster News")](https://www.hackster.io/news/modos-prepares-to-launch-its-paper-monitor-and-amd-powered-epaper-driver-board-ac6c5ae6a485)

[Hackster News](https://www.hackster.io/news/modos-prepares-to-launch-its-paper-monitor-and-amd-powered-epaper-driver-board-ac6c5ae6a485)

"The idea behind the Modos Paper Monitor... is to provide a more eye-friendly display than the backlit LCD panels commonly in use. "

[![](https://www.crowdsupply.com/img/7cce/7654c152-9e50-4b57-8285-7dc514df7cce/tomshardwaremaxresdefault_jpg_press-logo.png "Tom's Hardware")](https://www.tomshardware.com/monitors/new-open-source-high-resolution-e-ink-monitor-announced-modos-paper-delivers-1200p-in-a-133-inch-form-factor)

[Tom's Hardware](https://www.tomshardware.com/monitors/new-open-source-high-resolution-e-ink-monitor-announced-modos-paper-delivers-1200p-in-a-133-inch-form-factor)

"This project is the brainchild of Alexander Soto, who describes a journey starting in February 2021 to defeat the eyestrain that comes with daily extended use of standard displays."

* * *

[![](https://www.crowdsupply.com/img/a1ba/4284bc23-8493-4db0-80f9-42939b5ba1ba/golem-de-logo_jpg_press-logo.png "Golem.de: Modos wants to offer a more responsive, smoother e-paper monitor...")](https://www.golem.de/news/open-source-e-paper-monitor-von-modos-soll-ins-crowdfunding-gehen-2405-185274.html)

[![Hacker News Logo](https://www.crowdsupply.com/img/28ea/1dd9e995-dbca-47cc-bd66-622cc72928ea/hn-logo-pad_png_press-logo.png "Hacker News: Modos Paper Monitor Pre-Launch on Crowd Supply")](https://news.ycombinator.com/item?id=40423746)

[![](https://www.crowdsupply.com/img/79f0/8f2564ae-de9c-4dda-9810-d8f6ac1279f0/lili_png_press-logo.png "Liliputing: Modos Paper Monitor is an open hardware 13.3 inch E Ink monitor")](https://liliputing.com/modos-paper-monitor-is-an-open-hardware-13-3-inch-e-ink-monitor-crowdfunding/)

[![](https://www.crowdsupply.com/img/46d8/f60bd65f-9ec4-4486-a20d-b94d74f946d8/electromaker-logo-at-3x_jpg_press-logo.png "Electromaker: E-ink Low Latency and High Refresh Rates! - Introducing the Modos E-paper Monitor")](https://www.electromaker.io/blog/article/modos-paper-monitor-a-game-changer-for-eink-technology)

[![](https://www.crowdsupply.com/img/fcda/ffa79a59-1fa2-4298-8637-892e16fefcda/yd-logomark-retina_png_press-logo.png "Yanko Design: Modos Paper Dev Kit Brings High-Refresh E Ink to Designers and Makers")](https://www.yankodesign.com/2025/08/05/modos-paper-dev-kit-brings-high-refresh-e-ink-to-designers-and-makers/)

[![](https://www.crowdsupply.com/img/73f6/efd7d4e0-a334-41c2-80d7-10c8ebd073f6/notebookcheck_jpg_press-logo.png "Notebookcheck: Modos: E Ink display supports impressive 75 Hz refresh rate")](https://www.notebookcheck.net/Modos-E-Ink-display-supports-impressive-75-Hz-refresh-rate.1080417.0.html)

[![](https://www.crowdsupply.com/img/6f1d/b9206e79-5553-4ca0-b8ac-d196da1d6f1d/inkl-logo-no-tagline-positive-rgb-65407c529d147f60d429f3be2000a89d.svg "Inkl: E-paper hits 75 Hz to better suit productivity tasks — kits in two screen sizes go up for pre-order, starting at $199")](https://www.inkl.com/news/e-paper-hits-75-hz-to-better-suit-productivity-tasks-kits-in-two-screen-sizes-go-up-for-pre-order-starting-at-199)

[![](https://www.crowdsupply.com/img/711c/7ecfdc09-2156-4809-ba2b-ddba407c711c/cnxsoft-logo_png_press-logo.png "CNX Software: FPGA-based Modos Paper Dev Kit supports a wide range of E-Ink displays, up to 75 Hz refresh rate ")](https://www.cnx-software.com/2025/08/06/fpga-modos-paper-dev-kit-supports-e-ink-displays-75-hz-refresh-rate/)

Produced by [Modos Tech](https://www.crowdsupply.com/modos-tech) in Boston, MA.

Sold and shipped by Crowd Supply.

![](https://www.crowdsupply.com/img/47c9/90e4e256-25b3-4804-bb12-808120b547c9/modos-kit-6-inch-sailboat_jpg_md-fixed-xl.jpg "6" Modos Paper Dev Kit")

### 6" Modos Paper Dev Kit

Pre-assembled development kit for the 6-inch version of our low-latency, 1448 x 1072 e-paper display. Includes a screen, a mainboard, an adapter, and a ribbon cable. Comes with a USB Type-C cable.

$199 Free Worldwide Shipping

Orders placed now ship Jan 25, 2026.

![](https://www.crowdsupply.com/img/a6ed/fa2d4a5e-87d5-4384-9fa2-6200f496a6ed/modos-kit-13-inch-sailboat_jpg_md-fixed-xl.jpg "13" Modos Paper Dev Kit")

### 13" Modos Paper Dev Kit

Pre-assembled development kit for the 13-inch version of our low-latency, 1600 x 1200 e-paper display. Includes a screen, a mainboard, an adapter, and a ribbon cable. Comes with a USB Type-C cable.

$599 Free Worldwide Shipping

Orders placed now ship Jan 25, 2026.

## About the Team

![](https://www.crowdsupply.com/img/cc4a/ed9e6623-dc48-4002-b920-c37fc3eecc4a/modos-cropped-symbol-black-bg-transparent.svg "Modos Tech")

![](https://www.crowdsupply.com/img/7f0e/5ea39a15-285e-412b-9da3-ef8b83217f0e/alex-1_jpg_avatar-xl.jpg)

![](https://www.crowdsupply.com/img/ff7d/ae63b6f8-18b5-4695-bb22-8610bbebff7d/wenting_jpg_avatar-xl.jpg)
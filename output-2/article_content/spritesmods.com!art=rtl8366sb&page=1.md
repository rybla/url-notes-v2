---
title: "Sprites mods - Dumb to managed switch conversion"
---

# Sprites mods - Dumb to managed switch conversion

## Intro

[![](https://meuk.spritesserver.nl/foto/foto/misc11/tmb-img_6707.jpg)](https://meuk.spritesserver.nl/foto/foto/misc11/img_6707.jpg)

When I got my new house, one of the things I did besides painting and redecorating was rip the old cat2 telephone cable out of the walls and replace it by modern cat5e cabling. I've done a spot of network engineering in the past, so I had a fairly good idea what I would like to have as a network: GBit everywhere, separate vlans for the adsl modem, wired clients and the wireless accesspoint... But at that moment I was too busy to actually implement it: the rickety old 100MBit switch plus a few extra cables had to do for now. After I was done moving, I'd immediately upgrade it to what I wanted.

You probably know how these things go... It's been more than a year since I moved now, and I finally decided it was time to upgrade everything. I bought myself a managed 8-port GBit switch to be the proverbial spider in the web. I bought myself another el-cheapo 5-port GBit-switch for my workstation: a TP-link unmanaged GBit switch with the typenumber TL-SG1005D, which set me back 17 Euros. Buying an unmanaged one instead of a managed switch saved me EUR60, and I wouldn't need the managing capabilities anyway... or so I thought.

Turns out I was wrong. My access-point, which was to reside on a different vlan, had to be connected to the switch too... but an unmanaged switch can't really handle vlans. Basically, I had to send the unmanaged switch back and spend a lot of money on a managed switch... or did I? On a hunch, I decided to crack open the switch and look at the internals. Hmm, seemed there was a RTL8366SB GBit switch IC inthere. I managed to download the datasheet of the RTL8366, and whaddayaknow, it actually contains all the logic a managed switch has too! Vlan, port mirroring, you name it and chances are the little critter can do it. It didn't have an user-interface though; you have to send the config to it over I2C, as cryptic hexadecimal register settings...but that's nothing an AVR can't fix.

 1 [Next »](https://spritesmods.com/?art=rtl8366sb&page=2)

© 2006-2022 Sprite\_tm - [Contact](https://spritesmods.com/?art=contact&af=Dumb%20to%20managed%20switch%20conversion)
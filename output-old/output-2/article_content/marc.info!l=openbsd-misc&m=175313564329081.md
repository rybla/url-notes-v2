---
title: "'sys/dev/pci/drm/amd takes up 499MB out of 1.7GB in src...'"
---

# 'sys/dev/pci/drm/amd takes up 499MB out of 1.7GB in src...'

**\[[prev in list](https://marc.info/?l=openbsd-misc&m=175313250627424&w=2)\] \[[next in list](https://marc.info/?l=openbsd-misc&m=175314385232647&w=2)\] \[prev in thread\] \[[next in thread](https://marc.info/?l=openbsd-misc&m=175315163303342&w=2)\]** 
**List:       [openbsd-misc](https://marc.info/?l=openbsd-misc&r=1&w=2)
Subject:    [sys/dev/pci/drm/amd takes up 499MB out of 1.7GB in src...](https://marc.info/?t=175313567100004&r=1&w=2)
From:       ["H. Hartzer" <h () hartzer ! sh>](https://marc.info/?a=174370661400002&r=1&w=2)
Date:       [2025-07-21 22:05:58](https://marc.info/?l=openbsd-misc&r=1&w=2&b=202507)
Message-ID: [DBI2OT9RZAIC.226GIYWV1FPQB () hartzer ! sh](https://marc.info/?i=DBI2OT9RZAIC.226GIYWV1FPQB%20\(\)%20hartzer%20!%20sh)
\[Download RAW [message](https://marc.info/?l=openbsd-misc&m=175313564329081&q=mbox) or [body](https://marc.info/?l=openbsd-misc&m=175313564329081&q=raw)\]**

Hi misc@,

On 7.7, extracted src.tar.gz and sys.tar.gz is about 1.7GB.

The sys folder is 634MB.
sys/dev is 590MB.
sys/dev/pci is 543MB.
sys/dev/pci/drm is 525MB.
sys/dev/pci/drm/amd is 499MB.

And sys/dev/pci/drm/amd/include is 458MB.

Is it necessary? Can it be trimmed down some? Seems a bit excessive to
me.

-Henrich

**\[[prev in list](https://marc.info/?l=openbsd-misc&m=175313250627424&w=2)\] \[[next in list](https://marc.info/?l=openbsd-misc&m=175314385232647&w=2)\] \[prev in thread\] \[[next in thread](https://marc.info/?l=openbsd-misc&m=175315163303342&w=2)\]** 

  

[Configure](https://marc.info/?q=configure) | [About](https://marc.info/?q=about) | [News](https://marc.info/?q=news) | [Add a list](mailto:webguy@marc.info?subject=Add%20a%20list%20to%20MARC) | Sponsored by [KoreLogic](http://www.korelogic.com/)
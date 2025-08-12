---
title: "StarDict sends X11 clipboard to remote servers"
author: "By Daroc AldenAugust 11, 2025"
siteName: "LWN.net"
lang: "en"
---

# StarDict sends X11 clipboard to remote servers

> ### Welcome to LWN.net
> 
> The following subscription-only content has been made available to you by an LWN subscriber. Thousands of subscribers depend on LWN for the best news from the Linux and free software communities. If you enjoy this article, please consider [subscribing to LWN](https://lwn.net/subscribe/). Thank you for visiting LWN.net!

[StarDict](https://stardict-4.sourceforge.net/index_en.php) is a GPLv3-licensed cross-platform dictionary application. It includes dictionaries for a number of languages, and has a rich plugin ecosystem. It also has a glaring security problem: while running on X11, using Debian's default configuration, it will send a user's text selections over unencrypted HTTP to two remote servers.

On August 4, Vincent Lefevre [reported](https://lwn.net/ml/all/20250804092217.GA962280@qaa.vinc17.org/) the problem to the oss-security mailing list and to [Debian's bug tracker](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1110370). He identified it while testing his setup before the upcoming Debian 13 ("trixie") release. Installing StarDict will also install the stardict-plugin package by default, because the former recommends the latter. The plugins package contains a set of commonly used StarDict plugins, including a plugin for [YouDao](https://www.youdao.com/), a Chinese search engine that supplies Chinese-to-English translations. The plugin also contacts a second online Chinese dictionary, [dict.cn](https://dict.cn/).

This would normally not be much cause for concern; of course a dictionary program will include code to talk to dictionary-providing web sites. But one of StarDict's features, which is also enabled by default, is its "scan" functionality: it will watch the user's text selections (i.e. text highlighted with the mouse), and automatically provide translations as a pop-up. Taken together, the two features result in any selected text being sent to both servers. This only occurs while StarDict is open, but the application is designed to be left open in the background in case the user needs a quick reference while reading.

StarDict on Wayland doesn't have this problem, because Wayland prevents applications from being able to capture text from other applications by default. That does mean that it breaks StarDict's scan feature, though.

Xiao Sheng Wen, the Debian package maintainer for StarDict, [didn't see a problem](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1110370#10) with the behavior, noting that if a user doesn't want to use the scan functionality or the YouDao plugin, both can be disabled. Lefevre [wasn't satisfied](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1110370#29) with that, saying:

> But this is not the whole point. Features with privacy concerns should never be enabled by default (unless the feature is the only purpose of the package, and such a package would never be installed automatically — and even in such a case, there should be a big warning first).

In response, Xiao [pointed out](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1110370#34) that [the package description](https://packages.debian.org/trixie/stardict-gtk) can be read by any user who chooses to install the software, and it does mention the scan feature. That said, I noted during my investigation that the [description](https://packages.debian.org/trixie/stardict-plugin) of stardict-plugin did not mention that the YouDao plugin uses an online service instead of an offline dictionary. Xiao suggested splitting the networked dictionary plugins into a separate package, but was "not sure whether it's very necessary to do so".

It is worth noting that the scan feature, while obviously a problem in this context, is one of the reasons that a user might choose to use StarDict over an alternative. Reading foreign-language media is often easier when words can be sought in a dictionary with as little fuss as possible. From that perspective, it makes sense that Xiao might not view the feature as problematic.

Any user who did read the description of the package, and who knew what the YouDao plugin would do, might nevertheless expect the resulting communication to at least be encrypted. But the plugin actually reaches out to its backend servers — dict.youdao.com and dict.cn — over unsecured HTTP. So, not only are these servers sent any text the user selects, but anyone who can view traffic anywhere along its path can see the same thing.

This is not even the first time that StarDict has sent user selections to the internet; the same kind of problem [was reported](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=534731) by Pavel Machek in 2009 and [again](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=806960#5) by "niekt0" in 2015. The 2009 bug was solved by patching the application's default configuration to disable networked dictionaries. That appears to have worked for a time, but the YouDao plugin, which was added in 2016, does not respect the configuration option. The 2015 problem was not fixed [until August 6 of this year](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=806960#57) (although the package was removed from Debian for unrelated reasons for a few months from 2020 to 2021). That fix just removed the stardict\_dictdotcn.so plugin, which also sent translation requests to dict.cn and was later subsumed by the YouDao plugin, from the package. In fairness to Xiao, he was not the StarDict maintainer in 2015 — [that was](https://web.archive.org/web/20150912065912/https://tracker.debian.org/pkg/stardict) Andrew Lee — but Xiao [knew](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=806960#28) about the 2015 bug since at least 2021, even if he didn't consider it a priority.

According to Debian's [package popularity contest statistics](https://qa.debian.org/popcon.php?package=stardict), only 178 people have StarDict installed, down from around a thousand between 2009 and 2015. That obviously doesn't capture people who have configured their Debian system not to participate in the statistics collection, but it does suggest there were a number of people who might have been broadcasting their text selections to the internet for several years. Given that people copy and paste passwords from their password managers, or select the text of sensitive emails and documents during the course of editing, that should be a significant cause for concern.

Debian is a large distribution, containing tens of thousands of packages. Moreover, because of its commitment to stability, a decent fraction of these are older software with delayed or sporadic updates. The reality is that Linus's law ("given enough eyeballs, all bugs are shallow") only holds up if people are looking — and if, once they have looked, and have reported things, the people who have taken up maintenance of the software actually agree that there is a problem.

Part of the justification for moving to Wayland over X11 is to make security vulnerabilities relating to one application spying on another more difficult to introduce. That obviously has to be balanced against the cost of adapting to a new way of doing things, but it's not hard to see why so many people are eager to make Wayland work. Maybe, in the future, StarDict's default behavior would have had little to no impact. Or maybe StarDict would have started asking for special permissions to let it work on Wayland, and users would have accepted those defaults the same way they currently do.

Either way, the existence of serious security problems that can be found, diagnosed, reported, and still remain unfixed is cause for concern. Linux has long enjoyed a reputation for security; maintaining that reputation depends on the developers, maintainers, and users of open-source software caring enough to fix security problems when they arise.

  
  

* * *
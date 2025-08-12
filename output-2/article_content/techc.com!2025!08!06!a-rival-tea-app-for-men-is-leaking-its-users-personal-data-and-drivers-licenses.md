---
title: "TeaOnHer, a rival Tea app for men, is leaking users’ personal data and driver’s licenses"
author: "Amanda Silberling, Zack Whittaker"
siteName: "TechCrunch"
pubDate: "2025-08-06T19:40:00+00:00"
lang: "en-US"
---

# TeaOnHer, a rival Tea app for men, is leaking users’ personal data and driver’s licenses

TeaOnHer, an app designed for men to share photos and information about women they have supposedly dated, has exposed users’ personal information, including government IDs and selfies, TechCrunch can confirm.

The app, which launched on the Apple App Store earlier this week, is a response to another viral app Tea that allows women to post about the men they date. Tea is advertised as a women’s safety app with more than 6 million users that is similar to “[Are we dating the same guy?](https://www.washingtonpost.com/technology/2024/03/02/dating-same-guy-facebook-groups/)” Facebook networks. However, the app is controversial, since many of the claims that women post cannot be verified.

The backlash surrounding Tea escalated last week, after 404 Media reported 4chan users retaliated by [discovering a publicly exposed database](https://www.404media.co/women-dating-safety-app-tea-breached-users-ids-posted-to-4chan/) belonging to the app, which [revealed](https://techcrunch.com/2025/07/26/dating-safety-app-tea-breached-exposing-72000-user-images/) over 72,000 images, including thousands of selfies and photo IDs submitted for account verification. A [subsequent hack](https://www.404media.co/a-second-tea-breach-reveals-users-dms-about-abortions-and-cheating/) exposed more than 1 million private messages sent over the app, prompting the app to [disable](https://techcrunch.com/2025/07/29/tea-apps-data-breach-gets-much-worse-exposing-over-a-million-private-messages/) its messaging feature.

TeaOnHer, which is now ranked No. 2 among Lifestyle apps on iOS, appears to be a direct rebuttal to the Tea app, even copying the language from Tea’s App Store description in its own listing. 

But like the app it sought to emulate, TeaOnHer contains security flaws of its own.

TechCrunch has found at least one security flaw that allows anyone access to data belonging to TeaOnHer app users, including their usernames and associated email addresses, as well as driver’s licenses and selfies that users uploaded to TeaOnHer. Images of these driver’s licenses are publicly accessible web addresses, allowing anyone with the links to access them using their web browser.

In one case, TechCrunch saw a list of posts shared on TeaOnHer appended with each user’s email address, display name, and self-reported location.

TechCrunch is withholding some of the details of the bugs so as to not help malicious actors access anyone’s data. The app’s maker did not respond to emails from TechCrunch asking who we can report the flaws to. As such, TechCrunch is publishing this report with limited details of the issue, given the app’s current popularity and the risk faced with using the app.

TeaOnHer was uploaded to the iOS App Store by a developer named Newville Media Corporation. According to LinkedIn, the founder and CEO of this company is Xavier Lampkin. 

TechCrunch identified at least one TeaOnHer record associated with Lampkin’s own data.

The security lapse will likely affect any user who signed up or shared identity documents with the app. The bug also exposes the number of users the TeaOnHer app has, which is about 53,000 users at the time of publication.

TechCrunch also identified a potential second security issue, in which an email address and plaintext password belonging to the app’s creator, Lampkin, was left exposed on the server. The credentials appear to grant access to the app’s “admin” panel. TechCrunch did not use the credentials, as doing so would be unlawful, but highlights the risks of inadvertently leaving admin credentials exposed to the web.

Along with its security flaws, the content portrayed within TeaOnHer is troubling in itself. While the app requests IDs and selfies from its users to verify their identities — a process that is not automatic — users can access a “guest” view of the app without signing in. 

Immediately upon opening “guest” view, TechCrunch saw several images of the same naked woman, posted under different names in a form of spam. It is not clear if this woman consented to this photo being shared. Other posts share the photos and names of women, alongside comments calling them “easy,” or accusing them of spreading sexually transmitted infections.

Across all free apps, TeaOnHer is ranked No. 17, higher than apps like Instagram, Netflix, Uber, and Spotify. Tea is currently ranked No. 2.

Amanda Silberling is a senior writer at TechCrunch covering the intersection of technology and culture. She has also written for publications like Polygon, MTV, the Kenyon Review, NPR, and Business Insider. She is the co-host of Wow If True, a podcast about internet culture, with science fiction author Isabel J. Kim. Prior to joining TechCrunch, she worked as a grassroots organizer, museum educator, and film festival coordinator. She holds a B.A. in English from the University of Pennsylvania and served as a Princeton in Asia Fellow in Laos.

Send tips through Signal, an encrypted messaging app, to @amanda.100. For anything else or to verify outreach, email [amanda@techcrunch.com](mailto:amanda@techcrunch.com).

[View Bio](https://techcrunch.com/author/amanda-silberling/)

Zack Whittaker is the security editor at TechCrunch. He can be reached via encrypted message at zackwhittaker.1337 on Signal. You can also contact him by email, or to verify outreach, at [zack.whittaker@techcrunch.com](mailto:zack.whittaker@techcrunch.com).

[View Bio](https://techcrunch.com/author/zack-whittaker/)
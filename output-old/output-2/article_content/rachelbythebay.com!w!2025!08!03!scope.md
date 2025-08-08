---
title: "Squashing my dumb bugs and why I log build ids"
lang: "en"
---

# Squashing my dumb bugs and why I log build ids

I screwed something up the other day and figured it had enough meat on its bones to turn into a story. So, okay, here we go.

For a while now, I've been doing some "wrapping" of return values in my code. It's C++ stuff, but it's something that's been inspired by what some of my friends have been doing with Rust. It's where instead of just returning a string from a function that might fail, I return something else that enforces some checks.

Basically, I'm not allowed to call .value() or .error() on it until I've checked to see if it succeeded or not. If I do one of those things out of sequence, it will hit a CHECK and will nuke the program. This normally catches me fat-fingering something in development and never ships out.

Some of this code looks like this:

auto ua = req.util->UserAgent();

if (ua()) {
  req.set\_user\_agent(ua.value());
}

In that case, it's wrapping a string. It's wrapped because it can fail! Sometimes there's no value available because someone decided they didn't want to send that header in their request for some strange reason. I don't "do" "sentinel values", nulls, or other stuff like that, because I have my little "result string" thing going on here.

Easy enough, right? Well, I found myself making some mistakes when dealing with a series of calls to things that could pass or fail which worked in a similar fashion. They don't have a .value() but they can have an .error() and they need to be checked.

Sometimes, in my editor, I'd do a "delete 2-3 lines, then undelete twice, then twiddle the second set" thing for a spot where I had to make two very similar calls in a row. It might look like this:

auto ai = app\_->Init();

if (!ai()) {
  log\_something("blahblah failed: " + ai.error());
  // return something or other...
}

auto ni = net\_->Init();

if (!ni()) {
  log\_something("no shrubbery: " + ai.error());
  // return something blahblah...
}

But, do you see the bug? I'm using ai.error in the second spot instead of ni.error. ai is still available since it exists from that "auto ai = ..." line to the bottom of the block, and there's no way to say "hey, compiler, throw a fit if anyone looks at this thing after this point".

I'd have to do something odd like sticking the whole mess into another { ... } block just so ai would disappear, and while that would work, it also gets ugly.

Not too long ago, I came up with something else based on some newer syntax that can be wrangled up in C++. It's apparently called "if scope", where you can define a variable in the course of doing a branch on some condition, and then it only exists right there.

It looks like this:

if (auto ai = app\_->Init(); !ai()) {
  log\_something("blahblah failed: " + ai.error());
  // return something or other...
}

It looks a little awkward at first, but it's pretty close to the original code, and it also has a nifty side-effect: "ai" doesn't live beyond that one tiny little block where I report the error and then bail out.

With that in place, you can't make that "ai instead of ni" mistake from before. That's a clear win and I've been converting my code to it in chunks all over the place.

A couple of days ago, I did a change like that on some user-agent handling code, but screwed up and did it like this:

if (auto ua = req.util->UserAgent(); !ua()) {
  req.set\_user\_agent(ua.value());
}

That's basically saying: "if they \*didn't\* send a user-agent, then add its value to the request we're building up". Now, had that code ever run, it would have CHECKed and blown up right there, since calling .value() after it's returned false on the pass-fail check is not allowed. But, nobody is doing that at the moment, so it never happened.

The other effect it had was that it never added the user-agent value to the outgoing request when clients \_did\_ present one, and that's been the case all of the time.

So, a few days ago, someone reported that their feed score reporting page said that they apparently didn't send that header with their requests but they're sure that they did. They started chasing a bug on their side. I went "hmmm, oh no...", looked, and found it.

It's supposed to look like this:

if (auto ua = req.util->UserAgent(); ua()) {
  req.set\_user\_agent(ua.value());
}

So, why did I put the ! in front? Easy: most of the time, I'm handling errors with this stuff and bailing out by returning early. This is one of those relatively infrequent inverted situations where I want the value and jam it in there only if it exists.

It was a quick fix, but the damage was done. A few hundred rows in the database table picked up NULLs for that column while the bad version was deployed on the web server.

So now let's talk about what I'm doing about it. One thing I've been doing all this time when logging hits to the [feed score project](https://rachelbythebay.com/w/2024/05/30/fs/) is that I also log the git commit hash from the source tree at the time it was built by my automatic processes. It's just one more column in the table, and it changes any time I push a new binary out there.

With that, it was possible to see that only this one build had the bug, and I didn't need to fix any other rows. The other rows without UA data are that way because some goofball program is actually not sending the header for whatever reason.

Next, I changed the report page to add a colorful (and very strange-looking) "fingerprint" of the build hash which had been logged all along but not exposed to users previously. Every row in the results table now sports an extra column which has a bunch of wacky Unicode box-drawing characters around U+2580 all in different colors. I use the build hash to set the colors and pick which of the 30 or so weird characters can go in each spot.

If this technique sounds familiar, you might be thinking of a post of mine from [August 2011](https://rachelbythebay.com/w/2011/08/11/stripes/) where it was using MD5 sums of argv strings to render color bars.

This time around, since other people are the intended audience, I can't rely on full-color vision, so that's why there's also a mash-up of characters. Even if all you can see are shades of grey, you can still see the groupings at a glance.

So now, whenever something seems strange, the fsr users can see if I changed something and maybe save themselves from chasing a bug that's on my end and not theirs.

To those people: sorry! I still have to sit down and manually replace the data in the table from the actual web server logs from that time period. It'll fill in and then it'll look like nothing bad ever happened.

Until then, well, just know that one particular version blob has my "brown paper bag" bug associated with it.

![HTML table showing etag and cache-control fields and the aforementioned "hb" for the CGI handler's build hash](https://rachelbythebay.com/w/2025/08/03/scope/hb.png)

Bugs, bugs, bugs...

And finally, yes, a test on this code would have caught this pre-shipping. Obviously. You saw the part where I'm [doing this for free,](https://rachelbythebay.com/w/2024/12/17/packets/) right?
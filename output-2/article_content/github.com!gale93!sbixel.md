---
title: "GitHub - gale93/sbixel: 🧪 A simple pixel physics simulator in Rust using Macroquad"
author: "gale93"
siteName: "GitHub"
lang: "en"
---

# GitHub - gale93/sbixel: 🧪 A simple pixel physics simulator in Rust using Macroquad

## Sbixel

[](#sbixel)

**Sbixel** is a very simple pixel physics simulator I made to learn Rust.  
It uses [macroquad](https://github.com/not-fl3/macroquad) for drawing — and I was pleasantly surprised by how simple and awesome it is!

**Quick demo (click for youtube link):**

[![Watch the video](https://camo.githubusercontent.com/2642f5a547187a66b6cd91d41eaa893b6b3d36d808dee31ad16f1fe5748e0c59/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f48435f30666639316c57672f687164656661756c742e6a7067)](https://www.youtube.com/watch?v=HC_0ff91lWg)

> ⚠️ This project is very basilar and doesn't have much ambition to go anywhere — it's mainly a learning sandbox.

## How It Works

[](#how-it-works)

The simulation uses a "sector" system to reduce unnecessary processing by only simulating active areas of pixels.  
All settings related to simulation and performance can be found in [`src/def.rs`](https://github.com/gale93/sbixel/blob/main/src/def.rs).

## TODO List (aka: probably won't do soon 😅)

[](#todo-list-aka-probably-wont-do-soon-)

That said, here's the current (loose) roadmap. If anyone wants to contribute, I’d be happy to give my support:

*   🧪 Upgrade water simulation
*   🌊 Improve sand/water interaction
*   🖼️ Render pixels only in **active sectors** instead of rewriting the whole window every frame
*   🧠 Refactor `pixel_already_processed` logic — it's very trivial and causes potential bugs
*   💨 Add gas simulation
*   🧱 Add static objects

## Getting Started

[](#getting-started)

Make sure you have Rust installed. Then, run the project with (for performance go --release):

cargo run

Feel free to explore, break things, and maybe even improve the code 😊
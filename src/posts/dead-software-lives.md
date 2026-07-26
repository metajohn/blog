---
title: "Dead Software on the Abyssal Plane"
date: 2026-07-26
layout: base.html
---

I recently completed a weeklong cybersecurity bootcamp a.k.a. the USCC Cybercamp. My primary goals were straightforward: 
- harvest LinkedIn connections
- explore my options as a new-CS-grad navigating The Worst Job Market of All Time™.

If you're interested in a "no experience required" week of 6.5 hour lectures in which you may be ambushed by an intro to assembly in 20 minutes so that the next 6 hours of high level program analysis and repeated buffer overflows (with a twist) might provide some value, it may just be the place for you. 

My initial takeaway: > 3 hours of non-stop lecture is more endurance sport than education. Naturally I made excellent use of my time, and now have a very aesthetic Linux VM with which to ponder my future after Microsoft finally evicts the ride-or-die Win10 stragglers.

My broader takeaway came during the CTF. As I worked through web exploits that exist purely as the legacy of antiquated web development practices, I began to define a more perfect model to understand SDLC: **developing software is less like building a machine and more like birthing a whale.**

When software is in active development, it exists in a tightly controlled context. The creators dictate the interface with their own naive assumptions of how it will be used. But once active development ends and the binary is dropped into the wild, it sinks to the bottom of the ocean. Its second life begins on the abyssal plane.

In marine biology, a [whale fall](https://en.wikipedia.org/wiki/Whale_fall) occurs when a whale dies and sinks to the ocean floor, creating a massive, localized ecosystem that feeds scavengers, specialized organisms, and other unknown species for decades.

Software behaves the exact same way. Once released, it is dissected and repurposed by the deep-sea dwellers of the web: threat actors, modders, scene groups, and security researchers. To each, the tool serves a slightly differing purpose, some entirely unique to their own ecology

Consider WinRAR. It was never designed to be the compression standard for internet piracy, yet it was well suited for the purpose early on. Through its used it simultaneously became an important part of the shared culture of piracy. When true P2P protocols like BitTorrent emerged, and the benefits of the format became hindrances, the .rar remained out of pure cultural momentum. The interface outlived its original technical necessity and became an environmental constant.

I left Cybercamp with more questions than answers:

- **Do security researchers understand software better than developers?** 
	Devs build for what code _should_ do; researchers exploit what code _can_ be forced to do.
    
- **Should security have a place in SWE technical interviews alongside DSA??** 
	 It seems reasonable to expect new hires know how to prevent the most common, well-documented vulnerabilities before pushing to production
    
- **Is security really just a "not my department" problem?**
	As the industry tries to squeeze more water from the bleeding stone of AI-assisted developers, how many known, and unknown-unknown vulnerabilities are being introduced?

Cybersecurity is effectively a separate industry from software, we aren't truly the same species, but we all reside in this neo-ecology of software as sustenance.
AI and its consequences are part of this unfolding sea change; do we hybridize, adapt, evolve or face extinction?

---
layout: thought
comments: false
title: "Timing is everything"
date: "2018-11-19 22:24:03"
categories: thoughts
---
Having refactored my code with GULP (aside from a few js `undefined` issues) I now face the 
challenge of promises once again&mdash;I need to run concurrent processes for the feed, lights and 
temperature.

I did attempt to refactor the code so a single function powers each element based on passed through 
parameters, however after getting as far as:
```
var fn = window[settingsfunctionName];
if(typeof fn === 'function') {
  fn();
}
```
I decided to refocus on the basics and just get it working.

Back onto promises tomorrow.

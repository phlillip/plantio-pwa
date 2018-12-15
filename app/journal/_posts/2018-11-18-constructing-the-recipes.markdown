---
layout: thought
comments: false
title: "Constructing the recipes"
date: "2018-11-18 16:09:16"
categories: thoughts
---
I have now rewritten the recipe function using an object constructor, with one eye on moving
towards json files for user created recipes:
```
//Recipe constructor
function Recipe(name, duration, light, feed, temperature)
{   
  this.name = name;   
  this.duration = duration;
  this.light = light;
  this.feed = feed;
  this.temperature = temperature;
}
```

---
layout: thought
comments: false
title: "Promises promises promises"
date: "2018-11-18 15:45:12"
categories: thoughts
---
After struggling to implement callbacks I finally managed to setup a javascript
[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
in the pwa to ensure the socket.io connection is made before the recipe function begins. I am still
utilising fake [scheduling](https://javascript.info/settimeout-setinterval) for the onboarding 
recipe to create a sense of time.

---
layout: thought
comments: false
title: "Deployment without enjoyment"
date: "2018-11-18 16:18:02"
categories: thoughts
---
After my early confusing tests with [Firebase](https://firebase.google.com/), I was reluctant to
try [Google App Engine](https://cloud.google.com/appengine/) however I had early success, managing to sucessfully
deploy that which failed on [Heroku](https://heroku.com). Alas, it was not to be. After discussion
with Al it seems that some of these cloud platforms do not play nicely with socket.io or using
various ports.

Rather than remove socket.io I am going to explore the use of [Digital
Ocean](https://www.digitalocean.com/) and their droplets&mdash;scalable virtual machines run on 
linux with a lot of freedom.

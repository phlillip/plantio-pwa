---
layout: thought
comments: false
title: "Setting up a production environment"
date: "2018-11-18 14:32:38"
categories: thoughts
---

Having successfully deployed a working build of my app to a Digital Ocean droplet, I now need to 
set up a production environment which allows the app tyo run as a service in the background.

After looking at [Forever](https://github.com/foreverjs/forever) and an enticing solution by 
[CertSimple](https://certsimple.com/blog/deploy-node-on-linux) I was pointed to 
[PM2](http://pm2.keymetrics.io/) by Al and managed to instantiate a working instance.

However, this was as root user and without the port redirect, so it needs re-implementing.

> TODO: Set up PM2 for non-root user with custom domina and port handling.

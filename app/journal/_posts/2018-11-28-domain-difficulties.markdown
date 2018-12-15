---
layout: thought
comments: false
title: "Domain difficulties"
date: "2018-11-28 18:49:53"
categories: thoughts
---
I need to point the subdomain `pwa.ruuts.co.uk` to my DigitalOcean droplet at `142.93.40.131:3000`. 
This involves a number of steps:
1. 
[Set 
up 
Apache 
Virtual 
Hosts 
on 
Digital 
Ocean 
droplet](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04)
2. [Point domain to 
droplet](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars)
3. [Set up Let's Encrypt on Apache to enable PWA notifications](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04)
4. Change current port 4444/3000 to port 80

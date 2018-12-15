---
layout: thought
comments: false
title: "Fine tuning the server"
date: "2018-12-09 11:20:00"
categories: thoughts
---
Implementing best practises such as redirecting www to non-www:

`$: sudo nano /etc/nginx/sites-available/default`

```
server {
    if ($host = www.plantio.co.uk) {
        return 301 https://plantio.co.uk$request_uri
    }
}
```

and using HTTP2:

```
listen [::]:443 ssl http2 ipv6only=on;
listen 443 ssl http2;
```

`$: sudo nginc -t`
`$: sudo systemctl restart nginx`

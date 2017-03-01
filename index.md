---
layout: page
title: simple site
tagline: Easy websites with GitHub Pages
description: Minimal tutorial on making a simple website with GitHub Pages
---

Bob

{% for post in site.posts %}
  - {{ post.date | date_to_string }} [{{ BASE_PATH }}{{ post.url }}]({{ post.title }})
{% endfor %}


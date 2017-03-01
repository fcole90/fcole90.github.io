---
layout: page
title: simple site
tagline: Easy websites with GitHub Pages
description: Minimal tutorial on making a simple website with GitHub Pages
---

Bob

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

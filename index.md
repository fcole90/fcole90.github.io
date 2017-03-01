---
layout: default
title: Home
description: Minimal tutorial on making a simple website with GitHub Pages
---

Bob

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

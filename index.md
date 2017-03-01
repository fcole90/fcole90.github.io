---
layout: default
title: Home
description: Home page
---

This is a simple static website to collect some resources, informations and ideas.

## List of the recent posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

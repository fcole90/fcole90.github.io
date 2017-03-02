---
layout: default
title: All Posts
description: Lists all posts
---

## List of all the posts

<ul>
            {% for post in site.posts %}
            <li>
              <a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%d/%m/%Y" }}</a>
            </li>
            {% endfor %}
</ul>

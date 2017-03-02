---
layout: default
title: All Posts
description: Lists all posts
---

## List of all the posts

<ul>
            {% for post in site.posts %}
            <li>
              <a href="{{ post.url }}">{{ post.title }}
              <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p></a>
            </li>
            {% endfor %}
</ul>

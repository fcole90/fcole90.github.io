---
layout: default
title: All Posts
description: Lists all posts
---

## List of all the posts

<ul>
            {% for post in site.posts %}
            <li>
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span> class="excerpt">{{ post.excerpt }}</span>
              <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p>
            </li>
            {% endfor %}
</ul>

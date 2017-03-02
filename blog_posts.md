---
layout: page
title: Blog posts
description: This page contains every blog post.
---
<ul>
            {% for post in site.posts %}
            <li>
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span class="excerpt">{{ post.excerpt }}</span>
              <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p>
            </li>
            {% endfor %}
</ul>

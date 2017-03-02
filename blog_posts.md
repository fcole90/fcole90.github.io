---
layout: page
title: Blog posts
description: Each and every post ever published
---
<ul>
            {% for post in site.posts %}
            <li>
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span class="excerpt">{{ post.excerpt }}</span>
              <p class="post-categories">{{ post.categories | join: ", " }}</p>
              <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p>
            </li>
            {% endfor %}
</ul>

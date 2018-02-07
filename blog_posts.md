---
layout: page
title: Blog posts
description: List of blog posts in reversed chronological order
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

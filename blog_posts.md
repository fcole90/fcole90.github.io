---
layout: page
title: Blog posts
description: Articles
---
<ul>
            {% for post in site.posts %}
            <li>
                        <a href="{{ post.url }}">
                                    <h3>{{ post.title }}</h3>
                        </a>
                        <p> {{ post.excerpt | remove: '<p>' | remove: '</p>' }} <i>(Continues...)</i> </p>
                        <p class="post-categories special-font">{{ post.categories | join: ", " }}</p>
                        <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p>
                        
            </li>
            {% endfor %}
</ul>

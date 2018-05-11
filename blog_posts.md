---
layout: page
title: Articles
description: All posts from last to first
---
<ul>
            {% for post in site.posts %}
            <li>
                        <a href="{{ post.url }}">
                                    <h3>{{ post.title }}</h3>
                        </a>
                        <p> 
                                    {{ post.excerpt | remove: '<p>' | remove: '</p>' }} 
                                    <a href="{{ post.url }}"> <i>(Continues...)</i> </a>
                        </p> 
                        <p class="post-categories special-font">{{ post.categories | join: ", " }}</p>
                        <p class="post-publishing-note">{{ post.date | date: "%d/%m/%Y" }}</p>
                        
            </li>
            {% endfor %}
</ul>

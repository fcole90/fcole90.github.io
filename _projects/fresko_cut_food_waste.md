---
date-from: ""
date: 01-11-2019
title: "FresKo - Cut food waste"
subtitle: "Save money, save the planet: find close-to-expiration products from your grocery list."
image: https://user-images.githubusercontent.com/1292230/69498445-de230b80-0ef0-11ea-88e0-6057db9f4994.png
image-alt-text: FresKo app on display on a laptop, showing marked products
keywords: [food-waste, hackathon-2019, hackathon-project, webapp, api-server, optimisation, grocery, teamwork]
techs: [python, django, javascript, html, css, React]
work: false
academic: false
reason: Hackathon Junction 2019
reason-link: https://2019.hackjunction.com/
more-info: https://github.com/fcole90/kesko-food-waste-hackathon
---

## What is it?
It's a webapp that suggests users the best K-markets to go to buy the products they desire. 
The users will provide their position and their grocery list. 
The app will hence find the closest K-market that has the greatest amount of expire-soon 
food among the items in the user's grocery list, and taking into account the selling probability 
of an item given the popularity of the item and the shop.

## What did I do?
 - Designed the main UI, UX and user story of the application
 - Led the team, suggesting roles and directions, based on the skills they reported and 
   the impression I got about each of them during the planning phase
 - Implemented a Python genetic optimisation algorithm on the backend, 
   to find the closest shops to the user,
   that have most of the required products as close-to-expiration, 
   while minimising the times a user needed to hop from one shop to another. 
---
date-from: 01-06-2018
date: 17-10-2020
title: Interactive Bayesian Optimisation
subtitle: Human Strategic Steering Improves Performance of Interactive Optimisation
image: https://user-images.githubusercontent.com/1292230/80922451-e0ce3a80-8d85-11ea-9b7b-f0c4bc428008.png
image-alt-text: Plot showing an instance of interactive Bayesian optimisation
keywords: [interactive-bayesian-optimisation, probabilistic-machine-learning]
techs: [python, javascript, html, css, pyodide, jQuery]
work: true
academic: true
reason: "Summer Job, ACM UMAP2020 publication and Master Thesis"
reason-link: "https://research.cs.aalto.fi/pml/"
more-info: https://fcole90.github.io/interactive_bayesian_optimization/
---

## What is it about?
This project studies how users behave when using interactive optimisation systems
(e.g. recommender systems), where they need to provide some feedback in order to reach some goal.
In our scenario the users need to collaborate with the system in order to reach a common goal, 
the maximum of a function, with the following limitations. 
The AI **cannot** see the function to be optimized, so it needs to ask the user to provide a feedback
for each point it queries. The user instead, can only provide the height of the function in each point,
but not point directly to the maximum.

The results show that users learn a model of the AI and start *lying* in order to reach earlier
their common objective. We call this behaviour *steering*. The results shown that steering users
reach the maximum earlier than if they provided a truthful feedback.

## Publication
We published our results in 
[Human Strategic Steering Improves Performance of Interactive Optimisation](https://doi.org/10.1145/3340631.3394883) 
at [ACM UMAP 2020](https://um.org/umap2020/).

## Presentation

<div class="responsive-iframe" style="--aspect-ratio: 16 / 9;">
    <iframe width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/4noJRNVK9Ro"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</div>


## What did I do?
- Developed a backend in Python/Flask API for the optimisation using common Python scientific 
  libraries like Numpy and Scipy and implementing techniques from books and papers, like RBF kernel, 
  Gaussian Processes and Bayesian Optimisation
- developed a frontend to study users' interaction with the optimisation system, including a partial
  Javascript implementation of matplotlib, and a small MVC for handling the interaction interface
- designed user study tasks, and conducted and analysed user studies
- developed a [demo version](https://fcole90.github.io/interactive_bayesian_optimization/demo.html) to 
  run on GitHub pages that runs a modified backend in a webworker running 
  the required Python code in a Python/WASM interpreter (Pyodide)
- attended ACM UMAP 2020 and presented our work
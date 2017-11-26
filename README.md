# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

Please open 'index.html' to start the game. You click two cards to see if they match or not. If so, the two cards will be locked as open cards. If not, the two will close again after half a second. Your goal is to match all sixteen cards on the board. The score also shows how many moves you make and how much time you spend when playing the game.

## Implementation

* index.html - rendering html elements and linking to liraries like jQquery
* css/app.css - stylishing the page (I didn't spend much time on this but should have built from scratches with BootStrap.)
* js/app.js - the engine of the game (I put everything in one js file but could seperate functions into different files.)

## Contributing

This repository is just a project practice.

***

This is the delivery to Udacity's *Front-End Web Developer Nanodegree* Project **Memory Game**, also my first game, built upon basic HTML and CSS from [here](https://github.com/udacity/fend-project-memory-game). Basically, I coded the function(s) that let a player open two cards on the board and generate different results accoudingly. The core of all functions are two lists (openCards and openCardsId) that are used to track the opened cards everytime a player opens two of them, which is also the most difficult part of this project.

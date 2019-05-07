# Malazan-DB
A database of popular Malazan Book of the Fallen Characters


-- TECHNOLOGIES USED --

1) Node.js
2) Javascript
3) Heroku DB
4) Mongoose
5) Express
6) EJS
7) Bootstrap


-- APPROACH TAKEN --

With the objective of creating a functioning CRUD app I decided to create a database for characters from a popular book series. I started by setting up my basic file structure and linking it to both github and heroku. From there I started creating my associated EJS files to begin adding content. Due to continuous review the prior weeks on creating and updating CRUD apps through the Generaly Assembly curriculum I was able to complete the foundation for the app within a day. Because I was able to create the app and have it functional sooner than initially expected I decided to take a more challenging task on of adding an additional model of "associations" and having it functional alongside the character database. After many adjustments I was able to make both the character and associations models work together at the same time. The remainder of my time was spent on styling the site and making sure all links function properly.



-- UNSOLVED PROBLEMS ---

Even though I implemented many styling choices to fit mobile the site appears to break/distort on mobile screens. This will be something to fix in the future and may be linked to making adjustments via bootstrap documentation.


-- USER STORIES --

Upon first setting up server/database I ran into zero issues but after linking and creating data to be rendered in the browser it would do so locally but not on the heroku server. I came to find that this was because I had my main index.ejs page being rendered after my controllers were being declared. Upon making the adjustment to place the GET of the main index.ejs above the controllers I was then able to properly render everything through heroku.


-- FUTURE NOTES --

I would like to be able to add additional models and controllers for other content to be added as well as creating a search feature that lists results related to the search input.

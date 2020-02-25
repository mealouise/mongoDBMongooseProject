# Creating Login / logout

# Requried to install
* require('express-handlebars');
* require('path');
* express = require('express');
* bodyParser = require('body-parser');
* mongoose = require('mongoose');

### folder structure

- public - anything front end, JS,CSS, Images etc
- views - contains individual pages eg signup, signin etc (all html)
- views/layouts - contains all layout for how each page will render
- index.js entry point for the application
- lib folder - custom modules e.g querying a database, make sure have file instead when saving to github
- layout.hbs - always have {{{body}}} and link to style.css

### NPM setup
- install npm init -y :sets up package.json
- install npm i path express express-handlebars mongoose body-parser dotenv

### Index.js file consists of
- const app
- app.user(3 times)
- app.engine
- app.set
- app.get for index
- app.listen
- mongoose connect - put the password and username in env format so not showing in index.js
- set up dotenv
- set up gitignore file ( copy and paste example - node ignore from internet)
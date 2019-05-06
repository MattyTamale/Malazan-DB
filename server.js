//-- DEPENDENCIES --//
require('dotenv').config();
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//-- PORT --//
const PORT = process.env.PORT || 3000;

//-- CONNECTION TO DATABASE --//
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `malazan-db`;

//-- MONGO CONNECT --//
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})
//-- Error / success: Provided By Markdown --//
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});


//-- MIDDLEWARE --//
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//-- TEST ROUTE --//
app.get('/malazan-db' , (req, res) => {
  res.render('index.ejs');
});

//-- TEST ROUTE --//
app.get('/' , (req, res) => {
  res.render('index.ejs');
});

//-- CHARACTER CONTROLLER --//
const characterController = require('./controllers/characters.js');
//The controller is utilizing the URL below and does not need to be declared within the character.js controller.
app.use('/malazan-db/characters', characterController);

//-- AFFILIATIONS CONTROLLER --//
//Same explanation for character controller.
const affiliationsControlller = require('./controllers/affiliations.js');
app.use('/malazan-db/affiliations', affiliationsControlller);

//-- TEST ROUTE --//
// app.get('/malazan-db' , (req, res) => {
//   res.render('index.ejs');
// });



//-- LISTENER --//
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

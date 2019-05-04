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
const MONGODB_URI = process.env.MONGODB_URI //|| 'mongodb://localhost/'+ `YOUR DATABASE NAME`;

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


//-- CHARACTER CONTROLLER --//
const characterController = require('./controllers/characters.js');
app.use('/malazan-db', characterController);

//-- AFFILIATIONS CONTROLLER --//
// const affiliationsControlller = require('./controllers/affiliations.js');
// app.use('/malazan-db', affiliationsControlller);

//-- TEST ROUTE --//
app.get('/' , (req, res) => {
  res.render('index.ejs');
});



//-- LISTENER --//
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

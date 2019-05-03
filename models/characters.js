const mongoose = require('mongoose');


const characterSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  img: String,
  info: String,
  quote: String
})


const Character = mongoose.model('Character', characterSchema);

module.exports = Character;

const mongoose = require('mongoose');

const affiliationsSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  img: String,
  info: String
})


const Affiliations = mongoose.model('Affiliations', affiliationsSchema);

module.exports = Affiliations;

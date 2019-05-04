const express = require('express');
const affiliations = express.Router();
const Affiliations = require('../models/affiliations.js');


affiliations.get('/new', (req, res) => {
  res.render('new.ejs');
})

affiliations.post('/malazan-db/', (req, res) => {
  Affiliations.create(req.body, (err, createdAffiliation) => {
    res.redirect('/malazan-db');
  });
})

affiliations.put('/:id', (req, res) => {
  Affiliations.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/malazan-db');
  })
})

affiliations.get('/:id/edit', (req, res) => {
  Affiliations.findById(req.params.id, (err, foundAffiliate) => {
    res.render('edit.ejs', {
      affiliation: foundAffiliate
    })
  })
})

affiliations.get('/', (req, res) => {
  Affiliations.find({}, (err, allAffiliations) => {
    res.render('index.ejs', {
      affiliations: allAffiliations
    });
  })
})

//enter in the url '/fruits/seed' to add this data to our database automatically.
affiliations.get('/seed', (req, res) => {
  Character.create([
    {
      name: 'Ganoes Paran',
      img: 'https://vignette.wikia.nocookie.net/malazan/images/a/a0/Master_of_the_deck_by_artsed-d8t0y7p.jpg/revision/latest/scale-to-width-down/140?cb=20150718151143',
      info:'Former Captain of the Bridgeburners and the Master of the Deck of Dragons.',
      quote: 'The heart of wisdom is tolerance. I think.'
    },
    {
      name: 'Anomander Rake',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1497998922i/23078253._SY540_.jpg',
      info: 'Knight of High House Dark and leader of the Tiste Andii.',
      quote: 'There is no struggle too vast, no odds too overwhelming, for even should we fail — should we fall — we will know that we have lived.'
    },
    {
      name: 'Whiskeyjack',
      img: 'https://2.bp.blogspot.com/-4ZOLtKD9xVA/WaUMa_Z2EBI/AAAAAAAAFog/HkHfl86vGqALSfaeZ2O8BZVwlN_eJdRhgCLcBGAs/s1600/Whiskeyjack_concept_by_slaine69.jpg',
      info: 'Commander of the Bridgeburners and legendary soldier of the Malazan Empire.',
      quote: 'A soldier cannot be sent away without guidance, cannot be abandonded and left in something unrecognizable and indifferent to their lives'
    },
    {
      name: 'Fiddler',
      img: 'https://cdna.artstation.com/p/assets/images/images/007/201/618/20170903044749/smaller_square/fuge-nguyen-fiddler-com.jpg?1504432069',
      info: 'Sapper of the Bridgeburners. Knowledge of explosives and has an inherent affinity for magic.',
      quote: "The glory of battle, Koryk, dwells only in the bard’s voice, in the teller’s woven words. Glory belongs to ghosts and poets. What you hear and dream isn't the same as what you live— blur the distinction at your own peril, lad."
    }
  ], (err, data) => {
    res.redirect('/malazan-db');
  })
})

affiliations.delete('/:id', (req, res) => {
  Affiliations.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/malazan-db');
  })
})

affiliations.get('/:id', (req, res) => {
  Affiliations.findById(req.params.id, (err, foundAffiliate) => {
    res.render('show.ejs', {
      affiliation: foundAffiliate
    });
  })
})


module.exports = affiliations;

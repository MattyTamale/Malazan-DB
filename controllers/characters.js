const express = require('express');
const router = express.Router();
const Character = require('../models/characters.js');


router.get('/new', (req, res) => {
  res.render('new.ejs');
})

router.post('/malazan-db/', (req, res) => {
  Character.create(req.body, (err, createdCharacter) => {
    res.redirect('/malazan-db');
  });
})

router.put('/:id', (req, res) => {
  Character.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/malazan-db');
  })
})

router.get('/:id/edit', (req, res) => {
  Character.findById(req.params.id, (err, foundCharacter) => {
    res.render('edit.ejs', {
      character: foundCharacter
    })
  })
})

router.get('/', (req, res) => {
  Character.find({}, (err, allCharacters) => {
    res.render('index.ejs', {
      characters: allCharacters
    });
  })
})

//enter in the url '/fruits/seed' to add this data to our database automatically.
router.get('/seed', (req, res) => {
  Character.create([
    {
      name: 'Ganoes Paran',
      img: 'https://vignette.wikia.nocookie.net/malazan/images/a/a0/Master_of_the_deck_by_artsed-d8t0y7p.jpg/revision/latest/scale-to-width-down/140?cb=20150718151143',
      info:'Master of the Deck',
      quote: 'An interesting turn of events...'
    }
  ], (err, data) => {
    res.redirect('/malazan-db');
  })
})

router.delete('/:id', (req, res) => {
  Character.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/malazan-db');
  })
})

router.get('/:id', (req, res) => {
  Character.findById(req.params.id, (err, foundCharacter) => {
    res.render('show.ejs', {
      character: foundCharacter
    });
  })
})


module.exports = router;

const express = require('express');
const affiliations = express.Router();
const Affiliations = require('../models/affiliations.js');

//-- MIDDLEWARE --//
affiliations.use(express.static('public'));


affiliations.get('/new', (req, res) => {
  res.render('affiliations/new.ejs');
})

affiliations.post('/', (req, res) => {
  Affiliations.create(req.body, (err, createdAffiliation) => {
    res.redirect('/malazan-db/affiliations');
  });
})

affiliations.put('/:id', (req, res) => {
  Affiliations.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/malazan-db/affiliations');
  })
})

affiliations.get('/:id/edit', (req, res) => {
  Affiliations.findById(req.params.id, (err, foundAffiliate) => {
    res.render('affiliations/edit.ejs', {
      affiliation: foundAffiliate
    })
  })
})

affiliations.get('/', (req, res) => {
  Affiliations.find({}, (err, allAffiliations) => {
    res.render('affiliations/index.ejs', {
      affiliations: allAffiliations
    });
  })
})

//-- SEED DATA --//
affiliations.get('/seed', (req, res) => {
  Affiliations.create([
    {
      name: 'Malazan Empire',
      img: 'https://pbs.twimg.com/media/DAIXcWQXYAIyIEc.jpg',
      info:'The Central Focus of the Narrative.'
    }
  ], (err, data) => {
    res.redirect('/malazan-db/affiliations');
  })
})

affiliations.delete('/:id', (req, res) => {
  Affiliations.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/malazan-db/affiliations');
  })
})

affiliations.get('/:id', (req, res) => {
  Affiliations.findById(req.params.id, (err, foundAffiliate) => {
    res.render('affiliations/show.ejs', {
      affiliation: foundAffiliate
    });
  })
})


module.exports = affiliations;

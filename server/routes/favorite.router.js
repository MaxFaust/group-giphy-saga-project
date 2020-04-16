const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  // needed to modify based on changes of the favourite database
  const queryText = 'SELECT id, name, categories, embedded_url FROM favourites';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favourite image query', err);
      res.sendStatus(500);
    });
});


// add a new favorite 
router.post('/', (req, res) => {
  const newFavourite = req.body;
  const queryText = `INSERT INTO favourite ("name", "categories", "embedded_url")
                    VALUES ($1, $2, $3)`;
  const queryValues = [
    newFavourite.name,
    newFavourite.categories,
    newFavourite.embedded_url,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST of favourites img query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

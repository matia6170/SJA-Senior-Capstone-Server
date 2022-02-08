// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Survey = require('../../models/Survey');



// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Survey.create(req.body)
    .then(survey => res.json({ msg: 'Survey added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this survey' }));
});


module.exports = router;
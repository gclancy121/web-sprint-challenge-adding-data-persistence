// build your `/api/tasks` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Resource.fetchData().then(result => {
    res.status(200).json(result);
  }).catch(err => next(err));
});








module.exports = router;
// build your `/api/tasks` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Resource.fetchData().then(result => {
    res.status(200).json(result);
  }).catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const name = req.body.resource_name;
  if (typeof name !== 'string' || name == null) {
    res.status(400).json({message: 'invalid resource name'});
    return;
  }
  Resource.addData(req.body).then(result => {
    res.status(201).json(result);
  }).catch(err => next(err));
})

module.exports = router;
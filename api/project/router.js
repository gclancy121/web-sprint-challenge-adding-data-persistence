// build your `/api/tasks` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Project.fetchData().then(result => {
    res.status(200).json(result);
  }).catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const name = req.body.project_name;
  if (typeof name !== 'string' || name == null) {
    res.status(400).json({message: 'invalid project name'});
    return;
  }
  Project.addData(req.body).then(result => {
    res.status(201).json({...result, project_completed: req.body.project_completed});
  }).next(err => next(err));
})








module.exports = router;
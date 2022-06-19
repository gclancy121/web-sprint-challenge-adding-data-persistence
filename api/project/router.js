// build your `/api/tasks` router here
const express = require('express');
// const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Project.fetchData().then(result => {
  //   res.status(200).json(result);
  // }).catch(err => next(err));
  res.json({message: 'project hookup complete chief!'})
});








module.exports = router;
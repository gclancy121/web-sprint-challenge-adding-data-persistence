// build your `/api/tasks` router here
const express = require('express');
//const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({message: 'Project hookup complete chief!'})
});








module.exports = router;
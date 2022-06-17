// build your `/api/tasks` router here
const express = require('express');
//const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({message: 'Resource hookup complete chief!'})
});








module.exports = router;
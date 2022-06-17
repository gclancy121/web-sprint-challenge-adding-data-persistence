// build your `/api/tasks` router here
const express = require('express');
//const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({message: 'Tasks hookup complete chief!'})
});








module.exports = router;
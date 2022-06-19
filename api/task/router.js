// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
Tasks.fetchData().then(result => {
  res.status(200).json(result);
}).catch(err => next(err));
});
router.post('/', (req, res, next) => {
  const name = req.body.task_description;
  const id = req.body.project_id;
  if (typeof name !== 'string' || name == null) {
    res.status(400).json({message: 'invalid task description'});
    return;
  }
  if (id == null) {
    res.status(400).json({message: 'must be attached to a project'});
    return;
  }
  Tasks.addData(req.body).then(result => {
    res.status(201).json(result);
  }).catch(err => next(err));
})







module.exports = router;
// build your `/api/tasks` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Project.fetchData().then(result => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].project_completed === 1) {
       result[i].project_completed = true;
      } else {
       result[i].project_completed = false;
      }
    }
    res.status(200).json(result);
  }).catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const name = req.body.project_name;
  if (typeof name !== 'string' || name == null) {
    res.status(400).json({message: 'name required'});
  }
  Project.addData(req.body).then(result => {
    if(result[0].project_completed === 1) {
      res.status(201).json({project_id: result[0].project_id, project_name: result[0].project_name, project_description: result[0].project_description, project_completed: true});
    } else {
      res.status(201).json({project_id: result[0].project_id, project_name: result[0].project_name, project_description: result[0].project_description, project_completed: false});
    }
  }).catch(err => next(err));
})








module.exports = router;
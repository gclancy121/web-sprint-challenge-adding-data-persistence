// build your `Task` model 
const db = require('../../data/dbConfig');

function fetchData() {
  return db('tasks').join('projects', 'tasks.project_id', 'projects.project_id');
}
async function addData(post) {
  await db('tasks').insert(post);
  return db('tasks').where('task_description', post.task_description).first();
}

module.exports = {
  fetchData,
  addData
}
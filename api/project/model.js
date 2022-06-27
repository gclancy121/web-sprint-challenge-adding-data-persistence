// build your `Project` model here
const db = require('../../data/dbConfig');

function fetchData() {
  return db('projects');
}
async function addData(post) {
  await db('projects').insert(post);
  return db('projects').where('project_name', post.project_name);
}

module.exports = {
  fetchData,
  addData
}
// build your `Task` model 
const db = require('../../data/dbConfig');

function fetchData() {
  return db('tasks');
}
async function addData(post) {
  console.log(post);
  // await db('tasks').insert(post);
  // return db('tasks').where('task_description', post.task_description);
}

module.exports = {
  fetchData,
  addData
}
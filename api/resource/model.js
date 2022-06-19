// build your `Resource` model here
const db = require('../../data/dbConfig');

function fetchData() {
  return db('resources');
}
async function addData(post) {
  await db('resources').insert(post);
  return db('resources').where('resource_name', post.resource_name);
}


module.exports = {
  fetchData,
  addData

}
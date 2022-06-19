// build your `Resource` model here
const db = require('../../data/dbConfig');

function fetchData() {
  return db('resources');
}
async function addData(post) {
  await db('resources').insert(post);
  return post;
}


module.exports = {
  fetchData,
  addData

}
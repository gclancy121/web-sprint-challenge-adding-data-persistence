// build your `Resource` model here
const db = require('../../data/dbConfig');

function fetchData() {
  return db('resources');
}



module.exports = {
  fetchData,
  

}
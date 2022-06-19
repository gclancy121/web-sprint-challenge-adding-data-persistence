
exports.seed = async function(knex) {
  await knex('resources').insert([
    {resource_name: 'money', resource_description: 'you know what money does'},
    {resource_name: 'food'}
  ]);
};

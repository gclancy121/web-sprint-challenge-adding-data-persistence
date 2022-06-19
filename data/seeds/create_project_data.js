
exports.seed = async function(knex) {
  await knex('projects').insert([
    {project_name: 'take over the world', project_description: 'do it for sachi'},
    {project_name: 'be hungry', project_completed: true}
  ]);
};

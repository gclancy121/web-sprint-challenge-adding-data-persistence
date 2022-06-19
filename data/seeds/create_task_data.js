exports.seed = async function(knex) {
  await knex('tasks').insert([
    {project_id: 1, task_description: 'steal the declaration of independence', task_notes: "don't think i wont"},
    {project_id: 1, task_description: 'make sachi best girl', task_completed: true}
  ]);
};

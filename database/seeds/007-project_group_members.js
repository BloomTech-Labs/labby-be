exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_group_members")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_group_members").insert([
        { project_id: 1, project_group_id: 1 },
        { project_id: 2, project_group_id: 2 },
        { project_id: 3, project_group_id: 3 },
        { project_id: 4, project_group_id: 4 },
        { project_id: 5, project_group_id: 5 },
        { project_id: 6, project_group_id: 6 },
        { project_id: 7, project_group_id: 7 },
        { project_id: 8, project_group_id: 8 },
        { project_id: 9, project_group_id: 9 }
      ]);
    });
};

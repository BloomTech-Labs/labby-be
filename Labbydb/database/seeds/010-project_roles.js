exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_roles").insert([
        { id: 1, role_id: 5, project_id: 1 },
        { id: 2, role_id: 5, project_id: 2 },
        { id: 3, role_id: 5, project_id: 3 },
        { id: 4, role_id: 5, project_id: 4 },
        { id: 5, role_id: 5, project_id: 5 },
        { id: 6, role_id: 5, project_id: 6 },
        { id: 7, role_id: 5, project_id: 7 },
        { id: 8, role_id: 5, project_id: 8 },
        { id: 9, role_id: 5, project_id: 9 },
        { id: 10, role_id: 5, project_id: 1 },
        { id: 11, role_id: 5, project_id: 2 },
        { id: 12, role_id: 5, project_id: 3 },
        { id: 13, role_id: 5, project_id: 4 },
        { id: 14, role_id: 5, project_id: 5 },
        { id: 15, role_id: 5, project_id: 6 },
        { id: 16, role_id: 5, project_id: 7 },
        { id: 17, role_id: 8, project_id: 7 },
        { id: 18, role_id: 8, project_id: 8 },
        { id: 19, role_id: 8, project_id: 9 },
        { id: 20, role_id: 8, project_id: 1 },
        { id: 21, role_id: 8, project_id: 2 },
        { id: 22, role_id: 8, project_id: 2 },
        { id: 23, role_id: 8, project_id: 3 },
        { id: 24, role_id: 8, project_id: 4 },
        { id: 25, role_id: 8, project_id: 5 },
        { id: 26, role_id: 8, project_id: 6 },
        { id: 27, role_id: 4, project_id: 7 },
        { id: 28, role_id: 4, project_id: 8 },
        { id: 29, role_id: 4, project_id: 9 },
        { id: 30, role_id: 4, project_id: 7 },
        { id: 31, role_id: 4, project_id: 8 },
        { id: 32, role_id: 4, project_id: 9 },
        { id: 33, role_id: 4, project_id: 7 },
        { id: 34, role_id: 4, project_id: 8 },
        { id: 35, role_id: 4, project_id: 9 },
        { id: 36, role_id: 4, project_id: 7 },
        { id: 37, role_id: 4, project_id: 8 }
      ]);
    });
};

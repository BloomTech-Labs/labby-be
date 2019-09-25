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
        { project_id: 9, project_group_id: 9 },
        { project_id: 10, project_group_id: 10 },
        { project_id: 11, project_group_id: 11 },
        { project_id: 12, project_group_id: 12 },
        { project_id: 13, project_group_id: 13 },
        { project_id: 14, project_group_id: 14 },
        { project_id: 15, project_group_id: 15 },
        { project_id: 16, project_group_id: 16 },
        { project_id: 17, project_group_id: 17 },
        { project_id: 18, project_group_id: 18 },
        { project_id: 19, project_group_id: 19 },
        { project_id: 20, project_group_id: 20 },
        { project_id: 21, project_group_id: 21 },
        { project_id: 22, project_group_id: 22 },
        { project_id: 23, project_group_id: 23 },
        { project_id: 24, project_group_id: 24 },
        { project_id: 25, project_group_id: 25 },
        { project_id: 26, project_group_id: 26 },
        { project_id: 27, project_group_id: 27 },
        { project_id: 28, project_group_id: 28 },
        { project_id: 29, project_group_id: 29 },
        { project_id: 30, project_group_id: 30 },
        { project_id: 31, project_group_id: 31 },
        { project_id: 32, project_group_id: 32 },
        { project_id: 33, project_group_id: 33 },
        { project_id: 34, project_group_id: 34 },
        { project_id: 35, project_group_id: 35 },
        { project_id: 36, project_group_id: 36 },
        { project_id: 37, project_group_id: 37 },
        { project_id: 38, project_group_id: 38 },
        { project_id: 39, project_group_id: 39 },
        { project_id: 40, project_group_id: 40 },
        { project_id: 41, project_group_id: 41 },
        { project_id: 42, project_group_id: 42 },
        { project_id: 43, project_group_id: 43 },
        { project_id: 44, project_group_id: 44 },
        { project_id: 45, project_group_id: 45 },
        { project_id: 46, project_group_id: 46 },
        { project_id: 47, project_group_id: 47 },
        { project_id: 48, project_group_id: 48 },
        { project_id: 49, project_group_id: 49 },
        { project_id: 50, project_group_id: 50 }
      ]);
    });
};
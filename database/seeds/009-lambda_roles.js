exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("lambda_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("lambda_roles").insert([
        { id: 1, person_id: 1, role_id: 1 },
        { id: 2, person_id: 2, role_id: 2 },
        { id: 3, person_id: 3, role_id: 3 },
        { id: 4, person_id: 4, role_id: 4 },
        { id: 5, person_id: 5, role_id: 5 },
        { id: 6, person_id: 6, role_id: 6 },
        { id: 7, person_id: 7, role_id: 7 },
        { id: 8, person_id: 8, role_id: 8 },
        { id: 9, person_id: 9, role_id: 9 }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        { id: 1, name: "engineering_manager", type: "product" },
        { id: 2, name: "design_manager", type: "product" },
        { id: 3, name: "product_manager", type: "product" },
        { id: 4, name: "backend_engineer", type: "project" },
        { id: 5, name: "data_scientist", type: "project" },
        { id: 6, name: "frontend_engineer", type: "project" },
        { id: 7, name: "section_lead", type: "project" },
        { id: 8, name: "team_lead", type: "project" },
        { id: 9, name: "ux_designer", type: "project" }
      ]);
    });
};

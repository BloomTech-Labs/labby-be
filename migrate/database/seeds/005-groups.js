exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("groups").insert([
        { id: 1, name: "Venezuelan" },
        { id: 2, name: "Chilean" },
        { id: 3, name: "Central American" },
        { id: 4, name: "Yaqui" },
        { id: 5, name: "Japanese" },
        { id: 6, name: "Argentinian" },
        { id: 7, name: "Lumbee" },
        { id: 8, name: "Colville" },
        { id: 9, name: "South American" },
        { id: 10, name: "Nicaraguan" }
      ]);
    });
};

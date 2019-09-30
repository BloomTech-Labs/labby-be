exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        { id: 1, name: "Axe", type: "Yadel" },
        { id: 2, name: "COLGATE Great Regular Flavor", type: "Edgeclub" },
        { id: 3, name: "Oxygen", type: "Yoveo" },
        { id: 4, name: "Olanzapine", type: "Voonyx" },
        { id: 5, name: "Desmopressin Acetate", type: "Babbleopia" },
        { id: 6, name: "Molds - Mold Mix 4", type: "Skyble" },
        { id: 7, name: "Vicodin", type: "Zoozzy" },
        { id: 8, name: "Hypercalm - Mental Focus", type: "Flipstorm" },
        { id: 9, name: "Telmisartan and Amlodipine", type: "Jatri" },
        { id: 10, name: "LEADER TRIPLE ANTIBIOTIC", type: "Agimba" }
      ]);
    });
};

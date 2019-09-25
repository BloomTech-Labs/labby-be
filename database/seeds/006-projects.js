exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          product_id: 1,
          name: "Seligeriacwrsfeae",
          start: "09/26/2017",
          end: "07/02/2019"
        },
        {
          id: 2,
          product_id: 2,
          name: "Pottiaceaefasdvae",
          start: "10/16/2017",
          end: "10/08/2018"
        },
        {
          id: 3,
          product_id: 3,
          name: "Scrophularawffsiaceae",
          start: "10/10/2017",
          end: "06/10/2019"
        },
        {
          id: 4,
          product_id: 4,
          name: "Cysghrtgvperaceae",
          start: "04/23/2018",
          end: "08/13/2019"
        },
        {
          id: 5,
          product_id: 5,
          name: "dfasf",
          start: "12/30/2017",
          end: "12/26/2018"
        },
        {
          id: 6,
          product_id: 6,
          name: "Fagacxzvdqqceae",
          start: "05/13/2018",
          end: "03/24/2019"
        },
        {
          id: 7,
          product_id: 7,
          name: "Caryoph,ouyf",
          start: "05/13/2018",
          end: "03/24/2019"
        },
        {
          id: 8,
          product_id: 8,
          name: "Artfdsbvwrthhoniaceae",
          start: "05/26/2018",
          end: "02/28/2019"
        },
        {
          id: 9,
          product_id: 9,
          name: "ewfrwaefear",
          start: "02/16/2018",
          end: "02/19/2019"
        }
      ]);
    });
};

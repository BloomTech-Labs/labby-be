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
          name: "Labs-16-Labby",
          start: "09/26/2017",
          end: "07/02/2019"
        },
        {
          id: 2,
          product_id: 2,
          name: "Labs-16-Brav",
          start: "10/16/2017",
          end: "10/08/2018"
        },
        {
          id: 3,
          product_id: 3,
          name: "Labs-16-Key-Conservation",
          start: "10/10/2017",
          end: "06/10/2019"
        },
        {
          id: 4,
          product_id: 4,
          name: "Labs-16-Stampd",
          start: "04/23/2018",
          end: "08/13/2019"
        },
        {
          id: 5,
          product_id: 5,
          name: "Labs-16-Sauti-Marketplace",
          start: "12/30/2017",
          end: "12/26/2018"
        },
        {
          id: 6,
          product_id: 6,
          name: "Labs-16-Mission-Control",
          start: "05/13/2018",
          end: "03/24/2019"
        },
        {
          id: 7,
          product_id: 7,
          name: "Labs-16-Appy",
          start: "05/13/2018",
          end: "03/24/2019"
        },
        {
          id: 8,
          product_id: 8,
          name: "Labs-16-Make-My-App",
          start: "05/26/2018",
          end: "02/28/2019"
        },
        {
          id: 9,
          product_id: 9,
          name: "Labs-16-Fun",
          start: "01/27/2018",
          end: "03/19/2019"
        },
        {
          id: 10,
          product_id: 10,
          name: "Labs-16-Handyapp",
          start: "02/16/2018",
          end: "02/19/2019"
        }
      ]);
    });
};

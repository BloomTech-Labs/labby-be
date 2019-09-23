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
          name: "Pickle Rick",
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
          name: "Mr. Poopy Butthole",
          start: "02/16/2018",
          end: "02/19/2019"
        },
        {
          id: 10,
          product_id: 10,
          name: "Poacebcdtdtrae",
          start: "06/13/2018",
          end: "05/13/2019"
        },
        {
          id: 11,
          product_id: 11,
          name: "Cucurbeae",
          start: "02/22/2018",
          end: "04/12/2019"
        },
        {
          id: 12,
          product_id: 12,
          name: "Asterabffkghikceae",
          start: "08/18/2018",
          end: "04/07/2019"
        },
        {
          id: 13,
          product_id: 13,
          name: "Cistwrsdfnaceae",
          start: "02/01/2018",
          end: "11/14/2018"
        },
        {
          id: 14,
          product_id: 14,
          name: "Fabacebgjtjrfae",
          start: "06/15/2018",
          end: "12/02/2018"
        },
        {
          id: 15,
          product_id: 15,
          name: "Morty",
          start: "09/18/2018",
          end: "10/24/2018"
        },
        {
          id: 16,
          product_id: 16,
          name: "Lamsfdsfbiaceae",
          start: "03/28/2018",
          end: "09/23/2018"
        },
        {
          id: 17,
          product_id: 17,
          name: "Lobarxcvfbrnriaceae",
          start: "06/04/2018",
          end: "11/06/2018"
        },
        {
          id: 18,
          product_id: 18,
          name: "Verrucrggnjklariaceae",
          start: "09/20/2017",
          end: "12/26/2018"
        },
        {
          id: 19,
          product_id: 19,
          name: "Sarracsfsgnbeniaceae",
          start: "09/19/2017",
          end: "08/26/2019"
        },
        {
          id: 20,
          product_id: 20,
          name: "Cypnmtykeraceae",
          start: "05/02/2018",
          end: "06/18/2019"
        },
        {
          id: 21,
          product_id: 21,
          name: "Gesnefdsdgariaceae",
          start: "07/09/2018",
          end: "12/30/2018"
        },
        {
          id: 22,
          product_id: 22,
          name: "Campanu fdsvlaceae",
          start: "11/25/2017",
          end: "12/26/2018"
        },
        {
          id: 23,
          product_id: 23,
          name: "Jerry",
          start: "12/16/2017",
          end: "07/20/2019"
        },
        {
          id: 24,
          product_id: 24,
          name: "Alismabfsbftaceae",
          start: "11/27/2017",
          end: "08/12/2019"
        },
        {
          id: 25,
          product_id: 25,
          name: "Violaacsacceae",
          start: "01/07/2018",
          end: "01/24/2019"
        },
        {
          id: 26,
          product_id: 26,
          name: "Lichinacekyukryjhae",
          start: "10/10/2017",
          end: "08/07/2019"
        },
        {
          id: 27,
          product_id: 27,
          name: "Limnnbvnanthaceae",
          start: "08/04/2018",
          end: "04/14/2019"
        },
        {
          id: 28,
          product_id: 28,
          name: "Lqwvdamiaceae",
          start: "12/04/2017",
          end: "08/14/2019"
        },
        {
          id: 29,
          product_id: 29,
          name: "P oaceae",
          start: "07/13/2018",
          end: "11/19/2018"
        },
        {
          id: 30,
          product_id: 30,
          name: "Polemoniace ae",
          start: "08/20/2018",
          end: "02/01/2019"
        },
        {
          id: 31,
          product_id: 31,
          name: "A steraceae",
          start: "04/27/2018",
          end: "05/15/2019"
        },
        {
          id: 32,
          product_id: 32,
          name: "Rubia ceae",
          start: "07/20/2018",
          end: "03/01/2019"
        },
        {
          id: 33,
          product_id: 33,
          name: "Ramalinssdfcaceae",
          start: "01/08/2018",
          end: "04/08/2019"
        },
        {
          id: 34,
          product_id: 34,
          name: "Faceae",
          start: "05/18/2018",
          end: "10/10/2018"
        },
        {
          id: 35,
          product_id: 35,
          name: "Chenodiaceae",
          start: "07/11/2018",
          end: "08/09/2019"
        },
        {
          id: 36,
          product_id: 36,
          name: "Tomato",
          start: "05/25/2018",
          end: "10/08/2018"
        },
        {
          id: 37,
          product_id: 37,
          name: "Opegrapheraceae",
          start: "12/06/2017",
          end: "01/31/2019"
        },
        {
          id: 38,
          product_id: 38,
          name: "Verbenacvcbeae",
          start: "09/03/2018",
          end: "09/29/2018"
        },
        {
          id: 39,
          product_id: 39,
          name: "Parmgfgdeliaceae",
          start: "04/28/2018",
          end: "11/12/2018"
        },
        {
          id: 40,
          product_id: 40,
          name: "Fagacgdeae",
          start: "01/16/2018",
          end: "10/17/2018"
        },
        {
          id: 41,
          product_id: 41,
          name: "Iridaceaffdse",
          start: "08/16/2018",
          end: "10/05/2018"
        },
        {
          id: 42,
          product_id: 42,
          name: "Bromffeliaceae",
          start: "03/09/2018",
          end: "03/01/2019"
        },
        {
          id: 43,
          product_id: 43,
          name: "Polygalaceddae",
          start: "12/26/2017",
          end: "09/05/2019"
        },
        {
          id: 44,
          product_id: 44,
          name: "Caryophyllaceaffe",
          start: "01/31/2018",
          end: "03/27/2019"
        },
        {
          id: 45,
          product_id: 45,
          name: "Euphorbiaceaea",
          start: "09/12/2018",
          end: "10/25/2018"
        },
        {
          id: 46,
          product_id: 46,
          name: "Rosaceaez",
          start: "01/15/2018",
          end: "04/12/2019"
        },
        {
          id: 47,
          product_id: 47,
          name: "Peppers",
          start: "10/23/2017",
          end: "07/26/2019"
        },
        {
          id: 48,
          product_id: 48,
          name: "Potiaceae",
          start: "10/02/2017",
          end: "01/08/2019"
        },
        {
          id: 49,
          product_id: 49,
          name: "Polygonacae",
          start: "02/04/2018",
          end: "06/02/2019"
        },
        {
          id: 50,
          product_id: 50,
          name: "Asparagus",
          start: "01/21/2018",
          end: "05/04/2019"
        }
      ]);
    });
};
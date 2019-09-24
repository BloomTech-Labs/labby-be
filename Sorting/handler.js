'use strict';
const knex = require("knex");
const pgSettings = {
  host: "labbydatabase.cu5flbcmyfuw.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "postgres"
}

exports.handler = async (event, context, callback) => {
  console.log('event received: ', event);

  // Connect
  const knex = require('knex')({
    client: 'pg',
    connection: pgSettings,
  });

  console.log('knex connection: ', knex);
// get projects
  const projects = await knex('projects')

    .then((projects) => {
      console.log('received projects: ', projects);

      
      knex.client.destroy();
      return callback(null, projects);
      // define projects to be used later 
    })
    .catch((err) => {
      console.log('error occurred: ', err);
      // Disconnect
      knex.client.destroy();
      return callback(err);
    });

    const people = await knex('people')
// get people 
    .then((people) => {
      console.log('received projects: ', people);


      knex.client.destroy();
      return callback(null, people);
      // define people to be used later 
    })
    .catch((err) => {
      console.log('error occurred: ', err);
      // Disconnect
      knex.client.destroy();
      return callback(err);
    });
// run pre-defined variables through sorting method print result as people
    projects.forEach(item => {
      let e = 0;
      
      for(let i = e; item.people.length < team; i++){
          item.people.push(people[i])
          e = i+1;
          console.log(people)
      }
  });

  //insert/put result of sorter into db  



};


// module.exports.hello = async (event) => {
//   return {



//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
    
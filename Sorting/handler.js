"use strict";
const pgSettings = {
  host: "labbydatabase.cu5flbcmyfuw.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "postgres"
};
const knex = require("knex")({
  client: "pg",
  connection: pgSettings
});

exports.getAllProjects = async (event, context, callback) => {
  console.log("event received: ", event);

  // Connect

  console.log("knex connection: ", knex);
  // get projects
  await knex("projects")
    .then(projects => {
      console.log("received projects: ", projects);

      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(projects)
      });
      // return callback(null, projects);
      // define projects to be used later
    })
    .catch(err => {
      console.log("error occurred: ", err);
      // Disconnect
      knex.client.destroy();
      return callback(err.message);
    });

  //     const people = await knex('people')
  // // get people
  //     .then((people) => {
  //       console.log('received projects: ', people);

  //       knex.client.destroy();
  //       return callback(null, people);
  //       // define people to be used later
  //     })
  //     .catch((err) => {
  //       console.log('error occurred: ', err);
  //       // Disconnect
  //       knex.client.destroy();
  //       return callback(err);
  //     });
  // // run pre-defined variables through sorting method print result as people
  //     projects.forEach(item => {
  //       let e = 0;

  //       for(let i = e; item.people.length < team; i++){
  //           item.people.push(people[i])
  //           e = i+1;
  //           console.log(people)
  //       }
  //   });

  //insert/put result of sorter into db
};

exports.postProject = async (event, context, callback) => {
  const body = JSON.parse(event.body); // this is equal to req.body
  const postBody = { ...req.body };
  knex("projects")
    .insert(postBody)
    .returning("*")
    .then(res => {
      return callback(res);
    })
    .catch(err => {
      return callback(err);
    });
};

exports.getAllPeople = async (event, context, callback) => {
  console.log("event received: ", event);

  // Connect

  console.log("knex connection: ", knex);
  // get projects
  await knex("people")
    .select("*")
    .then(people => {
      console.log("received people: ", people);

      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(people)
      });
      // return callback(null, projects);
      // define projects to be used later
    })
    .catch(err => {
      console.log("error occurred: ", err);
      // Disconnect
      knex.client.destroy();
      return callback(err.message);
    });
};

exports.getRoles = async (event, context, callback) => {
  console.log("event received: ", event);
  console.log("knex connection: ", knex);
  // get projects
  await knex("roles")
    .then(roles => {
      console.log("received roles: ", roles);

      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(roles)
      });
      // return callback(null, projects);
      // define projects to be used later
    })
    .catch(err => {
      console.log("error occurred: ", err);
      // Disconnect
      knex.client.destroy();
      return callback(err.message);
    });
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

// exports.projectRoles = async (event, context, callback) => {
// const people = await knex("people").select("people.id");

// const peopleMap = people.map(person => {
//  return { person_id: person.id };
// });

// await knex("project_roles")
//    .insert(peopleMap)
//    .then(res => {
//      console.log("you beat the SMURFS: ", res.rowCount);
//     knex.client.destroy();
//     return callback(null, {
//       statusCode: 200,
//        body: JSON.stringify(res.rowCount)
//    })
//   }).catch(err => {
//      console.log("you got SMURFED!: ", err);
//       knex.client.destroy();
//      return callback(err.message);
//    });
// };

exports.projectRoles = async (event, context, callback) => {
  const projects = await knex("projects").select("projects.id");

  const projectsMap = projects.map(project => {
    return { project_id: project.id };
  });

  let projectRoles = await knex("project_roles");
  let filledProjects = 0;

  await knex("project_roles")
    .then(res => {
      projects.forEach(project => {
        let d = Math.round(projectRoles.length / projectsMap.length);

        for (let i = 0; i < d; i++) {
          let current = projectRoles[i + filledProjects * d];
          if (projectRoles[i + filledProjects * d] != null) {
            if (i == d - 1) {
              filledProjects++;
            }
            knex("project_roles")
              .where({ id: current.id })
              .update({ project_id: project.id });
            console.log("trying to put this", project.id);
          }
        }
      });
      console.log("you beat the SMURFS: ", res);
      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    })
    .catch(err => {
      console.log("you got SMURFED!: ", err);
      knex.client.destroy();
      return callback("danger will robinson", err.message);
    });
};

// const projectRoles = async (event, context, callback) => {
//   const people = await knex("people").select("people.id");

//   const peopleMap = people.map(person => {
//     return { person_id: person.id };
//   });

//   await knex("project_roles")
//     .insert(peopleMap)
//     .then(res => {
//       console.log("you beat the SMURFS: ", res.rowCount);
//       knex.client.destroy();
//       return callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(res.rowCount)
//       });
//     })
//     .catch(err => {
//       console.log("you got SMURFED!: ", err);
//       knex.client.destroy();
//       return callback(err.message);
//     });
// };

// projectRoles();

const projectRoles = async (event, context, callback) => {
  function batchUpdate(table, collection) {
    return knex.transaction(trx => {
      const queries = collection.map(tuple =>
        knex(table)
          .where("id", tuple.id)
          .update(tuple)
          .transacting(trx)
      );
      return Promise.all(queries)
        .then(trx.commit)
        .catch(trx.rollback);
    });
  }

  const projects = await knex("projects").select("projects.id");

  const projectsMap = projects.map(project => {
    return { project_id: project.id };
  });

  let projectRoles = await knex("project_roles");
  let filledProjects = 0;
  const placeholder = [];
  await knex("project_roles")
    .then(async res => {
      projects.forEach(project => {
        let d = Math.round(projectRoles.length / projectsMap.length);

        for (let i = 0; i < d; i++) {
          let current = projectRoles[i + filledProjects * d];
          if (projectRoles[i + filledProjects * d] != null) {
            if (i == d - 1) {
              filledProjects++;
            }

            placeholder.push({ id: current.id, project_id: project.id });
          }
        }
      });

      const updatedProjects = placeholder.map(async p => {
        await knex("project_roles")
          .where({ id: p.id })
          .update({ project_id: p.project_id });
      });

      // console.log("trying to put this", project.id);

      console.log("WAITING TO UPDATE ALL");

      Promise.all(updatedProjects).then(async projects => {
        const updatedProjects = await knex("project_roles");
        console.log("you beat the SMURFS: ", updatedProjects);
        knex.client.destroy();
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(updatedProjects)
        });
      });
    })

    .catch(err => {
      console.log("you got SMURFED!: ", err.message);
      knex.client.destroy();
      return callback("danger will robinson", err.message);
    });
};

projectRoles();

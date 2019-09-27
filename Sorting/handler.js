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
  await knex("projects")
    .then(projects => {
      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(projects)
      });
    })
    .catch(err => {
      knex.client.destroy();
      return callback(err.message);
    });
};

exports.postProject = async (event, context, callback) => {
  const body = JSON.parse(event.body);
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
  await knex("people")
    .select("*")
    .then(people => {
      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(people)
      });
    })
    .catch(err => {
      knex.client.destroy();
      return callback(err.message);
    });
};

exports.getRoles = async (event, context, callback) => {
  await knex("roles")
    .then(roles => {
      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(roles)
      });
    })
    .catch(err => {
      knex.client.destroy();
      return callback(err.message);
    });
};

exports.populatePeople = async (event, context, callback) => {
  const people = await knex("people").select("people.id");

  const peopleMap = people.map(person => {
    return { person_id: person.id };
  });

  await knex("project_roles")
    .insert(peopleMap)
    .then(res => {
      console.log("you beat the SMURFS: ", res.rowCount);
      knex.client.destroy();
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.rowCount)
      });
    })
    .catch(err => {
      console.log("you got SMURFED!: ", err);
      knex.client.destroy();
      return callback(err.message);
    });
};

exports.projectRoles = async (event, context, callback) => {
  console.log("Starting Project Roles Function...");

  const projects = await knex("projects").select("projects.id");

  const projectsMap = projects.map(project => {
    return { project_id: project.id };
  });

  let projectRoles = await knex("project_roles");

  let filledProjects = 0;

  const placeholder = [];

  // Grabbing all project roles from the database
  await knex("project_roles").then(async res => {
    // looping through projects
    projects.forEach(project => {
      let d = Math.round(projectRoles.length / projectsMap.length);
      console.log("during forEach", d);
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

    let updatedProjects = placeholder.map(async p => {
      console.log("updatedProjects", placeholder);
      return await knex("project_roles")
        .where({ id: p.id })
        .update({ project_id: p.project_id });
    });
  });
  try {
    const allProjects = await knex("project_roles");
    knex.client.destroy();
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(allProjects)
    });
  } catch (err) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(err.message)
    });
  }
};

//       Promise.all(updatedProjects).then(async projects => {
//         const updatedProjects = await knex("project_roles");
//         knex.client.destroy();
//         return callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(updatedProjects)
//         });
//       });
//     })
//     .catch(err => {
//       console.log("you got SMURFED!: ", err.message);
//       knex.client.destroy();
//       return callback("danger will robinson", {
//         statusCode: 500,
//         body: JSON.stringify(err.message)
//       });
//     });
// };

// exports.projectRoles = async (event, context, callback) => {
//   const projects = await knex("projects").select("projects.id as project_id");
//   console.log("Projects:", projects);

//   // const projectsMap = projects.map(project => {
//   //   return { project_id: project.id };
//   // });

//   let projectRoles = await knex("project_roles");

//   let filledProjects = 0;

//   const placeholder = [];

//   await knex("project_roles")
//     .then(async res => {
//       projects.forEach(project => {
//         let d = Math.round(projectRoles.length / projects.length);

//         for (let i = 0; i < d; i++) {
//           let current = projectRoles[i + filledProjects * d];
//           if (projectRoles[i + filledProjects * d] != null) {
//             if (i == d - 1) {
//               filledProjects++;
//             }
//             placeholder.push({
//               id: current.id,
//               project_id: project.project_id
//             });
//           }
//         }
//       });

//       const updatedProjects = await placeholder.map(async p => {
//         await knex("project_roles")
//           .where({ id: p.project_id })
//           .update({ project_id: p.project_id });
//       });

//       Promise.all(updatedProjects).then(async projects => {
//         const updatedProjects = await knex("project_roles");
//         knex.client.destroy();
//         console.log("FUNCTION SUCCESSFULLY COMPLETED", updatedProjects);
//         return callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(updatedProjects)
//         });
//       });
//     })
//     .catch(err => {
//       console.log("you got SMURFED!: ", err.message);
//       knex.client.destroy();
//       return callback(err.message, null);
//     });
// };

// const projectRoles = async (event, context, callback) => {
//   const projects = await knex("projects").select("projects.id");
//   console.log("Projects:", projects);

//   const projectsMap = projects.map(project => {
//     return { project_id: project.id };
//   });

//   let projectRoles = await knex("project_roles");

//   let filledProjects = 0;

//   const placeholder = [];

//   await knex("project_roles")
//     .then(async res => {
//       projects.forEach(project => {
//         let d = Math.round(projectRoles.length / projectsMap.length);

//         for (let i = 0; i < d; i++) {
//           let current = projectRoles[i + filledProjects * d];
//           if (projectRoles[i + filledProjects * d] != null) {
//             if (i == d - 1) {
//               filledProjects++;
//             }
//             placeholder.push({ id: current.id, project_id: project.id });
//           }
//         }
//       });

//       const updatedProjects = placeholder.map(async p => {
//         await knex("project_roles")
//           .where({ id: p.id })
//           .update({ project_id: p.project_id });
//       });

//       Promise.all(updatedProjects).then(async projects => {
//         const updatedProjects = await knex("project_roles");
//         knex.client.destroy();
//         console.log("FUNCTION SUCCESSFULLY COMPLETED", updatedProjects);
//         return callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(updatedProjects)
//         });
//       });
//     })
//     .catch(err => {
//       console.log("you got SMURFED!: ", err.message);
//       knex.client.destroy();
//       return callback("danger will robinson", err.message);
//     });
// };

// projectRoles();

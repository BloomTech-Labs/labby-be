// all handlers/functions. functions have to be declared inside the .yml before decalring them here 
"use strict";
// pgsettings connections settings 
const pgSettings = {
  host: "labbydatabase.cu5flbcmyfuw.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "postgres"
};
// connects to aws database
const knex = require("knex")({
  client: "pg",
  connection: pgSettings
});
// get method  // gets all projects
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
// post a project
exports.postProject = async (event, context, callback) => {
  // decalaring varaibles 

  const body = JSON.parse(event.body);
  const postBody = { ...req.body };
  // knex
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
// get all people method
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
// get all roles
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
// gets all people
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
// place project ids inside project roles
exports.projectRoles = async (event, context, callback) => {
  console.log("Starting Project Roles Function...");

  const projects = await knex("projects").select("projects.id");

  const projectsMap = projects.map(project => {
    return { project_id: project.id };
  });
  // /\grabbing project-roles
  let projectRoles = await knex("project_roles");
  // we need filled projects for the loop
  let filledProjects = 0;
  // a empty array so we can push all our role.ids
  const placeholder = [];


  await knex("project_roles").then(async res => {
    // looping through projects
    projects.forEach(project => {
      let d = Math.round(projectRoles.length / projectsMap.length);
      console.log("during forEach", d);

      for (let i = 0; i < d; i++) {
        let current = projectRoles[i + filledProjects * d];
        // chwcking if the current item is null and if it is we move to the next if statment 
        if (projectRoles[i + filledProjects * d] != null) {
          // checking if the current item is equal to d which is th amount of groups
          if (i == d - 1) {

            filledProjects++;
          }
          placeholder.push({ id: current.id, project_id: project.id });
        }
      }
    });
//  putting/updating the placeholder array into the project_roles
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
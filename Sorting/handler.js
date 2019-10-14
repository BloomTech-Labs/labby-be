// all handlers/functions. functions have to be declared inside the .yml before declaring them here
"use strict";
// pgsettings connections settings
const pgSettings = require("./config/db.js");
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
//TODO: ADD IN ERROR CASES
exports.postProject = async (event, context, callback) => {
  // knex
  knex("projects")
    .insert(req.body)
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
  //grabbing project_roles
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
        // checking if the current item is null and if it is we move to the next if statement
        if (projectRoles[i + filledProjects * d] != null) {
          // checking if the current item is equal to d which is the amount of groups
          if (i == d - 1) {
            filledProjects++;
          }
          placeholder.push({ id: current.id, project_id: project.id });
        }
      }
    });
    //  putting/updating the placeholder array into the project_roles
    placeholder.map(async p => {
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

exports.inputStudents = async (event, context, callback) => {
  console.log("Starting Greedy Function...");

  const people = await knex("people").select(
    "people.id",
    "people.program",
    "people.time_zone"
  );

  //console.log("peeps", people);

  const webStudents = [];

  const dataStudents = [];

  const uxStudents = [];

  const otherStudents = [];

  people.map(person => {
    if (person.program === "WEB") {
      webStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else if (person.program === "DS") {
      dataStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else if (person.program === "UX") {
      uxStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else {
      otherStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    }
  });

  //console.log("webbies", webStudents);

  webStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
  uxStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
  dataStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));

  console.log("webbbbbbiieess", webStudents);
  // console.log("uxxx", uxStudents);
  // console.log("dataaa", dataStudents);

  let projectroles = await knex("project_roles");

  let totalWeb = 0;
  let totalDS = 0;
  let totalUX = 0;
  let totalOther = 0;

  projectroles.map(projects => {
    if (projects.role_id == 5) {
      projects.person_id = webStudents[totalWeb].person_id;
      projects.person_timezone = webStudents[totalWeb].person_timezone;
      totalWeb++;
    } else if (projects.role_id == 4) {
      projects.person_id = dataStudents[totalDS].person_id;
      projects.person_timezone = dataStudents[totalDS].person_timezone;
      totalDS++;
    } else if (projects.role_id == 8) {
      projects.person_id = uxStudents[totalUX].person_id;
      projects.person_timezone = uxStudents[totalUX].person_timezone;
      totalUX++;
    } else {
      projects.person_id = otherStudents[totalOther].person_id;
      projects.person_timezone = otherStudents[totalOther].person_timezone;
      totalOther++;
    }
  });

  //projectroles.sort((a, b) => (a.person_timezone > b.person_timezone ? 1 : -1));

  //console.log("testy1", projectroles);

  // console.log(
  // "Project Roles assigned",
  // projectroles
  // projectroles.sort((a, b) =>
  //   a.person_timezone < b.person_timezone ? 1 : -1
  // )
  //);
  // console.log("Total Web Students", totalWeb);
  // console.log("total ds", totalDS);
  // console.log("total ux", totalUX);
  // console.log("total other", totalOther);

  // const promises = projectroles.map(async (p, i) => {
  //   await knex("project_roles")
  //     .where("id", p.id)
  //     .update({
  //       person_id: p.person_id,
  //       time_zone: p.person_timezone
  //     });
  //   //console.log("something", projectroles[i].timezone);
  // });

  projectroles.map(async (p, i) => {
    await knex("project_roles")
      .where("id", p.id)
      .update({
        person_id: p.person_id,
        time_zone: p.person_timezone
      });
    //console.log("something", projectroles[i].timezone);
  });

  // Promise.all(promises).then(async () => {
  console.log("DONE WITH ALL INSERTIONS");
  try {
    const allProjects = await knex("project_roles");
    knex.client.destroy();
    console.log(allProjects);
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(allProjects)
    });
  } catch (err) {
    console.log(err.message);
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(err.message)
    });
  }
  // });
};

// exports.inputStudents = async (event, context, callback) => {
//   console.log("Starting inputStudents Function...");

//   const people = await knex("people").select(
//     "people.id",
//     "people.program",
//     "people.time_zone"
//   );

//   //console.log("peeps", people);

//   const webStudents = [];

//   const dataStudents = [];

//   const uxStudents = [];

//   const otherStudents = [];

//   people.map(person => {
//     if (person.program === "WEB") {
//       webStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else if (person.program === "DS") {
//       dataStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else if (person.program === "UX") {
//       uxStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else {
//       otherStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     }
//   });

//   //console.log("webbies", webStudents);

//   webStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
//   uxStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
//   dataStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));

//   // console.log("webbbbbbiieess", webStudents);
//   // console.log("uxxx", uxStudents);
//   // console.log("dataaa", dataStudents);

//   let projectroles = await knex("project_roles");

//   let totalWeb = 0;
//   let totalDS = 0;
//   let totalUX = 0;
//   let totalOther = 0;

//   projectroles.map(projects => {
//     if (projects.role_id == 5) {
//       projects.person_id = webStudents[totalWeb].person_id;

//       totalWeb++;
//     } else if (projects.role_id == 4) {
//       projects.person_id = dataStudents[totalDS].person_id;
//       totalDS++;
//     } else if (projects.role_id == 8) {
//       projects.person_id = uxStudents[totalUX].person_id;
//       totalUX++;
//     } else {
//       projects.person_id = otherStudents[totalOther].person_id;
//       totalOther++;
//     }
//   });

//   // console.log("Project Roles assigned", projectroles);
//   console.log("Total Web Students", totalWeb);
//   console.log("total ds", totalDS);
//   console.log("total ux", totalUX);
//   // console.log("total other", totalOther);

//   // const promises = projectroles.map(async (p, i) => {
//   //   console.log("inside promies");
//   //   await knex("project_roles")
//   //     .where("id", projectroles[i].id)
//   //     .update({ person_id: projectroles[i].person_id });
//   //   console.log("something", projectroles[i].person_id);
//   // });

//   projectroles.map(async (p, i) => {
//     //console.log("inside promies");
//     await knex("project_roles")
//       .where("id", projectroles[i].id)
//       .update({ person_id: projectroles[i].person_id });
//     //console.log("something", projectroles[i].person_id);
//   });

//   // Promise.all(promises).then(async () => {
//   console.log("DONE WITH ALL INSERTIONS");
//   try {
//     const allProjects = await knex("project_roles");
//     knex.client.destroy();
//     console.log(allProjects);
//     return callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(allProjects)
//     });
//   } catch (err) {
//     console.log(err.message);
//     return callback(null, {
//       statusCode: 500,
//       body: JSON.stringify(err.message)
//     });
//   }
//   // });
// };

// const projectRoles = async (event, context, callback) => {
//   console.log("Starting Project Roles Function...");

//   const projects = await knex("projects").select("projects.id");

//   const projectsMap = projects.map(project => {
//     return { project_id: project.id };
//   });
//   // /\grabbing project-roles
//   let projectRoles = await knex("project_roles");
//   // we need filled projects for the loop
//   let filledProjects = 0;
//   // a empty array so we can push all our role.ids
//   const placeholder = [];

//   await knex("project_roles").then(async res => {
//     // looping through projects
//     projects.forEach(project => {
//       let d = Math.round(projectRoles.length / projectsMap.length);
//       console.log("during forEach", d);

//       for (let i = 0; i < d; i++) {
//         let current = projectRoles[i + filledProjects * d];
//         // checking if the current item is null and if it is we move to the next if statment
//         if (projectRoles[i + filledProjects * d] != null) {
//           // checking if the current item is equal to d which is th amount of groups
//           if (i == d - 1) {

//             filledProjects++;
//           }
//           placeholder.push({ id: current.id, project_id: project.id });
//         }
//       }
//     });
// //  putting/updating the placeholder array into the project_roles
//     let updatedProjects = placeholder.map(async p => {
//       console.log("updatedProjects", placeholder);
//       return await knex("project_roles")
//         .where({ id: p.id })
//         .update({ project_id: p.project_id });
//     });
//   });

//   try {
//     const allProjects = await knex("project_roles");
//     knex.client.destroy();
//     return callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(allProjects)
//     });
//   } catch (err) {
//     return callback(null, {
//       statusCode: 500,
//       body: JSON.stringify(err.message)
//     });
//   }
// };

// projectRoles()

// const getAllProjects = async (event, context, callback) => {
//   console.log("inside get all projects");
//   await knex("projects")
//     .then(projects => {
//       knex.client.destroy();
//       console.log("callback", callback);
//       return callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(projects)
//       });
//     })
//     .catch(err => {
//       knex.client.destroy();
//       return callback(err.message);
//     });
// };

// getAllProjects();

const greedy = async (event, context, callback) => {
  console.log("Starting Greedy Function...");

  const people = await knex("people").select(
    "people.id",
    "people.program",
    "people.time_zone"
  );

  //console.log("peeps", people);

  const webStudents = [];

  const dataStudents = [];

  const uxStudents = [];

  const otherStudents = [];

  people.map(person => {
    if (person.program === "WEB") {
      webStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else if (person.program === "DS") {
      dataStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else if (person.program === "UX") {
      uxStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    } else {
      otherStudents.push({
        person_timezone: parseInt(person.time_zone, 10),
        person_id: person.id
      });
    }
  });

  //console.log("webbies", webStudents);

  webStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
  uxStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
  dataStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));

  console.log("webbbbbbiieess", webStudents);
  // console.log("uxxx", uxStudents);
  // console.log("dataaa", dataStudents);

  let projectroles = await knex("project_roles");

  let totalWeb = 0;
  let totalDS = 0;
  let totalUX = 0;
  let totalOther = 0;

  projectroles.map(projects => {
    if (projects.role_id == 5) {
      projects.person_id = webStudents[totalWeb].person_id;
      projects.person_timezone = webStudents[totalWeb].person_timezone;
      totalWeb++;
    } else if (projects.role_id == 4) {
      projects.person_id = dataStudents[totalDS].person_id;
      projects.person_timezone = dataStudents[totalDS].person_timezone;
      totalDS++;
    } else if (projects.role_id == 8) {
      projects.person_id = uxStudents[totalUX].person_id;
      projects.person_timezone = uxStudents[totalUX].person_timezone;
      totalUX++;
    } else {
      projects.person_id = otherStudents[totalOther].person_id;
      projects.person_timezone = otherStudents[totalOther].person_timezone;
      totalOther++;
    }
  });

  //projectroles.sort((a, b) => (a.person_timezone > b.person_timezone ? 1 : -1));

  //console.log("testy1", projectroles);

  // console.log(
  // "Project Roles assigned",
  // projectroles
  // projectroles.sort((a, b) =>
  //   a.person_timezone < b.person_timezone ? 1 : -1
  // )
  //);
  // console.log("Total Web Students", totalWeb);
  // console.log("total ds", totalDS);
  // console.log("total ux", totalUX);
  // console.log("total other", totalOther);

  const promises = projectroles.map(async (p, i) => {
    await knex("project_roles")
      .where("id", p.id)
      .update({
        person_id: p.person_id,
        time_zone: p.person_timezone
      });
    //console.log("something", projectroles[i].timezone);
  });

  Promise.all(promises).then(async () => {
    console.log("DONE WITH ALL INSERTIONS");
    try {
      const allProjects = await knex("project_roles");
      knex.client.destroy();
      console.log(allProjects);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(allProjects)
      });
    } catch (err) {
      console.log(err.message);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(err.message)
      });
    }
  });
};

greedy();

// const inputStudents = async (event, context, callback) => {
//   console.log("Starting inputStudents Function...");

//   const people = await knex("people").select(
//     "people.id",
//     "people.program",
//     "people.time_zone"
//   );

//   //console.log("peeps", people);

//   const webStudents = [];

//   const dataStudents = [];

//   const uxStudents = [];

//   const otherStudents = [];

//   people.map(person => {
//     if (person.program === "WEB") {
//       webStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else if (person.program === "DS") {
//       dataStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else if (person.program === "UX") {
//       uxStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     } else {
//       otherStudents.push({
//         person_timezone: parseInt(person.time_zone, 10),
//         person_id: person.id
//       });
//     }
//   });

//   //console.log("webbies", webStudents);

//   webStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
//   uxStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));
//   dataStudents.sort((a, b) => (a.person_timezone < b.person_timezone ? 1 : -1));

//   console.log("webbbbbbiieess", webStudents);
//   console.log("uxxx", uxStudents);
//   console.log("dataaa", dataStudents);

//   let projectroles = await knex("project_roles");

//   let totalWeb = 0;
//   let totalDS = 0;
//   let totalUX = 0;
//   let totalOther = 0;

//   projectroles.map(projects => {
//     if (projects.role_id == 5) {
//       projects.person_id = webStudents[totalWeb].person_id;
//       totalWeb++;
//     } else if (projects.role_id == 4) {
//       projects.person_id = dataStudents[totalDS].person_id;
//       totalDS++;
//     } else if (projects.role_id == 8) {
//       projects.person_id = uxStudents[totalUX].person_id;
//       totalUX++;
//     } else {
//       projects.person_id = otherStudents[totalOther].person_id;
//       totalOther++;
//     }
//   });

//   // console.log("Project Roles assigned", projectroles);
//   console.log("Total Web Students", totalWeb);
//   console.log("total ds", totalDS);
//   console.log("total ux", totalUX);
//   // console.log("total other", totalOther);

//   // const promises = projectroles.map(async (p, i) => {
//   //   console.log("inside promies");
//   //   await knex("project_roles")
//   //     .where("id", projectroles[i].id)
//   //     .update({ person_id: projectroles[i].person_id });
//   //   console.log("something", projectroles[i].person_id);
//   // });

//   projectroles.map(async (p, i) => {
//     //console.log("inside promies");
//     await knex("project_roles")
//       .where("id", projectroles[i].id)
//       .update({ person_id: projectroles[i].person_id });
//     //console.log("something", projectroles[i].person_id);
//   });

//   // Promise.all(promises).then(async () => {
//   console.log("DONE WITH ALL INSERTIONS", projectroles);
//   try {
//     const allProjects = await knex("project_roles");
//     knex.client.destroy();
//     console.log(allProjects);
//     return callback(null, {
//       statusCode: 200,
//       body: JSON.stringify(allProjects)
//     });
//   } catch (err) {
//     console.log(err.message);
//     return callback(null, {
//       statusCode: 500,
//       body: JSON.stringify(err.message)
//     });
//   }
//   // });
// };

// inputStudents();

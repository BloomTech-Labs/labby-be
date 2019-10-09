await knex("project_roles").then(async res => {
// looping through projects
webStudents.forEach(student => {
let d = webStudents.length;
console.log("during forEach", d);

    for (let i = 0; i < d; i++) {

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
// putting/updating the placeholder array into the project_roles
placeholder.map(async p => {
console.log("updatedProjects", placeholder);
return await knex("project_roles")
.where({ id: p.id })
.update({ project_id: p.project_id });
});
});

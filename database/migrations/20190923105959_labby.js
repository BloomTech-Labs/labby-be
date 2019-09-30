exports.up = function(knex) {
  return knex.schema
    .createTable("people_groups", people_groups => {
      people_groups.increments();
      people_groups
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("people", people => {
      people.increments();
      people
        .string("email", 255)
        .notNullable()
        .unique();
      people
        .string("slack_id", 255)
        .notNullable()
        .unique();
      people
        .string("github_id", 255)
        .notNullable()
        .unique();
      people.string("first_name", 255).notNullable();

      people.string("last_name", 255).notNullable();

      people.string("time_zone", 255).notNullable();

      people.string("program", 255);
    })
    .createTable("people_group_members", people_group_members => {
      people_group_members
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      people_group_members
        .integer("people_group_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people_groups")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("products", products => {
      products.increments();
      products
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("project_groups", project_groups => {
      project_groups.increments();
      project_groups
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("projects", projects => {
      projects.increments();
      projects
        .string("name", 255)
        .notNullable()
        .unique();
      projects.date("start", 255).notNullable();
      projects.date("end", 255).notNullable();
      projects
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_group_members", project_group_members => {
      project_group_members
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      project_group_members
        .integer("project_group_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project_groups")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("roles", roles => {
      roles.increments();
      roles.string("name", 255).notNullable();
      roles.string("type", 255).notNullable();
    })
    .createTable("lambda_roles", lambda_roles => {
      lambda_roles.increments();
      lambda_roles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      lambda_roles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_roles", project_roles => {
      project_roles.increments();
      project_roles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      project_roles
        .integer("role_id")
        .unsigned()
        //.notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      project_roles
        .integer("project_id")
        .unsigned()
        //.notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("product_roles", product_roles => {
      product_roles.increments();
      product_roles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      product_roles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      product_roles
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("product_roles")
    .dropTableIfExists("project_roles")
    .dropTableIfExists("lambda_roles")
    .dropTableIfExists("roles")
    .dropTableIfExists("project_group_members")
    .dropTableIfExists("projects")
    .dropTableIfExists("project_groups")
    .dropTableIfExists("products")
    .dropTableIfExists("people_group_members")
    .dropTableIfExists("people")
    .dropTableIfExists("people_groups");
};

exports.up = function(knex) {
  return knex.schema
    .createTable("people", people => {
      people.increments();
      people
        .string("email", 255)
        .notNullable()
        .unique();
      people
        .string("slackID", 255)
        .notNullable()
        .unique();
      people
        .string("githubID", 255)
        .notNullable()
        .unique();
      people.string("firstName", 255).notNullable();

      people.string("lastName", 255).notNullable();

      people.string("timeZone", 255).notNullable();

      people.string("program", 255);
    })
    .createTable("products", products => {
      products.increments();
      products
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
    .createTable("roles", roles => {
      roles.increments();
      roles
        .string("name", 255)
        .notNullable()
        .unique();
      roles
        .string("type", 255)
        .notNullable()
        .unique();
    })
    .createTable("groups", groups => {
      groups.increments();
      groups
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("productRoles", productRoles => {
      productRoles.increments();
      productRoles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      productRoles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      productRoles
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("projectRoles", projectRoles => {
      projectRoles.increments();
      projectRoles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      projectRoles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      projectRoles
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("lambdaRoles", lambdaRoles => {
      lambdaRoles.increments();
      lambdaRoles
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      lambdaRoles
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("lambdaRoles")
    .dropTableIfExists("projectRoles")
    .dropTableIfExists("productRoles")
    .dropTableIfExists("groups")
    .dropTableIfExists("roles")
    .dropTableIfExists("projects")
    .dropTableIfExists("products")
    .dropTableIfExists("people");
};

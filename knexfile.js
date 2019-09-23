// Update with your config settings.

const localPg = {
  host: "localhost",
  database: "users",
  user: "labby",
  password: "labby"
};

const productionDbConnection =
  //process.env.HEROKU_POSTGRESQL_AMBER_URL || localPg;
  process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: "./database/labby.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  production: {
    client: "pg",
    connection: productionDbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};


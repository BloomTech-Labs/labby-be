// Update with your config settings.
const pgSettings = {
  host: "labbydatabase.cu5flbcmyfuw.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "postgres"}; 

const productionDbConnection =
  //process.env.HEROKU_POSTGRESQL_AMBER_URL || localPg;
  process.env.DATABASE_URL || pgSettings;

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
    connection: pgSettings,
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


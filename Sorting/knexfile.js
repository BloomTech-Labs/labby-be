const pgSettings = require('./config/db.js')
;
const productionDbConnection =

  process.env.DATABASE_URL || pgSettings; 
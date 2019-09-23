'use strict';
const db = require('./config/knex_config');

module.exports.hello = async event => {
  //code that will access database
  //configure db object in js with my credentials
  try{
    await db.migrate.latest()
    await db.seed.run()
  }catch(err){
    console.log("error",err)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'db was migrated and seeded properly',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

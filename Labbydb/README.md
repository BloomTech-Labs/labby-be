#### About

The purpose of this Lambda function is to dynamically Migrate and Seed tables into the database Hosted in AWS. 

#### Folder Structure 

- Labbydb is a lambda function, and it's entirety is inside the Labbydb folder.
- It's path and connection to aws is defined within the serverless.yaml file.
- The config folder contains both a knex_config which configures what environment to run the migrations and seeds in, as well as a db.js file that makes reference to the specific database these tables and seeds will be inserted to. You will need to change the db.js to reference the Database you're using. 
- The database folder holds both the instructions for the migrations and the seeds just as it would in an express application
- The logic is placed in the handler.js file which tells the migrations and seeds to be ran, upon hitting the endpoint defined in the serverless.yaml file

#### Deployment

Labby DB is deployed in the AWS console. In order to deploy it to a different AWS console you'll need to follow the directions in the Environment section of the [README](https://github.com/Lambda-School-Labs/labby-be/blob/master/README.md)
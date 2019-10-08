'use strict';

import * as kiwi from 'kiwi.js';
import { Variable } from 'kiwi.js';

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


exports.kiwi = async (event, context, callback) => {
  let projectroles = await knex("project_roles")
  let projects = await knex("projects")
  
  let solver = new kiwi.Solver();
  let personid = new kiwi.Variable()
  
  projects.forEach(item => {
    let currentproject = item.id 
    let placeholder = []
    
    projectroles.map(e => {
      if(e.project_id == currentproject){
        placeholder.push(e)
      }

    })
    let ux = []
    let ds = []
    let web = []
    // let ios = []
    // let android = []
    placeholder.map(e => {
      if(e.role_id == 8){
        ux.push(e)
      }else if(e.role_id == 4){
        ds.push(e)
      }else if (e.role_id == 5){
        web.push(e)
      }
    })
    
  })

  return {

  };

};

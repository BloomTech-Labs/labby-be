'use strict';

const uuidV1 = require('uuid/v1');
const AWS = require('aws-sdk');
const {promisify} = require('util');
const _ = require('lodash');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.savePreferenceToDatabase = function(userId, projectList, BackendTrack) {
  console.log('savePreferenceToDatabase');

  const item = {
    selectionId : uuidV1(),
    projects : projectList,
    languages : BackendTrack,
    userId : userId
  };
  

  console.log(item);

  return saveItemToTable('labs-project-preference-table', item);
};
console.log('saved to p-p-table')
// console.log(item);

module.exports.saveUserToDatabase = function(userId, projectList, BackendTrack) {
  console.log('saveUserToDatabase');
  console.log('jumping up and down CAN YOU FUCKING SEE ME!');

  const item = {
    projects : projectList,
    languages : BackendTrack,
    userId : userId
  };
  //item.projects = projectList;
  //item.languages = BackendTrack;
  //item.userId = userId;

  return saveItemToTable('labs-project-user-table', item);
};
// console.log(item);

function saveItemToTable(tableName, item) {
  console.log(tableName);
  const params = {
    TableName: tableName,
    Item: item,
    ReturnValues: "UPDATED_NEW"
  };


  let updateAsync = promisify(dynamo.update, dynamo);


  return updateAsync(params)
    .then(() => {
      console.log(`Saving item ${JSON.stringify(item)}`);
      return item;
    })
    .catch(error => {
      console.log(error);
    });
}

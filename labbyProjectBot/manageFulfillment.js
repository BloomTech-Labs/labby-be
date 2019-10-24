'use strict';

const lexResponses = require('../lexResponses');
const databaseManager = require('../databaseManager');

function buildFulfillmentResult(fulfillmentState, messageContent) {
  return {
    fulfillmentState,
    message: { contentType: 'PlainText', content: messageContent }
  };
}

function fulfillPreference(userId, projectList, BackendTrack) {
  return databaseManager.savePreferenceToDatabase(userId, projectList, BackendTrack).then(item => {
    return buildFulfillmentResult('Fulfilled', `Thank you for providing these replies. I have recorded your project preferences and you will be assigned to a team shortly.  If you experience any trouble with getting your team assignment, please contact the FrontDesk.`);
  });
}

module.exports = function(intentRequest) {
  var projectList = intentRequest.currentIntent.slots.projects;
  var BackendTrack = intentRequest.currentIntent.slots.languages;
  var userId = intentRequest.userId;

  return fulfillPreference(userId, projectList, BackendTrack).then(fulfilledPreference => {
    return lexResponses.close(intentRequest.sessionAttributes, fulfilledPreference.fulfillmentState, fulfilledPreference.message);
  });
};
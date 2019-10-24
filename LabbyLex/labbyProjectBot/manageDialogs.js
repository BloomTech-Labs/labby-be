'use strict';

const lexResponses = require('../lexResponses');
const _ = require('lodash');

const projects = ['Labs-16-Labby', 'Labs-16-Brav', 'Labs-16-Key-Conservation', 'Labs-16-Stampd', 'Labs-16-Sauti-Marketplace', 'Labs-16-Mission-Control', 'Labs-16-Appy', 'Labs-16-Make-My-App', 'Labs-16-Fun', 'Labs-16-Handyapp'];
const languages = ['Java', 'Node', 'python', 'not applicable'];

function buildValidationResult(isValid, violatedSlot, messageContent, options) {
  if (messageContent == null) {
    return {
      isValid,
      violatedSlot,
      options
    };
  }
  return {
    isValid,
    violatedSlot,
    message: { contentType: 'PlainText', content: messageContent },
    options
  };
}

function getButtons(options) {
  const buttons = [];
  _.forEach(options, option => {
    buttons.push({
      text: option,
      value: option
    });
  });
  return buttons;
}

function getOptions(title, projects) {
  return {
    title,
    imageUrl: 'https://gds-storage-prd.s3.amazonaws.com/unified-gallery/170917/1314/44437cc6/thumbnails/robot-2017-jun-01-05-43-28pm-000-customizedview8762589869-3500-3500.jpg',
    buttons: getButtons(projects)
  };

  function getOptions(title, languages) {
    return {
      title,
      imageUrl: 'https://gds-storage-prd.s3.amazonaws.com/unified-gallery/170917/1314/44437cc6/thumbnails/robot-2017-jun-01-05-43-28pm-000-customizedview8762589869-3500-3500.jpg',
      buttons: getButtons(languages)
    };
  }
}

function validateProjectPreference(projectList, BackendTrack) {
  if (projectList && projects.indexOf(projectList.toLowerCase()) === -1) {
    var options = getOptions('Select a project', projects);
    return buildValidationResult(false, 'projects', `We do not have ${projectList} available as a project for this Labs cohort. Would you like one of these choices?`, options);
  }

  if (BackendTrack && languages.indexOf(BackendTrack.toLowerCase()) === -1) {
    var options = getOptions('Select a language', languages);
    return buildValidationResult(false, 'language', `We do not have ${BackendTrack} as an option. Would you like to choose from these?`, options);
  }

  if (projectList) {function getOptions(title, projects) {
    return {
      title,
      imageUrl: 'https://gds-storage-prd.s3.amazonaws.com/unified-gallery/170917/1314/44437cc6/thumbnails/robot-2017-jun-01-05-43-28pm-000-customizedview8762589869-3500-3500.jpg',
      buttons: getButtons(projects)
    };
  }

  if (BackendTrack) {function getOptions(title, languages) {
    return {
      title,
      imageUrl: 'https://gds-storage-prd.s3.amazonaws.com/unified-gallery/170917/1314/44437cc6/thumbnails/robot-2017-jun-01-05-43-28pm-000-customizedview8762589869-3500-3500.jpg',
      buttons: getButtons(languages)
    };
  }
    //Java, node, python, or not applicable - languages
    if ((projectList.toLowerCase() === 'java' || projectList.toLowerCase() === 'node' || BackendTrack.toLowerCase() === 'python') || BackendTrack.toLowerCase() === 'not applicable') {
      const options = getLangOptions('Select a track', ['Java', 'node', 'python', 'not applicable']);
      return buildValidationResult(false, 'languages', `We do not have ${projectList} available in that language. Java, node or python are the available languages for these projects.`, options);
    }
  }
  console.log(`buildValidationResult`);
  return buildValidationResult(true, null, null);
}


module.exports = function(intentRequest) {
  const projectList = intentRequest.currentIntent.slots.projects;
  const BackendTrack = intentRequest.currentIntent.slots.languages;
  const userId = intentRequest.userId;
  const slots = intentRequest.currentIntent.slots;

    const validationResult = validateProjectPreference(userId, projectList, BackendTrack);

    if (!validationResult.isValid) {
      slots[`${validationResult.violatedSlot}`] = null;
      return Promise.resolve(
        lexResponses.elicitSlot(
          intentRequest.sessionAttributes,
          intentRequest.currentIntent.name,
          slots,
          validationResult.violatedSlot,
          validationResult.message,
          validationResult.options.title,
          validationResult.options.imageUrl,
          validationResult.options.buttons
        )
      );
    }

    return Promise.resolve(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
  }
};
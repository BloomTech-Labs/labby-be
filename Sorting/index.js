const serverless = require('serverless-http')
module.exports.handler = serverless(require('./handler_test_helper.js'))
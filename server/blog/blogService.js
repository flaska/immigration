var request = require('request'),
  parseString = require('xml2js').parseString,
  mongo = require('../db/mongo')
;

exports.getBlogPost = mongo.getBlogPost;

/* global module */
var name = require('../package.json').name;

module.exports = function (environment) {
  'use strict';
  environment = environment || 'development';
  var ENV = {
    development: {
      environment: environment,
      addonPrefix: name,
      shimName: name + '-shim'
    }
  };
  return ENV[environment];
};

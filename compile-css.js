/* jshint node: true */
/* global require, module */
var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

module.exports = function (env) {
  env = env || 'development';
  var configPath = path.resolve(__dirname, 'config/environment');
  var config = require(configPath)(env);
  var cssFile = 'vendor/' + config.addonPrefix + '.css';
  var vendorFile = path.resolve(__dirname, cssFile);

  sass.render({
    file: path.resolve(__dirname, config.sassMain),
    success: function(results) {
      console.log('node-sass compiled', vendorFile.split(__dirname)[1]);
      fs.writeFile(vendorFile, results.css, function (err) {
        if (err) { return console.error(err); }
      });
      fs.writeFile(vendorFile + '.map', results.map, function (err) {
        if (err) { return console.error(err); }
      });
    },
    error: function(error) {
      console.error(error.message, error.status, error.line, error.column);
    },
    includePaths: [ path.resolve(__dirname, config.sassIncludePath) ],
    outFile: vendorFile,
    outputStyle: (env === 'development') ? 'nested' : 'compressed',
    precision: 5,
    sourceMap: (env === 'development')
  });
};

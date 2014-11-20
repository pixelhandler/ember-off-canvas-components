/* global require, module */
var sass = require('node-sass');
var path = require('path');

module.exports = function (env) {
  var vendorFile = path.resolve(__dirname, 'vendor/ember-off-canvas-components.css');

  sass.renderFile({
    file: path.resolve(__dirname, 'addon/styles/scss/main.scss'),
    success: function(/*css*/) {
      console.log('node-sass compiled', vendorFile.split(__dirname)[1]);
    },
    error: function(error) {
      console.error(error);
    },
    includePaths: [ path.resolve(__dirname, 'addon/styles/scss/') ],
    outputStyle: (env === 'development') ? 'nested' : 'compressed',
    outFile: vendorFile,
    precision: 5,
    sourceMap: (env === 'development')
  });
};

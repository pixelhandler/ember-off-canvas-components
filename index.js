/* global require, module */
var compileCss = require('./compile-css');

module.exports = {
  name: 'ember-off-canvas-components',

  included: function(app) {
    'use strict';
    compileCss(app.env);
    app.import('vendor/ember-off-canvas-components.css');
  }
};

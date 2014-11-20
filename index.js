/* global require, module */
var env = require('broccoli-env').getEnv();
var compileCss = require('./compile-css');

module.exports = {
  name: 'ember-off-canvas-components',

  included: function(app, parentAddon) {
    'use strict';
    compileCss(env);

    var target = (parentAddon || app);
    target.import('./vendor/ember-off-canvas.css');
    if (env === 'development') {
      target.import('./vendor/ember-off-canvas.css.map');
    }
  }
};

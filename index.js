/* global require, module */
var compileCss = require('./compile-css');

module.exports = {
  name: 'ember-off-canvas-components',

  included: function(app, parentAddon) {
    'use strict';
    var target = (parentAddon || app);

    compileCss(target.env);

    target.import('./vendor/ember-off-canvas.css');
    if (target.env === 'development') {
      target.import('./vendor/ember-off-canvas.css.map');
    }
  }
};

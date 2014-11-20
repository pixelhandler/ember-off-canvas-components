/* global require, module */
var compileCss = require('./compile-css');

module.exports = {
  name: 'ember-off-canvas-components',

  included: function(app, parentAddon) {
    'use strict';
    var target = (parentAddon || app);
    var vendorFile = 'vendor/ember-off-canvas-components.css';

    compileCss(target.env);

    target.import(vendorFile);
    if (target.env === 'development') {
      target.import(vendorFile + '.map');
    }
  }
};

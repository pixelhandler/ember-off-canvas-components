'use strict';

module.exports = {
  name: 'ember-off-canvas-components',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    target.import('vendor/ember-off-canvas.css');
  }
};

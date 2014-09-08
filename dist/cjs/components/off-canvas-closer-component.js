"use strict";
var Component = require("ember").Component;
var get = require("ember").get;
var set = require("ember").set;
var computed = require("ember").computed;

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#off-canvas-closer}}
    <i class="fa fa-times"></i>
  {{/off-canvas-closer}}
  ```

  @extends Ember.Component
*/
exports["default"] = Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas-closer/>` elements.

    @property tagName
    @type String
  */
  tagName: 'off-canvas-closer',

  classNames: ['off-canvas-opener-closer'],

  click: function (evt) {
    this.triggerEvent(evt);
    return false;
  },

  touchEnd: function (evt) {
    this.triggerEvent(evt);
    return false;
  },

  triggerEvent: function (evt) {
    Em.$(evt.target).trigger('collapseOffCanvas');
  }
});
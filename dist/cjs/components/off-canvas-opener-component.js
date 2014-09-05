"use strict";
var Component = require("ember").Component;
var get = require("ember").get;
var set = require("ember").set;
var computed = require("ember").computed;

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#off-canvas-opener}}
    <i class="fa fa-bars"></i>
  {{/off-canvas-opener}}
  ```

  @extends Ember.Component
*/
exports["default"] = Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas-opener/>` elements.

    @property tagName
    @type String
  */
  tagName: 'off-canvas-opener',

  classNames: ['off-canvas-opener-default'],

  click: function (evt) {
    Em.$(evt.target).trigger('expandOffCanvas');
    return false;
  }
});
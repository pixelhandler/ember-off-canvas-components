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

  classNames: [''],

  classNameBindings: ['inline:off-canvas-opener-inline:off-canvas-opener-default'],

  inline: false,

  useToggle: false,

  click: function (evt) {
    var eventName;
    if (this.get('useToggle')) {
      eventName = 'toggleOffCanvas';
    } else {
      eventName = 'expandOffCanvas';
    }
    Em.$(evt.target).trigger(eventName);
    return false;
  }
});
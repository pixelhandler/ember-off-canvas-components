"use strict";
var Component = require("ember").Component;
var get = require("ember").get;
var set = require("ember").set;

/*
@module emberella
@submodule emberella-components
 */
var EllaSampleComponent;

EllaSampleComponent = {
  tagName: 'ella-sample',
  classNameBindings: ['activated'],
  click: function() {
    set(this, 'activated', !get(this, 'activated'));
    return this.incrementProperty('tests');
  },
  activated: false,
  tests: 0
};

exports["default"] = Component.extend(EllaSampleComponent);
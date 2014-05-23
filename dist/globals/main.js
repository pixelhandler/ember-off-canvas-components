!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.Emberella||(f.Emberella={})).sample=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var get = window.Ember.get;
var set = window.Ember.set;
var computed = window.Ember.computed;

/*
@module emberella
@submodule emberella-components
*/

/**
  The `EllaSampleComponent` illustrates how to get started with Emberella
  Component Blueprint.

  To use this component in your app, add this to a template:

  ```handlebars
  {{#ella-sample}}
    <h1>{{view.tests}}</h1>
    <p>Click Me</p>
  {{/ella-sample}}
  ```

  @class EllaSampleComponent
  @namespace Emberella
  @extends Ember.Component
*/

var EllaSampleComponent;

EllaSampleComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<ella-sample/>` elements.

    @property tagName
    @type String
    @default 'ella-sample'
  */
  tagName: 'ella-sample',

  /**
    HTML attributes that should be bound to this object's properties.

    @property attributeBindings
    @type Array
    @default ['_activated:activated']
  */
  attributeBindings: ['_activated:activated'],

  /**
    Activation state for this component instance.

    @property activated
    @type Boolean
    @default false
  */
  activated: false,

  /**
    A number for the click event to increment.

    @property tests
    @type Integer
    @default 0
  */
  tests: 0,

  /**
    @private

    Computed value for "activated" HTML attribute.

    @property _activated
    @type {Boolean|Null}
    @default null
    @readOnly
  */
  _activated: computed(function() {
    return get(this, 'activated') ? 'true' : null;
  }).property('activated').readOnly(),

  /**
    Handle the click event.

    @event click
  */
  click: function() {
    set(this, 'activated', !get(this, 'activated'));
    this.incrementProperty('tests');
  }
};

exports["default"] = Component.extend(EllaSampleComponent);
},{}],2:[function(_dereq_,module,exports){
"use strict";
var EllaSampleComponent = _dereq_("./components/ella-sample-component")["default"] || _dereq_("./components/ella-sample-component");
var EllaSampleTemplate = _dereq_("./templates/main-css")["default"] || _dereq_("./templates/main-css");
var Application = window.Ember.Application;

Application.initializer({
  name: 'ella-sample',
  initialize: function(container) {
    container.register('component:ella-sample', EllaSampleComponent);
    container.register('template:components/ella-sample-css', EllaSampleTemplate);
  }
});

exports.EllaSampleComponent = EllaSampleComponent;
},{"./components/ella-sample-component":1,"./templates/main-css":3}],3:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ella-sample{background-color:transparent;color:#000}ella-sample[activated=\"true\"]{background-color:transparent;color:green}");
  
});
},{}]},{},[2])
(2)
});
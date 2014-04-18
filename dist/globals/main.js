!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),(n.Emberella||(n.Emberella={})).Component=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var get = window.Ember.get;
var set = window.Ember.set;

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
},{}],2:[function(_dereq_,module,exports){
"use strict";
var EllaSampleComponent = _dereq_("./components/ella-sample-component")["default"] || _dereq_("./components/ella-sample-component");
var EllaSampleTemplate = _dereq_("./templates/main-css")["default"] || _dereq_("./templates/main-css");
var Application = window.Ember.Application;
Application.initializer({
  name: 'ella-sample',
  initialize: function(container) {
    container.register('component:ella-sample', EllaSampleComponent);
    return container.register('template:components/ella-sample-css', EllaSampleTemplate);
  }
});


exports.EllaSampleComponent = EllaSampleComponent;
},{"./components/ella-sample-component":1,"./templates/main-css":3}],3:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ella-sample {\n  color: #121212; }\n  ella-sample.activated {\n    color: green;\n    font-weight: bold; }\n");
  
});
},{}]},{},[2])
(2)
});
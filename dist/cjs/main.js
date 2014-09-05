"use strict";
var EOCViewportComponent = require("./components/eoc-viewport-component")["default"] || require("./components/eoc-viewport-component");
var OnCanvasComponent = require("./components/on-canvas-component")["default"] || require("./components/on-canvas-component");
var OffCanvasComponent = require("./components/off-canvas-component")["default"] || require("./components/off-canvas-component");
var OffCanvasTemplate = require("./templates/main-css")["default"] || require("./templates/main-css");
var OffCanvasOpenerComponent = require("./components/off-canvas-opener-component")["default"] || require("./components/off-canvas-opener-component");
var OffCanvasCloserComponent = require("./components/off-canvas-closer-component")["default"] || require("./components/off-canvas-closer-component");

var Application = require("ember").Application;

Application.initializer({
  name: 'off-canvas-ui',

  initialize: function(container, application) {
    registerComponents(container);
    setupCustomEvents(application);
  }
});

var registerComponents = function (container) {
  container.register('component:eoc-viewport', EOCViewportComponent);
  container.register('component:on-canvas', OnCanvasComponent);
  container.register('component:off-canvas', OffCanvasComponent);
  container.register('component:off-canvas-opener', OffCanvasOpenerComponent);
  container.register('component:off-canvas-closer', OffCanvasCloserComponent);
  container.register('template:components/off-canvas-css', OffCanvasTemplate);
};

var setupCustomEvents = function (application) {
  var customEvents = application.get('customEvents') || {};
  var eventPrefixes = Ember.String.w('toggle expand collapse');
  var i, name;
  for (i = 0; i < eventPrefixes.length; i++) {
    name = Ember.String.fmt("%@OffCanvas", eventPrefixes[i]);
    customEvents[name] = name;
  }
  application.set('customEvents', customEvents);
};

exports.EOCViewportComponent = EOCViewportComponent;
exports.OnCanvasComponent = OnCanvasComponent;
exports.OffCanvasComponent = OffCanvasComponent;
exports.OffCanvasOpenerComponent = OffCanvasOpenerComponent;
exports.OffCanvasCloserComponent = OffCanvasCloserComponent;
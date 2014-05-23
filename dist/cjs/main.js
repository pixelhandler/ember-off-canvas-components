"use strict";
var EllaSampleComponent = require("./components/ella-sample-component")["default"] || require("./components/ella-sample-component");
var EllaSampleTemplate = require("./templates/main-css")["default"] || require("./templates/main-css");
var Application = require("ember").Application;

Application.initializer({
  name: 'ella-sample',
  initialize: function(container) {
    container.register('component:ella-sample', EllaSampleComponent);
    container.register('template:components/ella-sample-css', EllaSampleTemplate);
  }
});

exports.EllaSampleComponent = EllaSampleComponent;
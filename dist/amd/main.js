define(
  ["./components/eoc-viewport-component","./components/on-canvas-component","./components/off-canvas-component","./templates/main-css","./components/off-canvas-opener-component","./components/off-canvas-closer-component","ember","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var EOCViewportComponent = __dependency1__["default"] || __dependency1__;
    var OnCanvasComponent = __dependency2__["default"] || __dependency2__;
    var OffCanvasComponent = __dependency3__["default"] || __dependency3__;
    var OffCanvasTemplate = __dependency4__["default"] || __dependency4__;
    var OffCanvasOpenerComponent = __dependency5__["default"] || __dependency5__;
    var OffCanvasCloserComponent = __dependency6__["default"] || __dependency6__;

    var Application = __dependency7__.Application;

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

    __exports__.EOCViewportComponent = EOCViewportComponent;
    __exports__.OnCanvasComponent = OnCanvasComponent;
    __exports__.OffCanvasComponent = OffCanvasComponent;
    __exports__.OffCanvasOpenerComponent = OffCanvasOpenerComponent;
    __exports__.OffCanvasCloserComponent = OffCanvasCloserComponent;
  });
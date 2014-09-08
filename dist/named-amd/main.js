define("ember-off-canvas-ui-components/components/eoc-viewport-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#eoc-viewport}}
        {{#on-canvas}}
          {{#off-canvas-opener}}
            <i class="fa fa-bars"></i>
          {{/off-canvas-opener}}
        {{/on-canvas}}

        {{#off-canvas}}
          {{#off-canvas-closer}}
            <i class="fa fa-times"></i>
          {{/off-canvas-closer}}
        {{/off-canvas}}
      {{/eoc-viewport}}
      ```
    */
    __exports__["default"] = Component.extend({
      /**
        The type of element to render this view into. By default, samples will appear
        as `<eoc-viewport/>` elements.

        @property tagName
        @type String
      */
      tagName: 'eoc-viewport',

      classNames: ['eoc-viewport-default'],

      classNameBindings: ['active:off-canvas-expanded'],

      active: false,

      // Custom events

      toggleOffCanvas: function (evt) {
        this.toggleProperty('active');
      },

      expandOffCanvas: function (evt) {
        this.set('active', true);
      },

      collapseOffCanvas: function (evt) {
        this.set('active', false);
      }
    });
  });
define("ember-off-canvas-ui-components/components/off-canvas-closer-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#off-canvas-closer}}
        <i class="fa fa-times"></i>
      {{/off-canvas-closer}}
      ```

      @extends Ember.Component
    */
    __exports__["default"] = Component.extend({
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
  });
define("ember-off-canvas-ui-components/components/off-canvas-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#off-canvas}}
        {{#off-canvas-closer}}
          <i class="fa fa-times"></i>
        {{/off-canvas-closer}}
        <br>
        <div class="off-canvas-body">
          Off Canvas Contents
        </div>
      {{/off-canvas}}
      ```

      @extends Ember.Component
    */
    __exports__["default"] = Component.extend({
      /**
        The type of element to render this view into. By default, samples will appear
        as `<off-canvas`/>` elements.

        @property tagName
        @type String
      */
      tagName: 'off-canvas',

      classNames: ['off-canvas-default']
    });
  });
define("ember-off-canvas-ui-components/components/off-canvas-opener-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#off-canvas-opener}}
        <i class="fa fa-bars"></i>
      {{/off-canvas-opener}}
      ```

      @extends Ember.Component
    */
    __exports__["default"] = Component.extend({
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
        this.triggerEvent(evt);
        return false;
      },

      touchEnd: function (evt) {
        this.triggerEvent(evt);
        return false;
      },

      triggerEvent: function (evt) {
        var eventName;
        if (this.get('useToggle')) {
          eventName = 'toggleOffCanvas';
        } else {
          eventName = 'expandOffCanvas';
        }
        Em.$(evt.target).trigger(eventName);
      }
    });
  });
define("ember-off-canvas-ui-components/components/on-canvas-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#on-canvas}}
        {{#off-canvas-opener}}
          <i class="fa fa-bars"></i>
        {{/off-canvas-opener}}
        <div class="on-canvas-body">
          On Canvas Contents
        </div>
      {{/on-canvas}}
      ```

      @extends Ember.Component
    */

    __exports__["default"] = Component.extend({
      /**
        The type of element to render this view into. By default, samples will appear
        as `<on-canvas/>` elements.

        @property tagName
        @type String
      */
      tagName: 'on-canvas',

      classNames: ['on-canvas-default']
    });
  });
define("ember-off-canvas-ui-components",
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
define("ember-off-canvas-ui-components/templates/main-css",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("eoc-viewport{width:auto;position:relative}on-canvas{left:0;margin-right:0;position:relative;width:100%;-moz-transition-property:'left margin-right';-moz-transition-duration:500ms;-ms-transition-property:'left margin-right';-ms-transition-duration:500ms;-o-transition-property:'left margin-right';-o-transition-duration:500ms;-webkit-transition-property:'left margin-right';transition-property:'left margin-right';-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-transition-timing-function:ease-in-out 0;transition-timing-function:ease-in-out 0}on-canvas.on-canvas-default{background:-webkit-linear-gradient(left,#fefefe 0%,#eee 24%,#ccc 100%);position:fixed;height:100%}off-canvas{display:block;position:fixed;top:0;right:-30em;width:30em;max-width:100%;height:100%;-moz-transition-property:'right';-moz-transition-duration:500ms;-ms-transition-property:'right';-ms-transition-duration:500ms;-o-transition-property:'right';-o-transition-duration:500ms;-webkit-transition-property:'right';transition-property:'right';-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-transition-timing-function:ease-in-out 0;transition-timing-function:ease-in-out 0;overflow:auto;z-index:2000}off-canvas.off-canvas-default{background:-webkit-linear-gradient(left,#eee 0%,#fefefe 24%,#eee 100%);border-radius:0;border-left-color:#ccc;box-shadow:inset 0 1px 20px -10px rgba(0,0,0,.65)}off-canvas-opener:hover{cursor:pointer}off-canvas-opener.off-canvas-opener-default{top:0;right:0;position:absolute}off-canvas-opener.off-canvas-opener-inline{top:auto;right:auto;position:relative}off-canvas-closer{top:0;right:-30em;position:fixed;-moz-transition-property:'right';-moz-transition-duration:500ms;-ms-transition-property:'right';-ms-transition-duration:500ms;-o-transition-property:'right';-o-transition-duration:500ms;-webkit-transition-property:'right';transition-property:'right';-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-transition-timing-function:ease-in-out 0;transition-timing-function:ease-in-out 0}off-canvas-closer:hover{cursor:pointer}.off-canvas-expanded off-canvas{right:0}.off-canvas-expanded on-canvas{left:-30em;margin-right:30em;-moz-transition-property:'left margin-right';-ms-transition-property:'left margin-right';-o-transition-property:'left margin-right';-webkit-transition-property:'left margin-right';transition-property:'left margin-right'}.off-canvas-expanded on-canvas,.off-canvas-expanded off-canvas-closer{-moz-transition-duration:500ms;-ms-transition-duration:500ms;-o-transition-duration:500ms;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-transition-timing-function:ease-in-out 0;transition-timing-function:ease-in-out 0}.off-canvas-expanded off-canvas-closer{right:0;-moz-transition-property:'right';-ms-transition-property:'right';-o-transition-property:'right';-webkit-transition-property:'right';transition-property:'right'}");
      
    });
  });
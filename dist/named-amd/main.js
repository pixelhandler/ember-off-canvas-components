define("ella-sample/components/ella-sample-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

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

    __exports__["default"] = Component.extend(EllaSampleComponent);
  });
define("ella-sample",
  ["./components/ella-sample-component","./templates/main-css","ember","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var EllaSampleComponent = __dependency1__["default"] || __dependency1__;
    var EllaSampleTemplate = __dependency2__["default"] || __dependency2__;
    var Application = __dependency3__.Application;

    Application.initializer({
      name: 'ella-sample',
      initialize: function(container) {
        container.register('component:ella-sample', EllaSampleComponent);
        container.register('template:components/ella-sample-css', EllaSampleTemplate);
      }
    });

    __exports__.EllaSampleComponent = EllaSampleComponent;
  });
define("ella-sample/templates/main-css",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("ella-sample{background-color:transparent;color:#000}ella-sample[activated=\"true\"]{background-color:transparent;color:green}");
      
    });
  });
define("ella-sample/components/ella-sample-component",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;

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
        return container.register('template:components/ella-sample-css', EllaSampleTemplate);
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
      


      data.buffer.push("ella-sample {\n  color: #121212; }\n  ella-sample.activated {\n    color: green;\n    font-weight: bold; }\n");
      
    });
  });
define(
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
define(
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
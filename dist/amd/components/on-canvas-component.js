define(
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
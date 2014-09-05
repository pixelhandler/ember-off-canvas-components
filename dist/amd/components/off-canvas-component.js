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
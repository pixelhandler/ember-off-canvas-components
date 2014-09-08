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
        var eventName;
        if (this.get('useToggle')) {
          eventName = 'toggleOffCanvas';
        } else {
          eventName = 'expandOffCanvas';
        }
        Em.$(evt.target).trigger(eventName);
        return false;
      }
    });
  });
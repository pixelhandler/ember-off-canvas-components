import Ember from 'ember';

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#off-canvas-opener}}
    <i class="fa fa-bars"></i>
  {{/off-canvas-opener}}
  ```

  @extends Ember.Component
*/
export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas-opener/>` elements.

    @property tagName
    @type String
  */
  tagName: 'off-canvas-opener',

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
    Ember.$(evt.target).trigger(eventName);
    return false;
  }
});

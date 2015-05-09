import Ember from 'ember';

/**
  To use this component in your app, add this to a template, inside the eoc-viewport:

  ```handlebars
  {{#off-canvas-opener target=eocViewport}}
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

  click: function () {
    var eventName;
    if (this.get('useToggle')) {
      eventName = 'toggleOffCanvas';
    } else {
      eventName = 'expandOffCanvas';
    }
    this.get('target').send(eventName);
    return false;
  },

  target: null
});

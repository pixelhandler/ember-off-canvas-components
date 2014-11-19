import Ember from 'ember';

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#off-canvas-closer}}
    <i class="fa fa-times"></i>
  {{/off-canvas-closer}}
  ```

  @extends Ember.Component
*/
export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas-closer/>` elements.

    @property tagName
    @type String
  */
  tagName: 'off-canvas-closer',

  classNames: ['off-canvas-opener-closer'],

  click: function (evt) {
    Ember.$(evt.target).trigger('collapseOffCanvas');
    return false;
  }
});


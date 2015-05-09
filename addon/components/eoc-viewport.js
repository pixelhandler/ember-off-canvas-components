import Ember from 'ember';

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#eoc-viewport}}
    {{#on-canvas targetObject=this}}
      {{#off-canvas-opener targetObject=targetObject}}
        <i class="fa fa-bars"></i>
      {{/off-canvas-opener}}
    {{/on-canvas}}
    {{#off-canvas targetObject=this}}
      {{#off-canvas-closer targetObject=targetObject}}
        <i class="fa fa-times"></i>
      {{/off-canvas-closer}}
    {{/off-canvas}}
  {{/eoc-viewport}}
  ```
*/
export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<eoc-viewport/>` elements.
    @property tagName
    @type String
  */
  tagName: 'eoc-viewport',

  classNames: ['eoc-viewport-default'],

  classNameBindings: ['active:off-canvas-expanded'],

  active: false,

  actions: {
    toggleOffCanvas: function () {
      this.toggleProperty('active');
    },

    expandOffCanvas: function () {
      this.set('active', true);
    },

    collapseOffCanvas: function () {
      this.set('active', false);
    }
  }
});

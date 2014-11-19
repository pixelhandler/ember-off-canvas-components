import Ember from 'ember';

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
export default Ember.Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas`/>` elements.

    @property tagName
    @type String
  */
  tagName: 'off-canvas',

  classNames: ['off-canvas-default']
});

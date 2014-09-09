import { Component, get, set, computed } from 'ember';

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

export default Component.extend({
  /**
    The type of element to render this view into. By default, samples will appear
    as `<on-canvas/>` elements.

    @property tagName
    @type String
  */
  tagName: 'on-canvas',

  classNames: ['on-canvas-default'],

  click: function (evt) {
    var nodeName = evt.target.nodeName;
    var parentNodeName = (evt.target.parentElement) ? evt.target.parentElement.nodeName : null;
    var controls = /^off\-canvas\-(opener|closer)$/;
    var isNotControl = (nodeName.match(controls) === null);
    var parentIsNotControl = (parentNodeName && parentNodeName.match(controls) === null);
    if (isNotControl || parentIsNotControl) {
      Em.$(evt.target).trigger('collapseOffCanvas');
    }
    return true;
  }
});

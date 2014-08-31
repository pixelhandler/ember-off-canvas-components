import { Component, get, set, computed } from 'ember';

/**
  To use this component in your app, add this to a template:

  ```handlebars
  {{#off-canvas}}
    <span>Contents</span>
  {{/off-canvas}}
  ```

  @class OffCanvasComponent
  @namespace OCC
  @extends Ember.Component
*/
var OffCanvasComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<off-canvas/>` elements.

    @property tagName
    @type String
    @default 'ella-sample'
  */
  tagName: 'off-canvas',

  classNames: ['off-canvas-default'],

  /**
    HTML attributes that should be bound to this object's properties.

    @property attributeBindings
    @type Array
    @default ['_activated:activated']
  */
  attributeBindings: ['_activated:activated'],

  /**
    Activation state for this component instance.

    @property activated
    @type Boolean
    @default false
  */
  activated: false,

  /**
    @private

    Computed value for "activated" HTML attribute.

    @property _activated
    @type {Boolean|Null}
    @default null
    @readOnly
  */
  _activated: computed(function() {
    return get(this, 'activated') ? 'true' : null;
  }).property('activated').readOnly()
};

export default Component.extend(OffCanvasComponent);

import { Component, get, set, computed } from 'ember';

/*
@module emberella
@submodule emberella-components
*/

/**
  The `EllaSampleComponent` illustrates how to get started with Emberella
  Component Blueprint.

  To use this component in your app, add this to a template:

  ```handlebars
  {{#ella-sample}}
    <h1>{{view.tests}}</h1>
    <p>Click Me</p>
  {{/ella-sample}}
  ```

  @class EllaSampleComponent
  @namespace Emberella
  @extends Ember.Component
*/

var EllaSampleComponent;

EllaSampleComponent = {
  /**
    The type of element to render this view into. By default, samples will appear
    as `<ella-sample/>` elements.

    @property tagName
    @type String
    @default 'ella-sample'
  */
  tagName: 'ella-sample',

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
    A number for the click event to increment.

    @property tests
    @type Integer
    @default 0
  */
  tests: 0,

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
  }).property('activated').readOnly(),

  /**
    Handle the click event.

    @event click
  */
  click: function() {
    set(this, 'activated', !get(this, 'activated'));
    this.incrementProperty('tests');
  }
};

export default Component.extend(EllaSampleComponent);

import Ember from 'ember';
import { initialize } from 'ember-off-canvas-components/initializers/custom-events';

var container, application;

module('CustomEventsInitializer', {
  setup: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('it sets customEvents on the application', function() {
  expect(1);

  initialize(container, application);

  var expected = {
    toggleOffCanvas: "toggleOffCanvas",
    expandOffCanvas: "expandOffCanvas",
    collapseOffCanvas: "collapseOffCanvas"
  };

  deepEqual(application.customEvents, expected);
});


import Ember from 'ember';
import {module, test} from 'qunit';
import { initialize } from 'ember-off-canvas-components/initializers/custom-events';

var container, application;

module('CustomEventsInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('it sets customEvents on the application', function(assert) {
  assert.expect(1);

  initialize(container, application);

  var expected = {
    toggleOffCanvas: "toggleOffCanvas",
    expandOffCanvas: "expandOffCanvas",
    collapseOffCanvas: "collapseOffCanvas"
  };

  assert.deepEqual(application.customEvents, expected);
});


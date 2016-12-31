import Ember from 'ember';

export function initialize(container, application) {
  var customEvents = application.get('customEvents') || {};

  Ember.String.w('toggle expand collapse').forEach(function (prefix) {
    var name = Ember.String.fmt("%@OffCanvas", prefix);
    customEvents[name] = name;
  });

  application.set('customEvents', customEvents);
}

export default {
  name: 'ember-off-canvas-components/custom-events',
  initialize() {}
};

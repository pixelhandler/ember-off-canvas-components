import Ember from 'ember';

export function initialize(container, application) {
  var customEvents = application.get('customEvents') || {};
  var eventPrefixes = Ember.String.w('toggle expand collapse');
  var i, name;
  for (i = 0; i < eventPrefixes.length; i++) {
    name = Ember.String.fmt("%@OffCanvas", eventPrefixes[i]);
    customEvents[name] = name;
  }
  application.set('customEvents', customEvents);
}

export default {
  name: 'custom-events',
  initialize: initialize
};

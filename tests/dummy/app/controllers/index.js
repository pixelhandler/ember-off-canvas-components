import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    asyncStuff: function(elementName, eventName) {
      Ember.run.later(this, asycToggleOffCanvas, elementName, eventName, 1000);
      return false;
    }
  }
});

var asycToggleOffCanvas = function (elName, evtName) {
  if (typeof elName === 'string' && typeof evtName === 'string') {
    Ember.$(elName).trigger(evtName);
  }
};

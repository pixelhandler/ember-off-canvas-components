document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

App = Ember.Application.create({});

App.rootElement = '#ember-testing';

emq.globalize();
App.setupForTesting();
App.injectTestHelpers();


setResolver(Ember.DefaultResolver.extend({
  testSubjects: {
    'component:ella-sample': Emberella.Component.EllaSampleComponent
  },
  resolve: function(fullName) {
    return this.testSubjects[fullName] || this._super.apply(this, arguments);
  }
}).create());


Function.prototype.compile = function() {
  var template = this.toString().split('\n').slice(1,-1).join('\n') + '\n';
  return Ember.Handlebars.compile(template);
}

function lookupComponent(id) {
  return Ember.View.views[id];
}

function buildComponent(test, props) {
  props = props || {};
  var component = test.subject(Ember.merge({
    template: function(){/*
      <span>Click me</span>
    */}.compile()
  }, props));
  test.append();
  return component;
}

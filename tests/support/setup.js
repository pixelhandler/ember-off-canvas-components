document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

var App = Ember.Application.create({});
var NAMESPACE = Ember.get(ECB_OUTPUT_CONFIG.global);

App.rootElement = '#ember-testing';

emq.globalize();
App.setupForTesting();
App.injectTestHelpers();

setResolver(Ember.DefaultResolver.extend({
  testSubjects: {
    'component:eoc-viewport': NAMESPACE.EOCViewportComponent,
    'component:on-canvas': NAMESPACE.OnCanvasComponent,
    'component:off-canvas': NAMESPACE.OffCanvasComponent,
    'component:off-canvas-opener': NAMESPACE.OffCanvasOpenerComponent,
    'component:off-canvas-closer': NAMESPACE.OffCanvasCloserComponent
  },
  resolve: function(fullName) {
    return this.testSubjects[fullName] || this._super.apply(this, arguments);
  }
}).create());

Function.prototype.compile = function() {
  var template = this.toString().split('\n').slice(1,-1).join('\n') + '\n';
  return Ember.Handlebars.compile(template);
};

function lookupComponent(id) {
  return Ember.View.views[id];
}

function buildComponent(test, props) {
  props = props || {};
  var component = test.subject(Ember.merge({
    template: function(){/*
      <span>Contents</span>
    */}.compile()
  }, props));
  test.append();
  return component;
}
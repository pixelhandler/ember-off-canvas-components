module('main');

test('Components are registered on an application', function() {
  expect(5);
  var container = {
    registry: {},
    register: function(name, definition) {
      this.registry[name] = definition;
    }
  };
  var initializer = Ember.Application.initializers['off-canvas-ui'];
  initializer.initialize(container, App);
  strictEqual(container.registry['component:eoc-viewport'], NAMESPACE.EOCViewportComponent, 'component:eoc-viewport ok');
  strictEqual(container.registry['component:off-canvas'], NAMESPACE.OffCanvasComponent, 'component:off-canvas ok');
  strictEqual(container.registry['component:on-canvas'], NAMESPACE.OnCanvasComponent, 'component:on-canvas ok');
  strictEqual(container.registry['component:off-canvas-opener'], NAMESPACE.OffCanvasOpenerComponent, 'component:off-canvas-opener ok');
  strictEqual(container.registry['component:off-canvas-closer'], NAMESPACE.OffCanvasCloserComponent, 'component:off-canvas-closer ok');
});

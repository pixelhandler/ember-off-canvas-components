module('main');

test('Components are registered on an application', function() {
  expect(1);
  var container = {
    registry: {},
    register: function(name, definition) {
      this.registry[name] = definition;
    }
  };
  var initializer = Ember.Application.initializers['off-canvas'];
  initializer.initialize(container);
  strictEqual(container.registry['component:off-canvas'], NAMESPACE.OffCanvasComponent);
});

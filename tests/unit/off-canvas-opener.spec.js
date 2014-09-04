moduleForComponent('off-canvas-opener');

test('element tagName is off-canvas-opener', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'off-canvas-opener', 'matches `off-canvas-opener`');
});

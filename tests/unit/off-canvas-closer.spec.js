moduleForComponent('off-canvas-closer');

test('element tagName is off-canvas-closer', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'off-canvas-closer', 'matches `off-canvas-closer`');
});

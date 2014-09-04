moduleForComponent('off-canvas');

test('element tagName is off-canvas', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'off-canvas', 'matches `off-canvas`');
});

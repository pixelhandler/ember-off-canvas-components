moduleForComponent('on-canvas');

test('element tagName is on-canvas', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'on-canvas', 'matches `on-canvas`');
});

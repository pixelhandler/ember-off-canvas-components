moduleForComponent('eoc-viewport');

test('element tagName is eoc-viewport', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'eoc-viewport', 'matches `eoc-viewport`');
});

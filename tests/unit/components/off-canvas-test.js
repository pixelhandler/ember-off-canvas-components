import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('off-canvas', 'OffCanvasComponent');

test('it renders element with tagName off-canvas', function() {
  expect(3);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
  equal(component.get('element').tagName, 'off-canvas'.toUpperCase(), 'matches `off-canvas`');
});

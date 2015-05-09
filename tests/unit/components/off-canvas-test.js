import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('off-canvas', 'OffCanvasComponent');

test('it renders element with tagName off-canvas', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.append();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('element').tagName, 'off-canvas'.toUpperCase(), 'matches `off-canvas`');
});

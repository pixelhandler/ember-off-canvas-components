import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('on-canvas', 'OnCanvasComponent');

test('it renders element with tagName on-canvas', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.append();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('element').tagName, 'on-canvas'.toUpperCase(), 'matches `on-canvas`');
});

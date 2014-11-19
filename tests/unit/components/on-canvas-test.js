import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('on-canvas', 'OnCanvasComponent');

test('it renders element with tagName on-canvas', function() {
  expect(3);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
  equal(component.get('element').tagName, 'on-canvas'.toUpperCase(), 'matches `on-canvas`');
});

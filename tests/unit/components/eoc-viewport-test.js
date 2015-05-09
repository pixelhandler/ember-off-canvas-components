import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('eoc-viewport', 'EocViewportComponent');

test('it renders element with tagName eoc-viewport', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.append();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('element').tagName, 'eoc-viewport'.toUpperCase(), 'matches `eoc-viewport`');
});

test('expandOffCanvas event sets active property to true', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component.get('active'), false, 'default value for active prop is false');

  Ember.run(component, 'expandOffCanvas');
  assert.equal(component.get('active'), true, 'expandOffCanvas event sets active prop to true');
});

test('toggleOffCanvas event sets active property from false to true', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component.get('active'), false, 'default value for active prop is false');

  Ember.run(component, 'toggleOffCanvas');
  assert.equal(component.get('active'), true, 'toggleOffCanvas event sets active prop to true');
});

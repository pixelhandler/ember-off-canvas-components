import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('off-canvas-opener', 'OffCanvasOpenerComponent');

test('it renders element with tagName off-canvas-opener', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.append();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('element').tagName, 'off-canvas-opener'.toUpperCase(), 'matches `off-canvas`');
});

test('when clicked triggers "expandOffCanvas" event', function(assert) {
  assert.expect(1);
  var component = this.subject();
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('expandOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  assert.ok(didFire, 'expandOffCanvas event fired');
});

test('when useToggle is true, click triggers "toggleOffCanvas" event', function(assert) {
  assert.expect(1);
  var component = this.subject({useToggle: true});
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('toggleOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  assert.ok(didFire, 'toggleOffCanvas event fired');
});

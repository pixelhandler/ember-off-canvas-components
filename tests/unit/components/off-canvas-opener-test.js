import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('off-canvas-opener', 'OffCanvasOpenerComponent');

test('it renders element with tagName off-canvas-opener', function() {
  expect(3);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
  equal(component.get('element').tagName, 'off-canvas-opener'.toUpperCase(), 'matches `off-canvas`');
});

test('when clicked triggers "expandOffCanvas" event', function() {
  expect(1);
  var component = this.subject();
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('expandOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  ok(didFire, 'expandOffCanvas event fired');
});

test('when useToggle is true, click triggers "toggleOffCanvas" event', function() {
  expect(1);
  var component = this.subject({useToggle: true});
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('toggleOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  ok(didFire, 'toggleOffCanvas event fired');
});

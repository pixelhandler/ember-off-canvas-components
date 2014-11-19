import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('off-canvas-closer', 'OffCanvasCloserComponent');

test('it renders element with tagName off-canvas-closer', function() {
  expect(3);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
  equal(component.get('element').tagName, 'off-canvas-closer'.toUpperCase(), 'matches `off-canvas-closer`');
});

test('when clicked triggers "collapseOffCanvas" event', function() {
  expect(1);
  var component = this.subject({useToggle: true});
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('collapseOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  ok(didFire, 'collapseOffCanvas event fired');
});

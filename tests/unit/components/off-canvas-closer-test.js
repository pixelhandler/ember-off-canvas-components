import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('off-canvas-closer', 'OffCanvasCloserComponent');

test('it renders element with tagName off-canvas-closer', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.append();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('element').tagName, 'off-canvas-closer'.toUpperCase(), 'matches `off-canvas-closer`');
});

test('when clicked triggers "collapseOffCanvas" event', function(assert) {
  assert.expect(1);
  var component = this.subject({useToggle: true});
  var didFire = false;

  var $component = this.append();
  Ember.run(function () {
    $component.on('collapseOffCanvas', function () {
      didFire = true;
    });
    $component.trigger('click');
  });

  assert.ok(didFire, 'collapseOffCanvas event fired');
});

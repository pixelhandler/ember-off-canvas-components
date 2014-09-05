moduleForComponent('off-canvas-opener');

test('element tagName is off-canvas-opener', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'off-canvas-opener', 'matches `off-canvas-opener`');
});

test('when clicked triggers "expandOffCanvas" event', function() {
  expect(1);
  var component = buildComponent(this);
  var didFire = false;

  Ember.run(function () {
    Ember.$('off-canvas-opener').on('expandOffCanvas', function () {
      didFire = true;
    });
  });

  click('off-canvas-opener');
  stop();

  andThen(function () {
    Ember.run.later(function () {
      ok(didFire, 'expandOffCanvas event fired');
      start();
    }, 600);
  });
});

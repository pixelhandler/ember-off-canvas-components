moduleForComponent('off-canvas-closer');

test('element tagName is off-canvas-closer', function() {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'off-canvas-closer', 'matches `off-canvas-closer`');
});

test('when clicked triggers "collapseOffCanvas" event', function() {
  expect(1);
  var component = buildComponent(this);
  var didFire = false;

  Ember.run(function () {
    Ember.$('off-canvas-closer').on('collapseOffCanvas', function () {
      didFire = true;
    });
  });

  click('off-canvas-closer');
  stop();

  andThen(function () {
    Ember.run.later(function () {
      ok(didFire, 'expandOffCanvas event fired');
      start();
    }, 600);
  });
});

moduleForComponent('off-canvas-opener', 'off-canvas-opener', {
  teardown: function() {
    App.reset();
  }
});

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

test('when useToggle is true, click triggers "toggleOffCanvas" event', function() {
  expect(1);
  var component = buildComponent(this, {useToggle: true});
  var didFire = false;

  Ember.run(function () {
    Ember.$('off-canvas-opener').on('toggleOffCanvas', function () {
      didFire = true;
    });
  });

  click('off-canvas-opener');
  stop();

  andThen(function () {
    Ember.run.later(function () {
      ok(didFire, 'toggleOffCanvas event fired');
      start();
    }, 600);
  });
});

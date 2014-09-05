moduleForComponent('eoc-viewport');

test('element tagName is eoc-viewport', function () {
  expect(1);
  var component = buildComponent(this);

  equal(component.get('tagName'), 'eoc-viewport', 'matches `eoc-viewport`');
});

test('expandOffCanvas event sets active property to true', function () {
  expect(2);
  var component = buildComponent(this);

  equal(component.get('active'), false, 'default value for active prop is false');

  Ember.run(function () {
    Ember.$(component.get('element')).trigger('expandOffCanvas');
  });

  equal(component.get('active'), true, 'expandOffCanvas event sets active prop to true');
});

/*
test('collapseOffCanvas event sets active property to false', function () {
  expect(2);
  var component = buildComponent(this, { active: true });

  equal(component.get('active'), true, 'value for active prop is true');

  Ember.run(function () {
    Ember.$(component.get('element')).trigger('collapseOffCanvas');
    stop();
  });

  Ember.run.later(function () {
    equal(component.get('active'), false, 'collapseOffCanvas event sets active prop to false');
    start();
  }, 150);
});
*/

test('toggleOffCanvas event sets active property from false to true', function () {
  expect(2);
  var component = buildComponent(this);

  equal(component.get('active'), false, 'default value for active prop is false');

  Ember.run(function () {
    Ember.$(component.get('element')).trigger('toggleOffCanvas');
  });

  equal(component.get('active'), true, 'toggleOffCanvas event sets active prop to true');
});

/*
test('toggleOffCanvas event sets active property from true to false', function () {
  expect(2);
  var component = buildComponent(this, { active: true });

  equal(component.get('active'), true, 'value for active prop is true');

  Ember.run(function () {
    Ember.$(component.get('element')).trigger('toggleOffCanvas');
  });

  equal(component.get('active'), false, 'toggleOffCanvas event sets active prop to false');
});
*/

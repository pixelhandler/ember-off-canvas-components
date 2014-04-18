moduleForComponent('ella-sample');

test('component should not be activated', function() {
  expect(2);
  var component = buildComponent(this);

  ok(!component.get('activated'));

  andThen(function() {
    ok(find('ella-sample').text().trim() === 'Click me');
  });
});

test('component should activate when clicked', function() {
  expect(1);
  var component = buildComponent(this);

  click('#' + component.get('elementId'));

  andThen(function() {
    ok(component.get('activated'));
  });
});

test('component should increment tests when clicked', function() {
  expect(1);
  var component = buildComponent(this);
  var tests = parseInt(component.get('tests'), 10);

  click('ella-sample');

  andThen(function() {
    ok(component.get('tests') === (tests + 1));
  });
});

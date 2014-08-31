moduleForComponent('off-canvas');

test('component should not be activated', function() {
  expect(2);
  var component = buildComponent(this);

  ok(!component.get('activated'));

  andThen(function() {
    ok(find('off-canvas').text().trim() === 'Contents');
  });
});

//test('component should activate when clicked', function() {
  //expect(6);
  //var component = buildComponent(this);

  //ok(!component.get('activated'));
  //equal(component.get('_activated'), null);
  //ok(!component.$().attr('activated'));

  //click('#' + component.get('elementId'));

  //andThen(function() {
    //ok(component.get('activated'));
    //equal(component.get('_activated'), 'true');
    //equal(component.$().attr('activated').trim(), 'true');
  //});
//});

App.ApplicationView = Ember.View.extend({
  template: function () {/*
    {{#eoc-viewport}}
      {{#on-canvas}}
        {{#off-canvas-opener}}
          <i class="fa fa-bars"></i>
        {{/off-canvas-opener}}
        <br>
        <div class="on-canvas-body">
          <p>On Canvas Contents</p>
        </div>
      {{/on-canvas}}

      {{#off-canvas}}
        {{#off-canvas-closer}}
          <i class="fa fa-times"></i>
        {{/off-canvas-closer}}
        <br>
        <div class="off-canvas-body">
          <p>Off Canvas Contents</p>
        </div>
      {{/off-canvas}}
    {{/eoc-viewport}}
  */}.compile()
});

module('Acceptance', {
  teardown: function() {
    App.reset();
  }
});

test('Off canvas panel default position is outside the viewport', function () {
  expect(2);
  visit('/');

  andThen(function () {
    var onCanvas = $('on-canvas');
    var offCanvas = $('off-canvas');
    var onCanvasPositionLeft = Math.round(onCanvas.position().left);
    equal(onCanvasPositionLeft, 0, 'On Canvas left position is zero');

    var onCanvasWidth = Math.round(onCanvas.width());
    var offCanvasPositionLeft = Math.round(offCanvas.position().left);
    equal(onCanvasWidth, offCanvasPositionLeft, 'Off canvas is outside of viewport');
  });
});

test('Click on off-canvas-opener brings off-canvas inside viewport, pulling on-canvas outside', function () {
  expect(2);
  visit('/');

  andThen(function () {
    click('off-canvas-opener');

    andThen(function () {
      var onCanvas = $('on-canvas');
      var offCanvas = $('off-canvas');
      stop();

      Ember.run.later(function () {
        start();
        var msg = 'On Canvas left position the same as the width of the off canvas element.';
        var onCanvasPositionLeft = Math.round(onCanvas.position().left);
        var offCanvasWidth = Math.round(offCanvas.width());
        equal(onCanvasPositionLeft, (0 - offCanvasWidth), msg);

        var offCanvasPositionLeft = Math.round(offCanvas.position().left);
        var onCanvasWidth = Math.round(onCanvas.width());
        equal(offCanvasPositionLeft, (onCanvasWidth - offCanvasWidth), 'Off canvas is inside of viewport');
      }, 600);
    });
  });
});

test('Click on off-canvas-closer pushes off-canvas outside viewport, pulling on-canvas inside', function () {
  expect(3);
  visit('/');

  andThen(function () {
    click('off-canvas-opener');

    andThen(function () {
      var onCanvas = $('on-canvas');
      var offCanvas = $('off-canvas');
      stop();

      Ember.run.later(function () {
        start();
        var offCanvasPositionLeft = Math.round(offCanvas.position().left);
        var onCanvasWidth = Math.round(onCanvas.width());
        var offCanvasWidth = Math.round(offCanvas.width());
        equal(offCanvasPositionLeft, (onCanvasWidth - offCanvasWidth), 'Off canvas is inside of viewport');

        click('off-canvas-closer');

        andThen(function () {
          stop();

          Ember.run.later(function () {
            start();
            var _onCanvas = $('on-canvas');
            var _offCanvas = $('off-canvas');
            var _onCanvasWidth = Math.round(_onCanvas.width());
            equal(Math.round(_onCanvas.position().left), 0, 'On Canvas left position is zero');
            equal(Math.round(_offCanvas.position().left), _onCanvasWidth, 'Off canvas is outside of viewport');
          }, 700);
        });
      }, 700);
    });
  });
});

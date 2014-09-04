import EOCViewportComponent from './components/eoc-viewport-component';
import OnCanvasComponent from './components/on-canvas-component';
import OffCanvasComponent from './components/off-canvas-component';
import OffCanvasTemplate from './templates/main-css';
import OffCanvasOpenerComponent from './components/off-canvas-opener-component';
import OffCanvasCloserComponent from './components/off-canvas-closer-component';

import { Application } from 'ember';

Application.initializer({
  name: 'off-canvas-ui',

  initialize: function(container, application) {
    container.register('component:eoc-viewport', EOCViewportComponent);
    container.register('component:on-canvas', OnCanvasComponent);
    container.register('component:off-canvas', OffCanvasComponent);
    container.register('component:off-canvas-opener', OffCanvasOpenerComponent);
    container.register('component:off-canvas-closer', OffCanvasCloserComponent);
    container.register('template:components/off-canvas-css', OffCanvasTemplate);

    var customEvents = application.get('customEvents') || {};
    customEvents.toggleOffCanvas = 'toggleOffCanvas';
    application.set('customEvents', customEvents);
  }
});

export {
  EOCViewportComponent,
  OnCanvasComponent,
  OffCanvasComponent,
  OffCanvasOpenerComponent,
  OffCanvasCloserComponent
};

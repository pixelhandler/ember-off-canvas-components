import OffCanvasComponent      from './components/off-canvas-component';
import OffCanvasTemplate       from './templates/main-css';
import { Application }          from 'ember';

Application.initializer({
  name: 'off-canvas',
  initialize: function(container) {
    container.register('component:off-canvas', OffCanvasComponent);
    container.register('template:components/off-canvas-css', OffCanvasTemplate);
  }
});

export {
  OffCanvasComponent
};

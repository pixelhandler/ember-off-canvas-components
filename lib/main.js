import EllaSampleComponent      from './components/ella-sample-component';
import EllaSampleTemplate       from './templates/main-css';
import { Application }          from 'ember';

Application.initializer({
  name: 'ella-sample',
  initialize: function(container) {
    container.register('component:ella-sample', EllaSampleComponent);
    container.register('template:components/ella-sample-css', EllaSampleTemplate);
  }
});

export {
  EllaSampleComponent
};

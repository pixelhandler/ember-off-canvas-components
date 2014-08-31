// Replace with your own global namespace.
var MY_JS_GLOBAL_NAMESPACE = 'OCC';

// Replace with your own package name.
var MY_JS_PACKAGE_NAME = 'ember-off-canvas-component';





// <!> EDIT BELOW AT YOUR OWN RISK <!>

var outputConfig = {
  global: MY_JS_GLOBAL_NAMESPACE,
  packageName: MY_JS_PACKAGE_NAME,
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
};

try {
  if (window) {
    window.ECB_OUTPUT_CONFIG = outputConfig;
  }
} catch(e) {}

try {
  if (module) {
    module.exports = outputConfig;
  }
} catch(e) {}

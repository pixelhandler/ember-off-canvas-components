// Regular expression camelization
var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

// An object for keeping references to Broccoli plugins
var plugins = {};

// Convert Handlebars templates and Coffeescript into Javascript
var preprocess = function(tree) {
  // Precompile Handlebars templates
  tree = plugins.broccoliEmberHbsTemplateCompiler(tree, {module: true});

  // Transpile Coffeescript into Javascript
  tree = plugins.broccoliCoffee(tree, {
    bare: true
  });

  return tree;
};

// Convert Broccoli plugin names into camelized strings
var camelize = function(str) {
  return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match, separator, chr) {
    return match.toLowerCase();
  });
};

// Looks at dependencies specified in package.json, requires broccoli plugins
// and adds them to the plugins object.
require('matchdep').filterDev('broccoli-*').forEach(function(p, idx) {
  // Avoid errors. Do not require CLI dependencies
  if (['broccoli-cli', 'broccoli-timepiece'].indexOf(p) < 0) {
    plugins[camelize(p)] = require(p);
  }
});

var lib = 'lib',
    styles = 'styles',
    env = plugins.broccoliEnv.getEnv(),
    sourceTrees,
    pkg,
    css;

// Grab a reference to the 'lib' directory. This is where all the component
// code should be developed
lib = plugins.broccoliStaticCompiler(lib, {
  srcDir: '/',
  destDir: '/'
});

// Prepare styles located in the "styles" directory
styles = plugins.broccoliStaticCompiler(styles, {
  srcDir: '/',
  destDir: '/styles'
});

// Convert SASS to CSS
styles = plugins.broccoliSass([styles], 'styles/main.scss', 'templates/main-css.css');

// Autoprefixer adds and removes vendor prefixes from stylesheets as needed
styles = plugins.broccoliAutoprefixer(styles, {});

// We're using ic-styles, a strategy that injects component styles only when
// this component is used
styles = plugins.broccoliFileMover(styles, {
  srcFile: 'templates/main-css.css',
  destFile: 'templates/main-css.hbs'
});

// Combine code and styles into a single tree
sourceTrees = [lib, styles];
pkg = new plugins.broccoliMergeTrees(sourceTrees, { overwrite: true });

// Compile all the things!
pkg = preprocess(pkg);

// module.exports = pkg; return; // Stop here to inspect package structure

var outputJs = plugins.broccoliDistEs6Module(pkg, {
  global: 'Emberella.Component',
  packageName: 'ella-sample',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});

module.exports = outputJs;

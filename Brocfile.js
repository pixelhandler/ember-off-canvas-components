var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

var plugins = {};

var preprocess = function(tree) {
  tree = plugins.broccoliEmberHbsTemplateCompiler(tree, {module: true});
  tree = plugins.broccoliCoffee(tree, {
    bare: true
  });
  return tree;
};

var camelize = function(str) {
  return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match, separator, chr) {
    return match.toLowerCase();
  });
};

require('matchdep').filterDev('broccoli-*').forEach(function(p, idx) {
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

lib = plugins.broccoliStaticCompiler(lib, {
  srcDir: '/',
  destDir: '/'
});

styles = plugins.broccoliStaticCompiler(styles, {
  srcDir: '/',
  destDir: '/styles'
});
styles = plugins.broccoliSass([styles], 'styles/main.scss', 'templates/main-css.css');
styles = plugins.broccoliAutoprefixer(styles, {});
styles = plugins.broccoliFileMover(styles, {
  srcFile: 'templates/main-css.css',
  destFile: 'templates/main-css.hbs'
});

sourceTrees = [lib, styles];

pkg = new plugins.broccoliMergeTrees(sourceTrees, { overwrite: true });
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

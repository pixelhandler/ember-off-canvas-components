plugins = process.plugins;

module.exports = function(styles) {
  // Prepare styles located in the "styles" directory
  styles = plugins.staticCompiler(styles, {
    srcDir: '/',
    destDir: '/styles'
  });

  // Convert SASS to CSS
  styles = plugins.sass([styles], 'styles/main.scss', 'templates/main-css.css');

  // Autoprefixer adds and removes vendor prefixes from stylesheets as needed
  styles = plugins.autoprefixer(styles, {});

  styles = plugins.csso(styles, {});

  // We're using ic-styles, a strategy that injects component styles only when
  // this component is used
  styles = plugins.fileMover(styles, {
    srcFile: 'templates/main-css.css',
    destFile: 'templates/main-css.hbs'
  });

  return styles;
};

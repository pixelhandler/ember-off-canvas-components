plugins = process.plugins;

module.exports = function() {
  var bowerFiles = [
    plugins.staticCompiler('bower_components/jquery/dist', {
      files: ['jquery.js'],
      srcDir: '/',
      destDir: '/bower_components/jquery/dist'
    }),

    plugins.staticCompiler('bower_components/handlebars', {
      files: ['handlebars.js'],
      srcDir: '/',
      destDir: '/bower_components/handlebars'
    }),

    plugins.staticCompiler('bower_components/ember', {
      files: ['ember.js'],
      srcDir: '/',
      destDir: '/bower_components/ember/'
    }),

    plugins.staticCompiler('bower_components/ic-styled', {
      files: ['main.js'],
      srcDir: '/',
      destDir: '/bower_components/ic-styled'
    })
  ];

  bowerFiles = plugins.mergeTrees(bowerFiles);

  return bowerFiles;
};

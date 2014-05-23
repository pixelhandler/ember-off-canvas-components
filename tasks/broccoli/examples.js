plugins = process.plugins;

module.exports = function(examples) {
  return plugins.staticCompiler(examples, {
    srcDir: '/',
    destDir: '/examples'
  });
};

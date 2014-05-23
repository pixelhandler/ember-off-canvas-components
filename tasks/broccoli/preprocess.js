plugins = process.plugins;

module.exports = function(tree) {
  // Precompile Handlebars templates
  tree = plugins.emberHbsTemplateCompiler(tree, {module: true});

  // Transpile Coffeescript into Javascript
  tree = plugins.coffee(tree, {
    bare: true
  });

  return tree;
};

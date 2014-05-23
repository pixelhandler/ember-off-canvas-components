plugins = process.plugins;

module.exports = function(tree) {
  return plugins.distEs6Module(tree, require('../../output'));
};

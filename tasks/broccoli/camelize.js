// Regular expression camelization
var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

module.exports = function(str) {
  return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match, separator, chr) {
    return match.toLowerCase();
  });
};

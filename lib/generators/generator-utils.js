/**
 * Adds path support
 *
 * @api public
 */

function mixinFullPath (generator, fileNamePrefix) {
  fileNamePrefix = fileNamePrefix || '';

  var matches = generator.name.match(new RegExp('^(.*?)([^/]+)$'));
  var path = matches[1];
  var fileName = matches[2];

  generator.name = fileNamePrefix + fileName;
  generator.fullPath = path + generator.name;
}

/**
 * Module exports.
 */

module.exports = {
  mixinFullPath: mixinFullPath
};
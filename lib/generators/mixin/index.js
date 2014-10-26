/**
 * Module dependencies.
 */

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var generatorUtils = require('../generator-utils');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/'));

  this.option('capitalize');
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate files for a Flight mixin
 *
 * @api public
 */

Generator.prototype.createMixinFiles = function createMixinFiles() {
  this.name = this.name || 'my_component';

  generatorUtils.mixinFullPath(this, 'with_');

  this.template('mixin.js', 'app/js/component/' + this.fullPath + '.js');
  this.template('spec.js', 'test/spec/component/' + this.fullPath + '.spec.js', {
    'requirePath': 'component/' + this.fullPath,
    'type': 'mixin'
  });
};

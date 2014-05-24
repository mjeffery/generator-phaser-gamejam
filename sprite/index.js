var util = require('util');
var yeoman = require('yeoman-generator');

var validate = require('../lib/validate');

function isSpritesheet(props) {
	return props.assetType === 'spritesheet';
}

var PhaserSpriteGenerator = yeoman.generators.NamedBase.extend({
	_isSpritesheet: function(props) {
		return props.assetType === 'spritesheet';
	},

	askFor: function() {
		var done = this.async();

		var prompts = [{
			type: 'input',
			name: 'assetFile',
			message: 'What is the asset filename?',
			default: this._.humanize(this.name).toLowerCase() + '.png'
		},
		{
			type: 'list',
			name: 'assetType',
			message: 'What type of asset is it?',
			choices: ['spritesheet', 'image'],
			default: 0
		},
		{	
			type: 'input',
			name: 'framewidth',
			when: this._isSpritesheet, 
			message: 'What is the framewidth?',
			default: 32,
			validate: validate.number.bind(this)
		},
		{
			type: 'input',
			name: 'frameheight',
			when: this._isSpritesheet,
			message: 'What is the frame height?',
			default: 32,
			validate: validate.number.bind(this)
		}];

		this.prompt(prompts, function(props) {
			this.assetName = this._.dasherize(props.assetFile);
			this.assetFile = props.assetFile;
			this.assetType = props.assetType;
			this.framewidth = props.framewidth;
			this.frameheight = props.frameheight;
			this.constructor = this._.chain(this.name).camelize().capitalize().value();

			done();
		}.bind(this));
	},

	sprite: function() {
		this.template('_sprite.js', 'src/scripts/' + this.constructor + '.js');
	}
}); 

module.exports = PhaserSpriteGenerator;

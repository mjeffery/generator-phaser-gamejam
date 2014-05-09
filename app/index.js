'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

function validate(input) {
  var value = parseInt(input, 10);
  if(isNaN(value))
    return 'value must be a number';
  else if(value <= 0) 
    return 'value must be greater than zero';
  else
    return true;
}

var PhaserGamejamGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic PhaserGamejam generator.'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: "What is your game's name?",
      default: this.appname 
    },
    {
      type: 'input',
      name: 'width',
      message: 'What is the canvas width?',
      default: 640,
      validate: validate.bind(this)
    },
    {
      type: 'input',
      name: 'height',
      message: 'What is the canvas height?',
      default: 480,
      validate: validate.bind(this)
    }];

    this.prompt(prompts, function (props) {
      this.projectName = this._.camelize(props.projectName);
      this.width = props.width;
      this.height = props.height;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/assets');
    this.mkdir('src/assets/img');
    this.mkdir('src/assets/font');
    this.mkdir('src/scripts');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('Gruntfile.js', 'Gruntfile.js');

    this.copy('src/_index.html', 'src/index.html');
    this.copy('src/_style.css', 'src/style.css');
    this.copy('src/scripts/_main.js', 'src/scripts/main.js');
    this.copy('src/scripts/Boot.js', 'src/scripts/Boot.js');
    this.copy('src/scripts/_Preload.js', 'src/scripts/Preload.js');
    this.copy('src/scripts/Game.js', 'src/scripts/Game.js');

    this.copy('src/assets/img/loading bar bg.png', 'src/assets/img/loading bar bg.png');
    this.copy('src/assets/img/loading bar.png', 'src/assets/img/loading bar.png');
    this.copy('src/assets/font/minecraftia.png','src/assets/font/minecraftia.png');
    this.copy('src/assets/font/minecraftia.xml','src/assets/font/minecraftia.xml');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = PhaserGamejamGenerator;
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


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
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/assets');
    this.mkdir('src/assets/img');
    this.mkdir('src/scripts');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('Gruntfile.js', 'Gruntfile.js');

    this.copy('src/_index.html', 'src/index.html');
    this.copy('src/_style.css', 'src/style.css');
    this.copy('src/scripts/_main.js', 'src/scripts/main.js');
    this.copy('src/scripts/Boot.js', 'src/scripts/Boot.js');
    this.copy('src/scripts/_Preload.js', 'src/scripts/Preload.js');

    this.copy('src/assets/img/loading bar bg.png', 'src/assets/img/loading bar bg.png');
    this.copy('src/assets/img/loading bar.png', 'src/assets/img/loading bar.png');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = PhaserGamejamGenerator;
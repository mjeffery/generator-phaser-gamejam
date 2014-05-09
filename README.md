# generator-phaser-gamejam

A [Yeoman](http://yeoman.io) generator for my [Phaser](http://phaser.io) gamejam workflow

### Getting Started

Install Yeoman, [Bower](http://bower.io), and the [Grunt](http://gruntjs.com/) CLI from the from the [npm](https://npmjs.org) package repository.  

```
$ npm install -g yo grunt-cli bower
```

You will need to have [node](http://nodejs.org/) installed. For Windows users I also recommend [git bash](http://msysgit.github.io/).


This generator is not hosted on npm, so you will need to clone the repository and then use [npm link](https://www.npmjs.org/doc/cli/npm-link.html) to add it to the npm cache.

```
$ git clone https://github.com/mjeffery/generator-phaser-gamejam.git
$ cd generator-phaser-gamejam
$ npm link
```

Create a project folder and the run the generator from inside with

```
$ yo phaser-gamejam
```

### Developing

After the project is scaffolded you can find all the application code in the `src` folder.  Run the `serve` command to launch the development server. The page will live reload as you make changes to your code files.

```
$ grunt serve
```

You should add new script files in the `src/scripts` directory and add them to `src/index.html` inside of the "game.js" build block.  These files will be minified during the build process.

```html
  <head>
    ...
    <!-- build:js game.js -->
    <script src="scripts/newFileGoesHere.js"></script>
    <script src="scripts/Boot.js"></script>
    <script src="scripts/Preload.js"></script>
    <script src="scripts/Game.js"></script>
    <script src="scripts/main.js"></script>
    <!-- endbuild -->
    ...
```

You should add new assets in the `src/assets` folder. This folder will be processed during the build.

### Building

When you're ready to deploy a build, run the `dist` command to build a distribution and launch a local server. 

```
$ grunt dist
```

All source files will be concatenated and minified.  The contents of the `assets` folder will processed for cache-busting and references in any Phaser loading code will be rewritten to match.

The completed build will be in the `dist` folder. This folder can be hosted as-is (perhaps as a github page). 





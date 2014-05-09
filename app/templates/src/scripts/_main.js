var game = new Phaser.Game(<%= width %>, <%= height %>, Phaser.AUTO, 'game-container');

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('game', Game);

game.state.start('boot');
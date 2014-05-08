var game = Phaser.Game(<%= width %>, <%= height %>, Phaser.AUTO, 'game-container');

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('main-menu', MainMenu);

game.state.start('boot');
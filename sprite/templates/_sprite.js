(function(exports) {
	function <%= constructor %>(game, x, y) {
		Phaser.Sprite.call(this, game, x, y, '<%= assetName %>');
	}

	_.extend(<%= constructor %>, {
		preload: function(load) {
			<% if(assetType === 'spritesheet') { %>load.spritesheet('<%= assetName %>', '<%= 'assets/image/' + assetFile %>', <%= framewidth %>, <%= frameheight %>)i;<% } else { %>load.image('<%= assetName %>', '<%= 'assets/spritesheet/' + assetFile %>');<% } %>
		}
	});

	<%= constructor %>.prototype = Object.create(Phaser.Sprite.prototype);
	<%= constructor %>.prototype.constructor = <%= constructor %>;

	_.extend(<%= constructor %>.prototype, {
	});

	exports.<%= constructor %> = <%= constructor %>;
})(this);
	

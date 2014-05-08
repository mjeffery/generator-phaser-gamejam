(function(exports) {
	function Preload() {}

	Preload.prototype = {
		preload: function() {
			var x = <%= width - 150 %>,
				y = <%= height - 4 %>
				add = this.add,
				load = this.load;

			add.sprite(x, y, 'loading-bar-bg');

			var loadingBar = add.sprite(x, y, 'loading-bar');
			load.setPreloadSprite(loadingBar);

			// Preload content here

			load.onLoadComplete.addOnce(this.onLoadComplete, this);					
		},
		create: function() {
			this.stage.backgroundColor = '#000000';
		},
		onLoadComplete: function() {
			this.state.start('main-menu');
		}
	};

	exports.Preload = Preload;
})(this);
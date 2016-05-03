var preload = function(game){}

preload.prototype = {
	preload: function(){
        this.game.load.image("play", "assets/play.png");

        this.game.load.image('bird', 'assets/bird.png');
        this.game.load.image('pipe', 'assets/pipe.png');

        // Load the jump sound
        this.game.load.audio('jump', 'assets/jump.wav');

	},
  	create: function(){
		this.game.state.start("menu");
	}
}

var gameover = function(game){}


gameover.prototype = {
  preload: function(){

  },
  create: function(){

    var playButton = this.game.add.button(100,100,"play", this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
    this.game.state.start("play" );
  }

}

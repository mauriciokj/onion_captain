var menu = function(game){}


menu.prototype = {
  preload: function(){

  },
  create: function(){
    var backgroud = this.game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'background');
    backgroud.height = game.height;
    backgroud.anchor.setTo(0.5, 0.5);
    backgroud.fixedToCamera = true;
    backgroud.smoothed = false;

    var playButton = this.game.add.button(200, 350,"play", this.playTheGame, this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
    this.game.state.start("play");
  }
}

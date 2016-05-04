var gameover = function(game){}

gameover.prototype = {
  preload: function() {},

  create: function() {
    var playButton = this.game.add.button(200, 350,"play", this.playTheGame, this);
    var scoreMessage = this.buildScoreMessage();
    var scoreTextStyle = { font: "20px Arial", fill: "#ffffff" }
    var scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, scoreMessage, scoreTextStyle);

    scoreText.anchor.setTo(0.5, 0.5);
    playButton.anchor.setTo(0.5,0.5);
  },

  playTheGame: function() {
    this.game.state.start("play");
  },

  buildScoreMessage: function() {
    var message;

    if (SCORE == 0) {
      message = "ROLOU UMA QUEBRA, nenhum ponto.";
    } else if (SCORE < 5) {
      message = "Você foi Moicezer e fez só " + SCORE + " pontos.";
    } else if (SCORE >= 5 && SCORE <= 15) {
      message = "Parabéns Galera! Você fez " + SCORE + " pontos.";
    } else {
      message = "Grande Gluvco está orgulhoso " + SCORE + " pontos.";
    }

    return message
  }
}

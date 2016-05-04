var x = 400;
var y = 490;
SCORE = 0

var game = new Phaser.Game(x, y, Phaser.CANVAS, '')
game.state.add("Preload",preload);
game.state.add("boot",boot);
game.state.add("menu",menu);
game.state.add("play",play);
game.state.add("gameover", gameover)
game.state.start("boot");

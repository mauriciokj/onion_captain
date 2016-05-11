var play = function(game){}

play.prototype = {
  preload: function(){
    game.stage.backgroundColor = '#71c5cf';
    game.load.image('bird', 'assets/bird.png');
    game.load.image('pipe', 'assets/pipe.png');
    game.load.image('pudim', 'assets/pudim.png');

    game.load.audio('jump', 'assets/jump.wav');
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.pudim = this.game.add.sprite(1000, 1000, 'pudim');
    this.pipes = game.add.group();
    this.pipes.enableBody = true;
    this.pipes.createMultiple(20, 'pipe');
    this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);

    this.bird = this.game.add.sprite(100, 245, 'bird');
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;
    this.bird.anchor.setTo(-0.2, 0.5);


    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
    this.input.onDown.add(this.jump, this);

    SCORE = 0;
    this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });

    // Add the jump sound
    this.jumpSound = this.game.add.audio('jump');
  },

  update: function() {
    if (this.bird.inWorld == false){
      this.game.state.start("gameover");
    }

    game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);
    game.physics.arcade.overlap(this.bird, this.pudim, this.hitPudim, null, this);

    if (this.bird.angle < 20)
      this.bird.angle += 1;
  },
  jump: function() {
    if (this.bird.alive == false)
      return;

    this.bird.body.velocity.y = -350;

    game.add.tween(this.bird).to({angle: -20}, 100).start();

    this.jumpSound.play();
  },

  hitPipe: function() {
    if (this.bird.alive == false)
      return;

    this.bird.alive = false;

    this.game.time.events.remove(this.timer);
    this.pudim.body.velocity.x = 0;
    this.pipes.forEachAlive(function(p){
      p.body.velocity.x = 0;
    }, this);
  },

  hitPudim: function() {
    this.pudim.kill()
    SCORE ++;
    this.labelScore.text = SCORE;

  },

  addOnePipe: function(x, y) {
    var pipe = this.pipes.getFirstDead();

    pipe.reset(x, y);
    pipe.body.velocity.x = -200;
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },

  addPudim: function(x,y){
    game.physics.arcade.enable(this.pudim);
    this.pudim.reset(x, y);
    this.pudim.body.velocity.x = -200;
    this.pudim.checkWorldBounds = true;

  },

  addRowOfPipes: function() {
    var hole = Math.floor(Math.random()*5)+1;

    for (var i = 0; i < 8; i++)

      if (i == hole){
        this.addPudim(400, i*60+40);
      } else if (i != hole && i != hole +1){
        this.addOnePipe(400, i*60+10);
      }

    },


  }

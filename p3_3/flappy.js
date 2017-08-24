var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var player;
//var generate = 3 * Phaser.Timer.SECOND;
var score =0;
var labelScore;
var ObjectA;
var ObjectB;
var ObjectC;




function preload(){
game.load.image("backgroundImg", "../assets/download.jpeg");
game.load.image("Image", "../assets/player.png");
game.load.image("ObjectA", "../assets/A.png");
game.load.image("ObjectB", "../assets/C.png");
game.load.image("ObjectC", "../assets/D.png");



}

function create() {

  var background = game.add.image(0,0, "backgroundImg");
  background.width = 790;
  width = background.width;
  background.height = 400;
  height = background.height;
  player = game.add.sprite(150, 100, "Image");
  labelScore = game.add.text(20, 20, "0");
   game.stage.setBackgroundColor("#FFFF00");
  ObjectA = game.add.sprite( "ObjectA");
  ObjectB = game.add.sprite( "ObjectB");
  ObjectC = game.add.sprite( "ObjectC");
    player.anchor.setTo(-4, -3);
    game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(player);
   game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
 .onDown.add(moveRight);
 game.input.keyboard.addKey(Phaser.Keyboard.UP)
 .onDown.add(moveUp);
 game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
 .onDown.add(moveDown);
 game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
 .onDown.add(moveLeft);








}


function update() {

  game.physics.arcade.overlap(
    player,
  //  ObjectA,
    //ObjectB,
    //ObjectC,
    collide);

    gameOver();

    game.physics.arcade.collide(player, ObjectA, ObjectB, ObjectC, collide);
    game.time.events.repeat(Phaser.Timer.SECOND * 3, generate, generate2);














}

function generate(){
  var diceRoll = game.rnd.integerInRange(1, 3);
  if (diceRoll == 1) {
    generateObjectA();
  }else if(diceRoll == 2) {
    generateObjectB();
  }  else {
    generateObjectC();
  }


}

function moveRight() {
  player.x = player.x + 20;

}

function moveUp() {
  player.y = player.y - 20;
}


function moveDown() {
  player.y = player.y +20;
}


function moveLeft() {
  player.x = player.x -20;
}

function collide() {

  if (player.x === ObjectA.x) {
  ObjectA.destroy();
  score = score +5; }
  if (player.x ===  ObjectB.x) {
  ObjectB.destroy();
  score = score -5; }
  if (player.x === ObjectC.x) {
  ObjectC.destroy();
  score = math.sqrt(score); }
  labelScore.setText(score.toString());
}

function gameOver(){
if (score  < 0)
location.reload();
}

function generate2(){
  if(score >11);
  var diceRoll = game.rnd.integerInRange(1, 5);
  if (diceRoll == 1) {
    generateObjectA();
  }else if(diceRoll == 2,3,4) {
    generateObjectB();
  }  else {
    generateObjectC();
  }


}

function generateObjectA(){
  var ObjectA = game.add.sprite(game.rnd.width.height,"ObjectA");
  game.add.tween(ObjectA).to( 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

function generateObjectB(){
  var ObjectB = game.add.sprite(game.rnd.width.height,"ObjectB");
  game.add.tween(ObjectB).to( 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

function generateObjectC(){
  var ObjectC = game.add.sprite(game.rnd.width.height,"ObjectC");
  game.add.tween(ObjectC).to( 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

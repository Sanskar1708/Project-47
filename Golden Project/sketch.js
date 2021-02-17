var background1;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63,w64,w65,w66,w67,w68,w69,w70,w71,w72,w73,w74,w75,w76,w77,w78,w79,w80,w81,w82,w83,w84,w85,w86,w87,w88,w89,w90,w91,w92,w93,w94,w95,w96,w97,w98,w99,w100;
var player1;
var playerImage;
var player,form,game;
var playerCount = 0;
var gameState = 0;
var wallGroup;
var GameOverloseImage;
var GameOverwonImage
var GameOver;
var database;
var monster1, monster1Image, monster1Group
var monster2, monster2Image, monster2Group
var monster3, monster3Image, monster3Group
var monster4, monster4Image, monster4Group
// var gameStart = true;
var allPlayers = [];

function preload() {
    background1 = loadImage("Images/Maze level 1.png")
    playerImage = loadImage("Images/Player 1.png");
    monster1Image = loadImage("Images/Monster 1.png");
    monster2Image = loadImage("Images/Monster 2.png");
     monster3Image = loadImage("Images/Monster 3.png");
     monster4Image = loadImage("Images/Monster 4.png");
     GameOverloseImage = loadImage("Images/game over lose.jpg");
     GameOverwonImage = loadImage("Images/game over won.jpg");
}

function setup(){
    var canvas = createCanvas(2000,1500);
    
    wallGroup = new Group();
    monster1Group = new Group();
    monster2Group = new Group();
    monster3Group = new Group();
    monster4Group = new Group();
    database = firebase.database();
    maze1();
    GameOver = createSprite(displayWidth/2 + 20,displayHeight/2,2000,1500);
      
      GameOver.scale = 8
      GameOver.visible = false
    game = new Game();
    game.getState();
    game.start();
};

function draw(){
    background(255)

    if(playerCount === 2){
      game.update(1);
      
    }
    
    if(gameState === 1/* && gameStart === true*/){
      clear();
      game.play();
    }
    
    if (gameState === 2) {
     // gameStart = false
      game.update(2);
      game.end();
      allPlayer = [];
    }

     
  // console.log("X : " + mouseX);
  // console.log("Y : " + mouseY);
  
  
}

function spawnMonster1() {
 if (frameCount % 100 === 0) {
   monster1 = createSprite(random(100,1700), random(100,1400), 10,10);
   monster1.addImage(monster1Image);
   monster1.velocityX = 5;
   monster1.velocityY = 4;
   monster1.lifeTime = 100;
   monster1.scale = 0.5;
   monster1.depth = GameOver.depth
   GameOver.depth = GameOver.depth + 1
   monster1Group.add(monster1);
 }
}

function spawnMonster2() {
  if (frameCount % 50 === 0) {
    monster2 = createSprite(random(100,1700), random(100,1400), 10,10);
    monster2.addImage(monster2Image);
    monster2.velocityX = 5;
    monster2.velocityY = 7;
    monster2.lifeTime = 110;
    monster2.scale = 0.5;
    monster2.depth = GameOver.depth
   GameOver.depth = GameOver.depth + 1
    monster2Group.add(monster2);
  }
 }

 function spawnMonster3() {
  if (frameCount % 80 === 0) {
    monster3 = createSprite(random(100,1700), random(100,1400), 10,10);
    monster3.addImage(monster3Image);
    monster3.velocityX = 8;
    monster3.velocityY = 9;
    monster3.lifeTime = 110;
    monster3.scale = 0.5;
    monster3.depth = GameOver.depth
   GameOver.depth = GameOver.depth + 1
    monster3Group.add(monster3);
  }
 }

 function spawnMonster4() {
  if (frameCount % 130 === 0) {
    monster4 = createSprite(random(100,1700), random(100,1400), 10,10);
    monster4.addImage(monster4Image);
    monster4.velocityX = 12;
    monster4.velocityY = 8;
    monster4.lifeTime = 130;
    monster4.scale = 0.5;
    monster4.depth = GameOver.depth
   GameOver.depth = GameOver.depth + 1
    monster4Group.add(monster4);
  }
 }

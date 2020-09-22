var canvas, backgroundImage;

var GameState = 0;
var PlayerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4, car1Img,  car2Img, car3Img, car4Img, trackImg, groundImg;

function preload(){
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");

  trackImg = loadImage("images/track.jpg");

  groundImg = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(PlayerCount === 4){
    game.update(1);
  }
  if(GameState === 1){
    clear();
    game.play();
  }
  if(GameState === 2){
    game.end();
  }
}

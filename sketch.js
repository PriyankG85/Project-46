const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var startup = 0;
var play = 1;
var gameState = 0;

var engine, world;
var bird, jump_sound, hit_sound, die_sound, point_sound;
var bgImg;

function preload() {
  bgImg = loadImage('images/bg.png');
  jump_sound = loadSound('sounds/wing.wav');
  hit_sound = loadSound('sounds/hit.wav');
  die_sound = loadSound('sounds/die.wav');
  point_sound = loadSound('sounds/point.wav');
}

function setup() {
  createCanvas(displayWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;

  bird = new flappyBird(width / 3, height / 2);

}

function draw() {
  background(0);

  drawSprites();
  Engine.update(engine);

  bird.display();

  if (gameState == 0) {

  }

  if (gameState == 1) {

  }
}

function keyPressed() {
  if ((keyCode == 74 || keyCode == 38) && gameState == 1) {
    Body.applyForce(bird.body, bird.body.position, { x: 0, y: -80 });
    jump_sound.play();
  }
}







var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("../Week_3/assets/moonwalk.jpg");
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  strokeWeight(20);
  stroke(0,127);
  fill(160,0,127);
  tint(255, 204, 0, 153)
  triangle(x, y/2, pointillize, pointillize,random(20),random(15));
}
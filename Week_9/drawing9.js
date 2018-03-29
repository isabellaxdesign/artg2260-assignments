var song;
var button;
var amp;
var vol;

function toggleSong(){
  if(song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

function preload(){
  song= loadSound("assets/intro.mp3");

}

function setup(){
  createCanvas(200,200);
  button=createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw(){
  background(0);
  var vol =amp.getLevel();
  ellipse(100,100,vol *200,vol *200);
  fill(255,240,245);
}
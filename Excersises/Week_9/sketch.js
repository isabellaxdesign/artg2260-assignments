let song,slider,panSlider,rateSlider;

function preload(){
  song = loadSound("assets/simplicity.mp3");
}

function setup() {
  song.play();
  slider = createSlider(0, 1, 0.5, 0.01);
  
  song.pan();
  panSlider=createSlider(-1,1,0,0.1);

  song.rate();
  rateSlider=(0.5,2,1,0.1);
}

function draw(){
  song.setVolume(slider.value());
  song.pan(panSlider.value());
  song.rate(rateSlider.value());
}


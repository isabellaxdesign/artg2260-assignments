var weight = 10;

var buttonWidth = 50; 
var buttonHeight = 50;


function setup() {
	createCanvas(400, 400);
  background(237, 232, 213);
	stroke(0); 
    strokeWeight(weight);
}

function draw(){
	
  
  	if (mouseIsPressed == true) {
      		strokeWeight(weight);
      		line(mouseX, mouseY, pmouseX, pmouseY);
      	}
    }	



function mouseReleased() {
    if ((mouseX > 10) && (mouseX < buttonWidth+5) && (mouseY > 10) && (mouseY < buttonHeight+5)){
      print("The button was clicked."); 
    
      
    }
}

function keyPressed() {
	if (key == 'b' || key == 'B') {
	  stroke(0, 0, 255);
	} else if (key == 'c' || key == 'C'){
	  stroke(0, 255, 255);
	} else if (key == 'm' || key == 'M'){
	  stroke(255, 0, 255);
	} else if (key == 'w' || key == 'W'){
	  stroke(255);
  } else if (key == 'g' || key == 'G'){
    stroke(0, 255, 0);
  } else if (key == 'e' || key == 'E'){
    stroke(237, 232, 213);
	} else if (keyCode == RIGHT_ARROW){
      weight++;
      strokeWeight(weight);
    } else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}
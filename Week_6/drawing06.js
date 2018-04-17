let img;
let planets = []; 

function preload(){
	img = loadImage('hamburger.ong.png');
}

function setup(){
  	createCanvas(300, 300);
  	imageMode(CENTER); // draws the image with the x, y parameters in the center
  	for (let i = 0; i < 5; i++){
        let offset = i*30 + 50;
  		let scale = random(0.05, 0.1);
  		let spinRate = random(-0.01, 0.01);
  		let p = new Planet(offset, scale, spinRate);
  		planets.push(p);
  	}
}

function draw(){
    background(0);
  	push();
	translate(width/2, height/2);		  // move origin to center
  	image(img, 0, 0, width/3, height/3);  // render the "sun"
	for(p of planets){					  // render each planet
		p.update(1);
		p.display();
	}
  	pop();
}

class Planet{
	constructor(_offset, _scale, _rate){
        this.offset = _offset;
		this.scale = _scale;
		this.rate = _rate;
		this.angle = 10;
	}

	update(){
		this.angle += this.rate;
	}

	display(){	
      rotate(this.angle);	// create a rotation around the canvas center
      push();				// enter new drawing state
      	translate(this.offset, 10);	// move the origin some distance to the right (+x)
      	scale(this.scale);          // scale the image around the new origin
      	rotate(this.angle);			// rotate the image around the new origin
      	image(img, 0, 0, width, height); // render the image
      pop();						// exit custom drawing state
	}
}
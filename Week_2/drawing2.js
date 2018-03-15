function setup() {
	createCanvas(400, 400);
	background(50)
	
	for (var i = 0; i < 400; i = i+5){
		rect(i, i+2, 400,400 );
		fill(i*2,i,i+100)
	
	}
}
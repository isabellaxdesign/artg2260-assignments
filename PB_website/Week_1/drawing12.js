function setup(){
	createCanvas(400,400);
	background(143,195,235);
}

function draw(){

	noStroke();


	fill(0,75,0);
	rect(0,300,400,100);
	
	fill(0,0,175);
	rect(150,300,100,100);

	fill(87,45,8);
	rect(325,225,45,75);

	fill(12,87,27);
	triangle(275,260,350,150,385,260);

	fill(255,222,0);
	ellipse(115,75,100,100);

	fill(87,45,8);
	rect(75,225,45,75);

	fill(12,87,27);
	triangle(50,260,100,150,150,260);



}
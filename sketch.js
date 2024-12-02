var fog=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {

background(183, 177, mouseX); //an RGB color for the canvas' background
  //circle
  strokeWeight(5);
  stroke(455,255,227); // an RGB color for the circle's border
  fill(90,130,200,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),20,20); // center of canvas, 20px dia 
  fill(150,fog, 90,mouseX);
  ellipse(250,fog,90,90);
  textFont("Garamond");
  textSize(90);
  text('goodbye',170,mouseY);
  strokeWeight(0);
  ellipse(mouseX,mouseY,100,mouseX);


}
function mousePressed(){
  
if (fog>=200){
  fog=0;

}else{
  fog=fog+1;
}
  }

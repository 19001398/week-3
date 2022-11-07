let angleOne = 0;
let angleTwo = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);
push();
  fill(153,50,204);
  translate(xpos + (xstep * 0), height/2);
  rotate(angleOne);
  rect(0,0,50,50);
  angleOne = angleOne + 1;
pop();

push();
 fill(153,50,204);
 translate(xpos +(xstep * 1), height/2);
 rotate(angleTwo);
 rect(0, 0, 50, 50);
 angleTwo = angleTwo +25;
pop();


}


var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  box1 = new Box();
  box2 = new Box();
}

function draw() {
  background(220);

  box1.show("purple");
  box1.width(100);

  box2.show("blue");
  box2.width(30);
  box2.height(70);
}


var img;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  img = loadImage("hud.png")
}

function draw() {
  // put drawing code here
  fill("LightSkyBlue");
	rect(0, 0, windowWidth, windowHeight);
  ellipse(50, 50, 80, 80);
  image(img, 0, 0);
}
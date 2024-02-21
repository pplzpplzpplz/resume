let prevMouseX = 0;
let prevMouseY = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(25);
  blendMode(SUBTRACT);
}

function draw() {
  background(255);
  noStroke();

  // GREEN
  fill(0, 255, 0, 250);
  circle(convertToWebGLX(prevMouseX), convertToWebGLY(prevMouseY), 50);

  // BLUE
  fill(0, 0, 255, 250);
  circle(convertToWebGLX(pmouseX), convertToWebGLY(pmouseY), 50);

  // RED
  fill(255, 0, 0, 250);
  circle(convertToWebGLX(mouseX), convertToWebGLY(mouseY), 50);

  prevMouseX = pmouseX;
  prevMouseY = pmouseY;
}

// Function to convert mouseX coordinate to WebGL coordinate
function convertToWebGLX(x) {
  return map(x, 0, width, -width / 2, width / 2);
}

// Function to convert mouseY coordinate to WebGL coordinate
function convertToWebGLY(y) {
  return map(y, 0, height, -height / 2, height / 2);
}

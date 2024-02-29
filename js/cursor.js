
// function preload() {
//   font = loadFont('fonts/syne_variable.ttf');
// }

let ppmouseX = 0;
let ppmouseY = 0;
let pos = 0;
let ppos = 0;
let pppos = 0;
let calebText = 'Caleb Wiseman Taylor Moore';

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(20);
  blendMode(SUBTRACT);
  noCursor();

  // FONT
  // textFont(font);
  // textAlign(CENTER, CENTER);
  // textSize(50);
}

function mouseWheel(e) {
  pppos = ppos;
  ppos = pos;
  pos += e.delta;
}

function cursorShape(x, y) {
  beginShape();
  vertex(x + 0, y + 0); // Top point
  vertex(x + 10, y + 10); // Right bottom
  vertex(x + 6, y + 10); // Right top
  vertex(x + 8, y + 17); // Bottom middle
  vertex(x + 5, y + 18); // Bottom left
  vertex(x + 4, y + 11); // Left middle
  vertex(x + 0, y + 14); // Left top
  endShape(CLOSE);
}


function draw() {
  background(255);
  noStroke();

  // RED
  fill(255, 0, 0, 250);
  // translate(convertToWebGLX(), convertToWebGLY(mouseY));
  scale(5);
  cursorShape(mouseX, mouseY);

  // GREEN
  // fill(0, 255, 0, 250);
  // translate(convertToWebGLX(pmouseX), convertToWebGLY(pmouseY));
  // cursorShape();

  // // BLUE
  // fill(0, 0, 255, 250);
  // translate(convertToWebGLX(ppmouseX), convertToWebGLY(ppmouseY));
  // cursorShape();

  ppmouseX = pmouseX;
  ppmouseY = pmouseY;
}

// Functions to convert mouseX and mouseY coordinates to WebGL coordinates
function convertToWebGLX(x) {
  return map(x, 0, width, -width / 2, width / 2);
}
function convertToWebGLY(y) {
  return map(y, 0, height, -height / 2, height / 2);
}


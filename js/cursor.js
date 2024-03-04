
// function preload() {
//   font = loadFont('fonts/syne_variable.ttf');
// }

let ppmouseX = 0;
let ppmouseY = 0;
let pos = 0;
let ppos = 0;
let pppos = 0;
let calebText = 'Caleb Wiseman Taylor Moore';

function hideCanvas() {
  let canvasElement = select('canvas');
  canvasElement.style('display', 'none');
}

function showCanvas() {
  let canvasElement = select('canvas');
  canvasElement.style('display', 'block');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  blendMode(SUBTRACT);
  noCursor();

  let links = selectAll('a');

  links.forEach(link => {
    link.mouseOver(() => {
      // console.log('hover');
      hideCanvas()
    });
    link.mouseOut(() => {
      // console.log('out');
      showCanvas()
    });
  });

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
  vertex(x, y); // Top point
  vertex(x + 17.5, y + 17.5); // Right bottom
  vertex(x + 10.5, y + 17.5); // Right top
  vertex(x + 14.5, y + 29.75); // Bottom middle
  vertex(x + 8.75, y + 31.5); // Bottom left
  vertex(x + 7, y + 19.25); // Left middle
  vertex(x, y + 24.5); // Left top
  endShape(CLOSE);
}


function draw() {
  background(255);
  noStroke();

  let circleSize = 50 + movedX * 5;



  // CURSOR VERSION ////////////////////////////
  // RED
  // scale(1+abs(movedX));
  fill(255, 0, 0, 250);
  cursorShape(convertToWebGLX(mouseX), convertToWebGLY(mouseY))

  // GREEN
  fill(0, 255, 0, 250);
  cursorShape(convertToWebGLX(pmouseX), convertToWebGLY(pmouseY))

  // BLUE
  fill(0, 0, 255, 250);
  cursorShape(convertToWebGLX(ppmouseX), convertToWebGLY(ppmouseY))

  
  // CIRCLE VERSION ////////////////////////////
  // RED
  // fill(255, 0, 0, 250);
  // circle(convertToWebGLX(mouseX), convertToWebGLY(mouseY), circleSize);

  // // GREEN
  // fill(0, 255, 0, 250);
  // circle(convertToWebGLX(pmouseX), convertToWebGLY(pmouseY), circleSize);

  // // BLUE
  // fill(0, 0, 255, 250);
  // circle(convertToWebGLX(ppmouseX), convertToWebGLY(ppmouseY), circleSize);

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


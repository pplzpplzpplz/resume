function preload() {
  font = loadFont('fonts/syne_variable.ttf');
}

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
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(50);


}

function mouseWheel(e) {
  pppos = ppos;
  ppos = pos;
  pos += e.delta;
}


function draw() {
  background(255);
  noStroke();

  // let headline = select('h1');  

  // headline.style('color', 'rgba(255, 0, 0, 0.5)');
  // headline.style('mix-blend-mode', 'subtract');

  fill(255, 0, 0, 250);
  text(calebText, 0, pos);
  fill(0, 255, 0, 250);
  text(calebText, 0, ppos);
  fill(0, 0, 255, 250);
  text(calebText, 0, pppos);
}

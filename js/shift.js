// const { text } = require("stream/consumers");

// function preload() {
//   font = loadFont('fonts/syne_variable.ttf');
// }

// let pos = 0;
// let ppos = 0;
// let pppos = 0;
// let calebText = 'Caleb Wiseman Taylor Moore';

let t = 0;

// Functions to convert mouseX and mouseY coordinates to WebGL coordinates
// function convertToWebGLX(x) {
//   return map(x, 0, width, -width / 2, width / 2);
// }
// function convertToWebGLY(y) {
//   return map(y, 0, height, -height / 2, height / 2);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   frameRate(20);
//   blendMode(SUBTRACT);
//   // noCursor();

//   strokeWeight(10);
// }

  if (window.matchMedia("(max-width: 768px)").matches) {
    // MOBILE OR TABLET SCRIPT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let colors;
    let color;

    function setup() {
        createCanvas(windowWidth, windowHeight);
        colors = [
            [155, 204, 250],
            [205, 104, 200],
            [255, 0, 0],
            [0, 255, 0],
            [0, 0, 255]
        ];
        color = random(colors);
    }

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    if (isTouchDevice()) {
        let previousTouches;
        touchStarted = function(e) {
            // Note: when touching multiple times this will reset the color for all of the lines.
            color = random(colors);

            previousTouches = [...touches];
        }

        touchMoved = function(e) {
            if (previousTouches) {
                for (let i = 0; i < touches.length && i < previousTouches.length; i++) {
                    let prev = previousTouches[i];
                    let touch = touches[i];
                    stroke(...color);
                    strokeWeight(20);
                    line(prev.x, prev.y, touch.x, touch.y);
                }
                previousTouches = [...touches];
            }
            // Prevent zooming and scrolling gestures
            e.preventDefault();
            return false;
        }

        touchEnded = function(e) {
            previousTouches = [...touches];
        }
    } else {
        mousePressed = function() {
            color = random(colors);
        }

        mouseDragged = function() {
            stroke(...color);
            strokeWeight(20);
            line(mouseX, mouseY, pmouseX, pmouseY);
            return false;
        }
    }

  } else {
    // DESKTOP SCRIPT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }





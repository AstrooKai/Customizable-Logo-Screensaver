let x;
let y;

let xspeed;
let yspeed;

let logo;

let r, g, b;

function preload() {
  logo = loadImage('TH_logo.jpg'); //Change this with your logo filename
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 5; //Change this with your preffered speed, value must be the same as yspeed. It is advised to keep it 5
  yspeed = 5; //Change this with your preffered speed, value must be the same as yspeed. It is advised to keep it 5
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the logo
  tint(r, g, b);
  image(logo, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + logo.width >= width) {
    xspeed = -xspeed;
    x = width - logo.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + logo.height >= height) {
    yspeed = -yspeed;
    y = height - logo.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}

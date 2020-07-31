let img;
function preload() {
  img = loadImage("./e496x399.jpg");
}

function setup() {
  createCanvas(700, 700);
  pixelDensity(1);
}

function draw() {
  background(10);
  translate(width / 2, height / 2);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      pixels[index + 0] = dist(y, x, x, y);
      pixels[index + 1] = cos(x);
      pixels[index + 2] = sin(x);
      pixels[index + 3] = dist(y, x, x, y);
    }
  }

  updatePixels();
}

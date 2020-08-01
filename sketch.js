let img;
let testImg;
function preload() {
  img = loadImage("./e496x399.jpg");
}

function setup() {
  // testImg = new Array(img.width);
  // for (let i = 0; i < testImg.length; i++) testImg[i] = new Array(img.height);
  testImg = createImage(img.width, img.height);
  createCanvas(700, 700);
  pixelDensity(1);
  img.loadPixels();
  testImg.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      testImg.set(i, j, color(img.get(i, j)));
    }
  }
  testImg.updatePixels();
}
let x = 0,
  y = 0;
function draw() {
  background(10);
  noStroke();
  fill(testImg.get(x, y));
  circle(x, y, 50);
  x++;
  y++;
  image(testImg, 0, 0);
}

let img;
let testImg;
function preload() {
  img = loadImage("./e496x399.jpg");
}

function setup() {
  testImg = createImage(img.width, img.height);
  createCanvas(700, 700);
  pixelDensity(1);
  // img.loadPixels();
  // testImg.loadPixels();
  // for (let y = 0; y < testImg.pixels.length; y++) {
  //   testImg.pixels[y] = img.pixels[y];
  // }
  testImg = img.get();
  // testImg.updatePixels();
}

function draw() {
  background(10);
  // image(img, 0, 0);
  // translate(width / 2, height / 2);

  image(testImg, 0, 0);
}

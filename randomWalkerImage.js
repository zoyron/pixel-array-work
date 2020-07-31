let xoff = 0;
let img;
function preload() {
  img = loadImage("./e496x399.jpg");
}
class Walker {
  constructor() {
    this.x = map(noise(xoff), 0, 1, -50, 50);
    this.y = map(noise(xoff + 10000), 0, 1, -50, 50);
    this.xSpeed = random(-3, 2);
    this.ySpeed = random(-3, 2);
  }

  createWalker() {
    strokeWeight(1);
    // stroke(
    //   map(this.x, -width, width, 0, 50),
    //   map(this.y, 0, height, 155, 0),
    //   map(this.x + this.y, 0, width + height, 155, 255),
    //   70
    // );
    stroke(
      color(img.pixels[this.x], img.pixels[this.x + 1], img.pixels[this.x + 2])
    );
    this.X = map(sin(noise(this.x * 0.005, this.y * 0.005)), -1, 1, -4, 4);
    this.Y = map(sin(noise(this.x * 0.005, this.y * 0.005)), -1, 1, -4, 4);
  }

  moveWalker() {
    if (this.x < -width || this.x > width) {
      this.X *= -1;
      this.xSpeed *= -1;
    }
    if (this.y < -height || this.y > height) {
      this.Y *= -1;
      this.ySpeed *= -1;
    }
    this.x += this.X + this.xSpeed;
    this.y += this.Y + this.ySpeed;
  }
}
let obj;
let arr = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000");
  // colorMode(RGB,50);
  strokeCap(SQUARE);
  blendMode(SCREEN);
  for (let i = 0; i < 2000; i++) {
    xoff += 0.05;
    obj = new Walker();
    arr.push(obj);
  }
}

function draw() {
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < arr.length; i++) {
    noFill();
    arr[i].createWalker();
    line(
      arr[i].x,
      arr[i].y,
      arr[i].x - arr[i].xSpeed,
      arr[i].y - arr[i].ySpeed
    );
    line(
      arr[i].y,
      arr[i].x,
      arr[i].y - arr[i].ySpeed,
      arr[i].x - arr[i].xSpeed
    );
    arr[i].moveWalker();
  }
  // endShape();
  xoff += 0.0000005;
}

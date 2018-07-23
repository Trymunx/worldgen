let world;
let worldSize = {
  width: 800,
  height: 670
};
let pos = {x: worldSize.width / 2, y: worldSize.height / 2};

let viewHeight;
let viewHeightScrollBar;
let vhText;
let fr;

function setup() {
  createCanvas(1000, 850, "WEBGL");
  world = new World(worldSize.width, worldSize.height);
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();
  viewHeightScrollBar = createSlider(5, 200, 30, 5);
  fr = createDiv("");
  vhText = createDiv("View height: 60");

  world.draw(pos, worldSize.width / 2);
}

function draw() {
  viewHeight = viewHeightScrollBar.value();
  fr.html(~~frameRate() + " FPS");
  vhText.html("View height: " + viewHeight * 2);

  // world.draw(pos, viewHeight);

  // push();
  // noFill();
  // stroke(0, 100, 100);
  // strokeWeight(3);
  // rect(pos.x / worldSize.width * width, pos.y / worldSize.height * height, viewHeight / worldSize.width * width, viewHeight / worldSize.height * height);
  // pop();

  if (keyIsDown(LEFT_ARROW)) {
    pos.x = Math.max(viewHeight, pos.x - 5);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    pos.x = Math.min(worldSize.width - viewHeight, pos.x + 5);
  }
  if (keyIsDown(UP_ARROW)) {
    pos.y = Math.max(viewHeight, pos.y - 5);
  }
  if (keyIsDown(DOWN_ARROW)) {
    pos.y = Math.min(worldSize.height - viewHeight, pos.y + 5);
  }
}
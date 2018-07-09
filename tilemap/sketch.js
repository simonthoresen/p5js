var worldMap = [
  "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
  "C                             C",
  "C   AAA                       C",
  "C        AAAA                 C",
  "C                             C",
  "C                             C",
  "C                             C",
  "C           AA                C",
  "C   AAAAA                     C",
  "C                             C",
  "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
];

var worldTiles = {
  "A" : { color : "Green", canStandOn : true, canCollideWith : false },
  " " : { color : "Blue", canStandOn : false, canCollideWith : false },
  "C" : { color : "Gray", canStandOn : true, canCollideWith : true },
};

var camera = {
  x : 0,
  y : 0
};


var spriteSheet = {
  render : new function(x, y) {
  
  }
};

var sprite = {
  color = "Green",
  sheet = null,
  render = new function(x, y) {
    if (sheet != null) {
      sheet.render(x, y);
    } else if (color != null) {
      fill(color);
      rect(x, y, w, h);
    }
  },
  x = 0,
  y = 0,
  w = 10,
  h = 10
}


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    // draw the sky
    fill("LightSkyBlue");
    rect(0, 0, windowWidth, windowHeight - 40);
}
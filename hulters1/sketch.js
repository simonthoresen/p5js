// CONSTANTS
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var HERO_WIDTH = 181;
var HERO_HEIGHT = 229;
var HERO_Y_ACCELERATION = 1;
var HERO_JUMP_SPEED = 20;
var GROUND_Y = 540;
var KEYCODE_SPACE = 32;

var drawCtx;
var spaceKeyIsPressed = false;

var heroImage = new Image();
heroImage.src = "assets/nanonaut.png";
var heroX = 50;
var heroY = 40;
var heroYSpeed = 0;
var heroIsInTheAir = false;

var bgImage = new Image();
bgImage.src = "assets/background.png";

// SETUP
function setup(window) {
    var canvas = window.document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    drawCtx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("load", start);
}

function start() {
    window.requestAnimationFrame(mainLoop);
}

// MAIN LOOP
function mainLoop() {
    update();
    draw();
    window.requestAnimationFrame(mainLoop);
}

// PLAYER INPUT
function onKeyDown(event) {
    if (event.keyCode == KEYCODE_SPACE) {
        spaceKeyIsPressed = true;
    }
}

function onKeyUp(event) {
    if (event.keyCode == KEYCODE_SPACE) {
        spaceKeyIsPressed = false;
    }
}

// UPDATING
function update() {
    if (spaceKeyIsPressed && !heroIsInTheAir) {
        heroYSpeed = -HERO_JUMP_SPEED;
        heroIsInTheAir = true;
    }
    heroY = heroY + heroYSpeed;
    heroYSpeed = heroYSpeed + HERO_Y_ACCELERATION;
    if (heroY > GROUND_Y - HERO_HEIGHT) {
        heroY = GROUND_Y - HERO_HEIGHT;
        heroYSpeed = 0;
        heroIsInTheAir = false;
    }
}

// DRAWING
function draw() {

    // draw the sky
    drawCtx.fillStyle = "LightSkyBlue";
    drawCtx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40);

    // draw the background
    drawCtx.drawImage(bgImage, 0, -210);

    // draw the ground
    drawCtx.fillStyle = "ForestGreen";
    drawCtx.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

    //c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawCtx.drawImage(heroImage, heroX, heroY);
}
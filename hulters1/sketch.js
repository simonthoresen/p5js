// CONSTANTS
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var BACKGROUND_WIDTH = 1000;
var HERO_WIDTH = 181;
var HERO_HEIGHT = 229;
var HERO_X_SPEED = 5;
var HERO_Y_ACCELERATION = 1;
var HERO_JUMP_SPEED = 20;
var HERO_NUM_FRAMES_PER_ROW = 5;
var HERO_NUM_FRAMES = 7;
var HERO_ANIM_SPEED = 3; 
var GROUND_Y = 540;
var KEYCODE_SPACE = 32;

// SETUP
var drawCtx;

var cameraX = 0;
var cameraY = 0;
var frameCnt = 0;

var spaceKeyIsPressed = false;

var heroFrameIdx = 0;
var heroX = CANVAS_WIDTH / 2;
var heroY = GROUND_Y - HERO_HEIGHT;
var heroYSpeed = 0;
var heroIsInTheAir = false;
var heroImage = new Image();
heroImage.src = "assets/animatedNanonaut.png";

var bgImage = new Image();
bgImage.src = "assets/background.png";

var bush1Image = new Image();
bush1Image.src = "assets/bush1.png";
var bush2Image = new Image();
bush2Image.src = "assets/bush2.png";
var bushData = generateBushes();

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

function generateBushes() {
    var ret = [];
    var bushX = 0;
    while (bushX < 2 * CANVAS_WIDTH) {
        var bushImg;
        if (Math.random() >= 0.5) {
            bushImg = bush1Image;
        } else {
            bushImg = bush2Image;
        }
        ret.push({
            x: bushX,
            y: 80 + Math.random() * 20,
            image: bushImg
        });
        bushX += 150 + Math.random() * 200;
    }
    return ret;
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
    // update bushes
    for (var i = 0; i < bushData.length; ++i) {
        if (bushData[i].x - cameraX < -CANVAS_WIDTH) {
            bushData[i].x += (2 * CANVAS_WIDTH) + 150;
        }
    }

    // update hero
    heroX = heroX + HERO_X_SPEED;
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

    // update animation
    frameCnt = frameCnt + 1;
    if (frameCnt % HERO_ANIM_SPEED == 0) {
        heroFrameIdx = heroFrameIdx + 1;
        if (heroFrameIdx >= HERO_NUM_FRAMES) {
            heroFrameIdx = 0;
        }
    }

    // update camera
    cameraX = heroX - 150;
}

// DRAWING
function draw() {
    // draw the sky
    drawCtx.fillStyle = "LightSkyBlue";
    drawCtx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40);

    // draw the background
    var backgroudX = -(cameraX % BACKGROUND_WIDTH);
    drawCtx.drawImage(bgImage, backgroudX, -210);
    drawCtx.drawImage(bgImage, backgroudX + BACKGROUND_WIDTH, -210);

    // draw the ground
    drawCtx.fillStyle = "ForestGreen";
    drawCtx.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

    // draw the bushes
    for (var i = 0; i < bushData.length; ++i) {
        drawCtx.drawImage(bushData[i].image, bushData[i].x - cameraX, GROUND_Y - bushData[i].y - cameraY);
    }

    // draw the hero
    var row = Math.floor(heroFrameIdx / HERO_NUM_FRAMES_PER_ROW);
    var col = heroFrameIdx % HERO_NUM_FRAMES_PER_ROW;
    var spriteX = col * HERO_WIDTH;
    var spriteY = row * HERO_HEIGHT;
    drawCtx.drawImage(heroImage, spriteX, spriteY, HERO_WIDTH, HERO_HEIGHT,
                      heroX - cameraX, heroY - cameraY, HERO_WIDTH, HERO_HEIGHT);
}
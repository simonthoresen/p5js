// CONSTANTS
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var BACKGROUND_WIDTH = 1000;
var HERO_WIDTH = 32;
var HERO_HEIGHT = 32;
var HERO_X_SPEED = 5;
var HERO_Y_ACCELERATION = 1;
var HERO_JUMP_SPEED = 20;
var HERO_NUM_FRAMES_PER_ROW = 5;
var HERO_NUM_FRAMES = 5;
var HERO_ANIM_SPEED = 3;
var HERO_MAX_HEALTH = 100; 
var GROUND_Y = 540;
var KEYCODE_SPACE = 32;
var ROBOT_WIDTH = 141;
var ROBOT_HEIGHT = 139;
var ROBOT_NUM_FRAMES = 1;//9;
var ROBOT_ANIM_SPEED = 5;
var ROBOT_X_SPEED = 4;
var ROBOT_DISTANCE_MIN = 400;
var ROBOT_DISTANCE_MAX = 1200;
var ROBOT_MAX_COUNT = 3;
var SCREENSHAKE_RADIUS = 16;
var MODE_PLAY = 0;
var MODE_GAME_OVER = 1;

// SETUP
var drawCtx;
var gameMode = MODE_PLAY;

var screenshake = false;
var cameraX = 0;
var cameraY = 0;
var frameCnt = 0;

var spaceKeyIsPressed = false;

var heroFrameIdx = 0;
var heroX = CANVAS_WIDTH / 2;
var heroY = GROUND_Y - HERO_HEIGHT;
var heroYSpeed = 0;
var heroIsInTheAir = false;
var heroHealth = HERO_MAX_HEALTH;
var heroImage = new Image();
heroImage.src = "assets/ninja.png";
var heroSpriteSheet = {
    numFramesPerRow: 5,
    spriteWidth: HERO_WIDTH,
    spriteHeight: HERO_HEIGHT,
    image: heroImage
};
var heroHB = {
    xOffset: 60,
    yOffset: 20,
    width: 50,
    height: 200
};

var robotImage = new Image();
robotImage.src = "assets/monster.png";//animatedRobot.png";
var robotSpriteSheet = {
    numFramesPerRow: 1,//3,
    spriteWidth: ROBOT_WIDTH,
    spriteHeight: ROBOT_HEIGHT,
    image: robotImage  
};
var robotData = [ ];
var robotHB = {
    xOffset: 50,
    yOffset: 20,
    width: 50,
    height: 100
};

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
    if (gameMode != MODE_PLAY) {
        return;
    }

    // update bushes
    for (var i = 0; i < bushData.length; ++i) {
        if (bushData[i].x - cameraX < -CANVAS_WIDTH) {
            bushData[i].x += (2 * CANVAS_WIDTH) + 150;
        }
    }

    // update robots
    screenshake = false;
    var collision = updateRobots();
    if (collision) {
        if (heroHealth > 0) {
            heroHealth -= 1;
            screenshake = true;
        }
        if (heroHealth <= 0) {
            gameMode = MODE_GAME_OVER;
            screenshake = false;
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
    if (frameCnt % HERO_ANIM_SPEED == 0 && !heroIsInTheAir) {
        heroFrameIdx = heroFrameIdx + 1;
        if (heroFrameIdx >= HERO_NUM_FRAMES) {
            heroFrameIdx = 0;
        }
    }

    // update camera
    cameraX = heroX - 150;
}

function updateRobots() {
    var collision = false;
    for (var i = 0; i < robotData.length; ++i) {
        var robot = robotData[i];
        if (isRobotColliding(heroX + heroHB.xOffset, heroY + heroHB.yOffset, heroHB.width, heroHB.height,
                             robot.x + robotHB.xOffset, robot.y + robotHB.yOffset, robotHB.width, robotHB.height)) 
        {
            collision = true;
        }
        robotData[i].x -= ROBOT_X_SPEED;
        if (frameCnt % ROBOT_ANIM_SPEED == 0) {
            robotData[i].frameIdx = robotData[i].frameIdx + 1;
            if (robotData[i].frameIdx >= ROBOT_NUM_FRAMES) {
                robotData[i].frameIdx = 0;
            }
        }
    }
    var robotIdx = 0;
    while (robotIdx < robotData.length) {
        if (robotData[robotIdx].x < cameraX - ROBOT_WIDTH) {
            robotData.splice(robotIdx, 1);
        } else {
            robotIdx += 1;
        }
    }
    if (robotData.length < ROBOT_MAX_COUNT) {
        var lastX = 0;
        if (robotData.length > 0) {
            lastX = robotData[robotData.length - 1].x;
        }
        if (lastX < heroX + CANVAS_WIDTH) {
            lastX = heroX + CANVAS_WIDTH;
        }
        var newRobotX = lastX + ROBOT_DISTANCE_MIN + Math.random() * (ROBOT_DISTANCE_MAX - ROBOT_DISTANCE_MIN);
        robotData.push({
            x: newRobotX,
            y: GROUND_Y - ROBOT_HEIGHT,
            frameIdx: 0
        });
    }
    return collision;
}

function isRobotColliding(heroX, heroY, heroW, heroH, robotX, robotY, robotW, robotH) {
    if (!isAxisColliding(heroX, heroX + heroW, robotX, robotX + robotW)) {
        return false;
    }
    if (!isAxisColliding(heroY, heroY + heroH, robotY, robotY + robotH)) {
        return false;
    }
    return true;
}

function isAxisColliding(heroLeft, heroRight, robotLeft, robotRight) {
    if (heroRight >= robotLeft && heroRight <= robotRight) {
        return true;
    }
    if (heroLeft >= robotLeft && heroLeft <= robotRight) {
        return true;
    }
    if (heroLeft <= robotLeft && heroRight >= robotRight) {
        return true;
    }
    return false;
}

// DRAWING
function draw() {
    var shakenCameraX = cameraX;
    var shakenCameraY = cameraY;
    if (screenshake) {
        shakenCameraX += (Math.random() - 0.5) * SCREENSHAKE_RADIUS;
        shakenCameraY += (Math.random() - 0.5) * SCREENSHAKE_RADIUS;
    }

    // draw the sky
    drawCtx.fillStyle = "LightSkyBlue";
    drawCtx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40);

    // draw the background
    var backgroundX = -(shakenCameraX % BACKGROUND_WIDTH);
    drawCtx.drawImage(bgImage, backgroundX, -210);
    drawCtx.drawImage(bgImage, backgroundX + BACKGROUND_WIDTH, -210);

    // draw the ground
    drawCtx.fillStyle = "ForestGreen";
    drawCtx.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

    // draw the bushes
    for (var i = 0; i < bushData.length; ++i) {
        drawCtx.drawImage(bushData[i].image, bushData[i].x - shakenCameraX, GROUND_Y - bushData[i].y - shakenCameraY);
    }

    // draw the hero
    drawAnimSprite(heroX - shakenCameraX, heroY - shakenCameraY, heroFrameIdx, heroSpriteSheet);

    // draw the robots
    for (var i = 0; i < robotData.length; ++i) {
        drawAnimSprite(robotData[i].x - shakenCameraX, robotData[i].y - shakenCameraY, robotData[i].frameIdx, robotSpriteSheet);
    }

    // draw the current run distance
    drawCtx.fillStyle = "black";
    drawCtx.font = "48px sans-serif";
    drawCtx.fillText((heroX / 100).toFixed(0) + "m", 20, 40);

    // draw the health bar
    drawCtx.fillStyle = "red";
    drawCtx.fillRect(400, 10, 380 * heroHealth / HERO_MAX_HEALTH, 20);
    drawCtx.strokeStyle = "red";
    drawCtx.strokeRect(400, 10, 380, 20);

    // render game over
    if (gameMode == MODE_GAME_OVER) {
        drawCtx.fillStyle = "black";
        drawCtx.font = "96px sans-serif";
        drawCtx.fillText("GAME OVER", 120, 300);
    }
}

function drawAnimSprite(screenX, screenY, frameIdx, spriteSheet) {
    var row = Math.floor(frameIdx / spriteSheet.numFramesPerRow);
    var col = frameIdx % spriteSheet.numFramesPerRow;
    var spriteX = col * spriteSheet.spriteWidth;
    var spriteY = row * spriteSheet.spriteHeight;
    drawCtx.drawImage(spriteSheet.image, 
                      spriteX, spriteY, spriteSheet.spriteWidth, spriteSheet.spriteHeight,
                      screenX, screenY, spriteSheet.spriteWidth, spriteSheet.spriteHeight);
}
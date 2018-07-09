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
var HERO_MAX_HEALTH = 100;
var GROUND_Y = 540;
var KEYCODE_SPACE = 32;
var ROBOT_WIDTH = 141;
var ROBOT_HEIGHT = 139;
var ROBOT_NUM_FRAMES = 9;
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

var heroFrameIdx = 0;
var heroX = CANVAS_WIDTH / 2;
var heroY = GROUND_Y - HERO_HEIGHT;
var heroYSpeed = 0;
var heroIsInTheAir = false;
var heroHealth = HERO_MAX_HEALTH;
var heroSpriteSheet = {
    numFramesPerRow: 5,
    spriteWidth: HERO_WIDTH,
    spriteHeight: HERO_HEIGHT
};
var heroHB = {
    xOffset: 60,
    yOffset: 20,
    width: 50,
    height: 200
};

var robotSpriteSheet = {
    numFramesPerRow: 3,
    spriteWidth: ROBOT_WIDTH,
    spriteHeight: ROBOT_HEIGHT
};
var robotData = [];
var robotHB = {
    xOffset: 50,
    yOffset: 20,
    width: 50,
    height: 100
};

var bgImage;
var bush1Image;
var bush2Image;
var bushData;

function preload() {
    bgImage = loadImage("assets/background.png");
    bush1Image = loadImage("assets/bush1.png");
    bush2Image = loadImage("assets/bush2.png");
    heroSpriteSheet.image = loadImage("assets/animatedNanonaut.png");
    robotSpriteSheet.image = loadImage("assets/animatedRobot.png")
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    bushData = generateBushes();
}

function draw() {
    update();
    doDraw();
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
    if (keyIsDown(KEYCODE_SPACE) && !heroIsInTheAir) {
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
                robot.x + robotHB.xOffset, robot.y + robotHB.yOffset, robotHB.width, robotHB.height)) {
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
function doDraw() {
    var shakenCameraX = cameraX;
    var shakenCameraY = cameraY;
    if (screenshake) {
        shakenCameraX += (Math.random() - 0.5) * SCREENSHAKE_RADIUS;
        shakenCameraY += (Math.random() - 0.5) * SCREENSHAKE_RADIUS;
    }

    // draw the sky
    fill("LightSkyBlue");
    rect(0, 0, CANVAS_WIDTH, GROUND_Y - 40);

    // draw the background
    var backgroundX = -(shakenCameraX % BACKGROUND_WIDTH);
    image(bgImage, backgroundX, -210);
    image(bgImage, backgroundX + BACKGROUND_WIDTH, -210);

    // draw the ground
    fill("ForestGreen");
    rect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40);

    // draw the bushes
    for (var i = 0; i < bushData.length; ++i) {
        image(bushData[i].image, bushData[i].x - shakenCameraX, GROUND_Y - bushData[i].y - shakenCameraY);
    }

    // draw the hero
    drawAnimSprite(heroX - shakenCameraX, heroY - shakenCameraY, heroFrameIdx, heroSpriteSheet);

    // draw the robots
    for (var i = 0; i < robotData.length; ++i) {
        drawAnimSprite(robotData[i].x - shakenCameraX, robotData[i].y - shakenCameraY, robotData[i].frameIdx, robotSpriteSheet);
    }

    // draw the current run distance
    fill("black");
    textFont("sans-serif", 48);
    //drawCtx.font = "48px sans-serif";
    text((heroX / 100).toFixed(0) + "m", 20, 40);

    // draw the health bar
    stroke("red");
    noFill();
    rect(400, 10, 380, 20);
    fill("red");
    rect(400, 10, 380 * heroHealth / HERO_MAX_HEALTH, 20);

    // render game over
    if (gameMode == MODE_GAME_OVER) {
        fill("black");
        textFont("sans-serif", 96);
        //drawCtx.font = "96px sans-serif";
        text("GAME OVER", 120, 300);
    }
}

function drawAnimSprite(screenX, screenY, frameIdx, spriteSheet) {
    var row = Math.floor(frameIdx / spriteSheet.numFramesPerRow);
    var col = frameIdx % spriteSheet.numFramesPerRow;
    var spriteX = col * spriteSheet.spriteWidth;
    var spriteY = row * spriteSheet.spriteHeight;
    image(spriteSheet.image,
        screenX, screenY, spriteSheet.spriteWidth, spriteSheet.spriteHeight,
        spriteX, spriteY, spriteSheet.spriteWidth, spriteSheet.spriteHeight);
}
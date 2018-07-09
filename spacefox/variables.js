var SPACE = 32;

var menuBgImg;
var playBgImg;

var spaceFoxImg;
var spaceFoxX;
var spaceFoxY;

var youWinImg;
var youLooseImg;

var MODE_MENU = 0;
var MODE_PLAY = 1;
var gameMode = MODE_MENU;

var PLAY_ON = 0;
var PLAY_WON = 1;
var PLAY_DEAD = 2;
var playMode = PLAY_ON;
var playFrame;

var BULLET_FRAMES = 1;
var BULLET_SPEED = 9;
var BULLET_SCALE = 1; // hvor stor er bulleten
var BULLET_W = 24 * BULLET_SCALE;
var BULLET_H = 32 * BULLET_SCALE;
var bulletImg;
var bulletX;
var bulletY;

var PLAYER_FRAMES = 3;
var PLAYER_SPEED = 8;
var PLAYER_SCALE = 5; // hvor stor er skipet
var PLAYER_W = 17 * PLAYER_SCALE;
var PLAYER_H = 20 * PLAYER_SCALE;
var playerImg;
var playerFrame;
var playerShootSnd;
var playerX;
var playerY;

var ENEMY_FRAMES = 6;
var ENEMY_SPEED = 3;
var ENEMY_JUMP = 25;
var ENEMY_ROWS = 4; // hvor mange nedover
var ENEMY_COLS = 10; // hvor manger bortover i hver rad
var ENEMY_SCALE = 4; // hvor stor er hver alien
var ENEMY_W = 17 * ENEMY_SCALE;
var ENEMY_H = 11 * ENEMY_SCALE;
var enemyImg;
var enemyDieSnd;
var enemiesSpeed;
var enemiesX;
var enemiesY;
var enemyDX = [];
var enemyDY = [];
var enemiesAliveDX;
var enemiesAliveDY;
var enemiesAliveW;
var enemiesAliveH;
var enemyAlive = [];
var anim_p3l_walk = [ 
	spr_p3l_walk01, spr_p3l_walk02, spr_p3l_walk03, spr_p3l_walk04, spr_p3l_walk05, 
	spr_p3l_walk06, spr_p3l_walk07, spr_p3l_walk08, spr_p3l_walk09, spr_p3l_walk10, 
	spr_p3l_walk11 ];
var anim_p3r_walk = [ 
	spr_p3r_walk01, spr_p3r_walk02, spr_p3r_walk03, spr_p3r_walk04, spr_p3r_walk05, 
	spr_p3r_walk06, spr_p3r_walk07, spr_p3r_walk08, spr_p3r_walk09, spr_p3r_walk10, 
	spr_p3r_walk11 ];

var hero = {
	anim: [ spr_p3r_front ],	
	x:0, dx:0, y:0, dy:0,
	w:72, h:97,

	hurt_at: 0,
  score: 0,	
	coins: { },
	health: 5,
	on_ground: true,
	is_moving: false,
	face_left: false
};
var hero_start = world_height - MAP_TILE_HEIGHT - hero.h - 1;

var camera = {
	x:0, y:0,
};

var game_mode = MODE_START;
var game_pause = false;

var frame_idx = 0;
var dead_at = 0;
var lava_pos = 0;

function preload() {
	load_sprites();
	load_sounds();
}

function reset_to_start() {
	camera.x = 0;
	camera.y = world_height - windowHeight;
	hero.x = 0;
	hero.dx = 0;
	hero.y = hero_start;
	hero.dy = 0;
	hero.health = 3;
	hero.score = 0;
	hero.anim = [ spr_p3r_front ];
	hero.on_ground = true;
	hero.is_moving = false;
	hero.face_left = false;
	hero.coins = { };
	game_mode = MODE_START;
	game_pause = false;
	lava_pos = world_height;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	reset_to_start();
	snd_song.play();
}

function draw() {
	update()
	render()
}
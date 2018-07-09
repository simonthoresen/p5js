function keyTyped() {
	if (key == '|') {
		game_pause = !game_pause;
	}
	if (game_mode == MODE_START && key == ' ') {
		game_mode = MODE_PLAY;
	}
	if (game_mode == MODE_WIN && key == 'q') {
		reset_to_start();
	}
}

function update() {
	++frame_idx;
	if (game_mode == MODE_PLAY) {
		update_play();
	}
	if (game_mode == MODE_DEAD) {
		update_dead();
	}
}

function update_dead() {
	if (hero.y - camera.y < windowHeight) { 
		hero.dy += GRAVITY;	
 		hero.y += hero.dy;
	}
	if (frame_idx > dead_at + 256) {
		reset_to_start();
	}
}

function update_play() {	
	if (hero.dx > 0) {
		--hero.dx;
	}
	if (hero.dx < 0) {
		++hero.dx;
	}
	hero.x += hero.dx;

	if (keyIsDown(KEY_LEFT)) {
		hero.x = hero.x - 5;
		hero.is_moving = true;
		hero.face_left = true;
	} else if (keyIsDown(KEY_RIGHT)) {
		hero.x = hero.x + 5;
		hero.is_moving = true;
		hero.face_left = false;
	} else {
		hero.is_moving = false;
	}
	if (hero.on_ground) {
		if (hero.is_moving) {
			hero.anim = hero.face_left ? anim_p3l_walk : anim_p3r_walk;
		} else {
			hero.anim = [ hero.face_left ? spr_p3l_front : spr_p3r_front ];
		}
	}
	if (keyIsDown(KEY_SPACE) && hero.on_ground) {
		hero.dy = HERO_JUMP_SPEED;
		hero.anim = [ hero.face_left ? spr_p3l_jump : spr_p3r_jump ];
		snd_jump.play();
	}
	hero.dy += GRAVITY;	

	// check for screen boundaries
	hero.x = Math.max(hero.x, 0);
	hero.x = Math.min(hero.x, windowWidth - hero.w);	
	
	// move camera to hero
	if (hero.y < camera.y + 100) {
		camera.y -= 10;
	}
	if (hero.y + hero.h > camera.y + (windowHeight - 100)) { 
		camera.y += 10;
	}	
	camera.y = Math.min(camera.y, world_map.length * MAP_TILE_HEIGHT - windowHeight);
	
	// check for platform collision
	var col_left = Math.floor(hero.x / MAP_TILE_WIDTH);
	var col_right = Math.floor((hero.x + hero.w) / MAP_TILE_WIDTH);
	var row_prev = Math.floor((hero.y + hero.h) / MAP_TILE_HEIGHT);
	var row_next = Math.floor((hero.y + hero.h + hero.dy) / MAP_TILE_HEIGHT);
	hero.on_ground = false;
	if (row_prev < row_next) {
		if (is_solid_block(col_left, row_next) || is_solid_block(col_right, row_next)) {
			hero.y = row_next * MAP_TILE_HEIGHT - hero.h - 1;
			hero.dy = 0;
			hero.on_ground = true;
		}
	}
	hero.y += hero.dy;

	// check for coins
	check_coin(col_left, row_prev);
	check_coin(col_right, row_prev);
	
	// check for exit
	check_exit(col_left, row_prev);
	check_exit(col_right, row_prev);
	
	// check for lava collision
	if (get_map_char(col_left, row_prev) == MAP_SPIKE ||
			get_map_char(col_right, row_prev) == MAP_SPIKE ||
			hero.y + hero.h / 2 >= lava_pos) 
	{
		snd_hurt.play();
		hero.dx = (Math.random() < 0.5 ? -1 : 1) * Math.floor(5 + Math.random() * 5);
		hero.dy = HERO_HURT_SPEED;
		if (frame_idx > hero.hurt_at + 5) {
			hero.hurt_at = frame_idx;
			hero.health -= 1;
		}
		hero.anim = [ hero.face_left ? spr_p3l_hurt : spr_p3r_hurt ];
		if (hero.health <= 0) {
			game_mode = MODE_DEAD;
			dead_at = frame_idx;
		}
	}
			
	if (!game_pause) {
		if (lava_pos > camera.y + windowHeight) {
			lava_pos -= 5;
		} else {
		  --lava_pos;
		}
	}
}

function check_coin(col, row) {
	if (get_map_char(col, row) == MAP_COIN && !is_coin_taken(col, row)) {
		hero.coins[col + "_" + row] = true;
		hero.score += 250;
		snd_coin.play();
	}
}

function check_exit(col, row) {
	if (get_map_char(col, row) == MAP_EXIT && game_mode != MODE_WIN) {
		game_mode = MODE_WIN;
	}
}

function is_coin_taken(col, row) {
	return hero.coins[col + "_" + row];
}
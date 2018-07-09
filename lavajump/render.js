function render() {
	fill("LightSkyBlue");
	rect(0, 0, windowWidth, windowHeight);

	render_map();
	if (game_mode == MODE_DEAD) {
  	render_lava(lava_pos);
		render_anim(hero.anim, hero.x, hero.y);
	} else {
		render_anim(hero.anim, hero.x, hero.y);
  	render_lava(lava_pos);
	}
	render_hud();

	if (game_mode == MODE_START) {
		image(img_logo, windowWidth / 2 - img_logo.width / 2, windowHeight / 2 - img_logo.height);
		if (Math.round(frame_idx / 10) % 2 == 0) {
			fill("red");
			textFont("Arial", 36);
			textAlign(CENTER);
			textStyle(BOLD);
			text("PRESS SPACE TO PLAY", 0, windowHeight / 2, windowWidth, windowHeight / 2);
		}
	}
	if (game_mode == MODE_DEAD) {
		var y = -img_dead.height + (frame_idx - dead_at) * 16;
		y = Math.min(y, windowHeight / 2 - img_dead.height / 2);
		image(img_dead, windowWidth / 2 - img_dead.width / 2, y); 
	}
	if (game_mode == MODE_WIN) {
		if (Math.round(frame_idx / 10) % 2 == 0) {
			fill("red");
			textFont("Arial", 36);
			textAlign(CENTER);
			textStyle(BOLD);
			text("YOU WON THE GAME!!", 0, windowHeight / 2, windowWidth, windowHeight / 2);
		}
	}
	
	if (game_pause) {
    fill("black");
    textFont("sans-serif", 36);
		textAlign(CENTER);
		textStyle(NORMAL);
    text("PAUSE", 0, 0, windowWidth, 36);
	}
}

function render_hud() {
	render_score(hero.score);
	render_health(hero.health);
}

function render_score(score) {
  fill("black");
  textAlign(LEFT);
	textStyle(NORMAL);
  textFont("sans-serif", 36);
  text("SCORE: " + score, 2, 36);
}

function render_health(health) {
	screen_sprite(health > 2 ? spr_hud_heartFull : spr_hud_heartEmpty, windowWidth - 165, 5);
	screen_sprite(health > 1 ? spr_hud_heartFull : spr_hud_heartEmpty, windowWidth - 110, 5);
	screen_sprite(health > 0 ? spr_hud_heartFull : spr_hud_heartEmpty, windowWidth - 55, 5);
}

function render_map() {
	for (var row = 0; row < world_map.length; ++row) {
		for (var col = 0; col < world_map[row].length; ++col) {
			var c = world_map[row].charAt(col);
			if (c == MAP_COIN && !is_coin_taken(col, row)) {
				scale_anim(anim_coin, 
					Math.round(col * MAP_TILE_WIDTH + MAP_TILE_WIDTH / 2 - 24),
					Math.round((row+1) * MAP_TILE_HEIGHT - 64), 3);
			}
			var spr = map_sprites[c];
			if (spr != null) {
				render_sprite(spr, col * MAP_TILE_WIDTH, row * MAP_TILE_HEIGHT);
			}
		}
	}
}

function render_lava(lavaY) {
	var spr = spr_liquidLavaTop_mid;
	render_lava_row(spr, lavaY);
	lavaY += spr.h;

	spr = spr_liquidLava;
	for (; lavaY < camera.y + windowHeight; lavaY += spr.h) {
		render_lava_row(spr, lavaY);
	}
}

function render_lava_row(sprite, lavaY) {
	for (var lavaX = -sprite.w + sin(frame_idx / 25) * sprite.w; lavaX < windowWidth; lavaX += sprite.w) {
		render_sprite(sprite, lavaX, lavaY);
	}
}

function scale_anim(anim, worldX, worldY, scale) {
	var i = Math.floor(frame_idx / 5) % anim.length;
	var sprite = anim[i];
	
	var screenX = worldX - camera.x;
	var screenY = worldY - camera.y;
	image(sprite.ref.img,
		screenX, screenY, sprite.w * scale, sprite.h * scale,
		sprite.x, sprite.y, sprite.w, sprite.h);
}

function render_anim(anim, worldX, worldY) {
	var i = Math.floor(frame_idx / 5) % anim.length;
	render_sprite(anim[i], worldX, worldY);
}

function render_sprite(sprite, worldX, worldY) {
	var screenX = worldX - camera.x;
	var screenY = worldY - camera.y;
	screen_sprite(sprite, screenX, screenY);
}
		
function screen_sprite(sprite, screenX, screenY) {
	image(sprite.ref.img,
		screenX, screenY, sprite.w, sprite.h,
		sprite.x, sprite.y, sprite.w, sprite.h);
}
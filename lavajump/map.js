var world_height = world_map.length * MAP_TILE_HEIGHT;
var world_width = world_map[0].length * MAP_TILE_WIDTH;

var map_sprites = { };
map_sprites['1'] = spr_grassLeft; 
map_sprites['2'] = spr_grassMid; 
map_sprites['3'] = spr_grassRight; 
map_sprites['4'] = spr_sandLeft; 
map_sprites['5'] = spr_sandMid; 
map_sprites['6'] = spr_sandRight; 
map_sprites['7'] = spr_stoneLeft; 
map_sprites['8'] = spr_stoneMid; 
map_sprites['9'] = spr_stoneRight; 
map_sprites['a'] = spr_snowLeft; 
map_sprites['b'] = spr_snowMid; 
map_sprites['c'] = spr_snowRight; 
map_sprites['o'] = spr_sign; 
map_sprites['<'] = spr_signLeft; 
map_sprites['>'] = spr_signRight; 
map_sprites['x'] = spr_signExit; 
map_sprites['L'] = spr_ladder_mid; 
map_sprites['l'] = spr_ladder_top; 

map_sprites['A'] = spr_bush;
map_sprites['B'] = spr_plant;
map_sprites['D'] = spr_cactus;
map_sprites['E'] = spr_rock;
map_sprites['F'] = spr_mushroomBrown;
map_sprites['G'] = spr_mushroomRed;
map_sprites[MAP_SPIKE] = spr_spikes;

var solid_blocks = { };
solid_blocks['1'] = true;
solid_blocks['2'] = true;
solid_blocks['3'] = true;
solid_blocks['4'] = true;
solid_blocks['5'] = true;
solid_blocks['6'] = true;
solid_blocks['7'] = true;
solid_blocks['8'] = true;
solid_blocks['9'] = true;
solid_blocks['a'] = true;
solid_blocks['b'] = true;
solid_blocks['c'] = true;
solid_blocks['L'] = true;
solid_blocks['l'] = true;

function is_solid_block(map_x, map_y) {
	var c = get_map_char(map_x, map_y);
	return c != null && solid_blocks.hasOwnProperty(c);
}

function get_map_char(map_x, map_y) {
	if (map_y < 0 || map_y >= world_map.length) {
		return null;
	}
	if (map_x < 0 || map_x >= world_map[map_y].length) {
		return null;
	}
	return world_map[map_y].charAt(map_x);
}
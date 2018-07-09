var ref_p1 = { };
var ref_p2 = { };
var ref_p3l = { };
var ref_p3r = { };
var ref_hud = { };
var ref_items = { };
var ref_tiles3 = { };
var ref_ice = { };
var ref_coin = { };

var img_logo;
var img_dead;

function load_sprites() {
	//ref_p1.img = loadImage("p1.png")
	//ref_p2.img = loadImage("p2.png")
	ref_p3l.img = loadImage("p3l.png")
	ref_p3r.img = loadImage("p3r.png")
	ref_hud.img = loadImage("hud.png");
	ref_items.img = loadImage("items.png");
	ref_tiles3.img = loadImage("tiles3.png");
	//ref_ice.img = loadImage("ice.png");
	ref_coin.img = loadImage("coin.png")
	
	img_logo = loadImage("logo.png");
	img_dead = loadImage("GAME_OVER.png");
}

var spr_coin1 = { ref:ref_coin, x:0, y:0, w:16, h:16 };
var spr_coin2 = { ref:ref_coin, x:16, y:0, w:16, h:16 };
var spr_coin3 = { ref:ref_coin, x:32, y:0, w:16, h:16 };
var spr_coin4 = { ref:ref_coin, x:48, y:0, w:16, h:16 };
var spr_coin5 = { ref:ref_coin, x:64, y:0, w:16, h:16 };
var spr_coin6 = { ref:ref_coin, x:80, y:0, w:16, h:16 };
var anim_coin = [ spr_coin1, spr_coin2, spr_coin3, spr_coin4, spr_coin5, spr_coin6 ];

var spr_iceHead = { ref:ref_ice, x:700, y:140, w:70, h:70 };
var spr_iceBody = { ref:ref_ice, x:700, y:210, w:70, h:70 };

var spr_p1_duck = { ref:ref_p1, x:365, y:98, w:69, h:71 };
var spr_p1_front = { ref:ref_p1, x:0, y:196, w:66, h:92 };
var spr_p1_hurt = { ref:ref_p1, x:438, y:0, w:69, h:92 };
var spr_p1_jump = { ref:ref_p1, x:438, y:93, w:67, h:94 };
var spr_p1_stand = { ref:ref_p1, x:67, y:196, w:66, h:92 };
var spr_p1_walk01 = { ref:ref_p1, x:0, y:0, w:72, h:97 };
var spr_p1_walk02 = { ref:ref_p1, x:73, y:0, w:72, h:97 };
var spr_p1_walk03 = { ref:ref_p1, x:146, y:0, w:72, h:97 };
var spr_p1_walk04 = { ref:ref_p1, x:0, y:98, w:72, h:97 };
var spr_p1_walk05 = { ref:ref_p1, x:73, y:98, w:72, h:97 };
var spr_p1_walk06 = { ref:ref_p1, x:146, y:98, w:72, h:97 };
var spr_p1_walk07 = { ref:ref_p1, x:219, y:0, w:72, h:97 };
var spr_p1_walk08 = { ref:ref_p1, x:292, y:0, w:72, h:97 };
var spr_p1_walk09 = { ref:ref_p1, x:219, y:98, w:72, h:97 };
var spr_p1_walk10 = { ref:ref_p1, x:365, y:0, w:72, h:97 };
var spr_p1_walk11 = { ref:ref_p1, x:292, y:98, w:72, h:97 };

var spr_p2_duck = { ref:ref_p2, x:365, y:98, w:69, h:71 };
var spr_p2_front = { ref:ref_p2, x:0, y:196, w:66, h:92 };
var spr_p2_hurt = { ref:ref_p2, x:438, y:0, w:69, h:92 };
var spr_p2_jump = { ref:ref_p2, x:438, y:93, w:67, h:94 };
var spr_p2_stand = { ref:ref_p2, x:67, y:196, w:66, h:92 };
var spr_p2_walk01 = { ref:ref_p2, x:0, y:0, w:72, h:97 };
var spr_p2_walk02 = { ref:ref_p2, x:73, y:0, w:72, h:97 };
var spr_p2_walk03 = { ref:ref_p2, x:146, y:0, w:72, h:97 };
var spr_p2_walk04 = { ref:ref_p2, x:0, y:98, w:72, h:97 };
var spr_p2_walk05 = { ref:ref_p2, x:73, y:98, w:72, h:97 };
var spr_p2_walk06 = { ref:ref_p2, x:146, y:98, w:72, h:97 };
var spr_p2_walk07 = { ref:ref_p2, x:219, y:0, w:72, h:97 };
var spr_p2_walk08 = { ref:ref_p2, x:292, y:0, w:72, h:97 };
var spr_p2_walk09 = { ref:ref_p2, x:219, y:98, w:72, h:97 };
var spr_p2_walk10 = { ref:ref_p2, x:365, y:0, w:72, h:97 };
var spr_p2_walk11 = { ref:ref_p2, x:292, y:98, w:72, h:97 };

var spr_p3l_duck = { ref:ref_p3l, x:74, y:98, w:69, h:71 };
var spr_p3l_front = { ref:ref_p3l, x:442, y:196, w:66, h:92 };
var spr_p3l_hurt = { ref:ref_p3l, x:1, y:0, w:69, h:92 };
var spr_p3l_jump = { ref:ref_p3l, x:3, y:93, w:67, h:94 };
var spr_p3l_stand = { ref:ref_p3l, x:375, y:196, w:66, h:92 };
var spr_p3l_walk01 = { ref:ref_p3l, x:436, y:0, w:72, h:97 };
var spr_p3l_walk02 = { ref:ref_p3l, x:363, y:0, w:72, h:97 };
var spr_p3l_walk03 = { ref:ref_p3l, x:290, y:0, w:72, h:97 };
var spr_p3l_walk04 = { ref:ref_p3l, x:436, y:98, w:72, h:97 };
var spr_p3l_walk05 = { ref:ref_p3l, x:363, y:98, w:72, h:97 };
var spr_p3l_walk06 = { ref:ref_p3l, x:290, y:98, w:72, h:97 };
var spr_p3l_walk07 = { ref:ref_p3l, x:217, y:0, w:72, h:97 };
var spr_p3l_walk08 = { ref:ref_p3l, x:144, y:0, w:72, h:97 };
var spr_p3l_walk09 = { ref:ref_p3l, x:217, y:98, w:72, h:97 };
var spr_p3l_walk10 = { ref:ref_p3l, x:71, y:0, w:72, h:97 };
var spr_p3l_walk11 = { ref:ref_p3l, x:144, y:98, w:72, h:97 };

var spr_p3r_duck = { ref:ref_p3r, x:365, y:98, w:69, h:71 };
var spr_p3r_front = { ref:ref_p3r, x:0, y:196, w:66, h:92 };
var spr_p3r_hurt = { ref:ref_p3r, x:438, y:0, w:69, h:92 };
var spr_p3r_jump = { ref:ref_p3r, x:438, y:93, w:67, h:94 };
var spr_p3r_stand = { ref:ref_p3r, x:67, y:196, w:66, h:92 };
var spr_p3r_walk01 = { ref:ref_p3r, x:0, y:0, w:72, h:97 };
var spr_p3r_walk02 = { ref:ref_p3r, x:73, y:0, w:72, h:97 };
var spr_p3r_walk03 = { ref:ref_p3r, x:146, y:0, w:72, h:97 };
var spr_p3r_walk04 = { ref:ref_p3r, x:0, y:98, w:72, h:97 };
var spr_p3r_walk05 = { ref:ref_p3r, x:73, y:98, w:72, h:97 };
var spr_p3r_walk06 = { ref:ref_p3r, x:146, y:98, w:72, h:97 };
var spr_p3r_walk07 = { ref:ref_p3r, x:219, y:0, w:72, h:97 };
var spr_p3r_walk08 = { ref:ref_p3r, x:292, y:0, w:72, h:97 };
var spr_p3r_walk09 = { ref:ref_p3r, x:219, y:98, w:72, h:97 };
var spr_p3r_walk10 = { ref:ref_p3r, x:365, y:0, w:72, h:97 };
var spr_p3r_walk11 = { ref:ref_p3r, x:292, y:98, w:72, h:97 };

var spr_bomb = { ref:ref_items, x: 432, y: 432, w: 70, h: 70 };
var spr_bombFlash = { ref:ref_items, x: 432, y: 360, w: 70, h: 70 };
var spr_bush = { ref:ref_items, x: 346, y: 144, w: 70, h: 70 };
var spr_buttonBlue = { ref:ref_items, x: 288, y: 504, w: 70, h: 70 };
var spr_buttonBlue_pressed = { ref:ref_items, x: 419, y: 72, w: 70, h: 70 };
var spr_buttonGreen = { ref:ref_items, x: 419, y: 0, w: 70, h: 70 };
var spr_buttonGreen_pressed = { ref:ref_items, x: 418, y: 144, w: 70, h: 70 };
var spr_buttonRed = { ref:ref_items, x: 360, y: 504, w: 70, h: 70 };
var spr_buttonRed_pressed = { ref:ref_items, x: 360, y: 432, w: 70, h: 70 };
var spr_buttonYellow = { ref:ref_items, x: 360, y: 360, w: 70, h: 70 };
var spr_buttonYellow_pressed = { ref:ref_items, x: 360, y: 288, w: 70, h: 70 };
var spr_cactus = { ref:ref_items, x: 360, y: 216, w: 70, h: 70 };
var spr_chain = { ref:ref_items, x: 347, y: 72, w: 70, h: 70 };
var spr_cloud1 = { ref:ref_items, x: 0, y: 146, w: 128, h: 71 };
var spr_cloud2 = { ref:ref_items, x: 0, y: 73, w: 129, h: 71 };
var spr_cloud3 = { ref:ref_items, x: 0, y: 0, w: 129, h: 71 };
var spr_coinBronze = { ref:ref_items, x: 288, y: 432, w: 70, h: 70 };
var spr_coinGold = { ref:ref_items, x: 288, y: 360, w: 70, h: 70 };
var spr_coinSilver = { ref:ref_items, x: 288, y: 288, w: 70, h: 70 };
var spr_fireball = { ref:ref_items, x: 0, y: 435, w: 70, h: 70 };
var spr_flagBlue = { ref:ref_items, x: 275, y: 72, w: 70, h: 70 };
var spr_flagBlue2 = { ref:ref_items, x: 275, y: 0, w: 70, h: 70 };
var spr_flagBlueHanging = { ref:ref_items, x: 216, y: 504, w: 70, h: 70 };
var spr_flagGreen = { ref:ref_items, x: 216, y: 432, w: 70, h: 70 };
var spr_flagGreen2 = { ref:ref_items, x: 216, y: 360, w: 70, h: 70 };
var spr_flagGreenHanging = { ref:ref_items, x: 216, y: 288, w: 70, h: 70 };
var spr_flagRed = { ref:ref_items, x: 274, y: 144, w: 70, h: 70 };
var spr_flagRed2 = { ref:ref_items, x: 216, y: 216, w: 70, h: 70 };
var spr_flagRedHanging = { ref:ref_items, x: 203, y: 72, w: 70, h: 70 };
var spr_flagYellow = { ref:ref_items, x: 203, y: 0, w: 70, h: 70 };
var spr_flagYellow2 = { ref:ref_items, x: 202, y: 144, w: 70, h: 70 };
var spr_flagYellowHanging = { ref:ref_items, x: 144, y: 434, w: 70, h: 70 };
var spr_gemBlue = { ref:ref_items, x: 144, y: 362, w: 70, h: 70 };
var spr_gemGreen = { ref:ref_items, x: 144, y: 290, w: 70, h: 70 };
var spr_gemRed = { ref:ref_items, x: 144, y: 218, w: 70, h: 70 };
var spr_gemYellow = { ref:ref_items, x: 131, y: 72, w: 70, h: 70 };
var spr_keyBlue = { ref:ref_items, x: 131, y: 0, w: 70, h: 70 };
var spr_keyGreen = { ref:ref_items, x: 130, y: 146, w: 70, h: 70 };
var spr_keyRed = { ref:ref_items, x: 72, y: 435, w: 70, h: 70 };
var spr_keyYellow = { ref:ref_items, x: 72, y: 363, w: 70, h: 70 };
var spr_mushroomBrown = { ref:ref_items, x: 72, y: 291, w: 70, h: 70 };
var spr_mushroomRed = { ref:ref_items, x: 72, y: 219, w: 70, h: 70 };
var spr_particleBrick1a = { ref:ref_items, x: 0, y: 553, w: 19, h: 14 };
var spr_particleBrick1b = { ref:ref_items, x: 0, y: 530, w: 21, h: 21 };
var spr_particleBrick2a = { ref:ref_items, x: 21, y: 553, w: 19, h: 14 };
var spr_particleBrick2b = { ref:ref_items, x: 0, y: 507, w: 21, h: 21 };
var spr_plant = { ref:ref_items, x: 0, y: 363, w: 70, h: 70 };
var spr_plantPurple = { ref:ref_items, x: 0, y: 291, w: 70, h: 70 };
var spr_rock = { ref:ref_items, x: 0, y: 219, w: 70, h: 70 };
var spr_snowhill = { ref:ref_items, x: 288, y: 216, w: 70, h: 70 };
var spr_spikes = { ref:ref_items, x: 347, y: 0, w: 70, h: 70 };
var spr_springboardDown = { ref:ref_items, x: 432, y: 288, w: 70, h: 70 };
var spr_springboardUp = { ref:ref_items, x: 432, y: 216, w: 70, h: 70 };
var spr_star = { ref:ref_items, x: 504, y: 288, w: 70, h: 70 };
var spr_switchLeft = { ref:ref_items, x: 504, y: 216, w: 70, h: 70 };
var spr_switchMid = { ref:ref_items, x: 491, y: 72, w: 70, h: 70 };
var spr_switchRight = { ref:ref_items, x: 491, y: 0, w: 70, h: 70 };
var spr_weight = { ref:ref_items, x: 490, y: 144, w: 70, h: 70 };
var spr_weightChained = { ref:ref_items, x: 432, y: 504, w: 70, h: 70 };

var spr_hud_0 = { ref:ref_hud, x: 230, y: 0, w: 30, h: 38 };
var spr_hud_1 = { ref:ref_hud, x: 196, y: 41, w: 26, h: 37 };
var spr_hud_2 = { ref:ref_hud, x: 55, y: 98, w: 32, h: 38 };
var spr_hud_3 = { ref:ref_hud, x: 239, y: 80, w: 28, h: 38 };
var spr_hud_4 = { ref:ref_hud, x: 238, y: 122, w: 29, h: 38 };
var spr_hud_5 = { ref:ref_hud, x: 238, y: 162, w: 28, h: 38 };
var spr_hud_6 = { ref:ref_hud, x: 230, y: 40, w: 30, h: 38 };
var spr_hud_7 = { ref:ref_hud, x: 226, y: 206, w: 32, h: 39 };
var spr_hud_8 = { ref:ref_hud, x: 192, y: 206, w: 32, h: 40 };
var spr_hud_9 = { ref:ref_hud, x: 196, y: 0, w: 32, h: 39 };
var spr_hud_coins = { ref:ref_hud, x: 55, y: 0, w: 47, h: 47 };
var spr_hud_gem_blue = { ref:ref_hud, x: 104, y: 0, w: 46, h: 36 };
var spr_hud_gem_green = { ref:ref_hud, x: 98, y: 185, w: 46, h: 36 };
var spr_hud_gem_red = { ref:ref_hud, x: 98, y: 147, w: 46, h: 36 };
var spr_hud_gem_yellow = { ref:ref_hud, x: 98, y: 223, w: 46, h: 36 };
var spr_hud_heartEmpty = { ref:ref_hud, x: 0, y: 47, w: 53, h: 45 };
var spr_hud_heartFull = { ref:ref_hud, x: 0, y: 94, w: 53, h: 45 };
var spr_hud_heartHalf = { ref:ref_hud, x: 0, y: 0, w: 53, h: 45 };
var spr_hud_keyBlue = { ref:ref_hud, x: 146, y: 147, w: 44, h: 40 };
var spr_hud_keyBlue_disabled = { ref:ref_hud, x: 150, y: 38, w: 44, h: 40 };
var spr_hud_keyGreem_disabled = { ref:ref_hud, x: 104, y: 38, w: 44, h: 40 };
var spr_hud_keyGreen = { ref:ref_hud, x: 192, y: 122, w: 44, h: 40 };
var spr_hud_keyRed = { ref:ref_hud, x: 193, y: 80, w: 44, h: 40 };
var spr_hud_keyRed_disabled = { ref:ref_hud, x: 192, y: 164, w: 44, h: 40 };
var spr_hud_keyYellow = { ref:ref_hud, x: 146, y: 189, w: 44, h: 40 };
var spr_hud_keyYellow_disabled = { ref:ref_hud, x: 147, y: 80, w: 44, h: 40 };
var spr_hud_p1 = { ref:ref_hud, x: 55, y: 49, w: 47, h: 47 };
var spr_hud_p1Alt = { ref:ref_hud, x: 0, y: 141, w: 47, h: 47 };
var spr_hud_p2 = { ref:ref_hud, x: 49, y: 141, w: 47, h: 47 };
var spr_hud_p2Alt = { ref:ref_hud, x: 0, y: 190, w: 47, h: 47 };
var spr_hud_p3 = { ref:ref_hud, x: 49, y: 190, w: 47, h: 47 };
var spr_hud_p3Alt = { ref:ref_hud, x: 98, y: 98, w: 47, h: 47 };
var spr_hud_x = { ref:ref_hud, x: 0, y: 239, w: 30, h: 28 };

var spr_box = { ref:ref_tiles3, x: 0, y: 864, w: 70, h: 70 };
var spr_boxAlt = { ref:ref_tiles3, x: 0, y: 792, w: 70, h: 70 };
var spr_boxCoin = { ref:ref_tiles3, x: 0, y: 720, w: 70, h: 70 };
var spr_boxCoinAlt = { ref:ref_tiles3, x: 0, y: 576, w: 70, h: 70 };
var spr_boxCoinAlt_disabled = { ref:ref_tiles3, x: 0, y: 504, w: 70, h: 70 };
var spr_boxCoin_disabled = { ref:ref_tiles3, x: 0, y: 648, w: 70, h: 70 };
var spr_boxEmpty = { ref:ref_tiles3, x: 0, y: 432, w: 70, h: 70 };
var spr_boxExplosive = { ref:ref_tiles3, x: 0, y: 360, w: 70, h: 70 };
var spr_boxExplosiveAlt = { ref:ref_tiles3, x: 0, y: 216, w: 70, h: 70 };
var spr_boxExplosive_disabled = { ref:ref_tiles3, x: 0, y: 288, w: 70, h: 70 };
var spr_boxItem = { ref:ref_tiles3, x: 0, y: 144, w: 70, h: 70 };
var spr_boxItemAlt = { ref:ref_tiles3, x: 0, y: 0, w: 70, h: 70 };
var spr_boxItemAlt_disabled = { ref:ref_tiles3, x: 432, y: 432, w: 70, h: 70 };
var spr_boxItem_disabled = { ref:ref_tiles3, x: 0, y: 72, w: 70, h: 70 };
var spr_boxWarning = { ref:ref_tiles3, x: 72, y: 648, w: 70, h: 70 };
var spr_brickWall = { ref:ref_tiles3, x: 216, y: 0, w: 70, h: 70 };
var spr_bridge = { ref:ref_tiles3, x: 216, y: 72, w: 70, h: 70 };
var spr_bridgeLogs = { ref:ref_tiles3, x: 288, y: 720, w: 70, h: 70 };
var spr_castle = { ref:ref_tiles3, x: 288, y: 792, w: 70, h: 70 };
var spr_castleCenter = { ref:ref_tiles3, x: 504, y: 288, w: 70, h: 70 };
var spr_castleCenter_rounded = { ref:ref_tiles3, x: 504, y: 720, w: 70, h: 70 };
var spr_castleCliffLeft = { ref:ref_tiles3, x: 504, y: 792, w: 70, h: 70 };
var spr_castleCliffLeftAlt = { ref:ref_tiles3, x: 648, y: 720, w: 70, h: 70 };
var spr_castleCliffRight = { ref:ref_tiles3, x: 648, y: 792, w: 70, h: 70 };
var spr_castleCliffRightAlt = { ref:ref_tiles3, x: 792, y: 288, w: 70, h: 70 };
var spr_castleHalf = { ref:ref_tiles3, x: 792, y: 360, w: 70, h: 70 };
var spr_castleHalfLeft = { ref:ref_tiles3, x: 432, y: 720, w: 70, h: 70 };
var spr_castleHalfMid = { ref:ref_tiles3, x: 648, y: 648, w: 70, h: 70 };
var spr_castleHalfRight = { ref:ref_tiles3, x: 792, y: 648, w: 70, h: 70 };
var spr_castleHillLeft = { ref:ref_tiles3, x: 648, y: 576, w: 70, h: 70 };
var spr_castleHillLeft2 = { ref:ref_tiles3, x: 792, y: 576, w: 70, h: 70 };
var spr_castleHillRight = { ref:ref_tiles3, x: 792, y: 504, w: 70, h: 70 };
var spr_castleHillRight2 = { ref:ref_tiles3, x: 792, y: 432, w: 70, h: 70 };
var spr_castleLedgeLeft = { ref:ref_tiles3, x: 856, y: 868, w: 5, h: 22 };
var spr_castleLedgeRight = { ref:ref_tiles3, x: 842, y: 868, w: 5, h: 22 };
var spr_castleLeft = { ref:ref_tiles3, x: 792, y: 216, w: 70, h: 70 };
var spr_castleMid = { ref:ref_tiles3, x: 792, y: 144, w: 70, h: 70 };
var spr_castleRight = { ref:ref_tiles3, x: 792, y: 72, w: 70, h: 70 };
var spr_dirt = { ref:ref_tiles3, x: 792, y: 0, w: 70, h: 70 };
var spr_dirtCenter = { ref:ref_tiles3, x: 720, y: 864, w: 70, h: 70 };
var spr_dirtCenter_rounded = { ref:ref_tiles3, x: 720, y: 792, w: 70, h: 70 };
var spr_dirtCliffLeft = { ref:ref_tiles3, x: 720, y: 720, w: 70, h: 70 };
var spr_dirtCliffLeftAlt = { ref:ref_tiles3, x: 720, y: 648, w: 70, h: 70 };
var spr_dirtCliffRight = { ref:ref_tiles3, x: 720, y: 576, w: 70, h: 70 };
var spr_dirtCliffRightAlt = { ref:ref_tiles3, x: 720, y: 504, w: 70, h: 70 };
var spr_dirtHalf = { ref:ref_tiles3, x: 720, y: 432, w: 70, h: 70 };
var spr_dirtHalfLeft = { ref:ref_tiles3, x: 720, y: 360, w: 70, h: 70 };
var spr_dirtHalfMid = { ref:ref_tiles3, x: 720, y: 288, w: 70, h: 70 };
var spr_dirtHalfRight = { ref:ref_tiles3, x: 720, y: 216, w: 70, h: 70 };
var spr_dirtHillLeft = { ref:ref_tiles3, x: 720, y: 144, w: 70, h: 70 };
var spr_dirtHillLeft2 = { ref:ref_tiles3, x: 720, y: 72, w: 70, h: 70 };
var spr_dirtHillRight = { ref:ref_tiles3, x: 720, y: 0, w: 70, h: 70 };
var spr_dirtHillRight2 = { ref:ref_tiles3, x: 648, y: 864, w: 70, h: 70 };
var spr_dirtLedgeLeft = { ref:ref_tiles3, x: 842, y: 892, w: 5, h: 18 };
var spr_dirtLedgeRight = { ref:ref_tiles3, x: 842, y: 912, w: 5, h: 18 };
var spr_dirtLeft = { ref:ref_tiles3, x: 504, y: 432, w: 70, h: 70 };
var spr_dirtMid = { ref:ref_tiles3, x: 504, y: 360, w: 70, h: 70 };
var spr_dirtRight = { ref:ref_tiles3, x: 648, y: 504, w: 70, h: 70 };
var spr_door_closedMid = { ref:ref_tiles3, x: 648, y: 432, w: 70, h: 70 };
var spr_door_closedTop = { ref:ref_tiles3, x: 648, y: 360, w: 70, h: 70 };
var spr_door_openMid = { ref:ref_tiles3, x: 648, y: 288, w: 70, h: 70 };
var spr_door_openTop = { ref:ref_tiles3, x: 648, y: 216, w: 70, h: 70 };
var spr_fence = { ref:ref_tiles3, x: 648, y: 144, w: 70, h: 70 };
var spr_fenceBroken = { ref:ref_tiles3, x: 648, y: 72, w: 70, h: 70 };
var spr_grass = { ref:ref_tiles3, x: 648, y: 0, w: 70, h: 70 };
var spr_grassCenter = { ref:ref_tiles3, x: 576, y: 864, w: 70, h: 70 };
var spr_grassCenter_rounded = { ref:ref_tiles3, x: 576, y: 792, w: 70, h: 70 };
var spr_grassCliffLeft = { ref:ref_tiles3, x: 576, y: 720, w: 70, h: 70 };
var spr_grassCliffLeftAlt = { ref:ref_tiles3, x: 576, y: 648, w: 70, h: 70 };
var spr_grassCliffRight = { ref:ref_tiles3, x: 576, y: 576, w: 70, h: 70 };
var spr_grassCliffRightAlt = { ref:ref_tiles3, x: 576, y: 504, w: 70, h: 70 };
var spr_grassHalf = { ref:ref_tiles3, x: 576, y: 432, w: 70, h: 70 };
var spr_grassHalfLeft = { ref:ref_tiles3, x: 576, y: 360, w: 70, h: 70 };
var spr_grassHalfMid = { ref:ref_tiles3, x: 576, y: 288, w: 70, h: 70 };
var spr_grassHalfRight = { ref:ref_tiles3, x: 576, y: 216, w: 70, h: 70 };
var spr_grassHillLeft = { ref:ref_tiles3, x: 576, y: 144, w: 70, h: 70 };
var spr_grassHillLeft2 = { ref:ref_tiles3, x: 576, y: 72, w: 70, h: 70 };
var spr_grassHillRight = { ref:ref_tiles3, x: 576, y: 0, w: 70, h: 70 };
var spr_grassHillRight2 = { ref:ref_tiles3, x: 504, y: 864, w: 70, h: 70 };
var spr_grassLedgeLeft = { ref:ref_tiles3, x: 849, y: 868, w: 5, h: 24 };
var spr_grassLedgeRight = { ref:ref_tiles3, x: 849, y: 894, w: 5, h: 24 };
var spr_grassLeft = { ref:ref_tiles3, x: 504, y: 648, w: 70, h: 70 };
var spr_grassMid = { ref:ref_tiles3, x: 504, y: 576, w: 70, h: 70 };
var spr_grassRight = { ref:ref_tiles3, x: 504, y: 504, w: 70, h: 70 };
var spr_hill_large = { ref:ref_tiles3, x: 842, y: 720, w: 48, h: 146 };
var spr_hill_largeAlt = { ref:ref_tiles3, x: 864, y: 0, w: 48, h: 146 };
var spr_hill_small = { ref:ref_tiles3, x: 792, y: 828, w: 48, h: 106 };
var spr_hill_smallAlt = { ref:ref_tiles3, x: 792, y: 720, w: 48, h: 106 };
var spr_ladder_mid = { ref:ref_tiles3, x: 504, y: 144, w: 70, h: 70 };
var spr_ladder_top = { ref:ref_tiles3, x: 504, y: 72, w: 70, h: 70 };
var spr_liquidLava = { ref:ref_tiles3, x: 504, y: 0, w: 70, h: 70 };
var spr_liquidLavaTop = { ref:ref_tiles3, x: 432, y: 864, w: 70, h: 70 };
var spr_liquidLavaTop_mid = { ref:ref_tiles3, x: 432, y: 792, w: 70, h: 70 };
var spr_liquidWater = { ref:ref_tiles3, x: 504, y: 216, w: 70, h: 70 };
var spr_liquidWaterTop = { ref:ref_tiles3, x: 432, y: 648, w: 70, h: 70 };
var spr_liquidWaterTop_mid = { ref:ref_tiles3, x: 432, y: 576, w: 70, h: 70 };
var spr_lock_blue = { ref:ref_tiles3, x: 432, y: 504, w: 70, h: 70 };
var spr_lock_green = { ref:ref_tiles3, x: 72, y: 576, w: 70, h: 70 };
var spr_lock_red = { ref:ref_tiles3, x: 432, y: 360, w: 70, h: 70 };
var spr_lock_yellow = { ref:ref_tiles3, x: 432, y: 288, w: 70, h: 70 };
var spr_rockHillLeft = { ref:ref_tiles3, x: 432, y: 216, w: 70, h: 70 };
var spr_rockHillRight = { ref:ref_tiles3, x: 432, y: 144, w: 70, h: 70 };
var spr_ropeAttached = { ref:ref_tiles3, x: 432, y: 72, w: 70, h: 70 };
var spr_ropeHorizontal = { ref:ref_tiles3, x: 432, y: 0, w: 70, h: 70 };
var spr_ropeVertical = { ref:ref_tiles3, x: 360, y: 864, w: 70, h: 70 };
var spr_sand = { ref:ref_tiles3, x: 360, y: 792, w: 70, h: 70 };
var spr_sandCenter = { ref:ref_tiles3, x: 576, y: 864, w: 70, h: 70 };
var spr_sandCenter_rounded = { ref:ref_tiles3, x: 576, y: 792, w: 70, h: 70 };
var spr_sandCliffLeft = { ref:ref_tiles3, x: 360, y: 720, w: 70, h: 70 };
var spr_sandCliffLeftAlt = { ref:ref_tiles3, x: 360, y: 648, w: 70, h: 70 };
var spr_sandCliffRight = { ref:ref_tiles3, x: 360, y: 576, w: 70, h: 70 };
var spr_sandCliffRightAlt = { ref:ref_tiles3, x: 360, y: 504, w: 70, h: 70 };
var spr_sandHalf = { ref:ref_tiles3, x: 360, y: 432, w: 70, h: 70 };
var spr_sandHalfLeft = { ref:ref_tiles3, x: 360, y: 360, w: 70, h: 70 };
var spr_sandHalfMid = { ref:ref_tiles3, x: 360, y: 288, w: 70, h: 70 };
var spr_sandHalfRight = { ref:ref_tiles3, x: 360, y: 216, w: 70, h: 70 };
var spr_sandHillLeft = { ref:ref_tiles3, x: 360, y: 144, w: 70, h: 70 };
var spr_sandHillLeft2 = { ref:ref_tiles3, x: 360, y: 72, w: 70, h: 70 };
var spr_sandHillRight = { ref:ref_tiles3, x: 360, y: 0, w: 70, h: 70 };
var spr_sandHillRight2 = { ref:ref_tiles3, x: 288, y: 864, w: 70, h: 70 };
var spr_sandLedgeLeft = { ref:ref_tiles3, x: 856, y: 892, w: 5, h: 18 };
var spr_sandLedgeRight = { ref:ref_tiles3, x: 856, y: 912, w: 5, h: 18 };
var spr_sandLeft = { ref:ref_tiles3, x: 288, y: 648, w: 70, h: 70 };
var spr_sandMid = { ref:ref_tiles3, x: 288, y: 576, w: 70, h: 70 };
var spr_sandRight = { ref:ref_tiles3, x: 288, y: 504, w: 70, h: 70 };
var spr_sign = { ref:ref_tiles3, x: 288, y: 432, w: 70, h: 70 };
var spr_signExit = { ref:ref_tiles3, x: 288, y: 360, w: 70, h: 70 };
var spr_signLeft = { ref:ref_tiles3, x: 288, y: 288, w: 70, h: 70 };
var spr_signRight = { ref:ref_tiles3, x: 288, y: 216, w: 70, h: 70 };
var spr_snow = { ref:ref_tiles3, x: 288, y: 144, w: 70, h: 70 };
var spr_snowCenter = { ref:ref_tiles3, x: 720, y: 864, w: 70, h: 70 };
var spr_snowCenter_rounded = { ref:ref_tiles3, x: 288, y: 72, w: 70, h: 70 };
var spr_snowCliffLeft = { ref:ref_tiles3, x: 288, y: 0, w: 70, h: 70 };
var spr_snowCliffLeftAlt = { ref:ref_tiles3, x: 216, y: 864, w: 70, h: 70 };
var spr_snowCliffRight = { ref:ref_tiles3, x: 216, y: 792, w: 70, h: 70 };
var spr_snowCliffRightAlt = { ref:ref_tiles3, x: 216, y: 720, w: 70, h: 70 };
var spr_snowHalf = { ref:ref_tiles3, x: 216, y: 648, w: 70, h: 70 };
var spr_snowHalfLeft = { ref:ref_tiles3, x: 216, y: 576, w: 70, h: 70 };
var spr_snowHalfMid = { ref:ref_tiles3, x: 216, y: 504, w: 70, h: 70 };
var spr_snowHalfRight = { ref:ref_tiles3, x: 216, y: 432, w: 70, h: 70 };
var spr_snowHillLeft = { ref:ref_tiles3, x: 216, y: 360, w: 70, h: 70 };
var spr_snowHillLeft2 = { ref:ref_tiles3, x: 216, y: 288, w: 70, h: 70 };
var spr_snowHillRight = { ref:ref_tiles3, x: 216, y: 216, w: 70, h: 70 };
var spr_snowHillRight2 = { ref:ref_tiles3, x: 216, y: 144, w: 70, h: 70 };
var spr_snowLedgeLeft = { ref:ref_tiles3, x: 863, y: 868, w: 5, h: 18 };
var spr_snowLedgeRight = { ref:ref_tiles3, x: 863, y: 888, w: 5, h: 18 };
var spr_snowLeft = { ref:ref_tiles3, x: 144, y: 864, w: 70, h: 70 };
var spr_snowMid = { ref:ref_tiles3, x: 144, y: 792, w: 70, h: 70 };
var spr_snowRight = { ref:ref_tiles3, x: 144, y: 720, w: 70, h: 70 };
var spr_stone = { ref:ref_tiles3, x: 144, y: 648, w: 70, h: 70 };
var spr_stoneCenter = { ref:ref_tiles3, x: 144, y: 576, w: 70, h: 70 };
var spr_stoneCenter_rounded = { ref:ref_tiles3, x: 144, y: 504, w: 70, h: 70 };
var spr_stoneCliffLeft = { ref:ref_tiles3, x: 144, y: 432, w: 70, h: 70 };
var spr_stoneCliffLeftAlt = { ref:ref_tiles3, x: 144, y: 360, w: 70, h: 70 };
var spr_stoneCliffRight = { ref:ref_tiles3, x: 144, y: 288, w: 70, h: 70 };
var spr_stoneCliffRightAlt = { ref:ref_tiles3, x: 144, y: 216, w: 70, h: 70 };
var spr_stoneHalf = { ref:ref_tiles3, x: 144, y: 144, w: 70, h: 70 };
var spr_stoneHalfLeft = { ref:ref_tiles3, x: 144, y: 72, w: 70, h: 70 };
var spr_stoneHalfMid = { ref:ref_tiles3, x: 144, y: 0, w: 70, h: 70 };
var spr_stoneHalfRight = { ref:ref_tiles3, x: 72, y: 864, w: 70, h: 70 };
var spr_stoneHillLeft2 = { ref:ref_tiles3, x: 72, y: 792, w: 70, h: 70 };
var spr_stoneHillRight2 = { ref:ref_tiles3, x: 72, y: 720, w: 70, h: 70 };
var spr_stoneLedgeLeft = { ref:ref_tiles3, x: 863, y: 908, w: 5, h: 24 };
var spr_stoneLedgeRight = { ref:ref_tiles3, x: 864, y: 148, w: 5, h: 24 };
var spr_stoneLeft = { ref:ref_tiles3, x: 72, y: 504, w: 70, h: 70 };
var spr_stoneMid = { ref:ref_tiles3, x: 72, y: 432, w: 70, h: 70 };
var spr_stoneRight = { ref:ref_tiles3, x: 72, y: 360, w: 70, h: 70 };
var spr_stoneWall = { ref:ref_tiles3, x: 72, y: 288, w: 70, h: 70 };
var spr_tochLit = { ref:ref_tiles3, x: 72, y: 216, w: 70, h: 70 };
var spr_tochLit2 = { ref:ref_tiles3, x: 72, y: 144, w: 70, h: 70 };
var spr_torch = { ref:ref_tiles3, x: 72, y: 72, w: 70, h: 70 };
var spr_window = { ref:ref_tiles3, x: 72, y: 0, w: 70, h: 70 };
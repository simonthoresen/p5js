function preload() {
	menuBgImg = loadImage("stjerner.jpg");
	playBgImg = loadImage("jorda.jpg");	
	youWinImg = loadImage("u_won.PNG");
	youLooseImg = loadImage("u_loose.PNG");
	
	bulletImg = loadImage("bullet2.png");		
	enemyImg = loadImage("enemy2.png");
	enemyDieSnd = loadSound("eksplosjon.wav");
	playerImg = loadImage("player2.png");
	playerShootSnd = loadSound("shot.wav");
	spaceFox = loadImage("IMG_0045.PNG");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (gameMode == MODE_MENU) {
		drawMenu();
	} else if (gameMode == MODE_PLAY) {
		drawPlay();
	}
}
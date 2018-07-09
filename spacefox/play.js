// inne i denne funksjonen må du sette opp alt slik det skal være når
// et nytt spill skal starte
function initPlay() {
	gameMode = MODE_PLAY;
	playMode = PLAY_ON;
	playFrame = frameCount;

	playerX = Math.floor(windowWidth / 2);
	playerY = Math.floor(windowHeight - PLAYER_H * 1.5);
	playerFrame = 0;
	bulletY = -BULLET_H;

	enemiesSpeed = ENEMY_SPEED;
	enemiesX = 0;
	enemiesY = 0;

	// her beregner vi x og y koordinater for alle enemyne som finnes ved å 
	// telle over alle rader og kolonner med enemye
	enemyDX = [];
	enemyDY = [];	
	enemyAlive = [];
	for (var row = 0; row < ENEMY_ROWS; ++row) {
		for (var col = 0; col < ENEMY_COLS; ++col) {
			var i = row * ENEMY_COLS + col;
			enemyDX[i] = col * Math.floor(ENEMY_W * 1.5);
			enemyDY[i] = row * Math.floor(ENEMY_H * 1.5);
			enemyAlive[i] = true;
		}
	}	
	calcEnemiesAliveBox();
}

// denne funksjonen beregner det vi kaller en "bounding box" rundt alle
// levende enemies. Dette gjør at vi effektivt kan sjekke om noe kan 
// kollidere med en enemy
function calcEnemiesAliveBox() {
	enemiesAliveDX = windowWidth;
	enemiesAliveDY = windowHeight;
	enemiesAliveW = 0;
	enemiesAliveH = 0;	
	for (var i = 0; i < enemyAlive.length; ++i) {
		if (enemyAlive[i]) {
			enemiesAliveDX = Math.min(enemiesAliveDX, enemyDX[i]);
			enemiesAliveDY = Math.min(enemiesAliveDY, enemyDY[i]);
			enemiesAliveW = Math.max(enemiesAliveW, enemyDX[i] + ENEMY_W);
			enemiesAliveH = Math.max(enemiesAliveH, enemyDY[i] + ENEMY_H);
		}
	}
}

function drawPlay() {
	if (playMode == PLAY_ON) {
		update();
	} else if (frameCount > playFrame + 120) {
		gameMode = MODE_MENU;
	}
	drawPlayFrame();
	if (playMode == PLAY_WON) {	
		imageCenter(youWinImg);
	} else if (playMode == PLAY_DEAD) {
		imageCenter(youLooseImg);		
	}
}

// inne i denne funksjonen oppdaterer man plasseringen av enemies, sjekker om
// du trykker på en knapp, sjekker om man treffer noen, og lignende
function update() {
	// flytt bulleten
	moveBullet();	
	lookForBulletCollision();
	
	// flytt enemies
	moveEnemies();
	lookForPlayerCollision();
	lookForEnemiesRemaining();	
	lookForEnemiesAtGoal();

	// se om noen knapper er trykket ned
	if (keyIsDown(LEFT_ARROW)) {
		moveLeft();
	}
	if (keyIsDown(RIGHT_ARROW)) {
		moveRight();
	}	
	if (keyIsDown(SPACE)) {
		shootBullet();
	}
	playFrame = frameCount;
}

function moveBullet() {
	bulletY = bulletY - BULLET_SPEED;
}

function lookForBulletCollision() {
	// her må du sjekke om bulleten kolliderer med noen av enemyne, for da 
	// skal den enemyen dø. du må lage en løkke som sjekker isBulletColliding(x)  
	// for hver enemy x. dersom enemy x er truffet og skal dø, så må du 
	// sette enemyAlive[x] = false og spille av en eksplosjonslyd. 

	// først sjekker vi om bulleten er innenfor "bounding box" til alle levende
	// enemies. dersom den ikke er det, så vet vi at den ikke kan treffe noe
	// som helst. da trenger vi ikke å sjekke en etter en enemy
	if (!canEnemiesCollide(bulletX, bulletY, BULLET_W, BULLET_H)) {
		return;
	}

	// her er en løkke som ser på alle enemyne
	for (var i = 0; i < enemyAlive.length; ++i) {
		// så sjekker vi om denne kolliderer med bulleten 
		if (isBulletColliding(i)) {			
			// det var en kollisjon mellom bulleten og enemy 'i', så da må 
			// fienden dø
			enemyDieSnd.play();
			enemyAlive[i] = false;
			calcEnemiesAliveBox();
				
			// og vi må ta bort bulleten slik at den ikke fortsetter oppover
			bulletY = -BULLET_H;
		}
	}
}

function moveEnemies() {
	enemiesX = enemiesX + enemiesSpeed;	
	if (enemiesX + enemiesAliveW >= windowWidth) {
		// fiendene har gått ut av skjermen til høyre, så de må snu
		enemiesSpeed = -ENEMY_SPEED;
		enemiesX = windowWidth - enemiesAliveW;
		enemiesY = enemiesY + ENEMY_JUMP;
	}
	if (enemiesX + enemiesAliveDX <= 0) {
		// fiendene har gått ut av skjermen til venstre, så de må snu
		enemiesSpeed = ENEMY_SPEED;
		enemiesX = -enemiesAliveDX;
		enemiesY = enemiesY + ENEMY_JUMP;
	}
}

function lookForPlayerCollision() {
	if (!canEnemiesCollide(playerX, playerY, PLAYER_W, PLAYER_H)) {
		return;
	}
	for (var i = 0; i < enemyAlive.length; ++i) {		
		if (isPlayerColliding(i)) {
			// RONJA: her må du lage døde-lyd
			playMode = PLAY_DEAD;
		}
	}
}

function lookForEnemiesRemaining() {
	for (var i = 0; i < enemyAlive.length; ++i) {
		if (enemyAlive[i]) {
			return;
		}
	}
	// RONJA: her må du lage du-vant lyden
	playMode = PLAY_WON;
}
	
function lookForEnemiesAtGoal() {
	if (enemiesY + enemiesAliveH >= windowHeight) {
		// RONJA: her må du lage aliens-vant lyden
		playMode = PLAY_DEAD;
	}
}

function moveLeft() {
	playerX = playerX - PLAYER_SPEED;

	// pass på at ikke spilleren går ut av skjermen på venstre side
	var minX = 0;
	if (playerX < minX) {
		playerX = minX;
	}
}	

function moveRight() {
	playerX = playerX + PLAYER_SPEED;
		
	// pass på at ikke spilleren går ut av skjermen på høyre side
	var maxX = windowWidth - PLAYER_W;
	if (playerX > maxX) {
		playerX = maxX;
	}
}

function shootBullet() {
	// dersom bulleten fortsatt er på skjermen, så later vi som om man ikke trykket
	// på space -- man kan jo bare ha en bullet om gangen
	if (bulletY > -BULLET_H) {
		return;
	}

	// bulleten er utenfor skjermen, så da kan vi flytte den til der hvor 
	// skipet står (da ser det ut som om den kommer ut av den).
	bulletX = playerX + PLAYER_W / 2 - BULLET_W / 2;
	bulletY = playerY + PLAYER_H / 2 - BULLET_H / 2;

	playerShootSnd.play();
}

// inne i denne funksjonen tegner man opp alt som skal vises frem
function drawPlayFrame() {
	background(playBgImg);
	imageAnim(bulletImg, BULLET_FRAMES, bulletX, bulletY, BULLET_W, BULLET_H);
	imageFrame(playerImg, PLAYER_FRAMES, bulletY > -BULLET_H ? 2 : 1, 
						 playerX, playerY, PLAYER_W, PLAYER_H);
	for (var i = 0; i < enemyDX.length; ++i) {
		if (enemyAlive[i]) {
			drawEnemy(enemiesX + enemyDX[i], enemiesY + enemyDY[i]);
		}
	}
}

function drawEnemy(x, y) {
  imageAnim(enemyImg, ENEMY_FRAMES, x, y, ENEMY_W, ENEMY_H);
}
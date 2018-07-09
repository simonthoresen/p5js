function isPlayerColliding(enemyIdx) {
	return isEnemyColliding(enemyIdx, playerX, playerY, BULLET_W, BULLET_H);
}

function isBulletColliding(enemyIdx) {
	return isEnemyColliding(enemyIdx, bulletX, bulletY, BULLET_W, BULLET_H);
}

function canEnemiesCollide(x, y, w, h) {
	return isBoxColliding(enemiesX + enemiesAliveDX,
												enemiesY + enemiesAliveDY,
												enemiesAliveW,
												enemiesAliveH,
												x, y, w, h);
}

function isEnemyColliding(enemyIdx, x, y, w, h) {
	return enemyAlive[enemyIdx] &&
				 isBoxColliding(enemiesX + enemyDX[enemyIdx], 
												enemiesY + enemyDY[enemyIdx], 
												ENEMY_W, 
												ENEMY_H, 
												x, y, w, h);
}

// denne funksjonen sjekker om en boks A kolliderer med en annen boks B, som
// er det man bruker for å se om bulleten treffer en enemy eller en enemy
// treffer skipet
function isBoxColliding(aX, aY, aW, aH, bX, bY, bW, bH) {
		if (!isAxisColliding(aX, aX + aW, bX, bX + bW)) {
				return false;
		}
		if (!isAxisColliding(aY, aY + aH, bY, bY + bH)) {
				return false;
		}
		return true;
}

function isAxisColliding(a1, a2, b1, b2) {
		if (a1 >= b1 && a1 <= b2) {
				return true;
		}
		if (a2 >= b1 && a2 <= b2) {
				return true;
		}
		if (a1 <= b1 && a2 >= b2) {
				return true;
		}
		return false;
}
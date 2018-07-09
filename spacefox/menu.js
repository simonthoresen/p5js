function drawMenu() {
	background(menuBgImg);
	spaceFoxX = width/4;
	spaceFoxY = height/4;
	image(spaceFox, spaceFoxX, spaceFoxY, width - spaceFoxX*2, height - spaceFoxY*2);
	
	// RONJA: her kan du legg inn et "start bilde" som vises oppå stjerne himmelen.
	// kanskje dette er bildet av hovedpersonen, eller det er navnet på spillet? Det
	// finnes en funksjon som heter imageCenter() som du kan bruke; du trenger bare 
	// gi den bildet, så tegnes det midt på skjermen. Du kan se hvordan you-win og 
	// you-loose bruker den funksjonen inne i "play".
	
	if (frameCount % 80 <= 40){
		push();
		fill(0);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('PRESS SPACE TO START', width / 2, 4 * height / 5);
		pop();
	}
	if (keyIsDown(SPACE)) {
		initPlay(); // init betyr initialiser, play betyr spill => start spillet
	}
}
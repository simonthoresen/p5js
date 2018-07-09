function imageCenter(img) {
	image(img, 
				windowWidth / 2 - img.width / 2, 
				windowHeight / 2 - img.height / 2);
}

function imageAnim(img, numFrames, x, y, w, h) {
	var frameIdx = Math.floor(frameCount / 10) % numFrames;
	imageFrame(img, numFrames, frameIdx, x, y, w, h);
}

function imageFrame(img, numFrames, frameIdx, x, y, w, h) {
	var frameW = img.width / numFrames;
	image(img, x, y, w, h, frameW * frameIdx, 0, frameW, img.height);
}
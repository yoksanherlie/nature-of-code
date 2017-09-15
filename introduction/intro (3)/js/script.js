let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

window.onload = () => {
	walker = new Walker();

	draw();
}

function draw() {
	walker.walk();
	walker.draw();

	requestAnimationFrame(draw);
}

/*
 * PROBABILITY
 * 
 * -- Lesson about probability --
 *
 * Random walker that's more probable to move left
 *
 */
let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let randLocX = random(cw),
		randLocY = random(ch);

	let randVelX = Math.floor(Math.random() * 7) - 3,
		randVelY = Math.floor(Math.random() * 7) - 3;

	let mover = new Mover(
			new Vector(randLocX, randLocY),
			new Vector(randVelX, randVelY)
		);

	function update() {
		mover.update();
		mover.checkCollision();
		mover.draw();

		requestAnimationFrame(update);
	}

	update();
}

function random(val) {
	return Math.floor(Math.random() * val);
}

window.onload = init();
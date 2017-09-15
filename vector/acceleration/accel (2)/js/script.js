let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let mover = new Mover({
		location: new Vector(cw / 2, ch / 2),
		velocity: new Vector(0, 0),
	});

	function update() {
		mover.update();
		mover.checkCollision();
		mover.draw();

		requestAnimationFrame(update);
	}

	update();
}

function random(val) {
	return Math.floor(Math.random() * (val + val + 1)) - val;
}

window.onload = init();
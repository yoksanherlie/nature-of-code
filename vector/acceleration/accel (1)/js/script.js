let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let mover = new Mover({
		location: new Vector(cw / 2, ch / 2),
		velocity: new Vector(0, 0),
		acceleration: new Vector(-0.001, 0.01)
	});

	function update() {
		mover.update();
		mover.checkCollision();
		mover.draw();

		requestAnimationFrame(update);
	}

	update();
}

window.onload = init();
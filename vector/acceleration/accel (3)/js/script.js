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

	let mouse = new Vector(0, 0);
	let dir;

	function update() {
		dir = Vector.sub(mouse, mover.location);
		dir.normalize();
		dir.mult(1);

		mover.acceleration = dir;

		mover.update();
		mover.draw();

		requestAnimationFrame(update);
	}

	update();

	canvas.addEventListener("mousemove", (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;
	})
}

function random(val) {
	return Math.floor(Math.random() * (val + val + 1)) - val;
}

window.onload = init();
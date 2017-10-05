let $ = document.querySelector.bind(document);

canvas = $("canvas");
ctx = canvas.getContext('2d');

cw = canvas.width;
ch = canvas.height;

function init() {
	let mover = new Mover({
		location: new Vector(100, 100),
		velocity: new Vector(0, 0),
		acceleration: new Vector(0, 0)
	})

	function update() {
		ctx.clearRect(0, 0, cw, ch);

		let wind = new Vector(.1, 0),
			gravity = new Vector(0, .5);

		mover.applyForce(wind);
		mover.applyForce(gravity);

		mover.update();
		mover.draw();
		mover.checkEdges();

		requestAnimationFrame(update);
	}

	update();
}

window.onload = init();
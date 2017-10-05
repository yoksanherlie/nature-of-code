let $ = document.querySelector.bind(document);

canvas = $("canvas");
ctx = canvas.getContext('2d');

cw = canvas.width;
ch = canvas.height;

wind = new Vector(.01, 0);
gravity = new Vector(0, .1);

function init() {
	let movers = [];

	function update() {
		ctx.clearRect(0, 0, cw, ch);

		movers.forEach((mover) => {
			// 2nd version (gravity)
			let _gravity = Vector.mult(gravity, mover.mass);

			mover.applyForce(wind);
			// mover.applyForce(_gravity); // 2nd version
			mover.applyForce(gravity) // 1st version

			mover.update();
			mover.draw();
			mover.checkEdges();
		});

		requestAnimationFrame(update);
	}

	function generateMovers() {
		for(let i = 1; i <= 100; i++) {
			let mass = parseFloat((Math.random() * 5 + 1).toFixed(1))
			movers.push(new Mover({
				location: new Vector(0, 0),
				velocity: new Vector(0, 0),
				acceleration: new Vector(0, 0),
				mass: mass
			}));
		}
	}

	generateMovers();
	update();
}

function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}

window.onload = init();
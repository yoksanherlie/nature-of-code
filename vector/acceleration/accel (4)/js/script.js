let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let mouse = new Vector(0, 0),
		movers = [];

	function update() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.save();

		for(let i = 0; i < movers.length; i++) {
			movers[i].update(mouse);
			movers[i].draw();
		}

		ctx.restore();

		requestAnimationFrame(update);
	}

	function generateMovers() {
		for(let i = 0; i < 20; i++) {
			movers[i] = new Mover({
				location: new Vector(random(cw), random(ch)),
				velocity: new Vector(0, 0)
			});
		}
	}

	canvas.addEventListener("mousemove", (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;
	});

	generateMovers();
	update();
}

function random(val) {
	return Math.floor(Math.random() * val);
}

window.onload = init();
let $ = document.querySelector.bind(document);

canvas = $("canvas");
ctx = canvas.getContext('2d');

cw = canvas.width;
ch = canvas.height;

mousePressed = false;

function init() {
	let mover = new Mover({
		location: new Vector(random(cw), random(ch)),
		velocity: new Vector(random(3), random(3))
	});

	function update() {
		ctx.clearRect(0, 0, cw, ch);

		mover.update();
		mover.checkCollision();
		mover.draw();

		if(mousePressed) {
			let x = random(5) / 50,
				y = random(5) / 50;

			let wind = new Vector(x, y);
			mover.applyForce(wind);
		}

		requestAnimationFrame(update);
	}
	
	update();

	canvas.addEventListener("mousedown", () => {
		mousePressed = true;
	});

	canvas.addEventListener("mouseup", () => {
		mousePressed = false;
	});
}

function random(val) {
	return Math.floor(Math.random() * val);
}

window.onload = init();
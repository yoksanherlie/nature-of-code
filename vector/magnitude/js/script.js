let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let mouse = new Vector(0, 0),
		center = new Vector(cw / 2, ch / 2);

	mouse.sub(center);

	let mag = mouse.mag();

	console.log(mag);

	function draw() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.save();

		drawMag();
		drawLine();

		ctx.restore();

		requestAnimationFrame(draw);
	}

	function drawLine() {
		ctx.beginPath();

		ctx.translate(cw / 2, ch / 2);
		ctx.moveTo(0, 0);
		ctx.lineTo(mouse.x, mouse.y);
		ctx.lineWidth = 2;
		ctx.stroke();

		ctx.closePath();
	}

	function drawMag() {
		ctx.beginPath();

		ctx.rect(0, 0, mag, 10);
		ctx.fill();

		ctx.closePath();
	}

	canvas.addEventListener("mousemove", (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;

		mouse.sub(center);
		mag = mouse.mag();
	})

	draw();
}

window.onload = init();
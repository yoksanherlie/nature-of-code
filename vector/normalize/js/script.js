let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

function init() {
	let mouse = new Vector(0, 0),
		center = new Vector(cw / 2, ch / 2);

	mouse.sub(center);
	mouse.normalize();
	mouse.mult(100);

	function draw() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.save();

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

	canvas.addEventListener("mousemove", (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;

		mouse.sub(center);
		mouse.normalize();
		mouse.mult(100);
	})

	draw();
}

window.onload = init();
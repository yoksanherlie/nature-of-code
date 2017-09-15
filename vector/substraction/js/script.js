let $ = document.querySelector.bind(document);

canvas = $("canvas");

ctx = canvas.getContext('2d');

window.onload = () => {
	init();
}

function init() {
	let cw = canvas.width,
		ch = canvas.height;

	let center = new Vector(cw / 2, ch / 2),
		mouse = new Vector(0, 0);

	mouse.sub(center);

	function draw() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.save();

		ctx.beginPath();

		ctx.translate(cw / 2, ch / 2);
		ctx.moveTo(0, 0);
		ctx.lineTo(mouse.x, mouse.y);
		ctx.lineWidth = 2;
		ctx.stroke();

		ctx.closePath();

		ctx.restore();

		requestAnimationFrame(draw);
	}

	// init
	draw();

	// handle listener
	canvas.addEventListener("mousemove", (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;

		mouse.sub(center);
	});
}
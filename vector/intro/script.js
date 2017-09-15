let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

let x = 100,
	y = 100,
	xspeed = 2;
	yspeed = 3.3;

window.onload = () => {
	update();
}

function update() {
	move();
	draw();

	requestAnimationFrame(update);
}

function move() {
	x += xspeed;
	y += yspeed;

	if(x > cw || x < 0) {
		xspeed = -xspeed;
	}

	if(y > ch || y < 0) {
		yspeed = -yspeed;
	}
}

function draw() {
	ctx.clearRect(0, 0, cw, ch);

	ctx.beginPath();

	ctx.arc(x, y, 25, 0, 2 * Math.PI);
	ctx.fillStyle = "#aaa";
	ctx.fill();

	ctx.stroke();

	ctx.closePath();
}
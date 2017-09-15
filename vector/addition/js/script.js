let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');



window.onload = () => {
	init();
}

function init() {
	let location = new Vector(100, 100),
		velocity = new Vector(2, 3.3);

	function update() {
		move();
		draw();

		requestAnimationFrame(update);
	}

	function move() {
		location.add(velocity);

		if(location.x > cw || location.x < 0) {
			velocity.x = -(velocity.x);
		}

		if(location.y > ch || location.y < 0) {
			velocity.y = -(velocity.y);
		}
	}

	function draw() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.beginPath();

		ctx.arc(location.x, location.y, 25, 0, 2 * Math.PI);
		ctx.fillStyle = "#aaa";
		ctx.fill();

		ctx.stroke();

		ctx.closePath();
	}

	// init
	update();
}
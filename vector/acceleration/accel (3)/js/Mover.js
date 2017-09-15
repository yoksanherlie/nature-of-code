class Mover {

	constructor(opt) {
		this.location = opt.location;
		this.velocity = opt.velocity;
		this.acceleration = null;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
	}

	draw() {
		ctx.clearRect(0, 0, cw, ch);

		ctx.save();

		ctx.beginPath();

		ctx.arc(this.location.x, this.location.y, 25, 0, 2 * Math.PI);
		ctx.fillStyle = "#aaa";
		ctx.fill();

		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}
}
class Mover {

	constructor(opt) {
		this.location = opt.location;
		this.velocity = opt.velocity;
		this.accel = opt.accel || null;
	}

	update(mouse) {
		let dir = Vector.sub(mouse, this.location);
		dir.normalize();
		dir.mult(.5);

		this.accel = dir;

		this.velocity.add(this.accel);
		this.velocity.limit(8);
		this.location.add(this.velocity);
	}

	draw() {
		ctx.save();

		ctx.beginPath();

		ctx.arc(this.location.x, this.location.y, 25, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(107, 107, 107, .5)";
		ctx.fill();

		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}


}
class Mover {

	constructor(opt) {
		this.location = opt.location;
		this.velocity = opt.velocity;
		this.acceleration = opt.acceleration;
		this.mass = opt.mass;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	applyForce(force) {
		let f = Vector.div(force, this.mass);
		this.acceleration.add(f);
	}

	checkEdges() {
		if(this.location.x > cw) {
			this.location.x = cw;
			this.velocity.x *= -1;
		}else if(this.location.x < 0) {
			this.location.x = 0;
			this.velocity.x *= -1;
		}

		if(this.location.y > ch) {
			this.location.y = ch;
			this.velocity.y *= -1;
		}
	}

	draw() {
		ctx.save();

		ctx.beginPath();

		ctx.arc(this.location.x, this.location.y, this.mass * 5, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(0, 0, 0, .25)";
		ctx.fill();

		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}
}
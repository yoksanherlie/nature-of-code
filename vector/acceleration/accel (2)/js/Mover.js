class Mover {

	constructor(opt) {
		this.location = opt.location;
		this.velocity = opt.velocity;

		this.max = 10;
	}

	update() {
		let acceleration = new Vector(random(1), random(1));

		let randomDiv = Math.pow(10, Math.floor(Math.random() * 1));

		this.velocity.add(acceleration);
		this.velocity.div(randomDiv);
		this.velocity.limit(this.max);
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

	checkCollision() {
		if(this.location.x > cw) {
			this.location.x = 0;
		}else if(this.location.x < 0) {
			this.location.x = cw;
		}

		if(this.location.y > ch) {
			this.location.y = 0;
		}else if(this.location.y < 0) {
			this.location.y = ch;
		}
	}
}
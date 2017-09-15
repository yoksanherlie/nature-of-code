class Mover {

	constructor(location, velocity) {
		this.location = location;
		this.velocity = velocity;
	}

	update() {
		this.location.add(this.velocity);
	}

	draw() {
		ctx.clearRect(0, 0, cw, ch);
		ctx.save();

		ctx.beginPath();

		ctx.arc(this.location.x, this.location.y, 25, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(170, 170, 170, .6)";
		ctx.fill();

		ctx.stroke();

		ctx.closePath();

		ctx.restore();
	}

	checkCollision() {
		if(this.location.x > cw) {
			this.location.x = 0;
		}else if(this.location < 0) {
			this.location.x = cw;
		}

		if(this.location.y > ch) {
			this.location.y = 0;
		}else if(this.location.y < 0) {
			this.locatino.y = ch;
		}
	}
}
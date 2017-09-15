class Vector {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
	}

	static add(v1, v2) {
		return new Vector(v1.x + v2.x, v1.y + v2.y);
	}

	static sub(v1, v2) {
		return new Vector(v1.x - v2.x, v1.y - v2.y);
	}

	mult(n) {
		this.x *= n;
		this.y *= n;
	}

	div(n) {
		this.x /= n;
		this.y /= n;
	}

	mag() {
		return Math.hypot(this.x, this.y);
	}

	normalize() {
		let mag = this.mag();
		this.div(mag);
	}

	limit(max) {
		if(this.mag() > max) {
			this.normalize();
			this.mult(max);
		}
	}
}
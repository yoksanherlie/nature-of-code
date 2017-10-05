class Vector {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static mult(v, n) {
		return new Vector(v.x * n, v.y * n);
	}

	static div(v, n) {
		return new Vector(v.x / n, v.y / n);
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
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
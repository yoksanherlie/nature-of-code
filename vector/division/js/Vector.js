class Vector {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
	}

	div(n) {
		this.x /= n;
		this.y /= n;
	}
}
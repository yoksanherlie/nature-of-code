class Walker {

	constructor() {
		this.x = cw / 2;
		this.y = ch / 2;
	}

	draw() {
		ctx.beginPath();

		ctx.rect(this.x, this.y, 5, 5);
		ctx.fill();

		ctx.closePath();
	}

	walk() {
		let walkx = Math.floor(Math.random() * 2),
			walky = Math.floor(Math.random() * 2);

		walkx = Math.random() > .5 ? walkx : -walkx
		walky = Math.random() > .5 ? walky : -walky

		this.x += walkx;
		this.y += walky;
	}
}
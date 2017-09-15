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
		let rand = Math.random();

		if(rand < .4) {
			this.x--;
		}else if(rand < .6) {
			this.x++;
		}else if(rand < .8) {
			this.y++;
		}else {
			this.y--;
		}
	}
}
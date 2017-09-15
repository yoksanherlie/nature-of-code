let $ = document.querySelector.bind(document);

canvas = $("canvas");

cw = canvas.width;
ch = canvas.height;

ctx = canvas.getContext('2d');

let randomCount = [];

window.onload = () => {
	initArray();

	w = cw / randomCount.length;

	draw();
}

function initArray() {
	for(let i = 0; i < 20; i++) {
		randomCount[i] = 0;
	}
}

function draw() {
	let randIndex = Math.floor(Math.random() * randomCount.length);

	randomCount[randIndex]++;

	for(let i = 0; i < randomCount.length; i++) {
		ctx.beginPath();

		ctx.rect(i * w, ch - randomCount[i], w, randomCount[i]);
		ctx.fillStyle = "#aaa";
		ctx.fill();

		ctx.strokeStyle = "black";
		ctx.stroke();

		ctx.closePath();
	}

	requestAnimationFrame(draw);
}
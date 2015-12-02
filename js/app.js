var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);


var lastTime;
function main() {
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);
	render();

	lastTime = now;
	requestAnimFrame(main);
};

function init() {

	map.load();

	player.pos = map.startPosition.slice();

	lastTime = Date.now();
	main();
}

resources.load([
	'images/player.png',
	'images/grass.png',
	'images/wall.png',
	'images/point_red.png',
	'images/box_black.png'
]);
resources.onReady(init);

var level = 1;
var player = new Player();
var map = new GameMap(getMap(level));

function update(dt) {

	player.update(lastTime);
	inputEvent(dt);   
}

function render() {

	map.render(ctx);
	player.render(ctx);
	renderScore();
};

function inputEvent(dt) {

	if(input.isDown('DOWN') || input.isDown('s')) {
		player.move(Direction.Down);
	} else if(input.isDown('UP') || input.isDown('w')) {
		player.move(Direction.Up);
	} else if(input.isDown('LEFT') || input.isDown('a')) {
		player.move(Direction.Left);
	} else if(input.isDown('RIGHT') || input.isDown('d')) {
		player.move(Direction.Right);
	}
	if(input.isDown('ESC'))
		reset(level);
}

function renderScore() {

	ctx.fillStyle ="white";
	ctx.font = "italic bold 40px/40px purisa, serif";
	ctx.fillText("Level: " + map.level + "\tSteps: "+player.moves, 10,32);
	ctx.font = "italic bold 12px/12px purisa, serif";
	ctx.fillText("Press ESC to reset", 140, 50);
}

function reset (lvl) {

	player = new Player();
	map = new GameMap(getMap(lvl));
	map.load();
	player.pos = map.startPosition.slice();

}
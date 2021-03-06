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

	reset(map.level);

	lastTime = Date.now();
	main();
}

resources.load([
	'images/player.png',
	'images/check_point.png',
	'images/castle_floor.png',
	'images/ship_floor.png',
	'images/street_floor.png',
	'images/castle_wall.png',
	'images/classic_wall.png',
	'images/ship_wall.png',
	'images/medical_box.png',
	'images/wooden_box_shaded.png',
	'images/wooden_box.png',
	'images/golden_box.png'
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
	} else if(input.isDown('SPACE')){
		player.undoMove();
	}
	if(input.isDown('ESC'))
		reset(map.level);
}

function renderScore() {

	ctx.fillStyle ="white";
	ctx.font = "italic bold 40px/40px purisa, serif";
	ctx.fillText("Level: " + map.level + "\tSteps: "+player.moves, 10,32);
	ctx.font = "italic bold 12px/12px purisa, serif";
	ctx.fillText("Press ESC to reset and SPACE to undo moves", 50, 50);
}

function reset (lvl) {

	player = new Player();
	map = new GameMap(getMap(lvl));
	map.load();
	player.pos = map.startPosition.slice();

}
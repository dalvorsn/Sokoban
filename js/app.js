var baseMap = [
[4,1,1,1,1,4,4,4],
[4,1,5,0,1,1,1,4],
[4,1,0,2,0,0,1,4],
[1,1,1,0,1,0,1,1],
[1,3,1,0,1,0,0,1],
[1,3,2,0,0,1,0,1],
[1,3,0,0,0,2,0,1],
[1,1,1,1,1,1,1,1],
];

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = baseMap.length * tileBaseSize;
canvas.height = baseMap[0].length * tileBaseSize;
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

var player = new Player();
var map = new GameMap(baseMap);

function update(dt) {
    player.update(lastTime);
    inputEvent(dt);   
}

function render() {

    map.render(ctx);
    player.render(ctx);
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
}
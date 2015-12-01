// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var tileBaseSize = 64;

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

var Tile = {
    Empty: 0,
    Wall: 1,
    Box: 2,
    EndPoint: 3,
    Away: 4,
    Start: 5,
}

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
    terrainPattern = ctx.createPattern(resources.get('images/grass.png'), 'repeat');

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


// Game State

var player = new Player();
var map = copy(baseMap);
var startPosition;
var terrainPattern;

function update(dt) {
    player.update(lastTime);
    inputEvent(dt);   
}

function render() {
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMap(map);
    renderEntity(player);
};

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0]*tileBaseSize, entity.pos[1]*tileBaseSize);
    entity.render(ctx);
    ctx.restore();
}

function inputEvent(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.move(0);
    } else if(input.isDown('UP') || input.isDown('w')) {
        player.move(1);
    } else if(input.isDown('LEFT') || input.isDown('a')) {
        player.move(2);
    } else if(input.isDown('RIGHT') || input.isDown('d')) {
        player.move(3);
    }
}

function drawMap (map) {
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            var type = map[y][x];
            var path;
            switch(type){
                case Tile.Wall:
                    path = 'images/wall.png';
                    break;
                case Tile.Empty:
                    path = false;
                    break;
                case Tile.Box:
                    path = 'images/box_black.png';
                    break;
                case Tile.EndPoint:
                    path = 'images/point_red.png';
                    break;
                case Tile.Start:
                    path = false;
                    if(!startPosition){
                        startPosition = [x,y];
                        player.pos = startPosition.slice();
                    }
                    break;
                default:
                    path = false;
            }
            if(path) {
                ctx.drawImage(resources.get(path), x*tileBaseSize, y*tileBaseSize);
            }
        }
    }
}

function copy(o) {
   var out, v, key;
   out = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       out[key] = (typeof v === "object") ? copy(v) : v;
   }
   return out;
}
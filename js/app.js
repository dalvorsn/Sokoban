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
//var mapWidth = 8;
//var mapHeight = 6;
//var tileBaseSize = 64;


canvas.width = 512; //mapWidth * tileBaseSize;
canvas.height = 480; //mapHeight * tileBaseSize;
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
    //iniciando o jogo
    terrainPattern = ctx.createPattern(resources.get('images/grounds/grass.png'), 'repeat');

    lastTime = Date.now();

    //iniciando o game loop
    main();
}

resources.load([
    'images/player/front_stop.png',
    'images/player/front_move_1.png',
    'images/player/front_move_2.png',
    'images/player/back_stop.png',
    'images/player/back_move_1.png',
    'images/player/back_move_2.png',
    'images/player/left_stop.png',
    'images/player/left_move.png',
    'images/player/right_stop.png',
    'images/player/right_move.png',
    'images/grounds/grass.png'
]);
resources.onReady(init);


// Game State

var terrainPattern;

//create player
var player = {
    pos: [0, 0],
    sprite: new Sprite('images/player/front_stop.png', [0, 0],32,[64, 64]),
    speed: 200
};

function update(dt) {
    player.sprite.update(dt);

    inputEvent(dt);
}

function render() {
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    renderEntity(player);
};

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}

function inputEvent(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.pos[1] += player.speed * dt;
    }

    if(input.isDown('UP') || input.isDown('w')) {
        player.pos[1] -= player.speed * dt;
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        player.pos[0] -= player.speed * dt;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += player.speed * dt;
    }
}
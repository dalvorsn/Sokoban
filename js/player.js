(function () {
	function Player() {
		this.pos = [0,0];
		this.walkDelay = 300;
		this.url = 'images/player.png';
		this.dir = 0;
		this.lastTime = 0;
		this.wait = 0;
		this.moves = 0;
	};

	Player.prototype = {
		update: function (lastTime){
			this.lastTime = lastTime;
		},
		render: function (ctx) {
			ctx.drawImage(resources.get(this.url),
				this.pos[0] + this.dir * tileBaseSize, this.pos[1], 
				tileBaseSize, tileBaseSize, 0, 0, tileBaseSize, tileBaseSize);
		},
		move: function (dir) {
			if (this.lastTime < this.wait) return

			var xdif = 0;
			var ydif = 0;
			switch(dir){
				case 1:
					ydif = -1;
					break;	
				case 2:
					xdif = -1;
					break;
				case 3:
					xdif = 1;
					break;
				case 0:
					ydif = 1;
					break;
			}

			var _type = map[ this.pos[1] + ydif ][ this.pos[0] + xdif ];
			var _move = true;
			switch(_type) {
				case Tile.Wall:
					_move = false;
					break;
				case Tile.Box:
					var np = [this.pos[0] + xdif * 2, this.pos[1] + ydif * 2]
					var nextTile = map[ np[1] ][ np[0] ];
					if(nextTile === Tile.Empty || nextTile === Tile.EndPoint){
						map[ this.pos[1] + ydif ][ this.pos[0] + xdif ] = Tile.Empty;
						map[ np[1] ][ np[0] ] = Tile.Box;
						
					} else 
						_move = false;
					break;

			}
			if(_move){
				this.pos[0] += xdif;
				this.pos[1] += ydif;
				this.dir = dir;
				this.wait = this.lastTime + this.walkDelay;
				this.moves++;
			}
				
		}
	};

	window.Player = Player;

})();
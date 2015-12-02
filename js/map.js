(function () {
	function GameMap(map) {
		this.baseMap = map.dataMap;
		this.map = copy(map.dataMap);
		this.startPosition = [0,0];
		this.endPoints = [];
		this.terrainPattern;
		this.paths = copy(map.paths);
		this.level = map.level;
		canvas.width = map.dataMap[0].length * tileBaseSize;
		canvas.height = map.dataMap.length * tileBaseSize;
		//debugger;
	};

	GameMap.prototype = {
		load: function () {
			this.terrainPattern = ctx.createPattern(resources.get('images/grass.png'), 'repeat');
			for (var y = 0; y < this.baseMap.length; y++) {
				for (var x = 0; x < this.baseMap[y].length; x++) {
					var type = this.baseMap[y][x];
					switch(type){
						case Tile.EndPoint:
							this.endPoints.push([x,y]);
							break;
						case Tile.Start:
							this.startPosition = [x, y];
							break;
					}
				}
			}

		},
		render: function (ctx) {
			ctx.fillStyle = this.terrainPattern;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			for (var y = 0; y < this.map.length; y++) {
				for (var x = 0; x < this.map[y].length; x++) {
					var type = this.map[y][x];
					var path;
					switch(type){
						case Tile.Wall:
							path = this.paths.wall;
							break;
						case Tile.Box:
							path = this.paths.box;
							break;
						case Tile.EndPoint:
							path = this.paths.endPoint;
							break;
						default:
							path = false;
					}
					if(path) {
						var extra = type === Tile.EndPoint ? 0.25 : 0;
						ctx.drawImage(resources.get(path), x * tileBaseSize + tileBaseSize * extra, y * tileBaseSize + tileBaseSize * extra);
					} else if (type === Tile.Away){
						ctx.fillStyle = "#151515";
						ctx.fillRect(x * tileBaseSize, y * tileBaseSize, tileBaseSize, tileBaseSize)
					}
				}
			}
		},
		isEndPoint: function (x, y) {
			for (pos of this.endPoints){
				if(pos[0] === x && pos[1] === y)
					return true;
			}
			return false;
		},
		checkEndPoints: function  () {

			var win = true;
			for (pos of this.endPoints){
				var type = this.map[pos[1]][pos[0]];
				if(type != Tile.Box)
					win = false;
			}

			if(win)
				this.win();

		},
		win: function () {
			map.level++;
			reset(map.level);
		},
		move: function (player, dir, xdif, ydif) {
			var type = this.map[ player.pos[1] + ydif ][ player.pos[0] + xdif ];
			var ret = true;
			switch(type) {
				case Tile.Wall:
					ret = false;
					break;
				case Tile.Box:
					var x = player.pos[0];
					var y = player.pos[1];
					var nextTile = this.map[ y + ydif * 2 ][ x + xdif * 2 ];
					if(nextTile === Tile.Empty || nextTile === Tile.EndPoint){
						this.map[ y + ydif ][ x + xdif ] = this.isEndPoint(x + xdif, y + ydif) ? Tile.EndPoint : Tile.Empty;
						this.map[ y + ydif * 2 ][ x + xdif * 2 ] = Tile.Box;
					} else 
						ret = false;

					break;

			}
			return ret;
		}
	};

	window.GameMap = GameMap;
})();
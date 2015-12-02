(function () {
	function GameMap(map) {
		this.baseMap = map;
		this.map = copy(map);
		this.startPosition = [0,0];
		this.endPoints = [];
		this.terrainPattern;
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
		                    path = 'images/wall.png';
		                    break;
		                case Tile.Box:
		                    path = 'images/box_black.png';
		                    break;
		                case Tile.EndPoint:
		                    path = 'images/point_red.png';
		                    break;
		                default:
		                    path = false;
		            }
		            if(path) {
		                ctx.drawImage(resources.get(path), x*tileBaseSize, y*tileBaseSize);
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
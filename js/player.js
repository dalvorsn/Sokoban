(function () {
	function Player() {
		this.pos = [0,0];
		this.walkDelay = 200;
		this.undoDelay = 150;
		this.url = 'images/player.png';
		this.dir = 0;
		this.lastTime = 0;
		this.wait = 0;
		this.moves = 0;
		this.steps = new Step();
	};

	Player.prototype = {
		update: function (lastTime){
			this.lastTime = lastTime;
		},
		render: function (ctx) {
			ctx.save();
    		ctx.translate(this.pos[0]*tileBaseSize, this.pos[1]*tileBaseSize);
			ctx.drawImage(resources.get(this.url), this.dir * tileBaseSize, 0,tileBaseSize, tileBaseSize, 0, 0, tileBaseSize, tileBaseSize);
			ctx.restore();
		},
		move: function (dir) {
			if (this.lastTime < this.wait) return

			var xdif = 0;
			var ydif = 0;
			switch(dir){
				case Direction.Up:
					ydif = -1;
					break;	
				case Direction.Left:
					xdif = -1;
					break;
				case Direction.Right:
					xdif = 1;
					break;
				case Direction.Down:
					ydif = 1;
					break;
			}
			var previuosMap = copy(map.map);
			var canMove = map.move(this, dir, xdif, ydif);

			if(canMove){
				this.addStep(previuosMap);
				this.pos[0] += xdif;
				this.pos[1] += ydif;
				this.dir = dir;
				this.wait = this.lastTime + this.walkDelay;
				this.moves++;
				map.checkEndPoints();
			}
				
		},
		undoMove: function () {
			if (this.lastTime < this.wait) return

			this.wait = this.lastTime + this.undoDelay;
			var step = this.steps.getStep();
			if(step){
				this.pos = step.pos.slice();
				this.dir = step.dir;
				map.map = copy(step.map);
				this.moves--;
			}
		},
		addStep: function(previuosMap) {
			this.steps.addStep(previuosMap, this.pos, this.dir);
		}
	};

	window.Player = Player;
})();
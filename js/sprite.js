(function () {
	function Sprite(url, pos, speed, size) {
		this.url = url;
		this.pos = pos;
		this.speed = speed;
		this.size = size;
		this._index = 0;
	};

	Sprite.prototype = {
		update: function (dt){
			this._index += dt;
		},
		render: function (ctx) {
			ctx.drawImage(resources.get(this.url),this.pos[0], this.pos[1],
                          this.size[0], this.size[1]);
		}
	};

	window.Sprite = Sprite;

})();
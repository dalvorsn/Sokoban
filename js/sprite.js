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
			ctx.drawImage(resources.get(this.url),
                          this.pos.x, this.pos.y);
		}
	};

	window.Sprite = Sprite;

})();
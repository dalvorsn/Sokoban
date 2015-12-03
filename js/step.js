(function () {
	var maxSteps = 500;

	function Step() {
		this.steps = new Array();
	}
	function stepObject(map, playerPosition, dir) {
		this.map = map;
		this.pos = playerPosition.slice();
		this.dir = dir;
	}

	Step.prototype = {
		addStep: function(map, playerPosition, dir) {
			if(maxSteps === this.steps.length){
				this.steps.shift();
			}
			this.steps.push(new stepObject(map, playerPosition, dir));
		},
		getStep: function () {
			if(this.steps.length < 1)
				return false;

			return this.steps.pop();
		}
	};

	window.Step = Step;
})();
(function  () {
	var mapArray = new Array();
	mapArray[1] = {
		// level 1
		dataMap: [
		[4,1,1,1,1,4,4,4],
		[4,1,5,0,1,1,1,4],
		[4,1,0,2,0,0,1,4],
		[1,1,1,0,1,0,1,1],
		[1,3,1,0,1,0,0,1],
		[1,3,2,0,0,1,0,1],
		[1,3,0,0,0,2,0,1],
		[1,1,1,1,1,1,1,1],
		],
		paths: {
			wall: 'images/ship_wall.png',
			box: 'images/wooden_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 1
	};
	mapArray[2] = {
		// level 2
		dataMap: [
		[4,4,4,1,1,1,1,1,1,1,4,4,4],
		[1,1,1,1,0,0,0,0,0,1,4,4,4],
		[1,0,0,0,3,1,1,1,0,1,4,4,4],
		[1,0,1,0,1,0,0,0,0,1,1,4,4],
		[1,0,1,0,2,0,2,1,3,0,1,4,4],
		[1,0,1,0,0,6,0,0,1,0,1,4,4],
		[1,0,3,1,2,0,2,0,1,0,1,4,4],
		[1,1,0,0,0,0,1,0,1,0,1,1,1],
		[4,1,0,1,1,1,3,0,0,0,0,5,1],
		[4,1,0,0,0,0,0,1,1,0,0,0,1],
		[4,1,1,1,1,1,1,1,1,1,1,1,1],
		],
		paths: {
			wall: 'images/ship_wall.png',
			box: 'images/wooden_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 2
	};
	mapArray[3] = {
		// level 3
		dataMap: [
		[4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4],
		[4,4,4,4,1,0,0,0,1,4,4,4,4,4,4,4,4,4,4],
		[4,4,4,4,1,2,0,0,1,4,4,4,4,4,4,4,4,4,4],
		[4,4,1,1,1,0,0,2,1,1,4,4,4,4,4,4,4,4,4],
		[4,4,1,0,0,2,0,2,0,1,4,4,4,4,4,4,4,4,4],
		[1,1,1,0,1,0,1,1,0,1,4,4,4,1,1,1,1,1,1],
		[1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,3,3,1],
		[1,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,3,3,1],
		[1,1,1,1,1,0,1,1,1,0,1,5,1,1,0,0,3,3,1],
		[4,4,4,4,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
		[4,4,4,4,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4],
		],
		paths: {
			wall: 'images/ship_wall.png',
			box: 'images/wooden_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 3
	};
	mapArray[4] = {
		// level 4
		dataMap: [
		[4,1,1,1,1,1,1],
		[1,1,0,0,3,0,1],
		[1,0,2,0,1,0,1],
		[1,0,3,2,0,0,1],
		[1,0,0,1,2,1,1],
		[1,3,0,5,0,1,4],
		[1,1,1,1,1,1,4],
		],
		paths: {
			wall: 'images/castle_wall.png',
			box: 'images/wooden_box_shaded.png',
			endPoint: 'images/check_point.png',
			floor: 'images/street_floor.png'
		},
		level: 4
	};
	mapArray[5] = {
		// level 5
		dataMap: [
		[1,1,1,1,1,4,4,4],
		[1,0,0,0,1,4,4,4],
		[1,0,0,0,1,1,1,1],
		[1,0,0,0,0,0,0,1],
		[1,1,5,3,1,2,0,1],
		[1,0,0,0,1,0,0,1],
		[1,0,0,0,1,1,1,1],
		[1,1,1,1,1,4,4,4],
		],
		paths: {
			wall: 'images/castle_wall.png',
			box: 'images/wooden_box_shaded.png',
			endPoint: 'images/check_point.png',
			floor: 'images/street_floor.png'
		},
		level: 5
	};
	mapArray[6] = {
		// level 6
		dataMap: [
		[4,1,1,1,1,1,1],
		[4,1,0,0,0,0,1],
		[1,1,2,0,3,0,1],
		[1,0,0,5,0,0,1],
		[1,0,2,1,3,0,1],
		[1,0,0,1,1,1,1],
		[1,1,1,1,4,4,4],
		],
		paths: {
			wall: 'images/castle_wall.png',
			box: 'images/wooden_box_shaded.png',
			endPoint: 'images/check_point.png',
			floor: 'images/street_floor.png'
		},
		level: 6
	};
	mapArray[7] = {
		// level 7
		dataMap: [
		[1,1,1,1,4,4],
		[1,3,0,1,4,4],
		[1,3,0,1,1,1],
		[1,5,2,0,0,1],
		[1,0,2,0,0,1],
		[1,0,0,1,1,1],
		[1,1,1,1,4,4],
		],
		paths: {
			wall: 'images/castle_wall.png',
			box: 'images/golden_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/street_floor.png'
		},
		level: 7
	};
	mapArray[8] = {
		// level 8
		dataMap: [
		[4,1,1,1,1,1,1],
		[4,1,0,0,0,0,1],
		[1,1,0,3,3,3,1],
		[1,0,2,2,2,0,1],
		[1,0,5,0,1,1,1],
		[1,1,1,1,1,4,4],
		],
		paths: {
			wall: 'images/classic_wall.png',
			box: 'images/medical_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 8
	};
	mapArray[9] = {
		// level 9
		dataMap: [
		[1,1,1,1,4,4,4],
		[1,0,5,1,4,4,4],
		[1,0,0,1,1,1,1],
		[1,2,2,2,0,0,1],
		[1,3,3,3,0,0,1],
		[1,0,0,1,0,0,1],
		[1,0,0,1,0,0,1],
		[1,1,1,1,1,1,1],
		],
		paths: {
			wall: 'images/classic_wall.png',
			box: 'images/medical_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 9
	};
	mapArray[10] = {
		// level 10
		dataMap: [
		[4,4,1,1,1,1,4,4],
		[1,1,1,0,0,1,1,1],
		[1,3,0,2,0,2,0,1],
		[1,5,1,0,0,1,0,1],
		[1,0,1,2,3,3,0,1],
		[1,0,0,0,1,1,1,1],
		[1,1,1,1,1,4,4,4],
		],
		paths: {
			wall: 'images/classic_wall.png',
			box: 'images/medical_box.png',
			endPoint: 'images/check_point.png',
			floor: 'images/ship_floor.png'
		},
		level: 10
	};
	window.maxLevel = 10;
	window.getMap = function( lvl ) {
		return mapArray[Math.min(lvl, maxLevel)];
	}
})();


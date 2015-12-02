(function() {
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

function copy (o) {
   var out, v, key;
   out = Array.isArray(o) ? [] : {};
   for (key in o) {
	   v = o[key];
	   out[key] = (typeof v === "object") ? copy(v) : v;
   }
   return out;
}

window.requestAnimFrame = requestAnimFrame;
window.copy = copy;
})();
(function() {
    /*
        resources manager
    */
    var cache = {};
    var readyCallbacks = [];

    function load(url) {
        if(url instanceof Array) {
            url.forEach(function(url) {
                internalLoad(url);
            });
        }
        else {
            internalLoad(url);
        }
    }

    function internalLoad(url) {
        if(cache[url]) {
            return cache[url];
        }
        else {
            var image = new Image();
            image.onload = function() {
                cache[url] = image;

                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            cache[url] = false;
            image.src = url;
        }
    }

    function get(url) {
        return cache[url];
    }

    function isReady() {
        var ready = true;
        for(var key in cache) {
            if(cache.hasOwnProperty(key) &&
               !cache[key]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
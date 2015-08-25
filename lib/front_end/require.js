var require = (function() {

    var global_module_cache = {};

    var main = function(module_name) {
        return _load_module_by_name(module_description);
    };

    var _load_module_by_name = function(name) {
        module = global_module_cache[name];
        return module;
    };

    return main;
})();

var ModuleCache = ModuleCache || {};

var require = (function() {

    // Load a module by name from the global module cache.
    var main = function(module_name) {
        module = ModuleCache[name];
        return module;
    };

    return main;
})();

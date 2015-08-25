var require = (function() {

    // Load a module by name from the global module cache.
    var require = function(module_name) {
        _globalModuleCache = _globalModuleCache || {};
        return loadModuleByName(module_description);
    };

    var loadModuleByName = function(name) {
        module = _globalModuleCache[name];
        return module;
    };

    return require;
})();

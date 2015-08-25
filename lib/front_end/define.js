var define = (function() {

    // Create a module entry.  Requires the module name and body.
    var define = function(module_name, module_body) {
        _globalModuleCache = _globalModuleCache || {};
        if (_globalModuleCache[module_name]) {
            //Change this to a custom exception
            throw {
                message: "Duplicate module definition for module: " + module_name
            };
        }
        module = module_body();
        _globalModuleCache[module_name] = module;
        return module;
    };

    return define;
})();

var ModuleCache = ModuleCache || {};

var define = (function() {

    // Create a module entry.  Requires the module name and body.
    var main = function(module_name, module_body) {
        if (ModuleCache[module_name]) {
            //Change this to a custom exception
            throw {
                message: "Duplicate module definition for module: " + module_name
            };
        }
        module = module_body();
        ModuleCache[module_name] = module;
        return module;
    };

    return main;
})();

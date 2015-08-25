var require = function(module_name) {
    var module = ModuleCache[module_name];
    return module;
};

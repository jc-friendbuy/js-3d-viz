var chokidar = require("chokidar");
var frontend_builder = require("./frontend_builder.js");

var watcher = chokidar.watch(["src/front_end", "./lib/front_end"], { ignored: /[\/\\]\./})
    .on("change", function(path) {
        frontend_builder.build(path)
    });

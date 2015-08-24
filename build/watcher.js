var chokidar = require("chokidar");
var build_main = require("./main.js");

var frontend_watcher = chokidar.watch(["src/front_end", "./lib/front_end"], { ignored: /[\/\\]\./})
    .on("change", function(path) {
        build_main.build_front_end(path)
    });

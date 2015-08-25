define("test_2", function () {

    var self = {};
    var test_1 = require("test_1");

    self.test = function() {
        console.log("trying module 1...");
        test_1.test();
    }

    return self;
});

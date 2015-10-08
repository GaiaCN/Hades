(function(){
    "use strict";

    var _ = require("underscore");
    var BaseEngine = require('./base');
    var executor = require(ROOT + '/core/workflow/executor');

    var loop = function () {
        this.__name = 'loop';
    };

    loop.prototype = new BaseEngine();

    loop.prototype.run = function(controlData){
        for (var i in [1, 2]) {
            _.each(controlData['workflow'], function (ele, idx) {
                if(ele.type === 'action'){
                    executor.executeAction(idx, ele)
                }else if(ele.type === 'control'){
                    executor.executeControl(idx, ele)
                }
            });
        }
    };

    module.exports = new loop();
})();

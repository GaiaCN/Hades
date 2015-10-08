(function(){
    "use strict";

    var _ = require("underscore");
    var BaseEngine = require('./base');
    var executor = require(ROOT + '/core/workflow/executor');

    var sequence = function () {
        this.__name = 'sequence';
    };

    sequence.prototype = new BaseEngine();

    sequence.prototype.run = function(controlData){
        _.each(controlData['workflow'], function (ele, idx) {
            if(ele.type === 'action'){
                executor.executeAction(idx, ele)
            }else if(ele.type === 'control'){
                executor.executeControl(idx, ele)
            }
        });
    };

    module.exports = new sequence();
})();

(function() {
    "use strict";

    var resource = require(ROOT + '/core/workflow/resource/main');
    var _ = require("underscore");

    var BaseWorkflow = function(){

    };

    BaseWorkflow.start = function(){
        console.log('start from base');
    };

    BaseWorkflow.then = function(){
        console.log('then from base');
    };

    BaseWorkflow.click = function(){
        console.log('click from base');
        console.log(resource.URL);
    };

    BaseWorkflow.loadConfig = function(config){
        this.__config = config;
    };

    BaseWorkflow.open = function(url){
        console.log('open from base');
    };

    BaseWorkflow.printConfig = function(){
        console.log(this.__config);
    };

    BaseWorkflow.work = function(config){
        BaseWorkflow.start();
        _.each(config['workflow'], function (ele, idx) {
            BaseWorkflow.then();
            if ele.type === 'action':
                _.property(idx)(BaseWorkflow)();
            else if next.type === 'control':
                

        });
    };

    module.exports = BaseWorkflow;
})();

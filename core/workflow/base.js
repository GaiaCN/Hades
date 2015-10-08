(function() {
    "use strict";

    var _ = require("underscore");
    var data = require(ROOT + '/core/workflow/data/');
    var action = require(ROOT + '/core/workflow/action');
    var control = require(ROOT + '/core/workflow/control');
    var executor = require(ROOT + '/core/workflow/executor');

    var BaseWorkflow = function(){

    };

    BaseWorkflow.start = function(){
        console.log('start from base');
    };

    BaseWorkflow.end = function(){
        console.log('end from base');
    };

    BaseWorkflow.then = function(){
        console.log('then from base');
    };

    BaseWorkflow.click = function(){
        console.log('click from base');
        console.log(data.url);
    };

    BaseWorkflow.loadConfig = function(config){
        this.__config = config;
    };

    BaseWorkflow.open = function(url){
        console.log('open from base');
    };

    BaseWorkflow.scrape = function(url){
        console.log('scrape from base');
    };

    BaseWorkflow.save = function(url){
        console.log('save from base');
    };

    BaseWorkflow.printConfig = function(){
        console.log(this.__config);
    };

    BaseWorkflow.work = function(){
        BaseWorkflow.start();
        _.each(this.__config['workflow'], function (ele, idx) {
            // BaseWorkflow.then();
            if(ele.type === 'action'){
                executor.executeAction(idx, ele)
            }else if(ele.type === 'control'){
                executor.executeControl(idx, ele)
            }
        });
    };

    module.exports = BaseWorkflow;
})();

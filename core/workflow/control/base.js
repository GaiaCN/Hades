(function(){
    "use strict";

    var _ = require("underscore");
    var action = require(ROOT + '/core/workflow/action');
    var control = require(ROOT + '/core/workflow/control');

    var BaseControl = function() {

    };

    BaseControl.prototype.executeAction = function(actionName, actionData){
        _.property(actionName)(action)(actionData);
    };

    BaseControl.prototype.run = function(controlData){
        console.log('run() from control base, need implement this!!')
    };

    BaseControl.prototype.test = function(){
        console.log('test from action');
    };

    module.exports = BaseControl;

})();

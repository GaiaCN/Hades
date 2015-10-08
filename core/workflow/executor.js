(function(){
    "use strict";

    var _ = require("underscore");
    var action = require(ROOT + '/core/workflow/action');
    var control = require(ROOT + '/core/workflow/control');

    var executeControl = function(controlName, controlData){
        _.property(controlName)(control).run(controlData);
    };

    var executeAction = function(actionName, actionData){
        _.property(actionName)(action)(actionData);
    }

    module.exports.executeControl = executeControl;
    module.exports.executeAction = executeAction;
})();

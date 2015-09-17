(function() {
    "use strict";
    
    console.log('in bootstrap');

    var isBrowser = function() {
        return (typeof GLOBAL !== 'undefined') ? false : true;
    };

    var G = isBrowser() ? window : GLOBAL;
    var ROOT = '/Users/demien/Documents/projects/Hades'
    G['ROOT'] = ROOT

    // /* Hack for our internal usage and bind to $ */
    // G.$ = {
    //     _: require('underscore'),
    //     isBrowser: isBrowser,
    //     slice: [].slice
    // };

    // G.$.createFunctionWithCtx = function() {
    //     var fn = arguments[0];
    //     var arg = (arguments.length > 1) ? [].slice.call(arguments, 1) : [];
    //     return function() {
    //         return fn.apply(null, arg);
    //     };
    // };

    // G.$.clone = function(obj) {
    //     if (obj === null || typeof(obj) != 'object') {
    //         return obj;
    //     }

    //     var t = obj.constructor();

    //     for (var k in obj) {
    //         if (obj.hasOwnProperty(k)) {
    //             t[k] = G.$.clone(obj[k]);
    //         }
    //     }

    //     return t;
    // };

    // G.registerGlobal = function(key, value) {
    //     G[key] = value;
    // };

    /* Eliminate differences among different host environments */
    // G.$.readdirSync = isBrowser() ? fs.list : fs.readdirSync;
    // G.$.exists = isBrowser() ? fs.exists : fs.existsSync;
    // G.$.utils = isBrowser() ? require('utils') : require('util');

    /* Hack console object */
    // var originalConsole = console;
    // var hackedConsoleFunction = function(callback, logLevel) {
    //     return function() {
    //         var message = G.$.utils.format.apply(null, arguments);
    //         message.split('\n').forEach(function(line, idx) {
    //             var d = new Date();
    //             var t = d.getFullYear() + '-';
    //             t += ((d.getMonth() < 9) ? '0' : '') + (d.getMonth() + 1).toString();
    //             t += '-';
    //             t += ((d.getDate() < 10) ? '0' : '') + d.getDate().toString();
    //             t += ' ';
    //             t += ((d.getHours() < 10) ? '0' : '') + d.getHours().toString();
    //             t += ':';
    //             t += ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes().toString();
    //             t += ':';
    //             t += ((d.getSeconds() < 10) ? '0' : '') + d.getSeconds().toString();
    //             t += '.';
    //             t += ((d.getMilliseconds().toString().length < 3) ? (
    //                 d.getMilliseconds().toString().length < 2 ? (
    //                     d.getMilliseconds().toString().length < 1 ? '000' : '00'
    //                 ) : '0'
    //             ) : '') + d.getMilliseconds().toString();
    //             var m;
    //             if (G.HackConsole) {
    //                 m = '[Jackfruit]' + '\t' + t + '\t' + G.TaskId + '\t[' + logLevel + ']\t' + line;
    //             } else {
    //                 m = line;
    //             }
    //             if (typeof callback === 'string') {
    //                 originalConsole[callback](m);
    //             } else {
    //                 callback(m);
    //             }
    //         });
    //     };
    // };

    // if (G.$.isBrowser()) {
    //     /* While under the browser mode, we need to replace the whole console object */
    //     /* @Todo: Add more hacker functions if needed */
    //     console = {
    //         log: hackedConsoleFunction('log', 'DEBUG'),
    //         error: hackedConsoleFunction('error', 'ERROR'),
    //         warn: hackedConsoleFunction('warn', 'WARN'),
    //         info: hackedConsoleFunction('info', 'INFO'),
    //         debug: hackedConsoleFunction('debug', 'DEBUG')
    //     };
    // } else {
    //     console.log = hackedConsoleFunction(originalConsole.log, 'DEBUG');
    //     console.error = hackedConsoleFunction(originalConsole.error, 'ERROR');
    //     console.warn = hackedConsoleFunction(originalConsole.warn, 'WARN');
    //     console.info = hackedConsoleFunction(originalConsole.info, 'INFO');
    //     console.debug = hackedConsoleFunction(originalConsole.debug, 'DEBUG');
    // }

    // G.$.isDirectory = isBrowser() ? fs.isDirectory : function(path) {
    //     return fs.statSync(path).isDirectory();
    // };

    // /* Register the root directory */

    // var env = isBrowser() ? system.env : process.env;
    // var root = env['JACKFRUIT_ROOT'] ? env['JACKFRUIT_ROOT'] :
    //     (isBrowser() ? fs.workingDirectory : path.join(__dirname, "/.."));

    // var templatesRoot = env['JACKFRUIT_TEMPLATES_ROOT'] ?
    //     env['JACKFRUIT_TEMPLATES_ROOT'] : root + '/templates';

    // var templatesConfRoot = env['JACKFRUIT_TEMPLATES_CONF_ROOT'] ?
    //     env['JACKFRUIT_TEMPLATES_CONF_ROOT'] : root + '/conf/templates';

    // var testsRoot = env['JACKFRUIT_TESTS_ROOT'] ?
    //     env['JACKFRUIT_TESTS_ROOT'] : root + '/tests';

    // G.$.registerGlobal('ROOT', root);
    // G.$.registerGlobal('TEMPLATES_ROOT', templatesRoot);
    // G.$.registerGlobal('TEMPLATES_CONF_ROOT', templatesConfRoot);
    // G.$.registerGlobal('TESTS_ROOT', testsRoot);

    // /* Register All Exceptions to the Global */
    // var exception = require(ROOT + '/engine/exception');
    // for (var key in exception) {
    //     G.$.registerGlobal(key, exception[key]);
    // }

    // var Settings = require(ROOT + '/settings');
    // if (!Settings.DEBUG) {
    //     console['debug'] = function () {};
    //     console['log'] = function () {};
    // }

})();

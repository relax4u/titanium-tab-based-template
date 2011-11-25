/**
 * alias (namespace.util)
 */
var $ = (your_namespace.util = require('/utilities/util'));

/**
 * console API 
 */
var console = require('/utilities/console');

Ti.include("/your_app_name/config.js");

(function(){
	your_namespace.app = {
	};
})();

Ti.include(
	"/your_app_name/style.js",
	"/your_app_name/ui/ui.js"
);

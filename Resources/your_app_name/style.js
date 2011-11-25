/**
 * alias (namespace.style)
 */
var $$ = (your_namespace.style = {});

(function(){
	$$.backgroundColor = '#fff';
	
	$$.window = {
		backgroundColor: $$.backgroundColor
	};
	
	$$.label = {
		font: {fontSize: 20, fontFamily: 'Helvetica Neue'},
		textAlign: 'center',
		width: 'auto',
		height: 'auto'
	};
})();

Ti.include("/your_app_name/specific_style.js");

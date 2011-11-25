(function(){
	// for android style.
	$.displayEach({
		"480x800": function(){
			$.mixin($$.label, {color: '#0f0'}, true);
		},
		"default": function(){
			$.mixin($$.label, {color: '#00f'}, true);
		}
	});
	
	$.modelEach({
		"X06HT": function(){
			$.mixin($$.label, {font: {fontSize: 30}}, true);
		}
	});
})();

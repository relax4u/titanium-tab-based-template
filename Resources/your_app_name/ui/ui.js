(function(){
	your_namespace.ui = {};
	
	your_namespace.ui.createApplicationTabGroup = function(){
		Ti.UI.setBackgroundColor('#000');
		
		var tabGroup = Ti.UI.createTabGroup();
		
		var tab1 = your_namespace.ui.createSampleTab(L('tab1'), 'KS_nav_views.png', String.format(L('i_am_window'), 1));
		var tab2 = your_namespace.ui.createSampleTab(L('tab2'), 'KS_nav_ui.png', String.format(L('i_am_window'), 2));
		
		tabGroup.addTab(tab1);
		tabGroup.addTab(tab2);
		
		return tabGroup;
	};
	
	your_namespace.ui.createSampleTab = function(title, icon, text){
		var win = Ti.UI.createWindow($.mixin({
			title: title
		}, $$.window));
		
		var tab = Ti.UI.createTab({
			icon: icon,
			title: title,
			window: win
		});
		
		var label = Ti.UI.createLabel($.merge($$.label, {text: text}));
		win.add(label);
		
		$.androidOnly(function(){
			var label = Ti.UI.createLabel($.mixin({
				text: String.format("%s(%s) - %dx%d", $.osname, $.model, $.width, $.height),
				bottom: 30
			}, $$.label));
			win.add(label);
		});
		
		return tab;
	};
})();
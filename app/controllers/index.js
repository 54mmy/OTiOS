var NappDrawerModule = require('dk.napp.drawer');
function toggle(){
	drawer.toggleLeftWindow();
}

function addForm(e){
	Alloy.createController('add').getView().open();
}

var drawer = NappDrawerModule.createDrawer({
	leftWindow: $.leftd,
	centerWindow: $.main,
	closeDrawerGestureMode: NappDrawerModule.CLOSE_MODE_ALL,
	openDrawerGestureMode: NappDrawerModule.OPEN_MODE_ALL,
	showShadow: false, //no shadow in iOS7
	leftDrawerWidth: 200,
	rightDrawerWidth: 120,
	statusBarStyle: NappDrawerModule.STATUSBAR_WHITE,  // remember to set UIViewControllerBasedStatusBarAppearance to false in tiapp.xml
	orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
});

drawer.addEventListener('windowDidOpen', function(e) {
	Ti.API.info("windowDidOpen");
});

drawer.addEventListener('windowDidClose', function(e) {
	Ti.API.info("windowDidClose");
});

drawer.open();

Ti.API.info("isAnyWindowOpen: " + drawer.isAnyWindowOpen());


//load collections
var contacts = Alloy.Collections.contacts;

contacts.fetch();

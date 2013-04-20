// Javascript code to iterate through all group members and delete them automatically.

deleteAll = [];
deleteAll.elms = [];
deleteAll.elms = document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText");

for (var i=1;i<deleteAll.elms.length;i++) {
	document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText")[i].click()
	document.getElementsByClassName("_54nc")[1].click()
	setTimeout(function(){
        document.getElementsByClassName("_42ft _42fu layerConfirm uiOverlayButton selected _42g- _42gy")[0].click()
    }, 4000);
}
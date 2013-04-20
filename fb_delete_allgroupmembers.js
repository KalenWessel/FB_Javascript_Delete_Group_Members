// Javascript code to iterate through all group members and delete them automatically.

deleteAll = [];
deleteAll.elms = [];
deleteAll.elms = document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText");

function deleteMembers(userCount){
	userCount--;
	if(userCount < 0)
		return
	document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText")[userCount].click()
	document.getElementsByClassName("_54nc")[1].click()
	setTimeout(function(){
        document.getElementsByClassName("_42ft _42fu layerConfirm uiOverlayButton selected _42g- _42gy")[0].click()
    }, 4000);
	setTimeout(deleteMembers(userCount),1000);
}

deleteMembers(deleteAll.elms.length);


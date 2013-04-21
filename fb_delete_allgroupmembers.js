// Javascript code to iterate through all group members and delete them automatically.

deleteAll = [];
deleteAll.elms = [];
deleteAll.elms = document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText");

function deleteMembers(userCount){
	dUser = userCount - 1;
	if(dUser <= 0) 
		throw new Error("Don't delete admin!");

	document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText")[dUser].click()
	document.getElementsByClassName("_54nc")[1].click()
	setTimeout(function(){
        document.getElementsByClassName("_42ft _42fu layerConfirm uiOverlayButton selected _42g- _42gy")[0].click()
    }, 2000);
	setTimeout(function(){
		node = document.getElementsByClassName('uiContextualLayerPositioner uiLayer hidden_elem')[0];
		node.parentNode.removeChild(node);
	}, 4000);
	setInterval(function(){deleteMembers(dUser)}, 5000);
}

deleteMembers(deleteAll.elms.length);


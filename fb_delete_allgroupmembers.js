// Javascript code to iterate through all group members and delete them automatically.

deleteAll = [];
deleteAll.elms = [];
deleteAll.elms = document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText");

function deleteMembers(dUser){
	setTimeout(function(){
		document.getElementsByClassName("uiPopoverButton _p uiButton uiButtonSuppressed uiButtonNoText")[dUser].click()
	}, 500);
	setTimeout(function(){
	    document.getElementsByClassName("_54nc")[1].click()
	}, 3000);
	setTimeout(function(){
        document.getElementsByClassName("_42ft _42fu layerConfirm uiOverlayButton selected _42g- _42gy")[0].click()
    }, 3000);
	setTimeout(function(){
		node = document.getElementsByClassName('uiContextualLayerPositioner uiLayer hidden_elem')[0];
		node.parentNode.removeChild(node);
	}, 4000);
	setTimeout(function() { deleteMembers(dUser - 1); }, 5000)
}

deleteMembers(deleteAll.elms.length);


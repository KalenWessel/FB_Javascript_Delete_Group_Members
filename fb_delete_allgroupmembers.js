// first go to https://www.facebook.com/groups/XXXX/members/
// then paste this in the javascript console
deleteAll = [];
deleteAll.elms = [];
 
deleteAll.canClick = function (el) {
  return (typeof el != 'undefined') && (typeof el.click != 'undefined');
}
 
deleteAll.load = function() {
  deleteAll.elms = document.getElementsByClassName("mhm auxiliaryButton closeButton uiCloseButton");
  if (deleteAll.elms.length < 5 ) {
    setTimeout(deleteAll.getMore, 1000);
  } else {
    setTimeout(deleteAll.go, 2000);
  }
}
 
deleteAll.getMore = function() {
  more = document.getElementsByClassName("pam uiBoxLightblue  uiMorePagerPrimary");
  if (typeof more != 'undefined' && deleteAll.canClick(more[0])) { 
    more[0].click();
    setTimeout(deleteAll.load, 2000);
  } else {
    setTimeout(deleteAll.load, 100);
  }
}
 
deleteAll.go = function() {
  try {
    deleteAll.doClick(2);
  } catch(e) {
    setTimeout(deleteAll.load, 1000);
  } finally {
    setTimeout(deleteAll.load, 500000);
  }
}
 
deleteAll.doClick = function(i) {
  deleteAll.elms[i].click();
  setTimeout(function(){deleteAll.confirm(i + 1)}, 750);
}
 
deleteAll.confirm = function (i) {
  remove_but = document.getElementsByName("confirm")[0];
 
  if (i < deleteAll.elms.length - 5 && deleteAll.canClick(remove_but) && remove_but.value == "Confirm") {
    remove_but.click();
    setTimeout(function(){deleteAll.doClick(i)}, 500);
  } else {
    setTimeout(deleteAll.getMore, 2000);
  }
}
 
// deleteAll.fullRestart = function() {
//   membersLink = document.getElementsByClassName("groupsCleanLink groupsCleanLinksSelected");
//   if (typeof membersLink != 'undefined' && deleteAll.canClick(membersLink[0])) { membersLink[0].click(); }
//   setTimeout(deleteAll.go, 5000);
// }
 
deleteAll.load();
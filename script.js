//(function(){
var doc=document;
doc.body.style.backgroundColor="black";
var links=doc.getElementsByClassName("action_links");
var len=links.length
for (var i = 0; i < len; i++){
	links[i].firstChild.style.color="white";
}

var spanTags=doc.getElementsByTagName("span");
var spanLen=spanTags.length;
for (var i = 0; i < spanLen; i++){
	if(spanTags[i].getAttribute("itemprop")=="headline")
		spanTags[i].style.color="white";
}

var divTags=doc.getElementsByTagName("div");
var divLen=divTags.length;
for (var i = 0; i < divLen; i++){
	if(divTags[i].getAttribute("itemprop")=="articleBody")
		divTags[i].style.color="white";
}

var loadMoreButton=doc.getElementById("load-more-btn");
loadMoreButton.style.backgroundColor="red";
loadMoreButton.style.color="white";

// browser.browserAction.onClicked.addListener((tab) => {
// 	doc.body.style.backgroundColor="red";
//   console.log("toolbar clicked");
// });
function changeBackground(){
	console.log("clicked");
	doc.body.style.backgroundColor="white";
}
browser.browserAction.onClicked.addListener(changeBackground);

//todo: new news loaded should also have the style effects
//});
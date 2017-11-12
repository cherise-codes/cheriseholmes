
var poem1S = document.getElementById("poem1").style;
var poem2S = document.getElementById("poem2").style;
var prevS = document.getElementById("prevButton").style;
var nextS = document.getElementById("nextButton").style;
var contentS = document.getElementByClass("content").style;

var pg = 1;
var place = pg + "/2";
document.getElementById("pageNum").innerHTML = place;

function nextPage() {
    if (poem1S.display != "none") {
	poem1S.display = "none";
	poem2S.display = "inline-block";
	prevS.visibility= "visible";
	nextS.visibility = "hidden";
	pg += 1;
	document.getElementById("pageNum").innerHTML = pg + "/2";
	
    }
}


function prevPage() {
    if (poem2S.display != "none") {
	poem2S.display = "none";
	poem1S.display = "inline-block";
	nextS.visibility = "visible";
	prevS.visibility = "hidden";
	pg -= 1;
	document.getElementById("pageNum").innerHTML = pg + "/2";
	
    }
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    contentS.width = 95%;
    poem1S.fontSize = "11px";
    poem2S.fontSize = "11px";
}

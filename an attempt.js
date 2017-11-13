
var poem1S = document.getElementById("poem1").style;
var poem2S = document.getElementById("poem2").style;
var prevS = document.getElementById("prevButton").style;
var nextS = document.getElementById("nextButton").style;
var contentS = document.getElementsByClassName("content").style;

var pg = 1;
var place = pg + "/2";
document.getElementById("pageNum").innerHTML = place;

function showP1() {
    if (poem1S.display != "none") {
	poem1S.display = "none";
	poem2S.display = "inline-block";
	prevS.visibility= "visible";
	nextS.visibility = "hidden";
	pg += 1;
	document.getElementById("pageNum").innerHTML = pg + "/2";
	
    }
}


function showP2() {
    if (poem2S.display != "none") {
	poem2S.display = "none";
	poem1S.display = "inline-block";
	nextS.visibility = "visible";
	prevS.visibility = "hidden";
	pg -= 1;
	document.getElementById("pageNum").innerHTML = pg + "/2";
	
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

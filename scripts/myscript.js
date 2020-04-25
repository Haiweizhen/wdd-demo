
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

}





function unhideLightbox1() {
	unhideLightbox("d1");
}
document.getElementById("picture-1").onclick = unhideLightbox1;



function unhideLightbox2() {
	unhideLightbox("d2");
}
document.getElementById("picture-2").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("d3");
}
document.getElementById("picture-3").onclick = unhideLightbox3;




function unhideLightbox11() {
	unhideLightbox("nd1");
}
document.getElementById("npicture-1").onclick = unhideLightbox11;



function unhideLightbox22() {
	unhideLightbox("nd2");
}
document.getElementById("npicture-2").onclick = unhideLightbox22;


function unhideLightbox33() {
	unhideLightbox("nd3");
}
document.getElementById("npicture-3").onclick = unhideLightbox33;












function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}
function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;







document.getElementById('npictures').style.display = "none";
function showstartbutton() {
	if (document.getElementById('npictures').style.display == "none") {
		document.getElementById('npictures').style.display = "block";
		document.getElementById('startbutton').style.bottom="2%";
		document.getElementById('startbutton').innerHTML="hide item";
	} else {
		document.getElementById('npictures').style.display = "none";
		document.getElementById('startbutton').style.bottom="15%";
		document.getElementById('startbutton').innerHTML="show more";
	}


}
document.getElementById("startbutton").onclick=showstartbutton;
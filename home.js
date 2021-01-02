const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
/* Sticky Navbar */
window.addEventListener("scroll", function(){
	var header = document.querySelector("nav");
	header.classList.toggle("sticky", window.scrollY > 0);
    })
    
/*mute Video*/	
var vid = document.getElementById("myVideo");
function enableMute() {
	if (vid.muted === false){
		vid.muted = true;
	}else{
		vid.muted = false;
	}
}

/* ganti mute icon */
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("muteON2AbuMonyet")) {
	image.src = "muteOFF2AbuMonyet.png";
	
  } else {
	image.src = "muteON2AbuMonyet.png";
	
  }
}


window.onclick = function(event) {
  if (event.target == c) {
    c.style.display = "none";
  }
}

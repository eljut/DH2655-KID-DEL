function makeCall(){
	var video = document.getElementById('vid-box');
	
	$("#hangup").click(function() {
		video.style.display = "none";
		document.getElementById("profilepicture").style.display = "block";
		document.getElementById("hangup").style.display = "none";
	});

	// Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    // Not adding `{ audio: true }` since we only want video now
	    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
	        video.src = window.URL.createObjectURL(stream);
	        video.play();
					video.style.display = "block";
					document.getElementById("profilepicture").style.display = "none";
					document.getElementById("hangup").style.display = "block";
	    });
	}
}
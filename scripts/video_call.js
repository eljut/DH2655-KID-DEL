function makeCall(){
	var Video = document.getElementById('vid-box');
	var yourVideo = document.getElementById('your-vid-box');
	var friend1Video = document.getElementById('friend1-vid-box');

	
	$("#hangup").click(function() {
		Video.style.display = "none";
		yourVideo.style.display = "none";
		friend1Video.style.display = "none";
		document.getElementById("profilepicture").style.display = "block";
		document.getElementById("yourpicture").style.display = "block";
		document.getElementById("hangup").style.display = "none";
		document.getElementById("newSession").style.display = "block";
	});

	$("#callbutton").click(function() {
		console.log("calling");
	});

	var friend = document.forms["callform"]["friends"].value;

	// Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    // Not adding `{ audio: true }` since we only want video now
	    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
	        Video.src = window.URL.createObjectURL(stream);
	        Video.play();
			Video.style.display = "block";
			document.getElementById("profilepicture").style.display = "none";
			document.getElementById("yourpicture").style.display = "none";
			document.getElementById("hangup").style.display = "block";
			document.getElementById("newSession").style.display = "none";

			yourVideo.src = window.URL.createObjectURL(stream);
	        yourVideo.play();
			yourVideo.style.display = "block";

			friend1Video.src = window.URL.createObjectURL(stream);
	        friend1Video.play();
			friend1Video.style.display = "block";

	    });
	}
}
var video_out = document.getElementById("vid-box");

function login(form) {
	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-71ef7cc3-cbba-4681-a7a0-0f04c90d2ece', // Your Pub Key
	    subscribe_key : 'sub-c-baf5124e-b619-11e6-b697-0619f8945a4f', // Your Sub Key
			secretKey: 'sec-c-Nzc4MzgzYWQtMjMwYS00NWUzLWI1MzQtMjZhNTIzMGFhMTNh',
	    ssl: true
	});
	phone.ready(function(){form.username.style.background="#55ff5b"; form.login_submit.hidden="true"; });
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); showModal();});
	    session.ended(function(session) { video_out.innerHTML=''; });
	});
	return false;
}

function makeCall(form){
	if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}

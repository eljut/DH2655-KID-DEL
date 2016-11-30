
var pubnub = PUBNUB.init({
    publish_key: 'pub-c-71ef7cc3-cbba-4681-a7a0-0f04c90d2ece',
    subscribe_key: 'sub-c-baf5124e-b619-11e6-b697-0619f8945a4f',
    error: function (error) {
        console.log('Error:', error);
    }
});
/*console.log('pubnub initialized');

pubnub.subscribe({
    channel : 'public_channel',
    message : function(m){
        showChatOutput(m)
    },
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});*/

document.getElementById("pubnub-chat-input")
	.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode == 13 && document.getElementById("pubnub-chat-input").value != '') {
			publishMessage();
		}
	});
	
function publishMessage() {
	var chat_in = document.getElementById("pubnub-chat-input");
	/*pubnub.publish({
		channel : 'public_channel',
		message : chat_in.value
	});
	console.log('message published: ' + chat_in.value);*/
	
	// for testing.
	showChatOutput(chat_in.value);
	
	chat_in.value = '';
}

function showChatOutput(m) {
	var chat_out = document.getElementById("pubnub-chat-output");
  var newchat = document.createElement('div');
	newchat.innerHTML = "You: " + m;
  chat_out.insertBefore( newchat, chat_out.firstChild );
}

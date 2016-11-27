// $("#colorpic").live('click',function(){
// 	console.log("Clicked!");
// 	$("colorSwatch").show();
// });

var notediv = false;

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$("#color-popover").popover({
        html : true, 
        content: function() {
          return $("#colorSwatch").html();
        }
    });

$("#notesymbol").click(function(){
	if (notediv == false) {
		document.getElementById("notebox").style.display = "inline";
		notediv = true;
	} else {
		$("#notebox").hide();
		notediv = false;
	}
});

$("#calculatoricon").click(function(){
	console.log("calculator activated");
	document.getElementById("calculator").style.display = "block";
	document.getElementById("calculator").style.position = "absolute";
	//$("#notebox").style.display = "block";
});

$("#closecalc").click(function() {
	console.log("close calc");
	document.getElementById("calculator").style.display = "none";
});

$("#gridtype").click(function(){
	$("#drawCanvas").addClass("grid");
});

$("#nongridtype").click(function(){
	$("#drawCanvas").removeClass("grid");
});

$(document).mouseup(function (e)
{
    var notebox = $("#notebox");
    var notebutton = $("#notesymbol");

    if (!notebox.is(e.target) // if the target of the click isn't the container...
        && notebox.has(e.target).length === 0) // ... nor a descendant of the container
    {
        notebox.hide();
        notediv = false;
    }
});

function checkNoteDiv () {
	if (notediv == true) {
		document.getElementById("notebox").style.display = "none";
		notediv = false;
	}

}

(function() {
	/* Canvas */

	var canvas = document.getElementById('drawCanvas');
	var ctx = canvas.getContext('2d');
	var color = document.querySelector(':checked').getAttribute('data-color');

	canvas.width = Math.min(document.getElementById("whiteboard").clientWidth + 40, window.innerWidth || 300);
	canvas.height = Math.min(document.documentElement.clientHeight, window.innerHeight || 300);
	
	var whiteboarddiv = document.getElementById('whiteboard');
	whiteboarddiv.setAttribute("style","height:500px");
	whiteboarddiv.style.height = canvas.height + "px";
	whiteboarddiv.style.width = canvas.width + "px";

	var toolcol = document.getElementById('toolcolumn');
	toolcol.setAttribute("style","height:500px");
	toolcol.style.height = canvas.height + "px";

	ctx.strokeStyle = color;
	ctx.lineWidth = '3';
	ctx.lineCap = ctx.lineJoin = 'round';

	/* Mouse and touch events */
	
	document.getElementById('colorSwatch').addEventListener('click', function() {
		color = document.querySelector(':checked').getAttribute('data-color');
	}, false);
	
	var isTouchSupported = 'ontouchstart' in window;
	var isPointerSupported = navigator.pointerEnabled;
	var isMSPointerSupported =  navigator.msPointerEnabled;
	
	var downEvent = isTouchSupported ? 'touchstart' : (isPointerSupported ? 'pointerdown' : (isMSPointerSupported ? 'MSPointerDown' : 'mousedown'));
	var moveEvent = isTouchSupported ? 'touchmove' : (isPointerSupported ? 'pointermove' : (isMSPointerSupported ? 'MSPointerMove' : 'mousemove'));
	var upEvent = isTouchSupported ? 'touchend' : (isPointerSupported ? 'pointerup' : (isMSPointerSupported ? 'MSPointerUp' : 'mouseup'));
	 	  
	canvas.addEventListener(downEvent, startDraw, false);
	canvas.addEventListener(moveEvent, draw, false);
	canvas.addEventListener(upEvent, endDraw, false);

	/* PubNub */

	var channel = 'draw';

	var pubnub = PUBNUB.init({
		publish_key     : 'pub-c-c5851931-b8a6-414a-97c8-292c78141e1a',
		subscribe_key   : 'sub-c-7786f29c-e506-11e4-bb49-0619f8945a4f',
		leave_on_unload : true,
		ssl		: document.location.protocol === "https:"
	});

	pubnub.subscribe({
		channel: channel,
		callback: drawFromStream,
		presence: function(m){
			// if(m.occupancy > 1){
			// 	document.getElementById('unit').textContent = 'doodlers';
			// }
   			//document.getElementById('occupancy').textContent = m.occupancy;
   			// var p = document.getElementById('occupancy').parentNode;
   			// p.classList.add('anim');
   			// p.addEventListener('transitionend', function(){p.classList.remove('anim');}, false);
   		}
	});

	function publish(data) {
		pubnub.publish({
			channel: channel,
			message: data
		});
     }

    /* Draw on canvas */

    function drawOnCanvas(color, plots) {
    	ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(plots[0].x, plots[0].y);

    	for(var i=1; i<plots.length; i++) {
	    	ctx.lineTo(plots[i].x, plots[i].y);
	    }
	    ctx.stroke();
    }

    function drawFromStream(message) {
		if(!message || message.plots.length < 1) return;
		drawOnCanvas(message.color, message.plots);
    }
    
    // Get Older and Past Drawings!
    if(drawHistory) {
	    pubnub.history({
	    	channel  : channel,
	    	count    : 50,
	    	callback : function(messages) {
	    		pubnub.each( messages[0], drawFromStream );
	    	}
	    });
	}
    var isActive = false;
    var plots = [];

	function draw(e) {
		e.preventDefault(); // prevent continuous touch event process e.g. scrolling!
	  	if(!isActive) return;

    	var x = isTouchSupported ? (e.targetTouches[0].pageX - canvas.offsetLeft) : (e.offsetX || e.layerX - canvas.offsetLeft);
    	var y = isTouchSupported ? (e.targetTouches[0].pageY - canvas.offsetTop) : (e.offsetY || e.layerY - canvas.offsetTop);

    	plots.push({x: (x << 0), y: (y << 0)}); // round numbers for touch screens

    	drawOnCanvas(color, plots);
	}
	
	function startDraw(e) {
	  	e.preventDefault();
	  	isActive = true;
	}
	
	function endDraw(e) {
	  	e.preventDefault();
	  	isActive = false;
	  
	  	publish({
	  		color: color,
	  		plots: plots
	  	});

	  	plots = [];
	}
})();
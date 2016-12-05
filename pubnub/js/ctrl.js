$(document).ready(function(){
  $('#dial').click(function(){
    $('#self-video').show();
  });

  $('#dial').click(function(){
    $('#profile').hide();
  });

  $('#hangup').click(function(){
    $('#self-video').hide();
  });

  $('#hangup').click(function(){
    $('#profile').show();
  });

  $( "select" ).change(function(){
    $('#number').val(
      $('select').val()
    )
  });

  function maxWin(){
    var i = document.getElementById("video-display");

    // go full-screen
    if (i.requestFullscreen) {
      i.requestFullscreen();
    } else if (i.webkitRequestFullscreen) {
      i.webkitRequestFullscreen();
    } else if (i.mozRequestFullScreen) {
      i.mozRequestFullScreen();
    } else if (i.msRequestFullscreen) {
      i.msRequestFullscreen();
    }
  }
});

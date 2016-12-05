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

});

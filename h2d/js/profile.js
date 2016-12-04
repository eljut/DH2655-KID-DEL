$(document).ready(function(){
  $('#pokalImg').click(function() {
      $('#medalBox').toggle();
  });

// infobox for all the medals

// gold medals
  $("#g1").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat 100 quiz.");
  });
  $("#g1").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#g2").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Loggat in varje dag under en och samma månad.");
  });
  $("#g2").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#g3").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Delat 100 anteckningar med vänner.");
  });
  $("#g3").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

// silver medals
  $("#s1").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat 50 quiz.");
  });
  $("#s1").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#s2").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Sparat 50 anteckningar.");
  });
  $("#s2").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#s3").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat 10 quiz med alla rätt.");
  });
  $("#s3").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#s4").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Bokat in 10 lektioner.");
  });
  $("#s4").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  // bronze medals
  $("#b1").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat 5 quiz.");
  });
  $("#b1").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#b2").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Loggat in två dagar i streck.");
  });
  $("#b2").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#b3").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat quiz i samtliga kategorier.");
  });
  $("#b3").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#b4").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Avslutat ett quiz med alla rätt.");
  });
  $("#b4").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

  $("#b5").mouseover(function(){
      $("#medalBoxInfo").toggle();
      $("#infoText").html("Besökt alla sidor på hemsidan.");
  });
  $("#b5").mouseout(function(){
      $("#medalBoxInfo").toggle();
  });

})

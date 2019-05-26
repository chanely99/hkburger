$(document).ready(function(){
  $('.send').click(function(){ 
    var toSend = $('input[name=text]').val();
    
    $('.conversation').append("<p class='message'>" + toSend + "</p>");
    var toReply = "hello"//$('greeting').val();
    
    $('.conversation').append("<p class='reply'>" + toReply + "</p>");
    
    var greeting = ["Im doing ","Hello","Hi!",];
  var adjectives = ["Great","Good","Awesome","Amazing","Fantastic"];
});
  $('span:nth-child(1)').click(function(){
    $('.friends-list').toggleClass("display");
  });
});
  /*
  
  
   var randomAdj  = MATH.round((MATH.random() * adjectives.length) + 1);
  var randomGre  = MATH.round((MATH.random() * greeting.length) + 1);
    
  if (toSend === greeting){
    $('.conversation').append("<p class='message'>" + randomGre + "</p>");
  }
  else {
      $('.conversation').append("<p class='message'>" + randomGre + "</p>");
  }
  }); 
  */


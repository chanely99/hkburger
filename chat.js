$(document).ready(function(){
  console.log("help")
  $('.send').click(function(){ 
    var toSend = $('input[name=text]').val();
    var toReply = "aaa";//$('greeting').val();

    if(toSend == "hello"){
      toReply = "I'm a very juicy burger";
    }
    else if(toSend == "what's your sign"){
        toReply = "I'm a cancer, because I contain carcinogens";
    }
    else if(toSend == "I'm hungry"){
        toReply = "I'm a burger, we're a match made in heaven";
    }
    else if(toSend == "wyd"){
      toReply = "Not much, wbu?";
    }
    else if(toSend == "hi"){
      toReply = "Don't you want me inside you?";
    }
    else if(toSend == "how are you?"){
      toReply = "I'm a burger";
    }
    else if(toSend == "what's up?"){
      toReply = "I'm a 100% fresh beef but I want to be 100% inside you";
    }
    else{
      toReply = "If you were a burger you would be a McGorgeous"
    }
    $('.conversation').append("<p class='message'>" + toSend + "</p>");
    
    
    $('.conversation').append("<p class='reply'>" + toReply + "</p>");
    
  $('span:nth-child(2)').click(function(){
    console.log("return to swiping");
  });
  $('span:nth-child(3)').click(function(){
    console.log("opening new window");
    window.open("https://www.google.com/maps/search/burgers/@34.0721212,-118.4584885,15z/data=!3m1!4b1!4m8!2m7!3m6!1sburgers!2sCarnesale+Commons,+350+De+Neve+Dr,+Los+Angeles,+CA+90095!3s0x80c2bc8e6a9454d5:0x356ebc68e41eebf5!4m2!1d-118.4497337!2d34.0721215");
  });

});


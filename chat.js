$(document).ready(function(){
  $('.send').click(function(){
    var toSend = $('input[name=text]').val();
    var toReply = "aaa";//$('greeting').val();

    if(toSend == "hello"){
      toReply = "Hello, I am a burger";
    }
    else if(toSend == "what's your sign"){
        toReply = "I'm a cancer, because I contain carcinogens";
    }
    else if(toSend == "I'm hungry"){
        toReply = "And I'm a burger, we're a match made in heaven";
    }
    else if(toSend == "wyd"){
      toReply = "Not much, wbu?";
    }
    else if(toSend == "hi"){
      toReply = "Hi, I am a burger";
    }
    else if(toSend == "how are you?"){
      toReply = "doin' alright, just got grilled today at work.";
    }
    else if(toSend == "what's up?"){
      toReply = "Not much, the life of a burger is a boring one";
    }
    else{
      var randint = Math.floor(Math.random() * 9) + 1;
      var pickups = ["Baby I'm a medium rare find", "Hail our Lord and Savior the Hamburgler", "put both your hands on me", "please help me a witch turned me into a hamburger", "Are you a bacon burger? You're bacon me crazy", "I can make your heart burn", "I want to be inside you", "I'm a 100% fresh beef but I want to be 100% inside you", "Do you work for McDonalds because I'm lovin' it"];
      toReply = pickups[randint];
    }

    $('.conversation').append("<p class='message'>" + toSend + "</p>");

    $('.conversation').append("<p class='reply'>" + toReply + "</p>"+ "<br>");

    $('input[name=text]').val("");

  $('span:nth-child(2)').click(function(){
    console.log("return to swiping");
  });
  $('span:nth-child(3)').click(function(){
    console.log("opening new window");
    window.open("https://www.google.com/maps/search/burgers/@34.0721212,-118.4584885,15z/data=!3m1!4b1!4m8!2m7!3m6!1sburgers!2sCarnesale+Commons,+350+De+Neve+Dr,+Los+Angeles,+CA+90095!3s0x80c2bc8e6a9454d5:0x356ebc68e41eebf5!4m2!1d-118.4497337!2d34.0721215");
  });

  });
  document.querySelector('#returnBtn').addEventListener("click", e => {
	  window.location.href="burger.html";
	});
});

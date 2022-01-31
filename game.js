var buttoncolors = ["red", "blue", "green", "yellow"]
var level = 0
var gamepattern = [];
var userClickedPattern = [];
var started = false;
// for(var i=0;i<buttoncolors.length;i++){
//   playsound(buttoncolors[i]);
// }



$(document).keypress(function(){
  if(!started){
    nextsequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  checkanswer(userClickedPattern.length-1);
});



function nextsequence() {
  userClickedPattern = [];
  $("h1").html("level "+level);
  var randomnumber = Math.random();
  randomnumber = randomnumber*4;
  randomnumber = Math.floor(randomnumber);
  var randomchosencolour = buttoncolors[randomnumber];
  gamepattern.push(randomchosencolour);
  playsound(randomchosencolour);
  level = level + 1;
//  return randomnumber;
}



function playsound(colour){
    $("#"+colour).fadeOut(100).fadeIn(100);
    var aud = new Audio("sounds\\"+colour+".mp3");
    aud.play();
    animatepress(colour);
  }


function animatepress(currentcolor){
  $("#"+currentcolor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
//  $("#"+currentcolor).removeClass("pressed");
}


function checkanswer(currentlvl){
  if(userClickedPattern[currentlvl] == gamepattern[currentlvl]){
    console.log("success");
    if(userClickedPattern.length === gamepattern.length){
      setTimeout(function(){
    nextsequence();},1000);
    }
  }
  else{
    console.log("wrong");
    var aud = new Audio("sounds\\wrong.mp3");
    aud.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("GAME OVER, press any key to restart");
    startover();
  }
}


function startover(){
   level = 0
   gamepattern = [];
   started = false;
}

//nextsequence()
//
// else{
//   console.log("failed");

// }

//
// //red
// $("#red").click(function(){
//   $("#red").fadeOut(100).fadeIn(100);
//   var aud = new Audio("sounds\\red.mp3");
//   aud.play();
// })
//
// //blue
// $("#blue").click(function(){
//   $("#blue").fadeOut(100).fadeIn(100);
//   var aud = new Audio("sounds\\blue.mp3");
//   aud.play();
// })
//
// //green
// $("#green").click(function(){
//   $("#green").fadeOut(100).fadeIn(100);
//   var aud = new Audio("sounds\\green.mp3");
//   aud.play();
// })
//
// //yellow
// $("#yellow").click(function(){
//   $("#yellow").fadeOut(100).fadeIn(100);
//   var aud = new Audio("sounds\\yellow.mp3");
//   aud.play();
// })

//console.log(gamepattern);
//console.log(randomchosencolour);

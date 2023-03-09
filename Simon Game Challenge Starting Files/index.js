
var buttonColor = ["red","blue","green","yellow"];
gamepattern = [];
function newSequencre(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColor[randomNumber];
    gamepattern.push (randomChosenColor);
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}
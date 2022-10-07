var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


$(".bttn").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

let userLevel = 0;

let started = false;
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + userLevel);
        nextSequnce();
        started = true;
    }
  });  
  

function nextSequnce(){
    userLevel++;
    userClickedPattern = [];
    $("#level-title").text("Level "+ userLevel);

    let x = Math.floor((Math.random() * 4) );
    let randomChosenColour = buttonColours[x];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function checkAnswer(currentlevel)
{
    if(gamePattern[currentlevel] === userClickedPattern[currentlevel])
    {
        console.log("success");
        if(gamePattern.length == userClickedPattern.length)
        {
            setTimeout(function () {
                nextSequnce();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
                started = false;
                userLevel = 0;
                gamePattern = [];
        }
    }


function playSound(name){
    var audio = new Audio("sounds/" + name+ ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    // delay(100).removeClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    },200);
    
}
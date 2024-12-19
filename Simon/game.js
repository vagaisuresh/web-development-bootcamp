let buttonColors = [ "red", "blue", "green", "yellow" ];

let gamePattern = [];

function nextSequence() {
    randomNumber = Math.random(0, 4);
    randomNumber = Math.floor(randomNumber * 4);
    
    let randomChosenColour = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColour);

    let buttonEl = $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(buttonEl);

    var audio = new Audio('./sounds/' + randomChosenColour + '.mp3');
    audio.play();

}

nextSequence();

function rollDice() {
    var dice1 = Math.random();
    var dice2 = Math.random();

    dice1 = Math.floor((dice1 * 6)) + 1;
    dice2 = Math.floor((dice2 * 6)) + 1;

    var src1 = "./images/dice" + dice1 + ".png";
    var src2 = "./images/dice" + dice2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", src1);
    document.querySelector(".img2").setAttribute("src", src2);

    var result = "";

    if (dice1 > dice2) {
        result = document.getElementById("#player1").innerHTML + " Wins!";
    }
    else if (dice2 > dice1) {
        result = document.getElementById("#player2").innerHTML + " Wins!";
    }
    else
    {
        result = "Draw!";
    }

    document.getElementById("#result").innerHTML = result;
}

function changePlayer() {
    var player1 = prompt("First player name?");
    var player2 = prompt("Second player name?");

    document.getElementById("#player1").innerHTML = player1;
    document.getElementById("#player2").innerHTML = player2;
}
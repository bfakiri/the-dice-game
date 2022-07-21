function generateRandomUnderSix(){
    var random = Math.floor(Math.random() * 6) + 1;
    return random;   
}
let playerOne = generateRandomUnderSix();
let playerTwo = generateRandomUnderSix();
let targetButton = document.querySelector("#main-button");

function replaceImageOnRefresh(){
    document.querySelector(".img1").setAttribute("src", "images/dice" + playerOne + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwo + ".png");
}

function whoWins(){
    if(playerOne > playerTwo){
        document.querySelector("h1").innerHTML = "Player One Wins !";
    }

    if(playerOne < playerTwo){
        document.querySelector("h1").innerHTML = "Player Two Wins!";
    }

    if(playerOne === playerTwo){
        document.querySelector("h1").innerHTML = "No one wins";
    }
}
targetButton.onclick = function lunch() {
    window.location.reload();
}
replaceImageOnRefresh();
whoWins();
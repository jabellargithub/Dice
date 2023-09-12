function rollDice() {

    let mixDice = Math.floor((Math.random()* 6)+ 1);
    let diceTrip = "img/" + "dice" + mixDice + ".png";
    let dice1 = document.querySelectorAll("img")[0];
    dice1.setAttribute("src", diceTrip);

    let mixDice2 = Math.floor((Math.random()* 6)+ 1);
    let diceTrip2 = "img/" + "dice" + mixDice2+ ".png";
    let dice2 = document.querySelectorAll("img")[1];
    dice2.setAttribute("src", diceTrip2);


    if (mixDice > mixDice2) {
        document.querySelector("h3").textContent = "Player 1 Wins🚩";
    }else if (mixDice < mixDice2) {
        document.querySelector("h3").textContent = "Player 2 Wins🚩";
    }else if(mixDice == mixDice2) {
        document.querySelector("h3").textContent = "DRAW!";
    }
}

function reload() {
   let btn1 = document.getElementById("btn1");
    btn1 = window.location.reload();
}
    


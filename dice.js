// Choosing player 1
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "./dice" + randomnumber1 + ".png";
var obj1 = document.querySelector("img");
obj1.setAttribute("src", randomDiceImage1);

// Choosing player 2
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "./dice" + randomnumber2 + ".png";
var obj2 = document.querySelectorAll("img")[1];
obj2.setAttribute("src", randomDiceImage2);
if(randomnumber1 > randomnumber2) {
    let obj = document.querySelector("h1") ;
    obj.innerHTML = "Player 1 wins !";

}
else if(randomnumber1 < randomnumber2) {
    let obj = document.querySelector("h1") ;
    obj.innerHTML = "Player 2 wins !";
}
else {
    let obj = document.querySelector("h1") ;
    obj.innerHTML = "DRAW!";   
}
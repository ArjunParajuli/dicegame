// var dice1 = Math.floor((Math.random() * 6) + 1);
// var dice2 = Math.floor((Math.random() * 6) + 1);

// if(dice1 == 1){
//      document.querySelector(".img-dice1").setAttribute("src", "images/dice1.png");
// }else if(dice1 == 2){
//     document.querySelector(".img-dice1").setAttribute("src" ,"images/dice2.png");
// }else if(dice1 == 3){
//     document.querySelector(".img-dice1").setAttribute("src", "images/dice3.png");
// }else if(dice1 == 4){
//     document.querySelector(".img-dice1").setAttribute("src", "images/dice4.png");
// }else if(dice1 == 5){
//     document.querySelector(".img-dice1").setAttribute("src", "images/dice5.png");
// }else{
//     document.querySelector(".img-dice1").setAttribute("src", "images/dice6.png");
// }

// if(dice2 == 1){
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice1.png");
// }else if(dice2 == 2){
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice2.png");
// }else if(dice2 == 3){
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice3.png");
// }else if(dice2 == 4){
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice4.png");
// }else if(dice2 == 5){
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice5.png");
// }else{
//     document.querySelector(".img-dice2").setAttribute("src", "images/dice6.png");
// }

// if(dice1 > dice2){
//     document.querySelector("h2").innerHTML = "Ashish Wins!";
// }else if(dice1 == dice2){
//     document.querySelector("h2").innerHTML = "Play Again, Its a Draw!";
// }else{
//     document.querySelector("h2").innerHTML = "Mihir 2 Wins!";
// }

// --Optimized Code Below --

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var changedSrc = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", changedSrc);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var changedSrc2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", changedSrc2);

if(randomNum1 > randomNum2){
        document.querySelector("h3").innerHTML = "Ashish Wins!";
    }else if(randomNum1 == randomNum2){
        document.querySelector("h3").innerHTML = "Play Again, Its a Draw!";
    }else{
        document.querySelector("h3").innerHTML = "Mihir Wins!";
    }
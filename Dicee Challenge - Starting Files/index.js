// alert("working!!")
var randomNumber1=Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2=Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage1 ="dice"+randomNumber1+".png"; // dice1.png - dice6.png
var randomImageSource1="images/"+randomDiceImage1;

var randomDiceImage2 ="dice"+randomNumber2+".png"; // dice2.png - dice6.png
var randomImageSource2="images/"+randomDiceImage2;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    doucument.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
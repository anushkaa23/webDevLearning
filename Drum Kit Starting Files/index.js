// alert("linked to index.js");

// instead of calling the function as we would with the parentheses we are passing the function as a callback
// this is because we want to call the function when the event occurs, not immediately when the script runs
// document.querySelectorAll("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("You clicked the button!");
// }

// function to make sound
function makeSound(sound) {
    var audio = new Audio(sound);
    audio.play();
}

// anonymous function
// does the same thing as the above function
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // var audio= new Audio("sounds/tom-1.mp3");
        // audio.play();


        // pointer like the one in c++
        // console.log(this);
        this.style.color = "white"; // changes the color of the text to white when clicked

        var buttonInnerHTML = this.innerHTML;
        if(buttonInnerHTML== "w") {
            makeSound("sounds/tom-1.mp3");
        }
        if(buttonInnerHTML== "a") {
            makeSound("sounds/tom-2.mp3");
        }
        if(buttonInnerHTML== "s") {
            makeSound("sounds/tom-3.mp3");
        }
        if(buttonInnerHTML== "d") {
            makeSound("sounds/tom-4.mp3");
        }
        if(buttonInnerHTML== "j") {
            makeSound("sounds/snare.mp3");
        }
        if(buttonInnerHTML== "k") {
            makeSound("sounds/crash.mp3");
        }
        if(buttonInnerHTML== "l") {
            makeSound("sounds/kick-bass.mp3");
        }
    });
} 
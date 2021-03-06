// document.querySelector("button").addEventListener("click", function  {
//     alert("You Clicked Me!");
// });

// for (var i = 0; i < 7; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("I Clicked");
//     });
// }

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {

        // var button = event.key;
        switch (event.key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(button);
                break;
        }
    })
}

// document.addEventListener("keydown", function (event) {
//     alert("You Pressed " + event.key + " Button ");
// })


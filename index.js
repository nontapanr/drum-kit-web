//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //what to do when click detected
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    makeButtonAnimation(buttonClicked);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  makeButtonAnimation(event.key);
});

function makeSound(key) {
  var drumSound;
  switch (key) {
    case "w":
      drumSound = "sounds/tom-1.mp3";
      break;
    case "a":
      drumSound = "sounds/tom-2.mp3";
      break;
    case "s":
      drumSound = "sounds/tom-3.mp3";
      break;
    case "d":
      drumSound = "sounds/tom-4.mp3";
      break;
    case "j":
      drumSound = "sounds/snare.mp3";
      break;
    case "k":
      drumSound = "sounds/crash.mp3";
      break;
    case "l":
      drumSound = "sounds/kick-bass.mp3";
      break;
  }
  var audio = new Audio(drumSound);
  audio.play();
}

function makeButtonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

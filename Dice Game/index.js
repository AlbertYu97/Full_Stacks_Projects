// Create a function to generate random number
function getRandomNumber(min, max) {
  return Math.floor(min + (max - min) * Math.random() + 1);
}

function setPhoto(num, className) {
  const randomPhoto = document.querySelector("." + className);
  randomPhoto.setAttribute("src", "images/dice" + num + ".png");
}

// Generate random number between 1 to 6
var randomNumber1 = getRandomNumber(1, 6);
var randomNumber2 = getRandomNumber(1, 6);

// Select class img1
setPhoto(randomNumber1, "img1");
setPhoto(randomNumber2, "img2");

// Decided which player wins
if (randomNumber1 > randomNumber2) {
  var text = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  var text = "Player 2 wins🚩";
} else {
  var text = "Tie!";
}

// Update text
document.querySelector("h1").innerHTML = text;

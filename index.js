let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let heading = document.querySelector("h1");
let images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
image1.setAttribute("src", images[randomNumber1]);
image2.setAttribute("src", images[randomNumber2]);
if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 wins";
}
else if (randomNumber1 === randomNumber2) {
  heading.textContent = "Draw";
} else {
  heading.textContent = "Player 2 wins";
}

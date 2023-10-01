//New Content using method
//Box
let box = document.querySelector(".box");
let newElement = document.createElement("a");
let newContent = document.createTextNode("This is a link!");
newElement.appendChild(newContent);
// output: "This is a link!"
box.appendChild(newElement);
// output: <a>​This is a link!​</a>​
 

//Watch
let watch = document.querySelector(".watch");
let newElement = document.createElement("p");
let newContent = document.createTextNode("Watch again!");
newElement.appendChild(newContent);
// output: "Watch again!"
watch.appendChild(newElement).style.fontSize = "40px";
// output: <p>​Watch again!​</p>​


//Contact
let contact = document.querySelector(".contact");
let newElement = document.createElement("h3");
let newContent = document.createTextNode("Im fine , how about you!");
newElement.appendChild(newContent);
// output: "Im fine, how about you!"
contact.appendChild(newElement).style.color = "blue";
// output: <h3>​Im fine, how about you!​</h3>​

//Play
let playGame = document.querySelector(".play");
let newElement = document.createElement("p");
let newContent = document.createTextNode("What do you want to play?");
newElement.appendChild(newContent);
// output: "What do you want to play?"
playGame.appendChild(newElement).style.paddingLeft = "15px";
// output: <p>​​What do you want to play?</p>​

let gameOver = document.querySelector(".play");
let newElement = document.createElement("h2");
let newContent = document.createTextNode("You are game over! Play again");
newElement.appendChild(newContent);
// output: "You are game over ! Play again"
gameOver.appendChild(newElement).style.backgroundColor = "red";
// output: <h2>​​You are game over ! Play again</h2>​


//Birthday
let birthdayParty = document.querySelector(".birthday");
let newElement = document.createElement("p");
let newContent = document.createTextNode("Lets fill your stomach .There's more food and drinks!");
newElement.appendChild(newContent);
// output: "Lets fill your stomach .There's more food and drinks!"
birthdayParty.appendChild(newElement).style.fontSize = "30px";
// output: <p>​​Lets fill your stomach .There's more food and drinks!</p>​

//Message
const messageMe = document.querySelector(".message-info");
const newElement = document.createElement("button");
const newContent = document.createTextNode("Click Me");
newElement.appendChild(newContent);
messageMe.appendChild(newElement);

//myInfo
const info = document.querySelector(".myInfo");
const infoElement = document.createElement("p");
const infoContent = document.createTextNode("Thank your for clicking!");
infoElement.appendChild(infoContent);
info.appendChild(infoElement);
//Introduction to Events - Making thing interactive
// - Clicking on a button 
// - Hovering over a link
// - Dragging and Dropping
// - Pressing the Enter Key

//The process  - we select an element and then add an event listener
//The syntax - we use a method called addEventListener

//Sample1 
let button = document.querySelector('button');
let para = document.querySelector('p');

button.addEventListener('click' , () => {
    console.log("You clicked the button!")
    para.textContent = "someone CLICKED the button";
});


//Sample2
document.querySelector("ul").addEventListener("click" , () => {
    console.log("You Clicked the UL!")
})
//we could also rewrite it using a named function
let lis = document.querySelectorAll("li");

for(let i = 0 ; i < lis.length; i++){
    lis[i].addEventListener("click" , changeColor);
}
function changeColor(){
    this.style.color = "red";
}

//Sample3
let firstLi = document.querySelector("li");
firstLi.addEventListener("mouseover" , function() {
    //console.log('Mouse Over!');
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout" , function(){
    firstLi.style.color = "black";
});


//Sample4
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>"
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>"
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>"
}



//Sample5
let lis = document.querySelectorAll("li");
for( let i = 0; i < lis.length ; i++){
    lis[i].addEventListener("mouseover", function () {
           this.style.color = "green";
    });

    lis[i].addEventListener("mouseout", function () {
           this.style.color = "black";
    });

    lis[i].addEventListener("click", function () {
         this.classList.toggle ("done");
    });
}


//Sample6
let lis = document.querySelectorAll("li");
for( let i = 0; i < lis.length ; i++){
    lis[i].addEventListener("mouseover", function () {
          this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function () {
          this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function () { 
         this.classList.toggle ("done");
    });
}
//Function - JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
//Functions are reusable procedures.
//Functions allow us to write reusable, modular code.
//We define a “chunk” of code that we can then execute at a later point.
//We use function all the time
//Sample1
function testExample(a){
  var greeting =  "Hi! My name is " + a;
  return greeting;
}
var name= "Jules";
console.log(testExample(name));

// my practice
function happyBirthday(celebrant){
  var greetings = "Happy Birthday " + celebrant;
  return greetings;
}
var celebrant = "France";
console.log(happyBirthday(celebrant));

//my practice
function myInfo(){
  var name = "Francis Jules";
  var age = 20;
  var gender = "Male";
  var completeInfo = (`Hi, I am ${name}, ${age} years old and I am ${gender}`);
  return completeInfo;
}
myInfo();

//Sample2
function testExample(){
  var greeting =  "Hi! My name is France";
  console.log(greeting);
}
testExample();
//my practice
function message(){
  var messageRequest = "Thank you for sharing your knowledge!";
  console.log(messageRequest);
}
message();


//Sample3
  var testExample = function(a){
    var greeting =  "Hi! My name is " + a;
    return greeting;
  }
  var a = "Jules";
  console.log(testExample(a));

//Sample4
  (function(){
    var greeting =  "Hi! My name is Celeste";
    console.log(greeting);
  }())

  //Sample5
  function myPoem(){
    console.log("Roses are red,"),
    console.log("Violets are blue,");
    console.log("Sugar is sweet,");
    console.log("So are you!");
  }
  myPoem();//call  the function

 //my practice
 function covidAlert(){
   console.log("Wear Your Mask!");
   console.log("Social Distancing!");
   console.log("Get Vaccinated!");
 }
 covidAlert();


  //Sample6 undefined
  function greet(person){
    console.log(`Hi , ${person}`);
  }

  //my practice
  function avgGrade(grade){
    console.log(`Your Grade is : ${grade}`);
  }
console.log(avgGrade(grade));

 //my practice
 const bodyTemp = parseInt(prompt("Enter your body temperature: "));
 function bodyTemperture(bodyTemp){
  if(bodyTemp > 37){
      console.log("You are hot");
  }
  else if (bodyTemp < 37){
    console.log("You have normal temperature");
  }
  else if (bodyTemp == 0){
    console.log("You are cool");
  }
  else{
    console.log("You are abnormal");
  }
  
}

  //Sample7  return statement stops the execution of the code
  function add (x,y){
    let total = x + y;
    return total;
    console.log("END OF RETURN");
  }
 //my practice
function multiply(x, y){
  let product = x * y;
  return product;
}
console.log(multiply(5,2));


  //Sample8 
  function multiply (num1, num2){
    let total = num1 * num2 ;
    return total;
  }
  console.log(multiply(2,3));
  console.log(multiply(9,9));
  console.log(multiply(5,4));

  //Sample_9 temperature check
  function bodyTemperature(temp){
    if(temp > 37){
      return true;
    }
     return false;
  }

  //my practice 
  const avg = parseInt(prompt("Enter you grade: "));
  function deanList(avg){
    if (avg >= 90){
      console.log("You are in the dean lister!");
    } else if (avg <= 90){
      console.log("Study More!");
    } else{
      console.log("Failure!");
    }
  }
  console.log(deanList(avg));


//Using Function Scope  - refers to the current context of code, which determines the accessibility of variables 
//to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a 
//block. Local variables are those declared inside of a block.
//Scope – Variable “visibility”. The location where a variable is defined dictates where we have access to that variable.
//Sample1 Function Scope
  function collectLife(){
    let totalLife = 5;
    console.log(totalLife);
  }
  collectLife;

//my practice
function scoreList(){
  let totalScore = 10;
  console.log(totalScore);
}
scoreList();

//Using Local and Global Variable
//Sample2 With Local and Global Variable
  let score = 10; //Global Variable
  function basketballScore(){
    //let score = 30; //Local Variable
    console.log(score);
  }
basketballScore();

//my practice
let points = 20; //global variable
function finalPoints(){
  let points = 10; // local variable
  console.log(points);
}
finalPoints(); //override the global variable

//Using Block Scope
//Sample1 Block Scope using const keyword
let nickName = "FJ";
 
if (nickName == "FJ"){
  const firstName = "Francis Jules";
  let lastName = "Espartero";
}
console.log(nickName);
console.log(firstName);//not accesible
console.log(lastName);// not accesible

//Sample2 Block Scope using var keyword
let nickName = "FJ";
 
if (nickName == "FJ"){
  var firstName = "Francis Jules";
  var lastName = "Espartero";
}
console.log(nickName);
console.log(firstName);// accesible 
console.log(lastName);// accesible

//my practice
let mySong = "Lucky"
if(mySong == "Lucky"){
   var favSong = "Make it Right";
   var loveSong = "You Belong With Me";
}
console.log(mySong);
console.log(favSong);
console.log(loveSong);



//my practice
let myAge = function (){
  console.log("My age is 20");
}


//Sample_16 Function with multiple arguments
function greet(firstName, lastName){
  console.log(`Hi , ${firstName} ${lastName}.`);
}
greet("France Jules" , "Espartero");
//my practice
function sayings(qoutes, secondQoutes){
  console.log(`I believe, ${qoutes} ${secondQoutes}`);
}
sayings("Education is the key" ,"to success!");

//Sample_17
function finalGrade(prelim, midterm, finals){
  console.log((prelim + midterm +finals) / 3 );
}
finalGrade(95,93,92);
// my practice
function deanList (firstSem, secondSem){
  console.log((firstSem + secondSem) / 2);
}
deanList(95,92);

//Sample_18
function repeat(str , num){
  let result = "";
  for (let i = 0; i < num; i++){
    result += str;
  }
  console.log(result);
}
repeat("Hello " , 4);

//Using  Lexical Scope - A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside 
//another function defined after the variable declaration. But the
// opposite is not true; the variables defined inside a function will not be accessible outside that function
//Sample1 
function outerFunction(){
  const outer = ["FJ","France","Jules"];
    function innerFunction(){
      for (let names of outer){
        console.log(names);
      }
    }
    innerFunction();
}
outerFunction();

//Sample2
function outsideScope(){
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  function insideScope(){
      for(let num of numbers){
          console.log(`Count Me: ${num}`);
      }
  }
  insideScope();
}
outsideScope();



//Using Function Expression - -A function expression is very similar to and has almost the same syntax as a function declaration. A 
//function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
//Different way of defining a function.
//Sample1
function add(x,y) {
  return x + y;
 }

//Sample2
const square = function (num) {
  return num * num;
}
square(7);

//Sample3
const add = function (x,y) {
  return x + y;
 }
 

//Using Higher Order Function - A function that accepts and/or returns another function is called a higher-order function. It's higherorder because instead of strings, numbers, or booleans, it goes higher to operate on functions.
//Functions that operate on/with other functions
//Sample1 Function can be stored in variable
let myName = function(){
  console.log("My name is Francis Jules");
}
//Sample2 Accepting function as an argument.Pass function as an argument
function call(func){
  //func();
  //func();
  for(let i = 0; i < 2; i++){
    func();
  }
}
function dice(){
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
}
call(dice); 

//Sample3 Returning a function as a value within a function
function yourValentine(){
  const rand = Math.random();
  if(rand > 0.5){
    return function(){
      console.log("Your Valentine's day was ecstatic!");
    }
  } else {
    return function (){
      alert("You had a sad valentine's day.");
    }
  }
}
const val = yourValentine();


//Sample4
function ageBracket(min, max){
  return function (num){
    return num >= min && num <= max;
  }
}
const teens = ageBracket(15 , 19);
teens(21);


//my practice
function ageBracket(min, max){
  return function(num){
    return num >= min && num <= max;
  }
}
const adult = ageBracket(20, 30);
adult(23);


function ageBrack(min,max){
  return function (num){
      return num >= min && num <= max;
  }
}
  const old = ageBrack(60,65);
  old(66);

  
//Using Defining Methods
//Sample1 Defining Methods - we can add function as properties on objects
const math = {
  addition: function (x , y){
    return x + y;
  },
  subtraction: function (x , y){
    return x - y;
  },
  multiplication: function (x , y){
    return x * y;
  },
  division: function (x , y){
    return x / y;
  }
}
math.addition(1,2);
math.subtraction(5,2);
math.multiplication(8,2);
math.division(10,2);



//Using This Keyword
//The JavaScript this keyword refers to the object it belongs to. It has different values depending on where 
//it is used: ... In a function, this refers to the global object. In a function, in strict mode, this is undefined. In 
//an event, this refers to the element that received the event.
//Use the keyword this to access other properties on the same object.
//Will refer to the object itself. This keyword refers to student object on the example below.
//Sample1
const student = {
  firstName: "Aldrin John",
  lastName: "Tamayo",
  fullName() {
  return `${this.firstName} ${this.lastName}`
  }
 }
 student.fullName();
 student.lastName() = "Last";
 student.fullName();

 //Sample2
const input = {
  firstName: "Francis Jules",
  lastName: "Espartero",
  age: 21,
  fullInfo(){
      return `My name is ${this.firstName}  ${this.lastName} I am ${this.age} years old`;
  }
}
input.fullInfo(); // My name is Francis Jules Espartero I am 21 years old
input.firstName = "Midoriya"; //change the first name
input.lastName = "Saturou"; //change the last name
input.age = 25; //change the age
input.fullInfo() ; //My name is Midoriya Saturou I am 25 years old


//Sample3
const covidAlert = {
  firstName: "France",
  lastName: "Espartero",
  vaccine: "Astrazeneca",
  status(){
      return `I am ${this.firstName} ${this.lastName} and I am vaccinated with ${this.vaccine}`;
  }
}
covidAlert.status(); //'I am France Espartero and I am vaccinated with Astrazeneca'
covidAlert.vaccine = "Pfizer"; //'Pfizer'
covidAlert.status(); //'I am France Espartero and I am vaccinated with Pfizer'


//Using Try/Catch
//JavaScript try and catch. The try statement allows you to define a block of code to be tested for errors 
//while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block
//Sample1
try {
  hello.toUpperCase();
 } catch {
  console.log("Error");
 }
 hello.toUpperCase();
 console.log("Hello there!"); //this will no longer execute because of the error.
 
  
//Sample2
function student(name){
  try {
     console.log(name.toUpperCase());
  } catch (e) {
     console.log(e);
      alert("Invalid input!");
  }
}
console.log(student());
//VM5996:5 TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//    at student (<anonymous>:3:23)
//   at <anonymous>:1:13

console.log(student("France"));
//FRANCE



//Sample3
function info(message){
  try{
      console.log(message.toUpperCase());
  } catch (e){
      console.log(e);
      alert("Invalid input");
  }
}
console.log(info());
//VM5996:5 TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//    at student (<anonymous>:3:23)
//   at <anonymous>:1:13

console.log(info("Hello Everyone How's your day!"));
//HELLO EVERYONE HOW'S YOUR DAY














var a = "First";
var b = "Second";
var c = "Third";
 console.log(a + " " + b + " "+ c);

/* hoisting*/
 d = "Fourth"
console.log(d);


/* function name*/
function example(){
  var a = 10;
  return a;
}
console.log(example());
//my practice
function numbers(){
 var b = 100;
 return b;
}
console.log(numbers());


/* hoisting with name function */
console.log(example());

 function example(){
   var a = 10;
   return a;
 }

/* anonymous function */
 var c = function() {
   var c = 20;
   return c;
 }

 console.log(c());

 /* hoisting with anonymous function*/
console.log(c());

 var c = function() {
   var c = 20;
   return c;
 }

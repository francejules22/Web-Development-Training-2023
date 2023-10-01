/* GLOBAL SCOPE*/

var number = 10;

function calc(){
 return number + 20;
}
console.log(calc());

/* LOCAL SCOPE */
function calc(){
  var number = 10;
 return number;
}
console.log(calc());

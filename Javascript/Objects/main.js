
/*Objects longest method */
let person = new Object();
person.name = "France";
person.eyeColor = "Blue";
person.age = 27;

 person.updateAge = function(){
   return ++person.age;
 }
console.log(person.age);
person.updateAge();
console.log(person.updateAge);

/*Objects shortest method -this is one object use*/
let person = {
  name: "Jules",
  eyecolor:"Gray",
  age: 19,
  updateAge: function(){
    return ++person.updateAge;
  }
}

//using objects - collections of properties
const smartWatchData = {
  totalSteps: 1000,
  totalCaloriesBurn : 5000,
  currentWeight: "67 kgs"
};

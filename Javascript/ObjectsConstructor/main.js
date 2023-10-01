
/*Object Constructor*/

function person (name, eyeColor,age){
  this.name = name;
  this.eyeColor  = eyeColor;
  this.age = age;
  this.updateAge = function (){
    return ++this.age;
  };
}

let person01 = new Person("France","Gray",19);
let person02 = new Person("Jules","Blue",29);

 console.log(person01.name);

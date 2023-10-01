//using forEach() methods - calls a function once for each element in an array in order to accepts callback function
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    //create the function that will print the function
function print (element){
    console.log(element);
}
    //If I wanted to print each numbers, I could use foreach()
numbers.forEach(print);

//Sample1
const veges = ["Sitaw","Bataw","Patani","Okra","Kalabasa"];
function myVeges(vegetables){
    console.log(vegetables);
}
veges.forEach(myVeges);

//Sample2
const animeList = ["BlackClover","Naruto","Boruto","Sakuragi","Food Wars"];
function myAnime(anime){
    console.log(anime);
}
animeList.forEach(myAnime);


// another way of using forEach Method();
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
   // we can also pass in the function inside the forEach method.This is the commonly used.We use an anonymous function expression
numbers.forEach(function(element){
    console.log(element);
})

//Sample3
const animeList = ["BlackClover","Naruto","Boruto","Sakuragi","Food Wars"];
animeList.forEach(function(anime){
    console.log(anime);
})
//Sample4 
const veges = ["Sitaw","Bataw","Patani","Okra","Kalabasa"];
veges.forEach(function(vegetable){
    console.log(vegetable);
})


//another forEach sample. print out the even number . It should divisible by 2
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers.forEach(function(element){
    if (element % 2 == 0){
        console.log(element);
    }
    //console.log(element);
})

//another forEach sample 
const animes = [
    {
        title: "Naruto",
        score: 100
    },

    {
       title: "Radiant",
       score: 90
    },
    
    {
       title: "Black Clover",
       score: 80
    },

    {
        title: "Hunter X Hunter",
        score: 70
    }
];
    //It will print title - score/100
animes.forEach(function(animes){
    console.log(`${animes.title} ${animes.score} / 100`);
})
//End of forEach Method


//Using map() Method - creates a new array with the results of calling a function for every array element
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function(txt){
    return txt.toUppercase();
})
texts;
caps;

//Sample1 
const digit = [2,4,6,8,10];
const power = digit.map(function(num){
    return num * num;
});
power;

//Sample2
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const daysOfWeek = days.map(function(day){
    return `I love ${day.toUpperCase()}`;
});
daysOfWeek;


// another map() sample
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  //It will double every single 1
  const doubles = numbers.map(function(num){
      return num * 2;
  })
  doubles;

//another map() sample
const animes = [
    {
        title: "Naruto",
        score: 100
    },

    {
       title: "Radiant",
       score: 90
    },
    
    {
       title: "Black Clover",
       score: 80
    },

    {
        title: "Hunter X Hunter",
        score: 70
    }
];
    // maybe I just want to form an array just to the anime titles
const titles = animes.map(function(name){
    return animes.title;
    //return animes.title.toUppercase();
})
console.log(animes);

//another map() sample
const names = ["  Francis Jules ","         FJ              "];
const newNames =  names.map(function(name){
    return name.trim();
})
//End of map() Method


//Using Arrow Functions - allows to write shorter function syntax and used to create function expressions
const square = (x) => {
    return x * x;
}
console.log(square(5)); //25

//Sample1
const power = (pow) => {
    return pow * pow;
}
console.log(power(10)); //100

//Sample2
const add = (num) => {
     return num + num;
}
add(4); //8

   //this is how we do this in function
const square = function(x){
    return x * x;
}
console.log(square(6));

//another arrow function sample
const greet = (name) => {
    return `Hello, ${name}`;
}
greet("France");

//Sample3
const myName = (name) => {
    return `My name is ${name}`;
}
myName("Francis Jules"); //'My name is Francis Jules'

//another arrow function sample without return function
const greet = (name) => (
    `Hello, ${name}`
);
greet("Jules");

//another arrow function sample using one line
const add = (a,b) => a + b
add(2,4);

//Sample4
const age = (currentAge,futureAge) => currentAge + futureAge;
age(20,10);

//another arrow function sample with implicit return
const isEven = function(num){// regular function  with parenthesis around parameter
    return num % 2 === 0;
}
isEven(4);// return true
   
const isEven = (num) => {// arrow function with parenthesis around parameter
    return num % 2 === 0;
}
isEven(4);// return true

const isEven = num => { // arrow function without parenthesis around parameter
    return num % 2 === 0;
}
isEven(4);// return true

const isEven = num =>(// arrow function with parenthesis and its implicit return
    num % 2 === 0
);
isEven(4);// return true

const isEven = num => num % 2 === 0; //one-liner implicit return
isEven(4);// return true

//another arrow function sample
const animes = [
    {
        title: "Naruto",
        score: 100
    },

    {
       title: "Radiant",
       score: 90
    },
    
    {
       title: "Black Clover",
       score: 80
    },

    {
        title: "Hunter X Hunter",
        score: 70
    }
];
    //let say , I want to map over our array
const titles = animes.map(function(animes){
    return `${animes.title} - ${animes.score / 10}`
});
console.log(titles);

    //using an arrow function to shrink it down
const titles = animes.map((animes) => {
    return `${animes.title} - ${animes.score / 10 }`
});
console.log(titles);
//End of Arrow Functions  


//Using setTimeout 
setTimeout(() => {
    console.log("Hello");
}, 3000)

//another sample
console.log("Hello?")
setTimeout(() => {
    console.log("Are you still there?")
}, 3000)

//another sample
console.log("Hello?")
setTimeout(() => {
    console.log("Are you still there?")
}, 3000)
    //if I put console.log() after the line 1 , it will run immediately together with the line 1
console.log("Good bye!");
//End of Using setTimeout


//Using setInterval
    //Another option is pretty similar and it is called setInterval
setInterval(() => {
    console.log(Math.random());
},2000)

// another sample
  // to stop it, we can put in the setInterval function in a variable
const id = setInterval(() =>{
    console.log(Math.random());
}, 2000)
clearInterval(id);//this will stop the setInterval
//End of using setInterval


//Using the filter() method - creates ab array filled with all array elements that pass a test
const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
    return n % 2 === 1;//the callback return true or false
    //if it returns true, n is added to the filtered array
})
odds;
//another method
const smallNums = nums.filter(n => n < 5);
smallNums;

//Sample1
const num = [1,2,3,4,5,6,7,8,9,10];
const even = num.filter (x => {
    return x % 2 === 0;
});
even;
//End of using filter()

//Using the every() method - test whether all elements in the array pass the provided function.It returns a Boolean Value
const words = ["dog","cat","dig","log"];
const test = words.every(word => {
    return word.length === 3;
})

//Sample1
const threeLetterWord = ["Own","Now","Won"];
const words = threeLetterWord.every(word => {
    return word.length === 3;
});
words; //true
//another sample
const exams = [80,98,92,77,76,89,88];
exams.every(score => score >= 75)
// End of using every()


//Using some() method - similar to every, but returns true if ANY of the array elements pass the test function.
const words = ["dog","cat","dig","log"];
const test = words.some(word => {
    return word.length === 4;
})
//another sample
const exams = [80,98,92,77,76,89,88];
console.log(exams.some(score => score >= 75));

//Sample1 
const message = ["Hello","Goodbye","WhatsUp","Thanks"];
const mess = message.some(word => {
    return word.length === 5;
});
mess; //true
//End of using some() method

//Default Parameter 
   //the numbers of sides will be based on
function rollDice(numSides){
    if(numSides === undefined){
        numSides = 6 ;
    }
    return Math.floor(Math.random() * numSides) + 1
}
//another way 
function rollDice(numSides = 6){
    return Math.floor(Math.random () * numSides) + 1 
}

//Default Parameter must always come second or third
function greet(person , msg = "Hi there"){
    console.log(`${msg} , ${person}!`);
}
greet("France");
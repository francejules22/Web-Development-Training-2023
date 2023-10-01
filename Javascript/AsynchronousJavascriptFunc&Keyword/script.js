            //Async JavaScript
// A call stack is a mechanism for an interpreter (like the Javascript interpreter in a web browser) to keep 
//track of its place in a script that calls multiple functions.

//How it works?
// when a script calls a function the interpreter adds it to the call stack and then starts carrying out the function
//any functions that are called by that function are added to the call stack further up and run where their calls are reached
//when the current function is finished , the interpreter takes if off the stack and resumes execution where if left of in the last code listing

//Sample 1
const multiply = (x,y) => x *y; //1st function
const square = (x) => multiply (x,x); //2nd function
const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c); //3rd function
};
isRightTriangle(3,4,5); //call this in the console and will return true
//Explanation - 3rd function will not work if there is no 2nd function and 2nd function will not work if there's no 1st function.
//multiply(3,3) = 9
//multiply(4,4) = 16
//multiply(5,5) = 25
//square(3) = 9
//square(4) = 16
//square(5) = 25
//(9) + b(16) = c(25) //true


//Callback
// The code below will not work and will only display the orange background color because both are dependent to 1st that we set.
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 1000)
setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
}, 1000)

//below will work but still not recommended . if we want to add more color for background we still have to set the delay
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 1000)
setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
}, 2000)

//what we can do is to nest each of them and this is the correct code
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
     setTimeout(() => {
         document.body.style.backgroundColor = 'orange';
             setTimeout(() => {
                 document.body.style.backgroundColor = 'yellow';
             }, 1000)
     }, 1000)
},1000) 

// we can also put it in then function if we want to reuse it
const delayedColorChange = (newColor,delay) => {
    setTimeout (() => {
        document.body.style.backgroundColor = newColor;
    }, delay);
}
delayedColorChange('blue' ,1000);

//but if we are adding another color , we will get the same issue as the first one . The color of background will ony be magenta
const delayedColorChange = (newColor,delay) => {
    setTimeout (() => {
        document.body.style.backgroundColor = newColor;
    }, delay);
}
delayedColorChange('blue' ,1000);
delayedColorChange('magenta' ,1000);

// what we can do is to add callback to nest another background color.
const delayColorChange = (newColor, delay , doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}
delayedColorChange('red' , 1000, () => {
    delayedColorChange('orange' , 1000, () => {
        delayedColorChange('yellow', '1000')
    })
});


//Promises - is an object representing the eventual completion or failure of an asynchronous operation.
//Also it is proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous actions eventual success value or failure reason.
//A Promise is in one of these state:
// pending: initial state, neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected : meaning that the operation failed
const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
         if(delay > 4000){
             failure('Connection Timeout')
         } else {
             success('Here is your fake data from ${url}')
         }
    }, delay)
}

//This is the old way of making request.
fakeRequestCallBack('books.com' , function(response){
    console.log('It worked');
    console.log(response);
   }, function(err){
       console.log('Error');
       console.log(err);
});

//Creating own Promises
new Promise((fulfilled, rejected) => {

})
new Promise((fulfilled, rejected) => {
    fulfilled();
})
new Promise((fulfilled, rejected) => {
    rejected();
})

//Example on how to create promises
const fakeRequest = (url) => {
    return new Promise((fulfilled, rejected) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                fulfilled('Your fake data here.');
            } else {
                rejected('Request Error.');
            }
        }, 1000) 
    })
}
fakeRequest('/dogs/1')
.then((data) => {
    console.log("Done with the request!");
    console.log("Data is: " , data)
})
.catch((err) =>{
    console.log("Ooops!", err);
})

//Lets rewrite background color changer code
const delayedColorChange = (color, delay) => {
    return new Promise ((fulfilled, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;;
            fulfilled();
        }, delay)
    })
}

//we'll use implicit return
delayedColorChange('red' , 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('green', 1000))


//The Async Keyword and Async Function
// a newer and cleaner syntax for working with async code.Syntax makeup for promises.
// An async function is a function declared with the async keyword, and the await keyword is permitted within them.
// An async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicity configure promise chains
//Async function may also be defined as expressions
// Two pieces of Keyword:
// - async
// - await

//The async Keyword
// - Async functions always return a promise
// - if the function returns a value, the promise will be resolve with that value.
// - if the function throws an exception , the promise will be rejected

//Below will return undefined
function hello(){

}

//But if we declare it as async function and call hello() , it will return a promise automatically
async function hello(){

}

//We can also do async arrow function
const sing = async () => {
    return "Hello, it's me";
}
sing().then((data) => {
    console.log("Promise fulfilled with: ", data);
}) 

//How do we reject a promise? We have to throw an error
//if we check sing() in console, we are still going to get a promise, but rejected.
const sing = async () => {
    throw new Error("Ooops.")
    return "Hello, it's me";
}
sing()
.then((data) => {
    console.log("Promise fulfilled with: " , data);
})
.catch(err => {
    console.log("Ooops! Promise Rejected.");
})


//Sample
const name = async () => {
    throw new Error("Ooops.")
    return "My name is France";
}
name()
.then((info) => {
    console.log("Promise fulfilled with:",info);
})
.catch(err => {
    console.log("Ooops you got an error! Promise Rejected.");
})


//Another Example
//If we do not put in password , we will get the following error
//Login error!
//Missing credentials
const login = async (username, password) => {
    //If password is not passed in 
    if(!password) throw 'Missing Credentials'
    if(password === 'Password123') return 'You have entered the right password!'
    throw 'Invalid Password'
}
login('TestLogin')
.then(msg => {
    console.log("Logged In!");
    console.log(msg);
})
.catch(err => {
    console.log('Login Error!');
    console.log(err);
})

//If we put in an incorrect password , we will get the error below
//Login error!
//Invalid password
const login = async (username, password) => {
    //if password is not passed in
    if(!password) throw 'Missing Credentials'
    if(password === 'Password123') return 'You have entered the right password!'
    throw 'Invalid Password'
}
login('TestLogin' ,'Pass123')
.then(msg => {
    console.log("Logged In!");
    console.log(msg);
})
.catch(err => {
    console.log('Login Error!');
    console.log(err);
})


//If the right password is entered, we'll get the message below
//Logged In!
//You have entered the right password
const login = async (username, password) => {
    //if password is not passed in
    if(!password) throw 'Missing Credentials'
    if(password === 'Password123') return 'You have entered the right password!'
    throw 'Invalid Password'
}
login('TestLogin' ,'Password123')
.then(msg => {
    console.log("Logged In!");
    console.log(msg);
})
.catch(err => {
    console.log('Login Error!');
    console.log(err);
})

   
//The await keyword
// - we can only use the await keyword inside the function declared with async
// - Await will pause the execution of the function , waiting for a promise to be fulfilled
//If we add another color, this won't work
const delayedColorChange = (color, delay) => {
    return new Promise((fulfilled, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            fulfilled();
        }, delay);
    })
}

async function rainbow(){
    delayedColorChange('red', 1000)
    delayedColorChange('orange', 1000)
}
console.log(rainbow());


//But if we use await , it will work . It means , it will wait until a promise to be fulfilled,changing color 
const delayedColorChange = (color, delay) => {
    return new Promise((fulfilled, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            fulfilled();
        }, delay); 
    })
}

async function rainbow(){
  await delayedColorChange('red', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('yellow', 1000)
  await delayedColorChange('magenta', 1000)
  await delayedColorChange('teal', 1000)
}
console.log(rainbow());

//Sample
const myColorBlink = (color, delay) => {
    return new Promise((fulfilled, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            fulfilled();
        }, delay);
    })
}
async function colorChange(){
    await myColorBlink('black',1000)
    await myColorBlink('blue',1000)
    await myColorBlink('green',1000)
    await myColorBlink('yellow',1000)
    await myColorBlink('orange',1000)
    await myColorBlink('red',1000)
    await myColorBlink('purple',1000)
    await myColorBlink('pink',1000)
    await myColorBlink('white',1000)
}
console.log(colorChange());


//Handling Errors in Async Function
// we may use try catch statement to handle the error
const fakeRequest = (url) => {
    return new Promise((fulfilled, rejected) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000){
                rejected('Connection Timeout')
            }else {
                fulfilled(`Here is your fake data from ${url}`);
            }
        }, delay);
    }) 
}

async function makeTwoRequests(){
   try{
       let data1 = await fakeRequest('/page1');
       console.log(data1);
       let data2 = await fakeRequest('/page2');
       console.log(data2);
   } catch(e) {
       console.log("Caught an error!");
       console.log("The error is : ",e);
   }
}
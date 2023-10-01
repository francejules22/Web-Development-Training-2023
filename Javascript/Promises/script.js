// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to 
// associate handlers with an asynchronous action's eventual success value or failure reason. This lets 
// asynchronous methods return values like synchronous methods: instead of immediately returning the final 
// value, the asynchronous method returns a promise to supply the value at some point in the future.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() *4500) + 500;
    setTimeout(() => {
    if (delay > 4000) {
    failure('Connection Timeout')
    } else {
    success(`Here is your fake data from ${url}`)
    }
    }, delay)
 }

//This is the old way of making request. We have a lot of callbacks and can be a
//potential problem in the future. Many callbacks can be confusing.
fakeRequestCallBack('books.com',
    function(response) {
    console.log('It worked');
    console.log(response);
    }, function(err) {
    console.log('Error');
    console.log(err);
})
 

// If we want to add another request, we can nest it. 
fakeRequestCallBack('books.com',
 function(response) {
 console.log('It worked');
 console.log(response);
 fakeRequestCallBack('books.com/page2',
 function(response) {
 console.log('It worked again');
 console.log(response);
}, function(err) {
    console.log('Error on 2nd request');
    console.log(err);
 })
 }, function(err) {
 console.log('Error');
 console.log(err);
})
 

// We can use the syntax below instead, promise. Call variable response in console. 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
     const delay = Math.floor(Math.random() *4500) + 500;
     setTimeout(() => {
        if (delay > 4000) {
            reject('Connection Timeout')
        } else {
           resolve(`Here is your fake data from ${url}`);
        }
      }, delay);
  })
}
let response = fakeRequestPromise('test.com');


// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
let request = fakeRequestPromise('test.com');

request.then(() => { //if fulfilled
   console.log("It worked!");
})
.catch(() => { //if rejected
   console.log("Error")
})
//call request variable in console to verify
request;


// We can also nest if we have two or more requests.
let request = fakeRequestPromise('test.com');

request.then(() => { //if fulfilled
   console.log("It worked!");
   fakeRequestPromise('text.com/page2')
   request.then(() => {
      console.log('Page 2 worked');
 })
.catch(() => {
     console.log('Page 2 error');
  })
})
.catch(() => { //if rejected
   console.log("Error")
})


// We can also shorten and make the code simpler by using Promise. Example below has three requests.
let request = fakeRequestPromise('test.com');

request.then(() => {
    console.log("It worked!");
    return fakeRequestPromise('text.com/page2')
})
request.then(() => {
   console.log('Page 2 worked');
   return fakeRequestPromise('text.com/page3')
})
request.then(() => {
   console.log('Page 3 worked');
})
.catch(() => {
   console.log("Request Failed!");
})


// We haven’t put some parameters in the request when it is fulfilled. Example below has parameters in it. 
let request = fakeRequestPromise('test.com');

request.then((data) => {
    console.log("It worked!");
    console.log(data);
    return fakeRequestPromise('text.com/page2')
})
request.then((data) => {
    console.log('Page 2 worked');
    console.log(data);
    return fakeRequestPromise('text.com/page3')
})
request.then((data) => {
    console.log('Page 3 worked');
    console.log(data);
})
.catch(() => {
    console.log("Request Failed!");
})



// Creating Own Promises
// Here’s how we can create our own promise. If we check the code below in console, it will return pending 
// since we haven’t declared if it’s fulfilled or rejected. 
new Promise((fulfilled, rejected) => {

})

new Promise((fulfilled, rejected) => {

 fulfilled();
})

new Promise((fulfilled, rejected) => {

 rejected();
})



// Here’s an example:
const fakeRequest = (url) => {
     return new Promise((fulfilled,rejected) => {
       const rand = Math.random();
       setTimeout(() => {
         if(rand < 0.7) {
            fulfilled('Your fake data here.');
         } else {
            rejected('Request error.');
            }
      }, 1000)
   })
}
fakeRequest('/dogs/1')
.then((data) => {
    console.log("Done with the request!");
    console.log("Data is:", data)
})
.catch((err) => {
    console.log("Ooops!", err);
})


// Let’s rewrite our background color changer code.
const delayedColorChange = (color, delay) => {
   return new Promise((fulfilled, rejected) => {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        fulfilled();
      }, delay);
   })
}
//we'll use implicit return
delayedColorChange('red', 1000)
 .then(() => delayedColorChange('orange', 1000))
 .then(() => delayedColorChange('yellow', 1000))
 .then(() => delayedColorChange('blue', 1000))
 .then(() => delayedColorChange('green', 1000))




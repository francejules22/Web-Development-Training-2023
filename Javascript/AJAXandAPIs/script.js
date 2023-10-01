//AJAX and APIs
//Introduction to AJAX(Asynchronous Javascript And XML)
//AJAX - stands for Asynchronous Javascript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with the servers
// - it can send and receive information in various formats, including JSON, XML, HTML and text files.
//The Two Major features of AJAX allow you to do the following: 
// - make requests to the server without reloading the page
// - receive and work with data from the server


//Introduction to APIs (Application Programming Interface)
// - API is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software
// - API is generally a set of code feature (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser or other software/hardware on the user's computer, or third party websites and services.
// For Example 
// - the getUserMedia API can be used to grab audio and video form user's webcam
// - the Geolocation API can be used to retrieve location information from whatever service the user available on their device.
// - the Twitter APIs can be used to retrieve data from user's twitter account , for example, to display their latest tweets on a web page
// - the Web Animations API can be used to animate parts of a web page for example, to make images move around or rotate.


//What is JSON?
//JSON stands for JavaScript Object Notation
//JSON is a lightweight format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page
//JSON is "self-describing" and easy to understand
//    https://www.json.org/json-en.html
//JSON Formatter: https://jsonformatter.curiousconcept.com/
//Sample API: https://api.cryptonator.com/api/ticker/btc-usd
//Paste the link of sample API to your browser and copy the string of JSON
//String of JSON
const data = `{"ticker": {"base":"BTC","target":"USD","price":"49910.53907919","volume":"58840.59549185","change":"-261.23272436"},"timestamp":1630587604,"success":true,"error":""}`
const parseData = JSON.parse(data);
parseData;
//{ticker: {…}, timestamp: 1630587604, success: true, error: ''}
parseData.ticker;
//{base: 'BTC', target: 'USD', price: '49910.53907919', volume: '58840.59549185', change: '-261.23272436'}
parseData.ticker.price;
// '49910.53907919'

//If we have an information that is a JS object and we want to turn it into JSON , we can use the method JSON.stringify.
const dog = {
    breed: 'Labrador',
    color: 'black',
    isAlive: true
}
JSON.stringify(dog);
//'{"breed":"Labrador","color":"black","isAlive":true}'

//Sample1
const info = {
    name: 'France',
    age: 20,
    isPerson: True
}
JSON.stringify(info);
//'{"name":"France","age":20,"isPerson":true}'


//Query String and Headers
// - a query string is a part of a Uniform Resource Locator (URL) that assigns values to specified parameters.
// - commonly includes fields added to a base URL by Web Browser or other client application.


//Making XHRs
//XMLHttpRequest
// - the original/old way of sending requests via JS.
// - Does not support promises,so lots of callback will be used.
const myReq = new XMLHttpRequest() //this gives as a new request object
     //then we need to attach onload and onerror callbacks
     myReq.onload = function (){
         const data = JSON.parse(this.responseText);
         console.log(data);
     };
     myReq.onerror = function(err){
         console.log('ERROR!',err);
     };
//then we need to open adn send the request
myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();


//another example
const req = newXMLHttpRequest();
   req.onload = function (){
       console.log("All done with the request!");
       console.log(this);
   }
   req.onerror = function(){
       console.log("Error!");
       console.log(this);
   }
 req.open('get','https://api.cryptonator.com/api/ticker/btc-usd');
 req.send();
 //to get the price of bitcoin
 const req = newXMLHttpRequest();
   req.onload = function (){
       console.log("All done with the request!");
       const data = JSON.parse(this.responseText);
       console.log(data.ticker.price);
   }
   req.onerror = function(){
       console.log("Error!");
       console.log(this);
   }
 req.open('get','https://api.cryptonator.com/api/ticker/btc-usd');
 req.send();


 
 //The Fetch API
 // - This is the newer way of making HTTP requests using Javascript
 // - support promises
 // - not support in Internet Explorer
 // Run this in the console and we'll get a promise;
 fetch('https://api.cryptonator.com/api/ticker/btc-usd')
 // If we request something that doesn't exist, it will be rejected
 //another example
 fetch('https://api.cryptonator.com/api/ticker/btc-usd')
 .then(res => {
     console.log("RESPONSE", res);
 })
 .catch(e => {
     console.log("Oops" , e);
 })

 //to get the data from the API
 fetch('https://api.cryptonator.com/api/ticker/btc-usd')
 .then(res => {
     console.log("RESPONSE", res);
     return res.json() //this returns a promise.This will be parsed as json
 })
 .then(data => {
     console.log("Data parsed", data);
 })
 .catch(e => {
     console.log("Oops" , e);
 })

 //example using Async Function
 const fetchBitcoinPrice = async () => {
      const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
      const data = await res.json()
      console.log(data.ticker.price);
 }
 //then, call the variable in the console
fetchBitcoinPrice();
//but the code above will not catch any errors if the request does not exist.Remember that we need to use try catch
const fetchBitcoinPrice2 = async () => {
   try{
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    const data = await res.json()
    console.log(data.ticker.price);  
   } catch(error){
       console.log("Ooops" , error);
   }
}



//Introduction To Axios 
//- A library for  making HTTP request
//    https://github.com/axios/axios
// To  link Axios, use the link from the site.
// <script src ="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  

// Then test is in console using crypto API.There's already data parsed in it.
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price);
})
.catch(err => {
    console.log("Oooops", err);
})

//using async function
const fetchBitcoinPrice3 = async () => {
    try{
     const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
     console.log(res.data.ticker.price);  
    } catch(error){
        console.log("Ooops" , error);
    }
 }


 //Setting Header using Axios
const getDadJoke = async () => {
     const res = await axios.get('https://icanhazdadjoke.com/');
     console.log(res);
}

//we have to specify that we only want application/json when making a request
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/' , config);
    console.log(res);
}

//now we can extract the joke out of there
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/' , config);
    console.log(res.data.joke);
}

//lets try using DOM
const jokes =  document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
  try{
      const config = {headers: {Accept: 'application/json'}};
      const res = await axios.get('https://icanhazdadjoke.com/' , config);
      return res.data.joke;
  } catch (error){
      return "No Jokes Available!";
  }
}

//lets try using DOM 2(TV SHOW SEARCH TITLE)
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); //preventDefault() method is used to prevent the browser from executing the default action of the selected element
    const userInput = form.elements.query.value; //to get the value of the input and store in a variable
    const config = {params : {q:userInput}};
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    //console.log(response.data[0].show.image.medium);
    displayImages(response.data);
    form.elements.query.value = ''; // to empty the input after searching
});
  
const displayImages = (shows) => {
    for(let result of shows){  
        //add if condition for those medium property with null values.You may test it without if condition to see the error that will come up.
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}


//Prototypes, Classes and OOP
//Prototypes - are the mechanism by which Javascript objects inherit features from one another
//Javascript is often described as a prototype-based language to provide inheritance,objects can have a prototype object,which acts as a template object that it inherits methods and properties from.
//An object's prototype object may also have a prototype object , which it inherits methods and properties from and so on. This is often referred to as a prototype chain and explains why different have properties and methods defined on other objects available to them.
//In JavaScript , a link is made between the object instance and its prototype(its_proto_property , which is derived from the prototype property on the constructor) , and the properties and methods are found by walking up the chain of prototypes.


//Introduction to Object Oriented Programming
// Object-Oriented Programming is a programming paradigm based on the concept of "objects" , which can contain data and code: data in the form of fields, and code , in the form of procedures.A feature of objects is that an object's own procedures can access and often modify the data fields of itself.
//Visit the link below for better understanding:
//    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented JS
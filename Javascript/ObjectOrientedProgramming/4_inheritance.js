//INHERITANCE
//Constructor - its just a function
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
 }

 //getSummary
 Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
 }

 //Magazine Constructor
 function Magazine(title, author, year, month){
     Book.call(this, title, author, year);
     this.month = month;
 }

 //Inherit Prototype (getSummary)
 Magazine.prototype = Object.create(Book.prototype); //I inherit the getSummary prototype 


 //Instantiate Magazine Object
 const mag1 = new Magazine('Magazine One','France Jules','2021','Dec'); 
 //console.log(mag1); //Magazine {title: 'Magazine One', author: 'France Jules', year: '2021', month: 'Dec'}
 //console.log(mag1.getSummary());  //Magazine One was written by France Jules in 2021
 

 //Use Magazine Constructor
 Magazine.prototype.constructor = Magazine;
 console.log(mag1)
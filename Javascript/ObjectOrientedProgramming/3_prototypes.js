//PROTOTYPE
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

 //getAge
 Book.prototype.getAge = function (){
     const years = new Date().getFullYear() - this.year;
     return `${this.title} is ${years} years old`;
 }

 //Revise or Change the year
 Book.prototype.revise = function(newYear){
     this.year = newYear;
     this.revised = true;
 }

 //Instantiate an object from the constructor
 const book3 = new Book('Book Three','Francisco Zoe','2018'); 
 const book4 = new Book('Book Four','Yami Sukehiro','2017'); 
 
 console.log(book4.getSummary()) //Book Four was written by Yami Sukehiro in 2017
 console.log(book3.getAge()) //Book Three is 3 years old
 console.log(book4) //Book {title: 'Book Four', author: 'Yami Sukehiro', year: '2017'}
 book4.revise('2020')
 console.log(book4) //Book {title: 'Book Four', author: 'Yami Sukehiro', year: '2020', revised: true} 
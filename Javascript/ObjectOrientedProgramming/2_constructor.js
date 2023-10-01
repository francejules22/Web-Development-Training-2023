//CONSTRUCTOR - its just a function
function Book(title, author, year){
   this.title = title;
   this.author = author;
   this.year = year;

   this.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}
//Instantiate an object from the constructor
const book3 = new Book('Book Three','Francisco Zoe','2018'); //Book Initialized...
const book4 = new Book('Book Four','Yami Sukehiro','2017'); //Book Initialized...
console.log(book3.getSummary())
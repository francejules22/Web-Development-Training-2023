//SUBCLASSES 
class Book5 {
    constructor(title, author, year){
     this.title = title;
     this.author = author;
     this.year = year; 
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Magazine Subclass
class Magazine1 extends Book5{
    constructor(title, author, year, month){
           super(title, author, year);
           this.month =  month;
       }
}

//Instantiate Magazine
const mag3 = new Magazine1 ('Magazine One','Francis Jules','2021','Dec');
console.log(mag3);
console.log(mag3.getSummary()); //Magazine One was written by Francis Jules in 2021
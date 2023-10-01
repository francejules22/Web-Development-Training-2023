//BASICS Literal
//const s1  = 'Hello'
//console.log(typeof s1); //string

//const s2 = new String ('Hello')
//console.log(typeof s2); //object

//console.log(window)
//alert();
//console.log(navigator.appVersion);//5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36 Edg/93.0.961.52

//OBJECT LITERALS
const book1 = {
    title: 'Book One',
    author: 'Francis Jules',
    year: '2019',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Francis Jules',
    year: '2021',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book2.getSummary())  
//if you want to see the array of book1 and book2
console.log(Object.values(book1)) 
console.log(Object.keys(book1))
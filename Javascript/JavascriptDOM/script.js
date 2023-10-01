//Selecting DOM Elements
//STEPS: 1.Select - selecting elements first

//using getElementById 
let myTest = document.getElementById("test");// if there's no id of test , it will return null
let myBanner = document.getElementById("banner");//this will return the img element
   //use console.dir(banner)// we can see that it is an object an contains all the properties

//using getElementByTagName
const paras = document.getElementsByTagName("p");//use console.dir(paras[2]); to fetch a specific paragraph from the sample
const banner = document.getElementsByTagName("banner");
for (let img of banner){
    img.src = "https://www.bing.com/th?id=OIP.oGHS17xyi6l0HCGMPgXQ2wHaHa&w=104&h=104&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
} 

//using getElementByClassName
const icons = document.getElementsByClassName("icons");
for(let img of icons){
    img.src= "images/img.png"
}  

//using querySelector
const selectMe = document.querySelector('#select');
const paragraph = document.querySelector('p');

//using querySelectorAll
const newIcon = document.querySelectorAll(".icons");
const newPara = document.querySelectorAll("p");


//STEPS: 2.Manipulate
  // innerHTML() - is used to modify and set the content of a <p> element
    document.getElementById("id1").innerHTML = "First Paragraph";
    document.getElementById("id2").innerHTML = "Second Paragraph";

   // textContent() - sets or return the text content of the specified node  and all its decendants
   document.getElementById('text').textContent = 'This text is different!';

   //innerText() - sets or return the text content of the specified node  and all its decendants
    function myFunction() {
       var x = document.getElementById("myBtn").innerText;
       document.getElementById("demo").innerHTML = x;  
    }

    //The difference between innerHTML and  textContent    
       //the innerHTML
     const myDiv =  document.getElementById('my-div');
     myDiv.innerHTML = "Hey, my name is <i>France</i>"; // output: Hey ,my name is France 
       //the textContent
     myDiv.textContent = "Hey, my name is <i>France</i>"; //output Hey,my name is <i>France</i>
   //Sample
   document.getElementById("para").innerHTML = "Hey my name is <bold>France</bold>"; //Hey my name is France
   document.getElementById("para").textContent =  "Hey my name is <bold>France</bold>"; //Hey my name is <bold>France</bold>



   // getAttribute() - method of the element interface returns the value of a specified attribute on the element 
      const banner =  document.querySelector('img');
      banner.getAttribute('src')//we will be able to fetch the value of src
      //Sample
      function myButton() {
        var x = document.getElementById("myBtn").getAttribute("onclick");
        document.getElementById("demo").innerHTML = x;
      }

   // setAttribute() - sets the value of an attribute on the specified element. If the attribute already exists , the value is updated; otherwise a new attribute is added with the specified name and value
      const banner = document.querySelector('img');//select it first
      banner.setAttribute('src', 'https://www.bing.com/th?id=OIP.mo_4cUj-14DRHbt_wFPcYQHaEK&w=188&h=105&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2');//manipulate
      //Sample1
      function fun(){
        document.getElementById("link").setAttribute("href", "https://www.javatpoint.com/");
      }
      //Sample2
      function changeButton(){
        document.getElementById("change").setAttribute("type","button");
      }

      
   //changing styles() - 
     const h1 = document.querySelector('h1');// select if first
        //We can use style property/object to manipulate style using Javascript.
        h1.style;// we will be able to see the properties in CSS.They are came cased.

        h1.style.color = 'blue';
        h1.style.textAlign = 'center';  
        h1.style.fontSize = '25px';
        h1.style.border = '2px solid black';
        //another example 
        const allParas = document.querySelectorAll('p');
        for(let p of allParas){
          p.style.color = 'blue';
        }
        //we won't be able to know the current properties or styles in the content if we do this 
        h1.style.color; // this will give us no value

        //instead , we can do below code
        const h1 = document.querySelector('h1');
        window.getComputedStyle(h1).color;
        window.getComputedStyle(h1).fontSize;
        window.getComputedStyle(h1).fontFamily;

   // classList() - is a read-only property that returns a live DOMTokenList collection of the class attibutes of the element.
        const h1 = document.querySelector('h1');//select if first
        h1.getAttribute('class');//let's check if h1 has a class
        h1.setAttribute('class' , 'myClassList');//to set a class
        //check html and confirm that the class name myClassList has applied
        h1.setAttribute('class' , 'newClassList');//this will work , but the first class will be removed

        //we may use template literal to have two classes 
        let currentClass = h1.getAttribute('class');
        currentClass;
        h1.setAttribute('class', `${currentClass} myClassList`);// but this is annoying .This brings us to classList.

        //classList is an object that we can interact with to control the classes of an element and also to retrieve them and manipulate them.
        h1.classList // we able to see some built-in methods like add or remove in the class list
        h1.classList.add('record'); // this will add in the classList class = "myClassList record"
        h1.classList.add('new-record'); // this will add in the classList class = "myClassList record new-record"
        h1.classList.remove('new-record');// this will remove in the classList class = "myClassList record"

        //classList.add
        function getClass(){  
          var e = document.getElementById("Btn");  
          e.classList.add("myClass");  
        }  
       //classList.remove
       function getClass(){
        var e = document.getElementById("Btn");  
        e.classList.remove("myClass"); 
       }

       //classList.toggle
       function get_toggle(){  
         var e = document.getElementById("Btn");  
         e.classList.toggle("myClass2");  
       } 

       //classList.toggle sample
       function myFunction() {
          var element = document.getElementById("myDIV");
          element.classList.toggle("mystyle");
       }

 
      //classList.contains()
      function getClass(){  
        var e = document.getElementById("Btn");  
        document.write(e.classList.contains("myClass")+"<br>"+"myclass is the name of the class");  
      }

      //classList.replace()
      function replace_Class(){  
        var e = document.getElementById("Btn");  
        e.classList.replace("myClass1", "myClass2");  
      } 
 
      //classList.item()
      function get_Class(){  
        var e = document.getElementById("Btn");  
        alert(e.classList.item(2));  
      }  

   // parentElement() - we can traverse or navigate to parents , child  or siblings of an element
   const bold = document.querySelector('strong');
   bold;
   bold.parentElement;
   bold.parentElement.parentElement;
   bold.parentElement.parentElement.parentElement;
    //Sample
    const buttOne = document.getElementById("butt");
    buttOne.parentElement.parentElement;

   // childElement()
   const assortedElements = bold.parentElement.parentElement;
   assortedElements.children;//to see the children of the body element;
   assortedElements.childElementCount;// to know the count of the elements under body elements;
      //Sample
      const childElements = buttOne.parentElement;
     childElements.children;
     childElements.childElementCount;


   // parentElement, children, nextSiblingElement and previousSiblingElement
  const icons = document.querySelector('.icons');
  icons.parentElement;
  icons.children;
  icons.nextElementSibling;
  icons.previousElementSibling;
      //Sample
      const myIcon = document.querySelector(".icon-banner");
      myIcon.parentElement;
      myIcon.children;
      myIcon.childElementCount;
      myIcon.nextElementSibling;
      myIcon.previousElementSibling;
   
   // appendChild() 
       // we can create a new img;
       const newImg = document.createElement('img');
       document.body.appendChild(newImg);// this will append as the last child of the body
       newImg.src = 'https://www.bing.com/th?id=OIP.mo_4cUj-14DRHbt_wFPcYQHaEK&w=188&h=105&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';//adding value to src attribute
       newImg.classList.add('icons');//we have a class icons , we can use it to apply the css styling the using classList , then add.

       //lets create an h2 element
       const newH2 = document.createElement('h2');
       newH2.innerText = 'I am h2';
       document.body.appendChild(newH2);
          //Sample
          const newButton = document.createElement('button');
          newButton.innerHTML = 'Click new button';
          document.body.appendChild(newButton);

   // append()
   const h1 = document.querySelector('h1');  
   h1.append('Testing');//this will append at the end of h1
       //we can append more 
   h1.append('Testing2', 'Testing3');
      //Sample
      const myParagraph = document.querySelector("#para");
      myParagraph.append('goodbye');

   // prepend() - to print the element in the UI not in the console
   const p = document.querySelector('p');
   const newB = document.createElement('strong');
   newB.append('Hi!');
   p.prepend(newB);
        //if we wanted to add a new element as a sibling in between of two elements , we can do below code.
          const h2 = document.createElement('h2');//create the new element first
          h2.append('DOM manipulation is fun');//add the content by using append
          const h1 = document.querySelector('h1');//select h2
          h1.insertAdjacentElement('afterend' , h2);//then add new element (h2) afterend of h1

   // removeChild() - this is annoying because we still need to select the parent to actually remove the child that we wanted
   const body = document.querySelector('body');
   const h1 = document.querySelector('h1');
   body.removeChild(h1);

   //remove()
   const h1 = document.querySelector('h1');
   h1.remove();



// append
//const body = document.body;
//body.append("Hello Word")
//output: Hello World
    //Sample
    const hero = document.querySelector(".heroStyle");
    hero.append("Kill");


// createElement
//const body = document.body;
//const div = document.createElement("div");
//body.append(div);
//output : <div></div>
    //Sample
    const villain = document.querySelector(".villainStyle");
    const para = document.createElement("p");
    villain.append(para);


//innerText
//const body = document.body;
//const div = document.createElement("div");
//body.append(div);
//div.innerText = 'Hi'
//output: Hi
 
//textContent
//const body = document.body;
//const div = document.createElement("div");
//body.append(div);
//div.textContent = 'Hi'
//output: Hi

//textContent
//const body = document.body;
//const div = document.createElement("div");
//body.append(div);
//div.textContent = "<strong>HelloWorld</strong>"
//output: <strong>HelloWorld</strong>

//innerHTML
//const body = document.body;
//const div = document.createElement("div");
//body.append(div);
// div.innerHTML = "<strong>Hello World</strong>"
//output: HelloWorld


//remove
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.getElementById('#hello');
//const spanBye = document.getElementById('#bye');
//spanBye.remove()
//output: Hello
//div.append(spanBye)
//output: Hello Bye

//removeChild
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.getElementById('#hello');
//const spanBye = document.getElementById('#bye');
//div.removeChild(spanHello);
//output: Bye


//Difference between innerText and textContent
//const div = document.querySelector('div');
//console.log(div.textContent)
//output: Hello
       // Bye
//console.log(div.innerText)
//output: Hello

//appendChild
//const body = document.body;
//const div = document.createElement("div");
//body.appendChild(div);
//div.innerText = 'Hello Word'
// output: Hello Word

//getAttribute
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//console.log(spanHello.getAttribute('id'))
//output: Hi

//setAttribute
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//console.log(spanHello.setAttribute("id", "MyID"))
//output: id = "MyID"

//removeAttribute
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//spanHi.removeAttribute("id") 
//output: 

//dataAttribute
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//console.log(spanHello.dataset)

//classList add
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//spanHello.classList.add("newClass")
//output: class="newClass"

//classList remove
//const body = document.body
//const div = document.querySelector('div');
//const spanHello = document.querySelector('#hello');
//const spanBye = document.querySelector('#bye');
//spanHello.classList.add("newClass")
//spanHello.classList.add("featureClass")
//output: class="newClass featureClass"
//spanHello.classList.remove("featureClass")
//output: class="newClass"

 let getBody = documen.body
 let newElement = document.createElement("h1");

 let date = new Date();
 let currentHour = date.getHours();
 let createTxtMsg;

  if (currentHour >= 4 && currentHour < 10) {
    createTxtMsg = "Good Morning!";
  } else if(currentHour >= 10 && currentHour < 12) {
      createTxtMsg = "Good Day!";
  }else if (currentHour >= 12 && currentHour < 18) {
      createTxtMsg = "Good Afternoon!";
  }else if (currentHour >= 18 && currentHour < 22) {
      createTxtMsg = "Good Evening!";
  }else if (currentHour >= 22 && currentHour < 4) {
      createTxtMsg = "Good Night!";
  }else { 
      createTxtMsg = "Are you from different planet!";
  }

   let createEleTxt = document.createTextNode(createTxtMsg);
   newElement.appendChild(createEleTxt);
   getBody.appendChild(newElement);
   newElement.setAttribute("class","welcome");
   newElement.style.cssText = "text-align: center; font-size: 60px; font-family: arial;";
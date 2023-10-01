//to select all the img tags
//$("img")
//to select all the elements with class "sale"
//$(".sale")
//to select all a tags inside of li a
//$("li a")
//to check if file is connected
if(jQuery){
    alert("jQuery Loaded!");
} else{
    alert("No jQuery!");
}

//Sample 1
$("div").css("background","purple"); //select all div and give them a purple background
$(".highlight").css("width","200px");//select the div with class " highlight" and make them 200px wide
$("#third").css("border", "4px solid orange");// select the div with id "third" and give it an orange border
$("div:first-off-type").css("color","pink");// bonus: select the first div only and change its font color to pink


//Sample 2  
// text() - get the combined text contents of each element in the set of matched elements, including their descendants , or set the text contents of the matched elements.//textContent
$("h1").text();  //'jQuery Common MethodsEvents'
$("ul").text();  //'\n        Toblerone\n        Kit-Kat\n        Hershey\n    '
$("li").text();  //'TobleroneKit-KatHershey'
$("h1").text("New Text!!!");
$("li").text("Potchi, Mentos, Maxx");
// html() - get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched elements.//innerHTML
$("ul").html("<li>Hello</li> <li>Love</li> <li>Goodbye</li>");
$("li").html("<a href='https://www.google.com'>Go to Google!</a>");
// put img
$("img").css("width");
$("img").css("width", "200px");
$("img").attr("src");// to check the value of the src
$("img").attr("src" , "https://www.bing.com/images/search?q=toblerone+photo&id=16D4AB2236F3A27620682102D749264F4574B435&FORM=IQFRBA.jpg");//to change the value of the src
$("input").attr("type" , "color");
// val() - get the current value of the first element in the set of matched elements or set the value of every matched element
$("input").val();//will return an empty string if input text is blank
$("input").val("Francis Jules");// will add value to the textbox
$("input").val("");// to clear the chars in textbox
// addClass() adds the specified class(es) to each element in the set of matched elements.
$("h1").addClass("correct");
$("h1").removeClass("correct");
$("h1").toggleClass("correct");

//Sample 3
// click() - is a quick and easy way to add a click listener to elements.Only adds listenes for existing elements 
$("button").click(function() {
    alert("someone clicked a button");
});
// keypress() - is quick and easy way to add a keypress listener to elements
$("input").keypress(function () {
    console.log("You pressed a key!");
});
// event is letiable/arguments
$("input").keypress(function (event){
    if(event.which === 13){
        alert("You hit enter");
    }
});
// on() - works similarly to addEventListener . It lets you specify the type of event to lister for.Will add listeners for all potential future elements
// prints when item with id "submit" is clicked
$("#submit").on("click" , function(){
    console.log("Another Click!");
});
//alerts when any button is clicked 
$("button").on("click", function(){
    console.log("button clicked");
});
//double click event
$("button").on("dbclick", function(){
    alert("Double clicked!");
});
//drag start event
$("a").on("dragstart", function() {
    console.log("Drag Started!");
});
//keypress event
$('input[type="text]').on("keypress", function(){
    alert("Key press in an input");
});
//
$("input").on("keypress", function(){
    console.log("Key Pressed!");
});
//
$("input").on("mouseenter", function(){
    console.log("Mouse Enter!");
});
//
$("input").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});
//
$("input").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});


//Sample 4
//fadeOut() - hide the matched elements by fading them to transparent
$("div").fadeOut();
$("button").on("click", function (){
      $("div").fadeOut(1000);
      console.log("Fade Completed");
});
//fadeIn() - display the matched elements by fading them to opaque 
$("div").fadeIn();
$("button").on("click", function (){
     $("div").fadeIn(1000, function(){
     });
});
//fadeToggle() - display or hide the matched elements by animating their opacity
$("div").fadeToggle();
$("button").on("click", function(){
      $("div").fadeToggle(1000, function(){
      });
});
//slideDown() - display the matched elements with a sliding motion
$("button").on("click", function (){
    $("div").slideDown();
})
//slideUp() - hide the matched elements with a sliding motion
$("button").on("click", function (){
    $("div").slideUp();
})
//slideToggle() - display or hide the matched elements with a sliding motion
$("button").on("click", function (){
     $("div").slideToggle();
})
//Callback
//The code below will not work and will only display the orange background color. Because both are dependent to 1s that we set. 
setTimeout(() => {
 document.body.style.backgroundColor = 'red';
}, 1000)
setTimeout(() => {
 document.body.style.backgroundColor = 'orange';
}, 1000)

//Below will work, but still not recommended. If we want to add more color for background, we still have to set the delay.
setTimeout(() => {
 document.body.style.backgroundColor = 'red';
}, 1000)
setTimeout(() => {
 document.body.style.backgroundColor = 'orange';
}, 2000)


//What we can do is to nest each of them. 
setTimeout(() => {
     document.body.style.backgroundColor = 'red';
     setTimeout(() => {
         document.body.style.backgroundColor = 'orange';
         setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
        }, 1000)
    }, 1000)
}, 1000)


//We can also put it in the function if we want to reuse it. 
const delayedColorChange = (newColor, delay) => {
 setTimeout(() => {
 document.body.style.backgroundColor = newColor;
 }, delay);
}
delayedColorChange('blue', 1000);

//But if we are adding another color, we will get the same issue as the first one. The color of background will only be magenta.
const delayedColorChange = (newColor, delay) => {
 setTimeout(() => {
 document.body.style.backgroundColor = newColor;
 }, delay);
}
delayedColorChange('blue', 1000);
delayedColorChange('magenta', 1000);

//What we can do is to add a callback to nest another background color. 
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
       document.body.style.backgroundColor = newColor;
       doNext();
    }, delay);
 }

   delayedColorChange('red', 1000, () => {
     delayedColorChange('orange', 1000, () => {
       delayedColorChange('yellow', '1000')
   })
})


//Sample
const myColorChangeStyle = (color, delay) => {
    setTimeout(() => {
        document.body.style.backGroundColor = color;
    }, delay);
} 
myColorChangeStyle('blue',3000);
//but if we add again another color we still get some error so green will only appear as a color
myColorChangeStyle('green',5000);
//So we used callbacks to display all the colors
const myColorChangeStyle = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext();
    }, delay);
}
myColorChangeStyle('blue',3000, () => {
  myColorChangeStyle('green',5000, () => {
      myColorChangeStyle('red',6000)
  })
})
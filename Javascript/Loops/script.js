//Using For Loops - is a control flow statement for specifying iteration, which allows code to be executed repeatedly
for( let i = 1; i <= 10 ; i++) {
    console.log(i);
}
//Sample1
for(let x = 2; x <= 20; x++){
    console.log("x: ", x);
}

//Sample2
let message = prompt("Enter  your message: ");
for ( x = 0 ; x <= message.length; x++){
    console.log(x, message[x]);
}

//printing even numbers
for( i = 0; i <= 20; i += 2){
    console.log(i);
}
//my practice
for( y = 20 ; y >= 1 ; y -= 2){
    console.log(y);
}
 
//printing odd numbers
for( let i = 1; i <= 20; i += 2){
    console.log(i);
}

//infinite loop
for( let i = 20; i >=0 ; i++){
    console.log(i);
}

//To loop over an array, start at index 0 and continue looping to until last index (length-1).
//Sample1
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = 0; i <= days.length; i++) {
 console.log(i, days[i]);
}

//Sample2
const taskSched = ["Read","Learn","Write","Create","Practice","Study"];
for ( x = 0; x <= taskSched.length; x++){
    console.log("My task schedule: ",taskSched[x]);
}

//Using reverse
//Sample1
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = days.length - 1; i >= 0; i--) {
 console.log(i, days[i]);
}

//Sample2
const taskSched = ["Read","Learn","Write","Create","Practice","Study"];
for ( x = taskSched.length - 1; x >= 0 ; x--){
    console.log("My task schedule: ",taskSched[x]);
}

//Using toUpperCase 
//Sample1
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = days.length - 1; i >= 0; i--) {
 console.log(days[i].toUpperCase());
}
//Sample
const taskSched = ["Read","Learn","Write","Create","Practice","Study"];
for ( x = taskSched.length - 1; x >= 0 ; x--){
    console.log(taskSched[x].toUpperCase());
}


//Using nested for loops
//Sample1
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j <= 4; j++) {
    console.log(` j is: ${j}`);
    }
   }
//Sample2
const seatPlan = [
    ["Student1", "Student2", "Student3"],
    ["Student4", "Student5", "Student6"],
    ["Student7", "Student8", "Student9"]
   ]
   for (let i = 0; i < seatPlan.length; i++) {
    const row = seatPlan[i];
    console.log(`ROW ${i + 1}`);
    for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    }


//Using While Loops - continue running as long as the test condition is true.
//Sample1 - Print 1 to 10
let num = 0;
while( num <= 10){
    console.log(num);
    num++;
}

//Sample2
let num = 0;
while( num <= 10){
    num++;
    console.log(num);
}

//Sample3- Print Odd Numbers
let num = 1;
while(num <= 20){
    console.log(num);
    num += 2;
}

//Sample4 - Print even Numbers
let num = 0;
while(num <= 20){
    console.log(num);
    num += 2;
}


//Sample5
const userPass = "Password_1";
let inputPass = prompt("Please enter your password!");
while( inputPass != userPass){
    inputPass = prompt("Invalid password ! Please re-enter your password!");
}
console.log("Thank  you for providing the right password!");



//Using Break - will stop the execution of the loop immediately as long as break is encountered.
//Sample1
let input = prompt("What would you like to say?");
while (true){
    input = prompt (`You said ${input}`);
    if( input == quit){
        break;
    }
}
alert("Quitting...");

//Sample2
let pass = 2000;
let input =  parseInt(prompt("Enter your password"));
while (pass == input){
    alert("Correct Password");
    if(!pass == input){
        break;
    }
    alert("Incorrect Password!");
}

//Sample2
for (let i = 0; i <= 10000; i++) {
    console.log(i);
    if (i === 10) {
    break;
    }
   }


//Using for of - A nice and easy way of iterating over arrays (or other iterable objects).
//the for...of statement creates a loop iterating over iterable objects, including: built-in String , Array , 
//array-like objects (e.g., arguments or NodeList ), TypedArray , Map , Set , and user-defined iterables
//Sample1
const students = ["student1", "student2", "student3", "student4", "student5",];
//for loop
for (let i = 0; i < students.length; i++) {
 console.log(`For ${students[i]}`);
}
//while loop
let num = 0;
while (num < 5) {
 console.log(`While ${students[num]}`);
 num++;
}
//for...of
for (let stud of students) {
 console.log(stud);
}

//Sample2
const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
for (let days of daysOfWeek){
    console.log(`In one week we have: ${days.toUpperCase()}`);
}

//Sample3
const wordNum = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
for (let number of wordNum){
    console.log(number.toLowerCase());
}
//Sample4
const color = ["Blue","Green","Grey","Orange","Purple","Black","Yellow"];
for (let rainbow of color){
    console.log(rainbow);
}

//Using for in 
//Sample1
const studentsExam = {
    student1: 99,
    student2: 99,
    student3: 99,
    student4: 99,
    student5: 99,
   };
   for (let student in studentsExam) {
    console.log(`${student} got ${studentsExam[student]}`);
   }

//Sample2
const studentsGrade = {
    France : 95,
    Ella: 94,
    Nathalie: 93,
    Ivan: 92,
    Cheriza: 90,
};

for( rank in studentsGrade){
    console.log(`${rank} garner the final average of ${studentsGrade[rank]}%`);
}




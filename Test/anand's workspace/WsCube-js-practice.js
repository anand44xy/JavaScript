// // conditonal Statement(ifelse) Questions

// //Q.1 Check even odd...
// var num=Number(prompt('type a number to check it even or odd...'));
// if (num % 2 == 0) {
//     console.log('Number is even.');
    
// } else {
//     console.log('Number is odd.');
// }   

// //Q.2 Check Voting eligibility...
// let age=Number(prompt('Enter your age:'));
// let isRegistered=Boolean(prompt('Are you Registerd Election 2024 ? (true/false)')) ;
// let isCitizen=Boolean(prompt('Are you citizen of india Election 2024 ? (true/false)'));

// if (age >= 18) {
//     if (isRegistered==true) {
//         if (isRegistered) {
//             console.log("You are eligible for Vote");
//           } else {
//             console.log("You are not eligible for Vote due to Registration Status.");
//           }
//     } else {
//         console.log('You are not eligibal for Vote due to Citizen status.');
//     }
// } else {
//     console.log('You are  not eligibal for Vote');
// }

// //Q.3 Find Simple Intrest Calculator ...
// let principal = Number(prompt('Enter principal:'));
// let rate = Number(prompt('Enter intrest rate:'));
// let time = Number(prompt('Enter intrest time:'));

// let intrest=(principal*rate*time)/100;

// if (time < 1) {
//     //Discount rate of 10% of less than 1 year
//     console.log(`Your discounted indtrest is: ${intrest -= (intrest* 0.1)} `);
// } else {
//     console.log(`Your Intrest is: ${intrest}`);
// }

// // Q.4 check Positive, Negative, Zero ...
// let num=Number(prompt('Enter a number: '));

// if (num === 0) {
//     console.log('Number is Zero');
// } else if(num > 0)
//     console.log('Number is Positive');
// else {
//     console.log('Number is Negative');
// }

// //Q.5 Calculate electricity bill ...
// let totalunits=Number(prompt(`Enter the total Uints: `));
// let bill=totalunits*10;

// if (totalunits <= 300) {
//     console.log(`Your Electricity Bill amount is: ₹0.0`);    
// } else {
//     console.log(`Your Electricity Bill amount is: ₹${bill}`);
// }


// //Q.6 Find Largest number in an array ...
// let num=[22, -34, 0, 10];

// // Initialize lagest with the first element of the array
// let LargestNum=num[0];

// for(let i=0; i< num.length; i++){
//     // Compare the current element with the smallest so far
//     if (num[i] < LargestNum) {
//         LargestNum=num[i];
//     }
//     console.log(`Largest number out of given numbers is: ${LargestNum}`);
// }

// // ---------------------- 22-04-2024 (loop) -----------------------------------------

// //Q.7 Check even or odd between 1 to 10...




// //Q.8 Find the sum from 1 to 100...
// var sum=0;
// for(var i=0; i<=100; i++){
//     sum +=i;
// }
// console.log(`The sum of first 100 numbers is:${sum}`);

// // Q.9 Find the sum of even numbers from 1 to 100...
// var sum=0;
// for(var i=0; i<=100; i++){
//     if (i% 2==0) {
//         sum +=i;
//     }
// }console.log(`The sum of even numbers form 1 to 100 is: ${sum}`);

// //Q.10 Find the sum of odd numbers between 50 to 100...
// var sum=0;
// for(var i=50; i<=100; i++){
//     if (i % 2==0) {
        
//     } else {
//         sum+=i;
//     }
// }console.log(`The sum of odd numbers between 50 to 100 is: ${sum}`);


// //Q. 11 Calculate factorial of any number...
// var num = Number(prompt('Enter any number to calculate its factorial:'));
// var factorial = 1;

// for (var i = num; i >= 1; i--) {
//    factorial *= i;
// }

// console.log(`The factorial of ${num} is: ${factorial}`);


// //Q. 12 Find the sum of all numbers which are divisible by 3 & 5, between 1 & 500...
// var sum = 0;
// for(var i = 1; i <= 500; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//          sum += i;
//     }
// }
// console.log(`The sum of all numbers which are divisible by 3 & 5, between 1 & 500 is: [${sum}]`);


// //Q.13 Write a fro loop to print numbers forom user range definded using promt...
// var startPoint = Number(prompt('Write starting point:'));
// var endPoint = Number(prompt('Write ending point:'));
// for (var i = startPoint; i <= endPoint; i++) {
//     console.log(i);
// }

// //Q.14 Write a for loop to prrint numbers from user defined in reverse using promt...
// var startPoint = Number(prompt('Write starting point:'));
// var endPoint = Number(prompt('Write ending point:'));
// for (var i = endPoint; i >= startPoint; i--) {
//     console.log(i);
// }

// //Q.15 Write a for loop to print table of a ginven number using promt...
// var num=Number(prompt('Give a number to print its table:'));
// for(var i=1; i<=10; i++){
//         console.log(num*i);
// }


// //Q.16 Write a for loop to print every thrid number between 1 and 30...
// for(var i=1; i<=30; i=i+2){
//         console.log(i);
// }

// //Q.17 Write a for loop to print the sum of numbers form 1 to 100...
// var sum=0;
// for(var i=1; i<=100; i++){
//         sum+=i;
// }console.log(`The sum of numbers form 1 to 100 is: [${sum}]`);

// // Q.18 Write a for loop to print the sum of numbers form 1 to 100 but stop adding when excedd 2500..
// var sum=0;
// for(var i=1; i<=100; i++){
//         if (sum<=2500) {
//           sum+=i;     
//         }     
// }console.log(`The sum of numbers form 1 to 100 is: [${sum}]`);



// //Q.19 Write a for loop to print the factorial of a given number using promt...
// var num=Number(prompt('Give a number to print its factorial:'));
// var factorial=1;
// for(var i=num; i>=1; i--){
//         factorial*=i;
// }console.log(`The factorial of ${num} is: ${factorial}`);

// // Q.19 Write a for loop to calculate sum of even and odd numbers form 1 to 50...
// var sumOfEvenNo=0;
// var sumOfOddNo=0;
// for(var i=1; i<=50; i++){
//         if (i% 2==0) {
//                 sumOfEvenNo+=1;
//         } else{
//                 sumOfOddNo+=i;
//         }
// }console.log(`The sum of even numbers form 1 to 50 is: [${sumOfEvenNo}] and sum of Odd numbers is: [${sumOfOddNo}]`);

// // Q.20 Write a for to find the average of numbers from 1 to 50...
// var average;
// var sum=0;
// for(var i=1; i<=50; i++){
//        sum+=i;
//        average=sum/50;
// }console.log(`The average of numbers form 1 to 50 is: ${average}`);

// //Q.21 Write a for loop to print sum of square of numbers form 1 to 10..
// var sum=0;
// for(var i=1; i<=10; i++){
//         var square=i*i;
//         sum+=square;
        
// }
// console.log(`The sum of square of numbers 1 to 10 is: ${sum}`);

// //Q.22 Write a for loop to print numbers from 1 to 100, but replace multipe of 3 with "web" and 5 with "app"...
// for(var i=1; i<=100; i++){
//         if (i%3==0) {
//             console.log('web');    
//         } else if (i%5==0) {
//             console.log('app')
//         } else {
//             console.log(i);
//         }       
// }

// //Q.23 Write a for loop to print even numbers form 2 to 20...
// var startup=Number(prompt('Give a starting point to printn even numbers:'));
// var endup=Number(prompt('Give a ending point to printn even numbers:'))
// for(var i=startup; i<=endup; i++){
//         if (i%2==0) {
//                 console.log(i);
//         }
// }

// //Q.24 Write a for loop to print numbers divisible by 5 from 50 to 100...
// for(var i=50; i<=100; i++){
//         if (i%5==0) {
//                 console.log(`The numbers divisible by 5 from 50 to 100 are: [${i}]`);z
//         }
// }


// ----------- 'break' & 'continue'statements in js --------------------
// let text1='';
// for(let i=0; i<=5; i++){
//     if (i===3) break;
//     text+=i;
// }console.log(text1);


// let text='';
// for(let i=0; i<=5; i++){
//     if (i===3) continue;
//     text+=i;
// }console.log(text);

// let text2=''; i=0;
// while ( i<=5) {
//     text2+=i;
//     i++;
//     if (i===3) break;
// }console.log(text2);

//------------------- 24-04-2024 ------------------------------------
// var sum=0;
// while(true){
//     var a=Number(prompt('Give a number'));
//     if (a=='' || a== null)break; 
//     if (a <= 100) continue;
//     sum+=a;
// }console.log(sum);

// var i=Number(prompt('Give a number'));
// var sum=0;
// for(var i=0; i<=100; i++){
//     sum+=i;
//     if (i%3==0 && i%5==0) break;
// }console.log(i,sum);


//----- Password checker --------------------
// let password;
// do {
//   password = prompt("Please enter your password:");
// } while (password !== "secret123");

// console.log("Welcome! You have entered the correct password.");

// //-----------------------------------------------------------
// //Q. Reverse an array
// var num=[12,343,645,64,66];
// for(var i=num.length-1; i>=0; i--){
//     console.log(num[i]);
// }

//-----------------------------------------------------------
// //Q. Find the sum of given numbers?
// var sum=0;
// let num=[20, 10, 15, 18, 21, 25];
// for (let index = 0; index < num.length; index++) {
//     // console.log(num);
//     sum+=num[index];
// }console.log(sum);


//-----------------------------------------------------------
// Q. Calculate the product of only even number in the given array?
// let product=1; // Initialize product to 1
// let num = [20, 10, 15, 18, 21, 25, 100, 103, 135, 1008];
// for (let index = 0; index < num.length; index++) {
//     if (num[index] % 2 === 0) { 
//         product *= num[index]; 
//     }
// }
// console.log(product); // Output the product of even numbers

// //-----------------------------------------------------------
// //Q. find the number which is divisble by only 3 or 5 
// let result;
// let num = [20, 10, 15, 18, 21, 25, 100, 103, 135, 1008];
// for (let index = 0; index < num.length; index++) {
//     if (num[index] % 3===0 && num[index] %5===0) { 
//          console.log(num[index]); 
//     }
// }



// //Q.------------------------------------
// var sumOfEvenNo=0;
// var sumOfOddNo=0;
// var num=[15, 18, 22, 20, 31,21, 29, 36 ,25,24, 10, 8, 7, 32, 75, 50];
// for(var i=0; i<num.length-1; i++){
//         if (num[i]% 2==0) {
//                 sumOfEvenNo+=num[i];
//         } else{
//                 sumOfOddNo+=num[i];
//         }
// }
// console.log(`Sum of even no. is: ${sumOfEvenNo} and 
// sum of odd no. is:${sumOfOddNo}`);


//==================================================

// //Q.1--------------------------------
// var decision=true;
// if (decision==true) {
//     console.log('You need rain cote.');
// } else {
//     console.log('no need to rain cote');
    
// }

// //Q.2--------------------------------
// var x=Number(prompt('Enter the vale of x:'));
// var y=Number(prompt('Enter the value of y:'));
// var y=3;
// if (x>0 && y>0) {
//     console.log('I Quadrant');
// } else if(x<0 && y>0){
//     console.log('II Quadrant');
// } else if(x<0 && y<0){
//     console.log('III Quadrant');
// } else if(x>0 && y<0){
//     console.log('IV Quadrant');
// } else if(x==0 & y==0){
//     console.log('Origin');
// } else if(x==0 && y!=0){
//     console.log('')
// } else if(x!=0 && y==0){
//     console.log('');
// } else{
//     console.log('Please Eneter a correct value.');
// }


// //Q.3----------------------------------------------------------------------
// var monthName=prompt('Enter the monthe name to get season name:');
// if (monthName=='september' || monthName=='octomber' || monthName=='november') {
//     console.log('Its autumn.');
// } else if (monthName=='december' || monthName=='january' || monthName=='february') {
//     console.log('Its winter.');
// } else if (monthName=='march' || monthName=='april' || monthName=='may') {
//     console.log('Its spring.');
// } else if (monthName=='june' || monthName=='july' || monthName=='august') {
//     console.log('Its summer.');
// }

//Q.3----------------------------------------------------------------------
// var num=2;
// for(var i=1; i<=10; i++){
//    console.log(i+'^'+num**i);   
// }

//Q.3----------------------------------------------------------------------
// var sum=0;
// for(var i=1; i<=100; i++){
//     if ((i%3==0 || i%5==0) && !(i%3==0 && i%5==0)){
//         sum+=i;
//     }
// }console.log(sum);

//----------------
// var name=null;
// console.log(typeof(null));//output: object

// console.log(true==false);

//!  for of loop: is a JavaScript iteration statement used to iterate over iterable      objects like arrays, strings, maps, sets, etc.
//! - It provides a more concise and readable syntax compared to traditional for loops, especially when working with arrays and other iterable objects.
//*syntax:
// // for (variable of iterable) {
// //     // code block to be executed for each element of the iterable
// // }

// var arr=[2,1,3,4,2,4,54,23];
// // for(var i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }
// for(x of arr){
//     console.log(x);
// }

//! Recursion: function calling it self.

//! Fibonacci series
// var a=1, b=2, c;
// console.log(`${a}\n${b}`);
// for (var i=1; i<=10; i++) {
//     c=a+b;
//     console.log(c);
//     a=b;
//     b=c
// }

//------------------------------------------------------
// localStorage.setItem('javaScript', 'reactJS');
// localStorage.getItem('FrontEnd-Internship');

//! this keyword
// //object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 3434,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person.fullName());

//----------------------------------------------------------------------
function msgButton() {
    console.log("Hello Techies!");
}




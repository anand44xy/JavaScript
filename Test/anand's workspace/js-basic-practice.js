// console.log( "I'm an external JS file" );
// var myName='Anand Siani';
// console.log(myName);
// console.log(typeof myName);

// var slkj=null;
// console.log(slkj);
// console.log(typeof slkj);

// // conver a string into number
// var even="2";
// console.log(typeof +even);
// console.log(typeof Number(even));

// // conver a number into string
// let str=101;
// console.log(typeof String(str));
// console.log(typeof (str + ""));

// var myName="";
// if (myName) {
//     console.log("This is truthy value.");
// } else {
//     console.log("This is falsy value.");
// }

// console.log(parseInt("2.9"));
// console.log(parseFloat('0023200.90'));

// sort numbers in Acending and Decending
// const numbers=[1,2,4,5,8,0,3, 4,6,9,7];

// // For Ascending Order
// const sortedNumbers = numbers.sort((a,b) => {
//     if (a>b) {
//         return 1;
//     } else if (b>a) {
//         return -1;
//     }
// });console.log(`Ascending order: [${sortedNumbers}]`);

// // For Descending Number
// const sortedNumbers= numbers.sort((a,b) => {
//     if (a>b) {
//         return -1;
//     } else {
//         return 1;
//     }
// });console.log(`Descending order: [${sortedNumbers}]`);


// let x=0.1;
// let y=0.2;
// let sum=x+y;
// console.log(sum.toFixed(2));
// let x=0.1;
// let y=0.2;
// let sum=x+y;
// console.log(sum);

// var kjd='5'+2;
// var jd=2;
// console.log(typeof(jd));

// --------------------------------
// var age=15;
// var hadDrivingLicense=true;
// console.log(age>= 18 && hadDrivingLicense);

//--- Ternary Operator--------------
// var condiateAge=19;
// var result= condiateAge>= 18 ? "Yes, you are eligible to Drive.": "NO, you are not eligible to drive.";
// console.log(result);

// let score=25;
// let result2=score>=60?"Congratulatio you passes.":"Sorry you failed";
// console.log(result2);
//==============================================

// console.log("20"+10+10)

//==================================
// var temp=-15;
// if (temp>30) {
//     console.log("Let's go to Beach. 🏖");
// } else if(temp >= 20 && temp <30){
//     console.log("Watch TV at Home. ☺");
// }else{
//     console.log("Kambal Odho or so jao. 😴")
// }
//========================================

// var age=17;
// var citizeshipSatus=true;
// var hadVoterID=true;
// if (age >=18 && citizeshipSatus==true && hadVoterID==true) {
//     console.log("You are eligible for vote.");
// } else if(age >= 18){
//     console.log("You are not eligible for vote.");
// }

//=========Nested if else=====================
// let userAge=18;
// let isCitizen=true;
// let isRegistered=false;

// if (userAge>=18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("You are eligble for vote")
//         } else {
//             console.log("Your are not eligible due to, Registaration status.")
//         }
//     } else {
//         console.log("Your are not eligible due to, Citizenship status.") 
//     }
// } else {
//     console.log("You are not eligible for vote.(Younger)")
// }

//=================Check a no. is even or odd===================
// var num=8;
// if (num % 2 == 0) {
//     console.log("Number is even.");
// } else {
//     console.log("Number is odd.");
// }

//===========check +ve, -ve & zero number===============
// var num= -20390;
// if (num==0) {
//     console.log("Number is Zero.");
// } else if (num>0) {
//     console.log("Number is positive.");
// }else{
//     console.log("Number is negative.");
// }

///=========Switch Statement========
// var day="Monday";
// switch (day) {
//     case "Monday": console.log("Today is monday.");
//         break;
//     case "Tuesday": console.log("Today is Tuesday.");
//         break;
//     case "Wednesday": console.log("Today is monday.");
//         break;
//     case "Thursday": console.log("Today is Thursday.");
//         break;

//     default: console.log("No condition match")
//         break;
// }

//==============while loop===============
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
//==============do-while loop===============
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)

//====================
// let usrInput;
// let positiveNumber;
// do{
//     usrInput=("Enter any positive number");
//     positiveNumber= parseFloat(usrInput);
// } while (isNaN(positiveNumber) || positiveNumber <0);
// console.log("You entered a valid positive number:", positiveNumber);

// ============================
// for(;;){
//     //It irerate at infinity
// }

//======== finding the sum of first 10 numbers =================
// var sum=0;
// for(var num=1; num<=10; num++){
//     var sum=sum+num;
// }
// console.log(sum);

//======== find prime number ======================================
// var num=11;
// var isPrime=true;
// for(var i=2; i<num; i++){
//     if (num%i==0) {
//         isPrime=false;
//         break;
// }
// }

// if (isPrime) {
//     console.log("Num is Prime.")
// } else {
//     console.log("Num is not Prime.")
// }

//===== Table of 5 =======================
//By using while loop
// var num = 1;
// while (num <= 10) {
//     console.log("5 * " + num + " = " + (5 * num));
//     num++;
// }

// By using for loop
// for (var i = 1; i <= 10; i++){
// // console.log("5 * " + i + " = " + 5 * i);
// console.log(`5 * ${i} = ${5*num}`);// Here we use Template Litrals of ES6(ECMA SECRIPT)
// // console.log(5 * i)
// }

//======== Check that a year is leap or not ======
// var year=2023;
// if (year%4==0 && year % 100 !=0 || year%400==0) {
//     console.log(year+", it's a leap year.");
// } else {
//     console.log(year+", it's not a leap year.");
// }

// ===== *Pattern =========================
// for(var i=1; i<=5; i++){
//     var pattern="";
//     for(var j=1; j<=i; j++){
//         pattern+= " *";
//     }
//     console.log(pattern) 
// }

//============ function ======================
// function greet() {
//     console.log("function is a block of reusable code.");
// }
// greet();//This is call function invocation

//==== Parameter & Argument=======
// function sum(a, b){
//     return a+b;
// }
// console.log(sum(5,5));
// //NOTE:- The value inside the functionName is call Parameter.
// //NOTE:-The value which is assign during function calling, that's called Argument.

//=========================
// function greet(name){
//     console.log("Hello, "+name+" Good going, keep it up! ");
// }
// greet("Anand");

//=======Function Expression============
// var result =function sum(a, b){
//     console.log(a + b);
// }
// result(232,909);

//====================
// function sum(a, b) {
//     return a+b;
// }
// var result= sum(5,5);
// // console.log(result);
// console.log("The sum of two numbers is: "+result);

//NOTE:- After the 'return' keyword, nothing is valid or executable because the compiler exits the function.

// IIFE: Immediately Invoked Function Expression
// (function (a,b) {
//     console.log(a+b);
// })(5, 10);

//====== Arrow function: Remove function and use fat arrow(=>) insted of function ===========
// const sum=function(a,b){
//     let result=`The sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
// };
// sum(5,5);
//---------------------------------------
// const sum=(a,b)=>{
//     let result=`The sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
// };
// sum(5,5);
//-----------------------------------------
// const sum=(a,b)=> console.log(`The sum of ${a} and ${b} is ${a+b}`);
// sum(5,5);

//======= Write a function to reverse a string ======================
// const isReverse = (str) =>{
//     for (let a = str.length - 1; a >= 0; a--) {
//         console.log(str[a]);
//     }
// }
// isReverse("Anand Saini");
//-----------------------------------
// const isReverse = (str) =>{
//     let reverse="";
//     for (let a = str.length - 1; a >= 0; a--) {
//         reverse=reverse+ str[a];
//     }
//     return reverse;
// }
// console.log(isReverse("Anand Saini"));
//NOTE:- Here lenght-1 is becasue of the lenght of a string is alwasy +1 of the actual lenght is we can't do this then in first it will gives us 'undifined'.

//============Write a funtion to chack a string Palindrome============
// const isPalindrome=(str) =>{
//     let reverse="";
//     for (let i =str.length-1 ; i >= 0; i--) {
//         reverse+= str[a];
//     }
//     if (str === reverse) {
//         return true;
//     } else {
//         return false;
//     }     
// } 
// console.log(isPalindrome("level"));
//--------------------- We make it more optimized or short----------
// const isPalindrome= str =>{
//     let reverse="";
//     for (let i =str.length-1; i >= 0; i--) {
//         reverse+=str[i];        
//     }
//     return str === reverse ? true: false; //⭐Conditional(ternary) Operator
// }
// console.log(isPalindrome("level"));

//============= Array:- Array is an object that repersents collection of smilar type of elements.===
//Create array using constructor---------
// let fruits= new Array('apple' ,'orange', 'banana');

// Create array using literal-----------
// let fruits=['Pinapple','apple', 'orange', 'banana'];
//different tupes to get last element of the array
// console.log(fruits[-2])
// console.log(fruits.at(-1));

//modify or update the arrays elements
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// fruits[2]= 'grapes';
// fruits[4]='mango';
// console.log(fruits)

// create a empty array----------
// let fruits= [];


//======= for of loop, also known as itrable: It gives the elements=========
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// for(let elements of fruits){
//     console.log(elements);
// }

//----------------traditional method-------
// for (let elements = 0; elements < fruits.length; elements++) {
//     console.log(fruits[elements]);
    
// }

//==== for in loop: It give index no. of the elements. NOTE:- here 'in' menas index====================
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// for(let elements in fruits){
//     console.log(elements);
// }
//----------------traditional method-------
// for (let elements = 0; elements < fruits.length; elements++) {
//     console.log(elements);   
// }

//============ forEach method =====================
// let fruits=['Pinapple','apple', 'orange', 'banana'];

// fruits.forEach((curElm, index, arr) => {
//     console.log(`${index} ${curElm}`);
//     // console.log(arr);
// });

//========== map ===================
// let fruits=['Pinapple','apple', 'orange', 'banana'];







//========== differnce b/w foreach & map =================

// ----- forEach ----------------------
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// const myForEachArr=fruits.forEach((curElm, index, arr) =>{
//       return `${curElm} ${index}`
// })
// console.log(myForEachArr);
// // NOTE:- We can't acces or return the code inside forEach body, but in case of map method we can do this.

//-----------map ------------
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// const myMapArr=fruits.map((curElm, index, arr) =>{
//     return `${curElm} ${index}`
// })
// console.log(myMapArr)

//========= push, pop, unshift, shift(CRUD operations on Array), splice =============
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// //---- push() method: add one or more element to in the last of the array-----
// console.log(fruits.push("grapes"));
// console.log(fruits);

// //---- pop() method: remove the last element form the array-----
// console.log(fruits.pop());
// console.log(fruits);

// //---- unshift() method: add one or more element to in the first of the array-----
// console.log(fruits.unshift("grapes"));
// console.log(fruits);

// //---- pop() method: remove the last element form the array-----
// console.log(fruits.shift());
// console.log(fruits);

//-------- splice() method: delete or add elements in the array --------- 
// let fruits=['Pinapple','apple', 'orange', 'banana'];
// fruits.splice(4,0, "mango");
// console.log(fruits);

//============ Searching in Array ===========

//---- indexof(), lastindexof() ----------
// let num =[1, 2, 3, 4, 5, 6, 5, 6, 6, 8, 9];
// const result=num.indexOf(6); // return the first index no. of an element
// const result=num.lastIndexOf(6); // return the last index no. of an element
//const result=num.includes(6); // check wheather an element is persent or not, return true or flase
// console.log(result);

//Q.1 add 10 in the last of the array(num)
// num.splice(num.length,0, 10);// by using splice() method
// num.push(10); //by using push() method

// Q.2 update 2 into 22 in num
// num.splice(1,1, 22);

// console.log(num);

//Q.3 select only 6 from num
// let value=6;
// let updatedCart = num.filter((currElm) =>{
//     return currElm == value;
// }) 
// console.log(updatedCart);//output: [6, 6, 6]

//Q.4 delete elements 6 and it's all duplicate also and return remianing elements
// let value=6;
// let updatedCart = num.filter((currElm) =>{
//     return currElm !== value;
// }) 
// console.log(updatedCart);//output: [1, 2, 3, 4 , 5, 5, 8, 9]




// -------------------- Map -----------------------------------------

// //Q.1 Use map to square each numbers and create a new array...
// const number=[1, 2, 3, 4, 5 , 6, 7];

// let result= number.map((currElm) => currElm* currElm);
// console.log(`Square of number is: ${result}`);


// //Q.2 Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// const fruits = ['pinapple', 'gavava', 'apple', 'grapes', 'ornage'];

// const result= fruits.map((curElm) => {
//     return curElm.toUpperCase();
// });console.log(result);

// /Q.3 Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
// const numbers=[1,2,3,4,4,5, 6, 7, 8, 9];
// const result= numbers.map((curElm) => {
//     if (curElm % 2 == 0) {
//         return curElm*curElm;
//     } else{}
// }).filter((curElm)=> curElm != undefined);//here remove undefined by filer method, undefined comed due to odd number square  

// console.log(result);

//Q.4 Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
// const names=['Pawan', 'Ravi', 'Vinod', 'Ajay', 'Amar' ];

// const prefixNames= names.map((curName) => `Mr.${curName}`);
// console.log(prefixNames);


// // give an example to reduce method...
// const productPrice=[1899, 1099, 4599, 999];

// const totalPrice= productPrice.reduce((accu, currEl) => {
//     return accu+currEl;
// });
// console.log(`Total price is: ${totalPrice}`);


// ---------------  Searching in String --------------
// indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax:  indexOf(searchString)
//          indexOf(searchString, position)

// let fruits=['pinapple', 'grapes', 'apple', 'orange', 'pinapple'];
// console.log(fruits.indexOf('pinapple'));

// lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax:  lastIndexOf(searchString)
//          lastIndexOf(searchString, position)

// console.log(fruits.lastIndexOf('pinapple'));

// search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
// Returns the index number where the first match is found. Returns -1 if no match is found.
// let text='Hello,  Techies welcome to WsCube Tech Jaipur';
// let result= text.search(/welcome/i);
// let matchresult= text.matchAll("Hello");
// console.log(matchresult);
// console.log(`Your search result is: ${matchresult}`);

// let result1= text.slice(-6); // returns string till -6 index from reverse
// let result2= text.substring(-6); // return complete string

// let result1= text.slice();//return complete string if we pass emtpy value
// let result2= text.substring();//return complete string if we pass emtpy value

// // result is same for al
// let result1= text.slice(1);
// let result2= text.substring(1);
// let result3= text.replace('H', '');

// console.log(result1);
// console.log(result2);
// console.log(result3);

//Q. Change Anand into Sandeep every where in message.
// let message='Hello Anand update your name Anand Saini';
//  let result=message.replaceAll('Anand', 'Sandeep');
//  console.log(result);

//--------- split() method --------------
// let address= "SH-52, Dhani Dheldi By Pass Bansur, Kotputali-Behror 301402";
// let result=address.split('').reverse(). join();
// console.log(result);

//-------- Maths ----------------

//⭐ Math.abs(): -return the absolute value.
// It tells that how far a number form 0.
// In simple way it convert -ve number into +ve Number.
// console.log(Math.abs(-20));

// //⭐ Genrate random number
// console.log(Math.round(Math.random()* 100));
// console.log((Math.random()* 100).toFixed(2));

//--------------------------------------------------
// for (let i = 0; i < 'Anand'.length; i++) {
//     console.log('Anand'.charCodeAt(i));
// }

// let str = 'Anand';
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
// }
// console.log(sum);


//========================= DOM =============================================

// //---- Searching in DOM -----------
// let findElementById= document.getElementById('heading1');
// console.log(findElementById.innerHTML);

// const findElementByClassName=document.getElementsByClassName('firstclass');
// console.log(findElementByClassName);


// ========= CRUD operation on Array================
// let months = ['Jan', 'march', 'April', 'June', 'July'];
// months.push('Dec');
// months.slice(1,1, 'March');

// console.log(months)

// const milliSec = new Date().getTime();
// console.log(milliSec);
// const dateFromSec = new Date(milliSec);
// console.log(dateFromSec);
// const currDate = new Date();
// console.log(currDate);
// const hour = currDate.getDate();
// console.log(hour);


//! .split() : A string can be converted to an array.
let text = "Hello";
const myArr = text.split("");

// text = "";
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

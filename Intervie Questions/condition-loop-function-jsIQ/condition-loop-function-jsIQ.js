//* ===============================
//* Interview Question 🧑‍💻
//* ===============================

//! What is the difference between == and === operators in JavaScript❓
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal. The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.

//!Q: Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓

// var score = 99;
// var result = score >= 60 ? "Pass" : "Fail";
// console.log(result);

//!Q.Write a javascript funtion to prints the letters 'a' through 'z' in the console
// ////console.log('a'.charCodeAt(0));//returns the Unicode of the character in a string.
// //// console.log('z'.charCodeAt(0));//returns the Unicode of the character in a string.
// //// console.log(String.fromCharCode(97,122));//converts Unicode values to characters.

// var result;
// for (var i = 97; i <= 122; i++) {
//    result += String.fromCharCode(i);
// }
// console.log(`${result}`);

//* ------------- Loop ----------------
//!Q. Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 19;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = true; // Assume false for not registered, true for registered
// //! Check eligibility using if...else statements with multiple conditions

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("you are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote (Younger)");
// }

//! Q: Write a program to check if a number is even or odd.
// var num = "7";
// if (num % 2 === 0) {
//   console.log("Num is even");
// } else {
//   console.log("Num is odd");
// }

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

// var num = 13;
// var isPrime = true;

// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("Num is prime");
// } else {
//   console.log("Num is not prime");
// }

//! 3: Write a program to check if a number is positive, negative, or zero.
// var num = -10;
// if (num === 0) {
//   console.log("NUm is zero");
// } else if (num > 0) {
//   console.log("NUm is positive ");
// } else {
//   console.log("NUm is negative ");
// }

//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

// var day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log("today is monday");
//     break;

//   case "Friday":
//     console.log("omg lets have party today");
//     break;

//   case "Sunday":
//     console.log("Lets go to movie");
//     break;

//   default:
//     console.log("no condition match");
// }

//! Q: let's create a table of 5
// var num = 1;
// while (num <= 10) {
    // console.log(`5 * ${num} = ${5 * num}`);
//   num++;
// }

//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.

// var year = 2020;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year, "it's a leap year");
// } else {
//   console.log(year, "it's not a leap year");
// }

//! Q: Drawing Patterns with Asterisks: 🧑‍💻

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

// for (var i = 1; i <= 5; i++) {
//   var pattern = "";
//   for (var j = 1; j <= i; j++) {
//     pattern = pattern + " *";
//   }
//   console.log(pattern);
// }

//* ----------------- function -----------------
//! Q. Write a function to find the sum of two numbers.
// function sum() {
//   var a = 15,
//     b = 10;
//   console.log(a + b);
// }
// // Calling the function
// sum();

//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".
// function greet(name) {
//   console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
// }

// greet("ram");
// greet("sita");

//! Q. Write a function to find the sum of two numbers with parameters.
// function sum(a, b) {
//   console.log(a + b);
// }
// // Calling the function
// sum(5, 10);
// sum(50, 10);

//! Q.A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var result = function sum(a, b) {
//   console.log(a + b);
// };

// result(10, 15);

//* Reverse a String:
//* Write a function to reverse a given string without using built-in reverse methods.
// var isReverse= (str)=>{
//     let reverse='';
//     for(let char=str.length -1; char>=0; char--){
//         reverse+=char[str];
//     }
    
// }
  
  //* Palindrome Check:
  //* Q. Create a function to determine if a given string is a palindrome (reads the same backward as forward).
  // radar , level, oyo
  // var isPalindrome = (str) => {
  //   let reverse = "";
  //   for (let char = str.length - 1; char >= 0; char--) {
  //     reverse = reverse + str[char];
  //   }
  //   //   if (str === reverse) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  
  //   return str === reverse ? true : false;
  // };
  
  // console.log(isPalindrome("level"));
//*Q. Write a function to count the number of vowels in a string.
// var countVowels=(str) => {
// var vowels='aeiou';
// let count=0;
// for(let char of str){
//     if (vowels.includes(char)) {
//         count++
//     }
// }
// return count;
// };
// console.log(countVowels(`Hey! Techies what's going onu`));


// //*Q. Write a funtion to check if all the vowels present in a string or not ?
// var vowelIsPresentOrNot=(str) =>{
//     var vowels='aeiou';
//     for(let char of vowels){
//         // console.log(char);
//         // console.log(str.includes(char));
//         if(!str.includes(char)){
//             return false
//         }
//     }
//     return true;
// };
// console.log(vowelIsPresentOrNot('My self Anand😊 Kumar Saini'));


// //*Q. Write a JavaScript function to check if the given sting is Pangram or not?
// var pangramChecker= (str) =>{
// let totalAlphabates='';
// for(let i=97; i<=122; i++){
//     totalAlphabates+=String.fromCharCode(i);
// }
// console.log(totalAlphabates);
// };
// console.log(pangramChecker('The quick brown fox jumps over the lazy dog.'));

//------------------- OR -----------------------------------------
// var pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");

//     var values = inputArr.filter((curElem) =>
//         curElem.charCodeAt() >= "a".charCodeAt() && curElem.charCodeAt() <= "z".charCodeAt()
//     );
//     return new Set(values).size === 26;
//   }; 
//   console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));

// //* Q.Reverse a String: Write a function to reverse a given string 
// //* without using built-in reverse methods.

// function reverseString(str) {
//     let revesed= '';
//     for(let i=str.length -1; i>=0; i--){
//         revesed+=str[i];
//     }
//     return revesed;
// }

// let inputString='Anand😊 Saini';
// console.log(reverseString(inputString));

//* Q.2: Palindrome Check: Create a function to //*determine if a given string 
//*is a palindrome (reads the same backward as //*forward).

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     var alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Compare original string with its reverse
//     for (let i = 0; i < alphanumericStr.length / 2; i++) {
//         if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }




//! ------------ Function ----------------------

//* Q: Write a function to sum all the elements of an array and return it
// function sumofArr(num) {
//   var sum=0;
//   for (var x of num) {
//     sum+=x;
//   }
//   return sum;
// }

// var arr=[2, 23,11, 43 , 334, 343, 90];
// var result=sumofArr(arr);
// console.log('Sum of given array is: '+result);

//* Genrate OTP 
// function otp() {
//     console.log(Math.floor(Math.random()*1000000));
// }
// otp();

//* Q: Find Factorial by using function
// function findFactorial(num, fact=1) {
//   fact*=num;
//   num--;
//   if (num!=0) {
//    return findFactorial(num, fact);
//   } else{
//     return fact;
//   }
// }
// console.log(findFactorial(4));

//* Q: Reverse an array by using function #forof_loop
// function revArr(num) {
//   var rev=[];
//   // for(var i=num.length-1; i>=0; i--){
//   //   rev.push(num[i]);
//   // }
//   for (var i of num) {
//     rev.push(i);
//   }
//   return rev;
// }
// var arr=[1,2, 3, 4, 5,6,7];
// console.log(revArr(arr));

//* Q: Write a function to create a new arry which contains only even numbers form the given arry & return it.
// function evenNumOnly(num) {
//   var evenNum=[];
//   for (var i of num) {
//     if (i%2==0) {
//       evenNum.push(i);
//     }
//   }
//   return evenNum;
// } 
// var arr=[24, 15, 8,11, 32, 19, 20, 87];
// console.log(evenNumOnly(arr));

//* Q: Write a function to seprate odd and even number in different arrays from a given array.
// function oddEvenNum(num) {
//   var evenNum = [], oddNum = [];
//   for (var i of num) {
//     if (i % 2 == 0) {
//       evenNum.push(i);
//     } else {
//       oddNum.push(i);
//     }
//   }
//   console.log(`Even Numbers: [${evenNum}]\nOdd Numbers: [${oddNum}]`);
// }
// var arr = [24, 15, 8, 11, 32, 19, 20, 87];
// oddEvenNum(arr);


//! ---------------- Fibonacci ---------------------------
// var a=1, b=2, c;
// console.log(`${a}\n${b}`);
// for (var i=1; i<=10; i++) {
//     c=a+b;
//     console.log(c);
//     a=b;
//     b=c
// }

//* Q: Create a Fibonacci series starting from a given number start and generating count number of elements.
// function fibonacci(start, count) {
//   var fiboSeries=[start];
//   var a= start;
//   var b= start==0 ? 1: 0;// Set b as 1 if start is 0, otherwise set it as 0

//   for (let i = 0; i<count; i++) {
//     var c=a+b;
//     fiboSeries.push(c);
//     a=b;
//     b=c;   
//   }
//   return fiboSeries;
// }
// console.log(fibonacci(3,10));



//! Class Test-02(02-05-2024) #function
//* Q1: Simulates a traffic light, displaying appropriate message using function('red', 'green', 'yellow')
// function trafficLight(color) {
//   if (color === 'red') {
//       return "STOP! The light is red.";
//   } else if (color === 'green') {
//       return "Go ahead! The light is green.";
//   } else if (color === 'yellow') {
//       return "Prepare to stop! The light is yellow.";
//   } else {
//       return "Invalid color. Please provide 'red', 'green', or 'yellow'.";
//   }
// }
// console.log(trafficLight('yellow'));

//* Q2: Add two numbers
// function sum(num1, num2) {
//   return num1+num2;
// }
// console.log(sum(10, 232));


//* Q3: Perform the arithmetic operation between the two numbers according to the given sign.
// function arithmeticOperation(num1, num2, sign) {
//   switch (sign) {
//     case '+':
//       return num1+num2;
//     case '-':
//       return num1-num2;
//     case '*':
//       return num1*num2;
//     case '/':
//       return num1/num2;
//     default:
//       return "Invalid sign. Please provide '+', '-', '*', or '/'.";
//   }
// }
// console.log(arithmeticOperation(4,8,'/'));


//* Q:4 Find largest number form an anrray.
// function largestNum(num) {
//   if (num.length==0) {
//     return 'Empty Array';
//   }
//   var largest=num[0]; // let the first element is the largest
//   for(var i=1; i<num.length; i++) {  
//     if (num[i]> largest) {
//       largest= num[i];
//     }
//     return largest;
//   }
// }
// var arr=[2, 4, 454, 6, 645, 334];
// console.log(`${largestNum(arr)} :is the largest number in the given  array`);

//* Q:5 Positive, Zero or Negative number checker using function.
// function numberChecker(num) {
//   if (num==0) {
//     return 'Number is Zero.'
//   } else if (num<0) {
//     return 'Number is negative.'
//   } else {
//     return 'Number is Positive.'
//   }
// }
// console.log(numberChecker(34));

//* Q:6 Create a function to merge two arrays into a single array.
// function mergeArray(arry1, array2) {
//   var mergedArr=[];
//   for (var element of arry1) {
//       mergedArr.push(element);    
//   }

//   for (var element of array2) {
//     mergedArr.push(element);
//   }
//   return mergedArr;
// }

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var mergedArray = mergeArray(arr1, arr2);
// console.log('Merged array:', mergedArray);

//! Another approach
// function mergeArray(array1, array2) {
//   return array1.concat(array2);
// }
// var arr1=[1, 23, 232, 232];
// var arr2=[1, 90, 22, 32];
// console.log(mergeArray(arr1, arr2));



//* Q:7 Create a function to remove a specified element from an array.
// function removeElement(array, element) {
//   var removedArr=[];
//   for (const index of array) {
//     if (index!= element) {
//       removedArr.push(index);
//     }
//   }
//   return removedArr;
// }
// var originalArray=[2, 24, 23,2, 19];
// var element= 2;
// console.log(removeElement(originalArray, element));

//* Q:8 Create a function to reverse an array.
// function reverseArray(inputArray) {
//   var reversedArray = [];
//   // for (var i = inputArray.length - 1; i >= 0; i--) {
//   //   reversedArray.push(inputArray[i]);
//   // }
//   for (const index of inputArray) {
//     reversedArray.unshift(index);
//   }
//   return reversedArray;
// }

// var array = [1, 2, 3, 4, 5];
// console.log(reverseArray(array));


//* Q:10 Create a function to create a new array which contains only even numbers.
// function filterEvenNumbers(inputArray) {
//   var evenNumbers = [];
//   for (const number of inputArray) {
//     if (number % 2 === 0) {
//       evenNumbers.push(number);
//     }
//   }
//   return evenNumbers;
// } 

// var array = [11, 15, 8, 99, 32, 19, 17, 87];
// console.log(filterEvenNumbers(array));


//* Q:10 Create a function to create a new array to find the positive number only in the array.
// function filterPositiveNumbers(inputArray) {
//   var positiveNumbers = [];
//   for (const item of inputArray) {
//     if (item > 0) {
//       positiveNumbers.push(item);
//     }    
//   }
//   return positiveNumbers;
// } 

// var array = [12, -33, 17, 0, 19, 0, 23, -11];
// console.log(filterPositiveNumbers(array));


//* Q:11 Create a function to create a new array to find the smallest number in a givnen array.
// function smallestNumber(inputArray) {
//   if (inputArray.length === 0) {
//     return 'Empty Array';
//   }
//   var smallest = inputArray[0];
//   for (const index of inputArray) {  
//     if (index < smallest) {
//       smallest = index;
//     }
//   }
//   return smallest;
// }

// var array = [2, 4, 454, 6, 645, 334];
// console.log(`${smallestNumber(array)} :is the smallest number in the given array`);


//* Q:12 Find the status of day wheather it is morining, afternoon, evining, or night by input of time using function.
//!----------- According Question ---------------
// function getStatusOfDay(time) {
//   if (time < 0 || time >24) {
//     return 'Invalid time';
//   } else if(time >=5 && time < 12){
//     return 'Morning';
//   } else if (time >=12 && time < 17) {
//     return 'Afternoon';
//   } else if (time >=17 && time < 21) {
//     return 'Evining';
//   } else{
//     return 'Night'
//   }
// }

// var currTime= new Date().getHours();// Get the current hour of the day
// console.log('Current time of the day:', getStatusOfDay(currTime));

function getStatusOfDay() {
  var now = new Date();
  var time = now.getHours(); // Get the current hour of the day

  if (time < 0 || time > 24) {
    return 'Invalid time';
  } else {
    var date = now.toLocaleDateString();
    var formattedTime = now.toLocaleTimeString();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });

    if (time >= 5 && time < 12) {
      return `Good Morning Anand😊 - ${date} ${formattedTime}, ${day}`;
    } else if (time >= 12 && time < 17) {
      return `Good Afternoon Anand😊 - ${date} ${formattedTime}, ${day}`;
    } else if (time >= 17 && time < 21) {
      return `Good Evening Anand😊 - ${date} ${formattedTime}, ${day}`;
    } else {
      return `Good Night Anand😊 - ${date} ${formattedTime}, ${day}`;
    }
  }
}
console.log(getStatusOfDay());


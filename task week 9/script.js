// let age = prompt("Enter your age");
// if(isNaN(age)){
//     console.log("Введите число!");
// }
// else if(age >= 18){
//     console.log("Доступ разрешен!");
// }
// else if(age >= 12 || age <= 17){
//     console.log("Доступ ограничен!")
// }else{
//     console.log("Доступ запрещен!");
// }   
/////////////////1

// const isPrime = (num) => {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//  console.log(isPrime(7)); 
///////////////////////2


// const factorial = (num) => {
//     let result = 1;
//     if (num > 0 ){
//         for (let i = 1; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }else{
//         return "Error! Factorial is not defined for negative numbers.";
//     }
// }

// console.log(factorial(-2));
////////////////3

// const generateSequence = (start, end) => {
//     for(let i = start; i <= end; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         }else if(i % 3 === 0){
//             console.log("Fizz")
//         }else if(i % 5 === 0){
//             console.log("Buzz")
//         }else{
//             console.log(i)
//         }
        
//     }
// }
// generateSequence(1,8);
//////////////4


// const triangeType = (a, b, c) => {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         console.log("Невозможный треугольник");
//         return;
//     }
//     else if( a === b && b === c && c === a){
//         console.log("Равносторонний");
//     }else if(a === b || a === c || b === c){
//         console.log("Равнобедренный");
//     }else{
//         console.log("Разносторонний");
//     }
// }

// triangeType(2,3,4);
/////////////////////5


// const calculator = () => {
//     let num1 = parseFloat(prompt("Введите первое число"));
//     let num2 = parseFloat(prompt("Введите второе число"));
//     let operator = prompt("Введите оператор: +, -, *, /");

//     if (isNaN(num1) || isNaN(num2)) {
//         alert("Ошибка: Вы ввели не число.");
//     } else {
//         let result;

//         if (operator === "+") {
//             result = num1 + num2;
//         } else if (operator === "-") {
//             result = num1 - num2;
//         } else if (operator === "*") {
//             result = num1 * num2;
//         } else if (operator === "/") {
//             if (num2 === 0) {
//                 alert("Ошибка: Деление на 0 недопустимо.");
//                 return;
//             }
//             result = num1 / num2;
//         } else {
//             alert("Ошибка: Неизвестный оператор.");
//             return;
//         }
//         alert("Результат: " + result);
//     }
// }

// calculator();
/////////////////6


// let max = 100;
// let min = 1;
// let randomNumber =  Math.round(Math.random() * (max - min) + min);
// let num;
// let count = 0;

// alert("I've chosen a random number between 1 and 100. Try to guess it.");
// while(num !== randomNumber){    
//     num =  parseInt(prompt("Enter number from 1 to 100"));
//     if (isNaN(num)) {
//         alert("Error: Please enter a valid number.");
//         continue; 
//     }
//     else if(randomNumber > num){
//         alert("Number is greater" + randomNumber);
//         count++;
//     }else if(randomNumber < num){
//         alert("Number is less" + randomNumber);
//         count++;
//     }else{
//         alert("You won!" + "number of attempt: " + count);
//     }

    
// }


//////////////////////7

// let Vowels = ["a", "e", "i", "o", "u"]
// let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

// const countVowelsAndConsonants = (input) => {
//     let countVowels = 0;
//     let countConsonants = 0;
//     input = input.toLowerCase();
    
//     for (let i = 0; i < input.length; i++) {
//         if(Vowels.includes(input[i])){
//             countVowels++;
//         }else if(consonants.includes(input[i])){
//             countConsonants++;
//         }
        
//     }
//     alert("Vowels: " + countVowels + " consonants: " + countConsonants);
// }

// const userInput = prompt("Enter Your Word")

// countVowelsAndConsonants(userInput);


////////////////8

// function countdown(n, useRecursion = false) {
//     if (useRecursion) {
//         if (n < 1) return; 
//         console.log(n);
//         countdown(n - 1, true); 
//     } else {
        
//         for (let i = n; i >= 1; i--) {
//             console.log(i);
//         }
//     }
// }

// countdown(5);   
// console.log();
// console.log("Recursive");
// countdown(5, true);

////////////////////////9

// const isPalindrome = (str) =>{
//     str = str.toLowerCase()
//     reverseStr = str.split('').reverse().join('');
//     return str === reverseStr;
// }
// const userInput = prompt("Enter str")
// const result = isPalindrome(userInput);
// alert(result ? "is Palindrom" : "Not Palindrom");

/////////////10
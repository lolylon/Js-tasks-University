// // alert("This is a simple alert!");
// // alert("Welcome to the JavaScript course!");
// // let userChoice = confirm("Are you sure you want to proceed?");
// // let isConfirmed = confirm("Do you want to continue?");
// // if (isConfirmed) {
// //     alert("You chose to continue!");
// // } else {
// //     alert("You canceled the operation.");
// // }

// let userName = prompt("What is your name?");    
// let userAge = prompt("Please enter your age:");
// if (userAge !== null) {
//     alert("You entered: " + userAge);
// } else {
//     alert("You canceled the input.");
// }


// let userAge = prompt("Please enter your age");
// if(userAge < 19){
//     alert("Sorry, you're too young to learn JavaScript.");
//     console.log("User is below 19 years old.");
// }else{
//     let isReady = confirm("Are you ready to learn JavaScript?");
//     if (isReady) {
//         let userName = prompt("Great! What's your name?");
//         if (userName !== null) {
//             alert("Welcome, " + userName + "! Let's get started.");
//             console.log(userName + " is ready to learn JavaScript.");
//         } else {
//             alert("No problem, feel free to come back anytime!");
//         }
//     } else {
//         alert("That's okay! Come back when you're ready.");
//     }
// }


// let userAge = prompt("Please enter your age:");
// if (userAge !== null) {
//     alert("You entered: " + userAge);
// } else {
//     alert("You canceled the input.");
// }


// let temperature = prompt("Insert Temperature")
// if (temperature > 90) {
//     console.warn("The temperature is unusually high.");
// }else{
//     alert("The temperature is below the minimum")
// }

// console.info("Starting the data processing sequence.");

// let total = 0;
// for (let i = 1; i <= 5; i++) {
//     total += i;
//     console.log("Current total after adding " + i + " is: " + total);
// }

// function calculateSum(a, b) {
//     console.log("Function calculateSum started");
//     let sum = a + b;
//     console.log("Sum: " + sum);
//     console.log("Function calculateSum ended");
//     return sum;
// }

// calculateSum(5,6);

// function calculateGrade(score) {
//     console.log("Function calculateGrade started.");
//     if (score >= 90) {
//         console.log("Score is A.");
//         return "A";
//     } else if (score >= 80) {
//         console.log("Score is B.");
//         return "B";
//     } else if (score >= 70) {
//         console.log("Score is C.");
//         return "C";
//     } else if (score >= 60) {
//         console.warn("Score is D. Needs improvement.");
//         return "D";
//     } else {
//         console.error("Score is F. Fail.");
//         return "F";
//     }

// }

// let grade = calculateGrade(85);
// console.log("Final grade: " + grade);


// function greet() {
//     var message = "Hello, World!";
//     console.log(message);  
// }
// greet();


// if (true) {
//     let age = 25;
//     console.log(age);  // Outputs 25
// }
// console.log(age);  


// let person = {
//     name: "John",
//     age: 30,
//     isStudent: false
// };

// if(person.isStudent == false){
//     console.log("Person is not a student.");
// }else{
//     console.log("Person is a student.");
// }
// console.log(person.name); 
// console.log(person.age);  

/// !1
const userBase = (nameUs, userName) => {
    alert(`Hello, ${nameUs}! Your username is ${userName}.`);
};

userBase(
    nameUs = prompt("What is your name"),
    userName = prompt("What is your username")
);


/// !2
let age = 25;
const birthYear = 1999;
var name = "John";
age = 35;
console.log(age, birthYear, name);


/// !3
let userName2 = prompt("Plese, Enter Your Name: ");
alert("Welcome, " +  userName2 + "!");
console.log("User " + userName2 + "has been greeted");


// const button = document.getElementById('MyButton')
// button.addEventListener('click', function(){
//     alert("Button was clicked");
// });
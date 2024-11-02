// let message = (age >= 18) ? "You are an adult." : "You are a minor.";
// console.log(message);
// for (let i = 0; i < 5; i++) {
//     console.log("Номер итерации: " + i);
// }


// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//         console.log(`Row: ${row}, Col: ${col}`);
//     }
// }


// let count = 0;
// while (count < 3) {
//     console.log("Count is: " + count);
//     count++;
// }


// let counter = 5;
// do {
//     console.log("Counter is: " + counter);
//     counter--;
// } while (counter > 0);


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;  // Exits loop when i is 5
//     }
//     console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue;  // Skips even numbers
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         continue;  // Skip multiples of 3
//     }
//     console.log(i);
// }


// let value = 0;
// do {
//     console.log("This will run at least once, value: " + value);
//     value++;
// } while (value < 1);

// let countdown = 5;
// while (countdown > 0) {
//     console.log("Countdown: " + countdown);
//     countdown--;
// }



// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Alice"));  


// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));  


// function multiply(x, y) {
//     return x * y;
// }

// let result = multiply(4, 5);
// console.log(result);  

// let sayHello = function(name) {
//     return "Hello, " + name;
// };

// console.log(sayHello("Bob"));  


// const add = (a, b) => a + b;
// console.log(add(3, 7));

// const greet = name => "Hello, " + name;
// console.log(greet("Alice"));  


// function exampleFunction() {
//     let localVar = "I am local";
//     console.log(localVar);
// }

// exampleFunction();  // Outputs: I am local
// `console.log(localVar); ` 



// function greet(name = "Guest") {
//     return "Hello, " + name;
// }

// console.log(greet());  // Outputs: Hello, Guest
// console.log(greet("Alice"));  


// function applyOperation(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(applyOperation(5, 10, add));  


setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);

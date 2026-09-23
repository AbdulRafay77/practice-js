// Q.1
// class Solve {
//   hasDuplicate(nums) {
//     const seen = new Set();

//     for (let num of nums) {
//       if (seen.has(num)) {
//         return true;
//       }

//       seen.add(num);
//     }

//     return false;
//   }
// }

// const solution = new Solve();
// console.log(solution.hasDuplicate([1,2,3,3]));
// console.log(solution.hasDuplicate([1,2,3,4]));

// Q.2





// const fruits = ["apple", "banana", "orange"];
// let fr = JSON.stringify(fruits);
// let flen = fruits.length;
// let text = "<ul>";
// for (let i = 0; i < flen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// fruits.push("mango");

// fruits.push("grape","avacado");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.unshift("mango");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// fruits.push("mango");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("grape");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function(num) {
//     console.log("helo", num);
// });

// const doubled = numbers.map(num => {
//     return num * 2;
// });

// console.log(doubled);

// const numbers = [10, 15, 20, 25, 30, 69];

// const result = numbers.filter(num => num > 20);

// console.log(result);

// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Ahmed", age: 22 },
//     { name: "Rafay", age: 25 }
// ];

// const adults = users.filter(user => user.age >= 18);
// console.log(adults);

// const numbers = [10, 15, 20, 25, 30, 69];

// const result = numbers.find(num => num > 95);
// console.log(result);

// const fruits = ["apple", "banana", "orange"];

// console.log(fruits.includes("avadaco"));

// const numbers = [10, 15, 20, 25, 30, 69];

// const result = numbers.every(num => num > 9);
// console.log(result);

// const names = ["Rafay", "Ali", "Ahmed"];

// names.sort();
// console.log(names);

// const numbers = [10, 2, 30, 5];

// numbers.sort((a,b) => b - a);

// console.log(numbers);

// const numbers = [10, 15, 20, 25, 30, 69];

// numbers.forEach(function(num) {
//   console.log(num);
// });

// const doubled = numbers.map(num => {
//   return num * 2
// })
// console.log(doubled);

// const greater = numbers.filter(num => num > 15);
// console.log(greater);

// const firstNumber = numbers.find(num => num > 18);
// console.log(firstNumber);

// console.log(numbers.includes(25));

// const someNum = numbers.some(num => num > 25);
// console.log(someNum);

// const everyNum = numbers.every(num => num > 0);
// console.log(everyNum);

// const total = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);
// // console.log(total);

// function add(a,b) {
//   return a + b
// };
// console.log(add(1,2));

// function checkNumber(num){
//   if (num % 2 === 0){
//     return "number is even";
//   }
//   return "odd";
// }

// console.log(checkNumber(2));

// function addHello(name){
//   console.log("hello", name);
// }
// addHello("Rafay");

// const arrowAdd = (a, b) => {
//   return a + b;
// };
// console.log(arrowAdd(2,3));

// function ran(num, opt){
//   return opt(num);
// }

// const res = ran(2, num => num + 6);
// console.log(res);

// function greet() {
//     const message = "Hello";
    
//     console.log(message);
// }

// greet();

// console.log(message);

// const x = 10;

// function test() {
//     const x = 20;
    
//     console.log(x);
// }

// test();

// console.log(x);

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);

// function outer() {
//     const name = "Rafay";
    
//     function inner() {
//         console.log(name);
//     }

//     inner();
// }

// outer();
// function outer() {
//     const name = "Rafay";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }
// const myFunction = outer();

// myFunction();

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// const myCounter = counter();

// myCounter();
// myCounter();
// myCounter();

// const user = {
//     name: "Rafay",
//     age: 25,
//     role: "Developer"
// };

// console.log(user.age);
// console.log(user.role);
// console.log(user.name);

// const user = {
//     name: "Rafay"
// };

// const { name, age = 25 } = user;

// console.log(age);

// const fruits = ["apple", "banana"];

// const moreFruits = [...fruits, "orange"];

// console.log(moreFruits);

// const person = {
//   name: "Rafay",
//   age: 25,
//   city: "Karachi"
// };

// // 1. Destructuring
// const { name, age } = person;

// console.log(name);
// console.log(age);

// // 2. Spread + update
// const updatedPerson = {
//   ...person,
//   age: 26
// };

// console.log(updatedPerson);

// // 3. Array destructuring + rest
// const numbers = [10, 20, 30, 40, 50];

// const [first, ...rest] = numbers;

// console.log(first);
// console.log(rest);

// // 4. Spread
// const updated = [...numbers, 60];

// console.log(updated);

// // 5. Rest in function
// function any(...numbers) {
//   console.log(numbers);
// }

// any(1, 2, 3, 4);


// function greet(name, callback){
//   console.log("hello " + name);
//   callback();
// };

// function finished(){
//   console.log("Done[]][[]][][]");
// };

// greet("rafay", finished);

// function calculate(a, b, callback){
//   const result = a + b;
//   return callback(result);
// }

// const result = calculate(10,5, result => result * 2);
// console.log(result);

// // 1
// function greet(name, callback){
//   console.log("Hello "+ name);
//   callback()
// }

// function wel(){
//   console.log("Welcome to JavaScript");
// }

// greet("Rafay", wel);

// // 2
// function operate(a, b, operation){
//   return operation(a, b);
// }

// const add = operate(10, 5, (a, b) => a + b);
// console.log(add);
// const sub = operate(10, 5, (a, b) => a - b);
// console.log(sub);

// // 3
// const numbers = [1,2,3,4];
// numbers.map(num => num * 3);
// console.log(numbers);
// // this multiply every number in array numbers by 3 ====> [3,6,9,12]
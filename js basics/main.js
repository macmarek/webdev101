// alert("hello");

//console
console.log("hello world");
//console.error("hello world");
console.warn("hello world");

//***********************variables and data types
//var, let, const (let, const are block scoped)

let amount = 30;
amount = 31;

const amount2 = 30;
//amount2 = 31; //error

// data types

// String, Number, Boolean, Null, Undefined, Symbol (ES6)

const name = "Marek";
const age = 36;
const rating = 4.5;
const isJsFun = true;
//const x = null;
const yy = undefined;
let z; //also undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isJsFun);
console.log(typeof z);

//concatenation
console.log("My name is " + name + " and I am " + age);
//Template strings
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//string methods...
const s = "Hello World !";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.split(""));

//comment

//****************Arrays - variables that hold multiple values (that can be accessed by index)

const numbers = new Array(1, 2, 3, 4, 5);

const fruits = ["apples", "oranges", "pears"];

console.log(fruits);

//* js is not statically types (typescript)

console.log(fruits[1]); //arrays are 0 based

fruits[3] = "grapes";

fruits.push("mangos");
console.log(fruits);

fruits.unshift("strawberries");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.indexOf("oranges"));

// *************** object literals

const person = {
  firstName: "Marek",
  lastName: "Czarnecki",
  age: 36,
  hobbies: ["sport", "movies", "javscript"],
  address: {
    street: "Wesoła 34",
    city: "Gdańsk",
    country: "Poland"
  }
};

console.log(person);
console.log(person.age);

console.log(person.hobbies[1]); //quiz

//destructuring (ES6 - new feature)
const { firstName, lastName } = person;
console.log(firstName);

//add property
person.email = "marek@test.pl";
console.log(person);

//array of objects
const todos = [
  {
    id: 1,
    text: "Wykonać zadanie",
    isCompleted: true
  },
  {
    id: 2,
    text: "Wykonać zadanie 2",
    isCompleted: true
  },
  {
    id: 3,
    text: "Wykonać zadanie 3",
    isCompleted: false
  }
];

console.log(todos);
console.log(todos[1].text);

//JSON - similar to object literals - pokazac json formatter

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//*********************** loops */

for (let i = 0; i < 10; i++) {
  console.log("Number " + i);
}

let i = 0;
while (i < 10) {
  console.log("While Number " + i);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.text);
}

//high order array methods
//forEach, map, filer

todos.forEach(function(todo) {
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompletedAndMapped = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });

console.log(todoCompletedAndMapped); //func programming

//*********************** conditionals **********/

let x = 10;

if (x == 10) {
  console.log("x is 10");
}

//wspomniec o == vs ===

const y = "10";

if (y === 10) {
  console.log("y is 10");
} else {
  console.log("y is not 10");
}

// --------
let a = 6;
let b = 11;

if (a > 5 && b > 10) {
  console.log("voila");
}

// ---------

x = 11;
const color = x > 10 ? "red" : "blue";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

// ***************** functions *********/

function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(5, 4);

//arrow function

const addNums2 = (num1 = 1, num2 = 1) => {
  num1 + num2; //return not needed
};

console.log(addNums2(5, 4));

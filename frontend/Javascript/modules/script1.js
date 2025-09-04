//! default imports
// import oil from "./script2.js"
// console.log(oil);

// let [x, y, z, , , , , , , , , , , ,100] = oil

// let {gasoline} = oil
// console.log(gasoline);

//? ======================

//! when we import the data which is exported as default, we can import it with any name
// import bharatPetrolium from "./script2.js"
// import default from './script2';
// console.log(bharatPetrolium);




//! ======================
//! named imports

//? if export is named then while importing we must import it with the same name and within the { } braces 

// import { petrol , diesel, gasoline } from "./script2.js";
// console.log(`petrol - ${petrol}`);


//! ===================================
//? Create a file math.js with a function add(a, b) and export it. Import it into main.js and log the result of add(5, 3).

// import  {add} from "./script2.js"
// console.log(add);

// console.log(add(20, 30));

//? Create a greetings.js file with a default export function sayHello(name). Import it in app.js and call it with your name.

// import anyFunc from "./script2.js"
// console.log(anyFunc("Prasad"));


//? Create a file student.js with a default export object { name: "Alex", age: 21 } and a named export function getStudentName. Import both in main.js.
// import student,  {getStudentName}  from "./script2.js"
// console.log(student);
// // getStudentName(student)
// getStudentName.call(student)


//?Export a default function greet() and a named function bye() from messages.js. Import them in main.js and call both.


// import greet, {bye} from "./script2.js";
// greet()
// bye()


//? Make a car.js file that exports class Car. Import it in main.js and create a new Car object.

import Car from "./script2.js"
let car = new Car()
console.log(car);

// let petrol = "100 barels";
// let diesel = "200 barels";
// let gasoline = "50 barels";

//! default exports

//! default export can be achieved only once per file
// export default petrol;
// export default diesel;
// export default gasoline;
//! if key and value looks the same just write the values, js will handle it
// let oil = {petrol,diesel,gasoline}
// export default oil;
//! its not recomended to use array for exports because it can cause difficulties while importing and destructuring
// let oil = [petrol, diesel, gasoline]
// export default oil;
// export default {petrol, diesel, gasoline}
// let oil = {petrol, diesel, gasoline}
//  export default oil

//! ======================
//! named exports

// export let petrol = "100 barels";
// export let diesel = "200 barels";
// export let gasoline = "50 barels";
//? you can achieve multiple exports from same file means we can write export keyword multiple times.

//! ===================================
//? Create a file math.js with a function add(a, b) and export it. Import it into main.js and log the result of add(5, 3).

// export let add = (a, b) => {
//   return a + b;
// };

//? Create a greetings.js file with a default export function sayHello(name). Import it in app.js and call it with your name.

// let sayHello = (name)=>{
//     return name
// }
// export default sayHello

//? Create a file student.js with a default export object { name: "Alex", age: 21 } and a named export function getStudentName. Import both in main.js.

// export let getStudentName =function (){
//     console.log(this.name);
// }

// export default { name: "Alex", age: 21 }

//?Export a default function greet() and a named function bye() from messages.js. Import them in main.js and call both.

// let greet = () => {
//   console.log("Greet");
// };
// export let bye = () => {
//   console.log("Bye");
// };

// export default greet


//? Make a car.js file that exports class Car. Import it in main.js and create a new Car object.


class Car{

}
export default Car
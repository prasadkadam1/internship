//! OBJECTS
//? objects are realtime entities which has properties and behaviour

// let obj = {};
// console.log(typeof obj);

// let car = {
//     price : 9878768,
//     color : "white",
//     type : "SUV",
//     brand : "BMW",
//     cylenderType : "4 cylender",
//     average : "20kmpl",
//     engineType : "Petrol",
//     topSpeed : "350 km/hr",
//     CC : "2000",
//     drive : ()=>{
//         console.log("user can drive it");
//         return "hello"
//     },
//     transport : function () {
//         console.log("user can transport the goods");
//     }
// }
// console.log(car.drive());
// car.drive()

// let phone = {
//   storage: "128gb",
//   brand: "Apple",
//   ram: "16bg",
//   battery: "5000mAh",
//   color: "black",
//   processor: "octacore",
//   displayType: "Amoled",
//   camera: "108mp",
//   weight: "300gm",
//   price: 50000,
//   simSlots: 2,
//   network : "5g",
// };

// console.log("hello");
// let myConsole = {
//   log: (whatToPrint) => {
//     console.log(whatToPrint);
//   },
// };

// myConsole.log("hello")

// console.log(document);
// console.log(window);

//! CREATE
//? how to create an object?
// todo Object literal way
// let person = {
//     name : "tinku",
//     age : 23,
//     walk : ()=>{
//         console.log("person can walk");
//     }
// }
// todo creating an object using object constructor and new keyword
// let newObj = new Object() 
// console.log(newObj);
// newObj.name = "tinku"
// console.log(newObj);


//! READ
//? how to access properties
// person.walk()
// console.log(person.name);
//! UPDATE
//? how to modify an object?
// person.walk = ()=>{
//     console.log("another walk");
// }
// person.walk()
// person.age1  = 24
// console.log(person.age);
//!DELETE
//? how to remove properties from object
// delete person.age
// delete person.walk
// console.log(person);

// let person = {
//   name: "tinku",
//   age: 23,
//   walk: () => {
//     console.log("person can walk");
//   },
// };
// console.log(Object.keys(person)); //? returns all the key only into an array
// console.log(Object.values(person)); //? returns all the values only into an array
// console.log(Object.entries(person)); //? returns all the key-values into an array


// let obj = { 
//     name : "Tinku", 
//     age : 23
// }
//!shallow copy 
// let x = obj //! copy is pointing towards the same address of main object means both points towards the same address, if you are updating any of them, both will get updated
// obj.name = "Rinku"
// console.log(x);
// x.age = 30
// console.log(obj);

















// color : red
// flat no 7, street, area, village, city, state, pincode.
// color : peach
// longitude and latitude (735869.09576.09576, 05769.98576.89756)





let jsObj = {
    name : "Tinku", 
    age :23
}
let jsonObj = JSON.stringify(jsObj)
console.log(jsObj);
console.log(jsonObj);

//! JSON.stringify() ? 
//! JSON.parse() ?

// let jsonObj = {
//     "name" : "Tinku", 
//     "age" :23
// }
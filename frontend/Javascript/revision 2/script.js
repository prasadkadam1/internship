// let student1 = {
//   name: "Tinku",
//   age: 23,
//   add: "Pune",
// //   func: function () {
// //     console.log(
// //       `Student name is ${this.name}, age is ${this.age} and lives in ${this.add}`
// //     );
// //   },
// };

// let student2 = {
//   name: "Rinku",
//   age: 23,
//   add: "Pune",
// //   func: function () {
// //     console.log(
// //       `Student name is ${this.name}, age is ${this.age} and lives in ${this.add}`
// //     );
// //   },
// };
// let student3 = {
//   name: "Minku",
//   age: 23,
//   add: "Pune",
// //   func: function () {
// //     console.log(
// //       `Student name is ${this.name}, age is ${this.age} and lives in ${this.add}`
// //     );
// //   },
// };

// let func = function (q, col) {
//   console.log(
//     `Student name is ${this.name}, age is ${this.age} and lives in ${this.add}`
//   );
// };
// func.call(student1, "BE", "NMIT");
// func.apply(student2 , ["BE", "NMIT"]);
// let bfunc = func.bind(student3, "BE", "NMIT");
// bfunc()

// let num = [10, 20, 30, 40]
// num.map((val)=>{
//     console.log(val+=100); // 110, 120, 130, 140
// })

// let func = (a, b) => {
//   return a+b;
// };
// let sum = func(100, 200);
// console.log(sum);

// console.log(Math);
// console.log(Math.abs(-100.10000));
// console.log(Math.cbrt(125)); 5*5*5
// console.log(Math.ceil(10.00001));
// console.log(Math.floor(10.99999));
// console.log(Math.round(10.5));
// console.log(Math.ceil(Math.random()*100000));
// console.log(Math.());

// let p = new Promise((x, y)=>{
//   x("Hello")
// })
// console.log(p);
// p.then((str)=>{console.log(str)})
// p.catch(()=>{})/

// fetch("https://api.github.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// let fetching = async () => {
//   let respObj = await fetch("https://api.github.com/users");
//   let data = await respObj.json()
//   console.log(data);
// };
// fetching()

// let items = [250, 645, 300, 900, 50];
// let discItems = items.map((val) => {
//   return val - (val * 0.1);
// });

// console.log(discItems);

console.log("tinku gharun nighala");
try {
  console.log(a);
} catch (error) {
  console.log(error);
} finally {
  console.log("Tinku tinki chya ghari pohachla");
}

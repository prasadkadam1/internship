// let date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// let months = ['jan', "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
// console.log(months[date.getMonth()]);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let nums = [45, 387, 347, 238, 375, 237, 239, 45, 387, 347, 238, 375, 237, 239];

//! math functions
// console.log( Math.ceil(99.0001));
// console.log(Math.floor(10.999));
// console.log(Math.round(10.4));
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));
// console.log(Math.round(Math.random()*10000));

//! random OTP Generator
// let no = 44;
// let randomNo = Math.ceil(Math.random()*10)
// console.log(Number(no.toString().padEnd(4, `${randomNo}`)));

// console.log(Math.abs(-20.20));
// console.log(Math.cbrt(27));
// console.log(Math.sqrt(16));
// console.log(Math.pow(5, 3));

// let str = "     hello world       ";

// let obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// console.log(obj);
// obj.info = function () {
//  console.log(`my name is ${this.name}, age is ${this.age} and i live in ${this.city}`);
// };
// console.log(obj);

// obj.info()

// let str = "Bhopal"
// console.log(str.replace('Bh', "G"));

let nums = [38, 47, 47, 29, 47, 56, 40];
let x = [];
for (let i = 0; i < nums.length; i++) {
  if (!x.includes(nums[i])) {
    x.push(nums[i]);
  }
}
console.log(x);


// let x = nums.filter((val)=>{
//     return val> 50
// })
// console.log(x);
// let y = x.reduce((acc, val)=>{
//     return acc+=val
// })
// console.log(y);

// let obj = {
//     age1 : 34,
//     age2 : 23,
//     age3 : 33,
//     age4 : 25,
//     age5 : 20,
// }
// let x = Object.values(obj)
// console.log(x);
// let y = x.reduce((acc, val)=>{
//     return acc+=val
// })
// console.log(y);

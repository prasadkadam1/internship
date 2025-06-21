//! setTimeout
// setTimeout(() => {
//   console.log("5 sec done");
// }, 5000);

//! setInterval
// let n = 0;
// let timer = setInterval(() => {
//   console.log("1 sec done");
//   n++;
//   if (n == 3) {
//     clearInterval(timer);
//   }
// }, 1000);

//! promises
//? it is an object.
//? it is used to handle asynchronous tasks in js.
//? promises are returned internally we just have to handle it.
//? promise can be in pending/resolve(fullfilled)/reject state

// let gift = "Iphone";
// let p1 = new Promise((resolve, reject) => {
//   if (gift == "Iphone") {
//     resolve({stream : "readableStream" });
//   } else {
//     reject("breakup");
//   }
// });
// console.log(p1);
// p1.then((resObj)=>{console.log(resObj)})
// p1.catch((msg)=>{console.log(msg)})

// let hof = (res) => {
//   res("msg");
// };
// hof((x) => {
//   console.log(x);
// });

// let p = fetch("https://dummyjson.com/products");
// console.log(p);
// let newPromise = p.then((res) => {
//   console.log(res);
//   // console.log(res.json());
//   return res.json();
// });
// console.log(newPromise);
// newPromise.then((data)=>{console.log(data)})

// p.catch((res) => {
//   console.log(res);
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // console.log(data);
//     data.map((obj) => {
//       console.log(obj.body);
//     });
//   });

//! https://jsonplaceholder.typicode.com/posts
//! https://jsonplaceholder.typicode.com/users

// let box = document.querySelector("#box");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.map((user) => {
//       let heading = document.createElement("h1");
//       heading.innerText = user.address.zipcode;
//       box.append(heading);
//       console.log(user.address.zipcode);
//     });
//   }).catch((err)=>{
//     console.log(err);
//   })

//! async and await
// console.log("start");
// let fetching = async () => {
//   console.log("async func");
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);
//   let data = await res.json();
//   console.log(data);
//   data.map((val)=>{
//     console.log(val.name);
//   })
// };
// fetching();
// console.log("end");

//! callback hell ?
//? It is the unexpected scenario where you get stucked in between multiple nested callback functions.
//? to overcome with CBH promises are introduced. and to simplify the syntax of promises, async/await are used

// let getUsesData = (cbf) => {
//   cbf((getOrderDates) => {
//     getOrderDates((getOrderAmt)=>{
//       getOrderAmt((confirmOrder)=>{
//         confirmOrder(()=>{})
//       })
//     });
//   });
// };
// getUsesData((getOrder) => {
//   getOrder((getOrderId) => {
//     getOrderId((getOrderAdd)=>{
//       getOrderAdd((confirmation)=>{
//         confirmation()
//       })
//     })
//   });
// });

// let cityName = prompt("enter ur city");
// let fetchWeather = async () => {
//   let res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=12a8706d052c4b8d12686a30a9542686`
//   );
//   console.log(res);
//   let data = await res.json()
//   console.log(data);
// };
// fetchWeather();

//! Date Object ?
// let { body } = document;
// let heading = document.createElement("h1");
// setInterval(() => {
//   let date = new Date();
//   heading.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//   body.appendChild(heading)
// }, 1000);

// let d = new Date();
// console.log(d.getDay());
// ["j", "f", "m", "a", "m", "j", "j"];

// switch (d.getDay()) {
//   case 0:
//     console.log("Sun");

//     break;
//     case 1:
//     console.log("Mon");

//     break;
//     case 2:
//     console.log("Tue");

//     break;

//     case 3:
//     console.log("Wed");

//     break;
//     case 4:
//     console.log("Thu");

//     break;
//     case 5:
//     console.log("Fri");

//     break;
//     case 6:
//     console.log("Sat");

//     break;
//   default:
//     break;
// }

// console.log(d.getFullYear());

// let epochInSeconds  = d.getTime()
// console.log(epochInSeconds);

// let date = new Date(epochInSeconds * 1000)

// console.log(date.toLocaleString());
// let d = new Date();
// console.log(d);

// let p = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(p);
// let p2 = p.then((resObj) => {
//   console.log(resObj);
//   return resObj.json();
// });
// p2.then((data) => {
//   console.log(data);
// });
// p.catch((err) => {
//   console.log(err);
// });

// let func = async () => {
//   let resObj = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(resObj);
//   let data = await resObj.json();
//   console.log(data);
// };
// func();

// let f1 = () => {
//   let a = 10;
//   let f2 = () => {
//     console.log(a);
//   };
//   return f2;
// };
// let f2Ret = f1();
// f2Ret()

// let f1 = ()=>"hello"
// let val =  f1()
// console.log(val);

// let demo = function () {
//     console.log("demo");
// }
// demo();
// (function(){
//     console.log("iife");   
// })()






let f1 = (x)=>{
x()
}
let f2 = ()=>{}
f1(f2)
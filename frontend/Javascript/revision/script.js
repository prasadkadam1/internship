// console.log("start");
// setTimeout(() => {
//   console.log("Settimetout");
// }, 0);
// let p = new Promise((res, rej) => {
//   let a = true;
//   if (a) {
//     res("Prmoise Resolved");
//   } else {
//     rej("Promise Rejected");
//   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise handeling done");
//   });
// let eventFunc = () => {
//   console.log("event func");
// };

// let p = fetch("https://api.github.com/users")
// console.log(p);
// let data = p.then((res)=>{return res.json()})
// p.catch((err)=>{console.log(err)}).finally(()=>{})
// data.then((res)=>{console.log(res)}).catch(()=>{}).finally(()=>{})

// let fetching =  async () => {
//   console.log("hello");
//   let data = await fetch("https://api.github.com/users");
//   data = await  data.json();
//   console.log(data);
// };
// fetching();

// console.log("end");

//! Gaurav => 1,31,14,20,28,3
//! Ayush 1 , 31 , 14 , 20 , 28 , 3 , 23
//! Prathamesh 1,31,14,20,3,23,28
//! Tejas 1,31,14,20,28,23
//! Shravani 1,31,14,20,28,23
//! Prasad 1, 31, 14, 20, 28, 3, 23
// 1, 31, 14, 20, 3, 28, 23

let f1 = (f2) => {
  f2((f4) => {
    f4((f6) => {
      f6();
    });
  });
};

f1((f3) => {
  f3((f5) => {
    f5(() => {
      console.log("nested output");
    });
  });
});

// let obj = {
//     name : "Tinku",
//     age : 23,
//     add : "Pune",
//     qf : "BE"
// }
// // let { ...x} = obj
// // console.log(x);
// let newObj = { name : "Tinku",
//     age : 23,
//     add : "Pune",
//     qf : "BE"}
// console.log(newObj);

// let productNames = ["Keyboard", "Mouse", "Hard Disc", "SSD"]

// let rootDivEle = document.getElementById("root");
// let allMyDiv = document.querySelectorAll("#root");
// console.log(allMyDiv[3]);
// for (let i = 0; i < allMyDiv.length; i++) {
//   console.log(allMyDiv[i]);
//   allMyDiv[i].innerText = productNames[i]
//   allMyDiv[i].style.background = "gray"
//   allMyDiv[i].style.width = "20vw"
//   allMyDiv[i].style.height = "30vh"
//   allMyDiv[i].style.padding = "30px"
//   allMyDiv[i].style.margin = "30px"
// }




let obj = {
    
}

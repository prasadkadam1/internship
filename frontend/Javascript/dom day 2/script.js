// let x = document.getElementById('box')
// console.log(x);
// x.innerText = "Hello"
// x.onclick = ()=>{
//     console.log("you clicked a div");
//     x.style.backgroundColor ="red"
// }
// x.ondblclick = ()=>{
//     console.log("you dbl clicked a div");
//     x.style.backgroundColor =""
// }
// x.innerText = "hello" //! used to add text inside the element.

// let x = document.querySelector("#box");
// let CartItems = 0
// x.innerHTML = `<h1>CartItems</h1>
// <p>${CartItems}</p>
// `;
// let addToCart = () => {
//     CartItems+=1
//   x.innerHTML = `
//   <h1>CartItems</h1>
//   <p>${CartItems}</p>`;
// };
// =========================
// let div = document.querySelector("#box")
// let heading1 = document.createElement('h1')
// let heading2 = document.createElement('h1')
// heading1.innerText = "Hello1"
// heading2.innerText = "Hello2"

// div.appendChild(heading1, heading2) //! can append only one element
// div.append(heading1, heading2)
// //! append method can append n no of elements

// ===============================

// let div = document.getElementById("root");
// let cartItems = 0;
// let heading = document.createElement('h1')
// let para = document.createElement('p')
// heading.innerText = "Cart Items"
// para.innerText = cartItems
// div.append(heading, para)
// let addToCart = () => {
//   para.innerText = cartItems+=1
// };


let div = document.getElementById('root')
// div.setAttribute('class', 'divClass')
// div.setAttribute('title', 'i am div')
// console.log(div);
// let img = document.createElement('img')
// img.setAttribute('src', "https://img.freepik.com/free-photo/sailboats-sailing-through-stone-archway-peaceful-sea_23-2151992958.jpg?uid=R130737081&ga=GA1.1.204960579.1750253966&w=740")
// img.setAttribute('width', "600px")
// div.append(img) 
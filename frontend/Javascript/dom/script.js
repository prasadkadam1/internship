
// console.log(document);
//! using id. (single element at a time will be targeted) 
let p1 = document.getElementById("Gaurav")
console.log(p1);
//? here we will get an object which will have all the attriubutes that can be used with respective element
// p1.innerText = "Gaurav"


// ==============

//! using class. (multiple elements will be targeted at a time and a collection of elements will be returned on which we cant use the array methods) 
// let allPpl = document.getElementsByClassName('ppl')


// ==============

//! using tagnames. (multiple elements will be targeted at a time and a collection of elements will be returned on which we cant use the array methods) 
// let allDivs = document.getElementsByTagName('main')

//! using query selector. (single element at a time will be targeted using either the id/class/tagname)

// let e1 = document.querySelector('.ppl')
// let e2 = document.querySelector('.ppl')

// ==============

//! using query selector all. (multiple elements will be targeted at a time and a node list of elements will be returned on which we cant use the array methods) 

// let ele = document.querySelectorAll('#Tejas')

// console.log(ele[0]);

// ==============

// console.log(e1);
// console.log(e2);

// console.log(p1, p2, p3, p4, p5);
// console.log(allPpl);
// console.log(allDivs);

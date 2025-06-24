//! EVENT HANDLING
// let btn = document.querySelector("button");
// btn.onclick = ()=>{
//     console.log("clicked");
// }

// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     console.log("clicked");
// })

let allSections = document.querySelectorAll("section");

console.log(allSections);

for (let i = 0; i < allSections.length; i++) {
  allSections[i].addEventListener(
    "mouseenter", 
    () => {
    allSections[i].style.backgroundColor = "#333";
  });
  allSections[i].addEventListener(
    "mouseleave", 
    () => {
    allSections[i].style.backgroundColor = "#000";
  });
}

// switch ("bulb") {
//   case "fan":
//     console.log("pankha ghumne laga");
//     break;
//   case "tubelight":
//     console.log("tubelight");
//     break;
//   case "extension":
//     console.log("extension");
//     break;
//   case "bulb":
//     console.log("bulb");
//     break;
//   case "wifi":
//     console.log("wifi");
//     break;
// }
let a = parseInt(prompt("enter the num1"));
let b = parseInt(prompt("enter the num2"));
let action = prompt("enter the operation");


switch (action) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
    default :console.log(`${action} is not a valid action`);
    
}

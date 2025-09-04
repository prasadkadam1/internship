// let arr = [10, 20, 30, 40, 50, 60];
// let arr2 = [10, 20, 30, 40, 50, 60];

//! spread
// let newArr = [...arr, ...arr2]
// console.log(newArr);
// console.log(arr);

// let newArr = 10, 20, 30, 40, 50, 60

// let [x, ...r] = arr;
// console.log(r);

// let func = (...arg) => {
//   console.log(arg);
// };
// func(10, 20, 30, 40, 50, 60);

// let arr1 = [10, 20, 30];
// let arr2 = [30, 40, 50, 60];
// let temp = [...arr1, ...arr2];
// let union = [];
// console.log(temp);
// let newSet = new Set();
// for (let i = 0; i < temp.length; i++) {
//   newSet.add(temp[i]);
// }
// console.log(newSet);
// newSet.forEach((val) => {
//   union.push(val);
// });
// console.log(union);

// let x = new Set()
// for (let i = 0; i < arr1.length; i++) {
//    x.add(arr1[i])
// }
// console.log(x.keys());
// x.add(10)
// x.add(20)
// x.add(30)
// x.add(30)
// console.log(x);

// let y = new Map()
// y.set('item1' , 10);
// y.set('item2' , 10);
// y.set('item3' , 10);
// y.set('item4' , 10);
// y.set('item5' , 10);
// console.log(y);
// console.log(y.has('item1'));
// y.delete('item1')
// console.log(y.has('item1'));
// console.log(y.get('item2'));

// [50 , 60, 10, 20, 30, 40 ]
// let reverserArr = (arr, n) => {
//   for (let i = arr.length; i > arr.length - n; i--) {
//     let temp;
//     // temp = arr[i - 1];
//     temp = arr.pop();
//     console.log(temp);
//     arr.unshift(temp);
//   }
//   console.log(arr);

// };
// reverserArr(arr, 2);

let arr = [10, 20, 30, 40, 50, 60, 60];

let reverseArr = (arr, size) => [...(arr.slice(arr.length - size)), ...(arr.slice(0, arr.length - size))];

console.log(reverseArr(arr, 3));


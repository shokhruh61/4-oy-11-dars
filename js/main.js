// // 1-masala

// function kv(res) {
//   return res * res
// }
// let str = +prompt("Sonni kiriting")
// alert(kv(str));

// // 2-masala

// function sum(num1, num2) {
//   return num1 + num2;
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// alert(sum(num1, num2));

// // 3-masala

// function create(name, and) {
//     alert(`Salom ${name} sizning yoshingiz ${age} da`);
//   }
//   let name = prompt("Ismingizni kiriting");
//   let age = prompt("Yoshingizni kiriting");
//   create(name, age);

// // 4-masala

// function max(num1, num2) {
//   if (num1 < num2) {
//     alert(num2);
//   } else {
//     alert(num1);
//   }
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// max(num1, num2);

// // 5-masala

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// function sum_arr() {
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }
// alert(sum_arr());

// // 6-masala

// let num = +prompt("sonni kiriting");
// function check(num) {
//   if (num > 0) {
//     alert("Musbat son");
//   } else {
//     alert("Manfiy son");
//   }
// }
// check(num);

// // 7-masala

// let word = "Hello world";
// function wordLength() {
//   return word.length;
// }
// alert(wordLength());

// // 8-masala

// let str1 = "Hello ";
// let str2 = "world";
// function concat() {
//   return str1 + str2;
// }
// alert(concat());

// // 9-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function min() {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// alert(min());

// // 10-masala

// let str = "salom";
// function reverse() {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return rev;
// }
// alert(reverse());
// // // Massiv va funksiyalar

// // 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function res() {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// res();

// // 2-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function max() {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(max());

// // 3-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function arrLength() {
//   return arr.length;
// }
// console.log(arrLength());

// // 4-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// alert(sum());

// // 5-masala

// let arr = [1, 2, 3, 4, 5, 1, 2, 1, 6, 7];
// function count(res) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == res) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(count(1));

// // 6-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function num() {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(num());

// // 7-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function revNum() {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// revNum();

// // 8-masala

// let arr = [
//   1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10,
// ];
// function negativs() {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(negativs());

// // 9-masala

// let arr = [1, 2, 3, 4, 5];
// function remove() {
//   arr.pop();
//   return arr;
// }
// console.log(remove());

// // 10-masala

// let arr = [1, 2, 3, 4, 5];
// function addNew(new) {
//   arr.push(new);
//   return arr;
// }
// console.log(addNew(5));

// // 11-masala

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// function merged() {
//     return arr1.concat(arr2);
// }
// console.log(merged());

// // 12-masala

// let arr = [1, 2, 3, 4, 5];
// function arrKv() {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * arr[i]);
//   }
//   return res;
// }
// console.log(arrKv());

// // 13-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function remobeArr() {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }
// console.log(remobeArr());

// // 14-masala

// let arr = ["olma", "banan", "xurmo"];
// function uppercase() {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum.push(arr[i].toUpperCase());
//   }
//   return sum;
// }
// console.log(uppercase());

// // 15-masala

// function strLength(arr) {
//   let res = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (typeof arr[i] == "string") {
//       res.push(arr[i].length);
//     } else {
//       res.push(0);
//     }
//     i++;
//   }
//   return res;
// }
// console.log(strLength(["nok", 489, "snickers", true]));

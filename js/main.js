/* __________________________________ function masalalar _____________________________________ */
// // 1-masala
// function square(num) {
//    return num * num;
//  }

//  console.log("Kvadrat: " + square(7));
// // 2- masala
// function sumow(a, b) {
//   return a + b;
// }

// let res = sumow(10, 5);

// console.log("yigindi:" +res);

// // 3-masala

// function greet(name) {
// console.log(`salom ${name}`);
// }
// greet("Avazbek")

// // 4-masala

// function findMax(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// let result = findMax(10, 5);
// console.log("Katta son: " + result);

// // 5-masala

// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// let numbers = [5, 10, 15, 20];
// let result = sumArray(numbers);

// console.log("Umumiy yig'indi: " + result);

// // 6-masala

// function isPositive(arg) {
//   if (arg > 0) {
//     return "musbat";
//   } else {
//     return "musbat emas";
//   }
// }

// // Funksiyani chaqirib tekshirish
// console.log(isPositive(5));
// console.log(isPositive(-3));
// console.log(isPositive(0));

// // 7-masala

// function wordLength(word) {
//   return word.length;
// }

// console.log(wordLength("Hello world!"));

// // 8-masala

// function concatenateStrings(string1, string2) {
//   return string1 + string2;
// }

// console.log(concatenateStrings("Hello,", " World!"));

// // 9-masala

// function findSmallestElement(arr) {
//   return Math.min(...arr);
// }

// console.log(findSmallestElement([5, 2, 9, 1, 7])); 

// // 10-masala

// function reverseString(str) {
//    return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

/*______________________________ qiyinroq masalalar___________________________________- */

// 1-masala: 
function printArr(arr) {
    arr.forEach(num => console.log(num));
}

// // 2-masala: 
// function maxNum(arr) {
//     return Math.max(...arr);
// }

// // 3-masala: 
// function arrLength(arr) {
//     return arr.length;
// }

// // 4-masala: 
// function sumArr(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// }

// // 5-masala: 
// function countElem(arr, elem) {
//     return arr.filter(x => x === elem).length;
// }

// // 6-masala: 
// function oddNums(arr) {
//     return arr.filter(x => x % 2 !== 0);
// }

// // 7-masala:
// function reverseArr(arr) {
//     return arr.reverse();
// }

// // 8-masala: 
// function negativeNums(arr) {
//     return arr.filter(x => x < 0);
// }

// // 9-masala: 
// function popElem(arr) {
//     arr.pop();
//     return arr;
// }

// // 10-masala: 
// function pushElem(arr, elem) {
//     arr.push(elem);
//     return arr;
// }

// // 11-masala: 
// function mergeArr(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// // 12-masala: 
// function squareArr(arr) {
//     return arr.map(x => x * x);
// }

// // 13-masala: 
// function removeEven(arr) {
//     return arr.filter(x => x % 2 !== 0);
// }

// // 14-masala: 
// function toUpperCaseArr(arr) {
//     return arr.map(x => typeof x === 'string' ? x.toUpperCase() : x);
// }

// // 15-masala: 
// function lengthOfStrings(arr) {
//     return arr.map(x => typeof x === 'string' ? x.length : x);
// }

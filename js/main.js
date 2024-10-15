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
// function printArr(arr) {
//   // Massiv ichidagi har bir elementni konsolga chiqaramiz
//   arr.forEach((num) => console.log(num));
// }

// const myArray = [1, 2, 3, 4, 5];

// const arrayUtils = {
//     maxNum: function(arr) {
//         return Math.max(...arr);
//     },
    
//     arrLength: function(arr) {
//         return arr.length;
//     },
    
//     sumArr: function(arr) {
//         return arr.reduce((a, b) => a + b, 0);
//     },
    
//     countElem: function(arr, elem) {
//         return arr.filter(x => x === elem).length;
//     },
    
//     oddNums: function(arr) {
//         return arr.filter(x => x % 2 !== 0);
//     },
    
//     reverseArr: function(arr) {
//         return arr.reverse();
//     },
    
//     negativeNums: function(arr) {
//         return arr.filter(x => x < 0);
//     },
    
//     popElem: function(arr) {
//         arr.pop();
//         return arr;
//     },
    
//     pushElem: function(arr, elem) {
//         arr.push(elem);
//         return arr;
//     },
    
//     mergeArr: function(arr1, arr2) {
//         return arr1.concat(arr2);
//     },
    
//     squareArr: function(arr) {
//         return arr.map(x => x * x);
//     },
    
//     removeEven: function(arr) {
//         return arr.filter(x => x % 2 !== 0);
//     },
    
//     toUpperCaseArr: function(arr) {
//         return arr.map(x => typeof x === 'string' ? x.toUpperCase() : x);
//     },
    
//     lengthOfStrings: function(arr) {
//         return arr.map(x => typeof x === 'string' ? x.length : x);
//     }
// };

// // Example usage:
// const numbers = [1, 2, 3, -4, 5];
// console.log(arrayUtils.maxNum(numbers)); // 5
// console.log(arrayUtils.sumArr(numbers)); // 7

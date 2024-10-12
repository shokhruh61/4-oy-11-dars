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

// 6-masala

function isPositive(arg) {
  if (arg > 0) {
    return "musbat";
  } else {
    return "musbat emas";
  }
}

// Funksiyani chaqirib tekshirish
console.log(isPositive(5));
console.log(isPositive(-3));
console.log(isPositive(0));

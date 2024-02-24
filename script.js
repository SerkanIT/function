// Function //

// Function decloration //
// Function expretion //
// Arrow Function //

// function sayHello() {
//     console.log("Assalomu Aleykum Barchaga");
// }

// sayHello()

// let random = Math.floor(Math.random) * 10;

// function randomNumber() {
//     console.log(random);
// }

// randomNumber()

// let numberPlus = +prompt("Write random number");
// let numberMinus = +prompt("Write random number");
// function sumNumbers(a, b) {
//   return numberPlus + numberMinus;
// }
// function myNumber(numberPlus, numberMinus) {
//   console.log(numberPlus);
// }

// myNumber(numberPlus + numberPlus);

// let myName = function () {
//     console.log("Zavod Maniki");
// }

// myName()

// [10,32,5,90,2]
//Arrow function, callback function
// let arrow = () => {
//     console.log("Serkan");
// }

// arrow()

let first = prompt("Write a first number")
let second = prompt("Write a second number")

const number1 = ([first]);
const number2 = ([second]);

function compareNumbers(number1, number2) {
  if (number1 < number2) {
    console.log(`${number1} меньше, чем ${number2}`);
  } else if (number1 > number2) {
    console.log(`${number1} больше, чем ${number2}`);
  } else {
    console.log(`${number1} равно ${number2}`);
  }
}

if (isNaN(number1) || isNaN(number2)) {
  console.log(
    "Пожалуйста, введите два числа в качестве аргументов командной строки."
  );
} else {
  compareNumbers(number1, number2);
}

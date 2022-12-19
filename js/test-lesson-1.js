const a = 200.1;
let b = 5.0;
console.log('a=', a);
console.log('b=', b);

const userName = 'Erika';
const isFemale = true;
const isHumam = false;

console.log(userName, isFemale, isHumam);

const type = typeof userName;
console.log('typeof userName', type);
let type2 = typeof isHumam;
console.log('typeof isHumam', type2);
type2 = typeof b;
console.log('typeof:: type2 = typeof b ', type2);

/*
console.log('Перед');
alert("Вікно попередження б'є");
console.log('Після');

type2 = typeof "Вікно попередження б'є";
console.log("Вікно попередження б'є", type2);*/

/*const shouldRenew = confirm("Are you ready for continue?");
console.log(shouldRenew);*/
////////////////////////////

/*const quantity = prompt('Input a number1, please:');
console.log(quantity);
console.log(typeof quantity);*/

/*
let quantity1 = prompt('Input a number2, please:');
console.log(typeof quantity1);
quantity1 = Number(quantity1);
console.log(quantity1);
console.log(typeof quantity1);

let quantity2 = prompt('Input a number3, please:');
console.log(typeof quantity2, quantity2);
quantity2 = Number.parseInt(quantity2);
console.log(typeof quantity2, quantity2);

let quantity3 = prompt('Input a float number4, please:');
console.log(typeof quantity3, quantity3);
quantity3 = Number.parseFloat(quantity3);
console.log(typeof quantity3, quantity3);*/
///////////////////////////////

let sal = 1342.345679;
console.log(typeof sal, sal);
sal = sal.toFixed(2);
console.log(typeof sal, sal);
sal = Number(sal);
console.log(typeof sal, sal);

///

console.log(Math);
console.log(Math.PI);

const base = 2, power = 7;
console.log(Math.pow(base, power));
console.log(base ** power);
console.log(typeof (base ** power));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(20 + Math.random() * (50 - 20));

const maxN = 50;
const minN = 20;
const resultNrandom = minN + Math.random() * (maxN - minN);
const resultNrandRound = Math.round(resultNrandom);

console.log(resultNrandom, resultNrandRound);

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line

pricePerItem = pricePerItem + 1500;
console.log(pricePerItem);

productName = "Repair droid";
console.log(productName);

// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
let isOnline = true;
let isAdmin = false;

console.log(typeof(topSpeed), typeof(distance), typeof(login), typeof(isOnline), typeof(isAdmin));
console.log(topSpeed, distance, login, isOnline, isAdmin);

//////
//const productName = "Droid";
//const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);

// Change code below this line
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

/*
// 1. Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// 2. Передача аргументів
multiply(2, 3, 5); // Результат множення дорівнює 30
multiply(4, 8, 12); // Результат множення дорівнює 384
multiply(17, 6, 25); // Результат множення дорівнює 2550


// Change code below this line
function add(a, b, c) {
  console.log(`Результат сумування дорівнює ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
*/

function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

function add(a, b, c) {
  // Change code below this line
    console.log("Код до return виконується звичайним чином");


  // Change code above this line
    
    return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));


function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));

console.log();

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};
console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

console.log();

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
    // You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price..
  const message = `You ordered droids worth ${orderedQuantity*pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;


  // Change code above this line
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
console.log(makeOrderMessage(1, 1, 1));

console.log();

////////////////////////////
/*
const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false
*/
function isAdult(age) {
  // Change code below this line
  const passed = (age>=18);

  // Change code above this line
  return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));
console.log();

/* 
// ❌ Погано, виконується приведення типів
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

*/
/*
// ✅ Добре, приведення типів не виконується
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
*/
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = (password === SAVED_PASSWORD);

  // Change code above this line
  return isMatch;
}

//isValidPassword("mangodab3st");
//isValidPassword("kiwirul3z");
//isValidPassword("jqueryismyjam");
console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));
console.log();

//// if else
/*
let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
*/

/*
let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0
*/
function checkAge(age) {
  let message;

  if (age>=18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

console.log();
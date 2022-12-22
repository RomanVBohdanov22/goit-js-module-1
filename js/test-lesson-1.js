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

///
/*Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'checkStorage'
Функція 'checkStorage' має два параметри. Перший - 'available', другий - 'ordered'
Виклик checkStorage(100, 50) повертає'Order is processed, our manager will contact you.'
Виклик checkStorage(100, 130) повертає'Not enough goods in stock!'
Виклик checkStorage(200, 20) повертає'Order is processed, our manager will contact you.'
Виклик checkStorage(200, 150) повертає'Order is processed, our manager will contact you.'
Виклик checkStorage(150, 180) повертає'Not enough goods in stock!'*/
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
    if (ordered <= available) {
        message = 'Order is processed, our manager will contact you.';
     }
    else { message = 'Not enough goods in stock!';}
  // Change code above this line
  return message;
}

console.log(checkStorage(20, 5));
console.log(checkStorage(5, 20));
console.log();

/*
let age = 25;
// Класичний запис
age = age + 1;
console.log(age); // 26 */
/*let age = 25;
// Просто коротший запис, працює так само
age += 1;
console.log(age); // 26*/

/*
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

*/

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = (pricePerDroid * orderedQuantity);
    if (totalPrice > customerCredits) { message = `Insufficient funds!`; }
    else { message = `You ordered ${orderedQuantity} droids, you have ${(customerCredits - totalPrice)} credits left`; }
  
  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

console.log('');

/*


Конструкція if...else може перевірити і зреагувати на виконання або невиконання тільки однієї умови.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається тільки у разі, коли жодна з умов не приведеться до true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500

За першої ж задовільної умови перевірки припиняться і виконається тільки тіло відповідного блоку if. Тому подібний запис потрібно читати як: «шукаю перше виконання умови, ігнорую все інше».

*/


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword(null));
console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('advga'));
console.log('');

/////
/*


Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

    available - доступна кількість товарів на складі
    ordered - одиниць товару в замовленні

Використовуючи розгалуження, доповни код функції таким чином, що:

    Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
    Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
    В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

*/
function checkStorage1(available, ordered) {
  let message;
  // Change code below this line
    if (ordered <= 0) {
        message = 'There are no products in the order!';
    }
    else {
        if (available >= ordered) {
            message = 'The order is accepted, our manager will contact you';
        }
        else {
            message = 'Your order is too large, there are not enough items in stock!';
        }
    }
  // Change code above this line
  return message;
}

/*console.log(
    checkStorage1(2, 3)
);*/
//checkStorage(100, 50)

console.log('');

console.log(
    checkStorage1(100, 50)
);
console.log(
    checkStorage1(100, 130)
);
console.log(
    checkStorage1(70, 0)
);
console.log(
    checkStorage1(200, 20)
);

console.log(
    checkStorage1(200, 250)
);
console.log(
    checkStorage1(150, 0)
);
///


/*Логічні оператори використовуються для перевірки умов з багатьма виразами, наприклад у розгалуженнях.

Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до false, і правий - в інших випадках.

вираз && вираз

У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда.*/

/*const ageY = 20;
console.log(ageY > 10 && age < 30); // true && true -> true

/*Якщо хоча б один з операндів буде приведений до false, результатом виразу буде цей операнд.*/

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false 

/*Тобто логічне «І» запинається на хибності і повертає те, на чому запнувся або останній операнд.*/

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3

/*Корисно*/

/*Запам'ятайте шість значень, які в булевому перетворенні приводяться до 
`false`: `0`, `NaN`, `null`, `undefined`, порожній рядок `""` або `''` і саме значення 
`false`. Абсолютно все інше приводиться до `true`.*/

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ''
console.log("Mango" && ""); // true && false -> ''
console.log("Mango" && "Poly"); // true && true -> 'Poly'
console.log("Poly" && "Mango"); // true && true -> 'Mango'

console.log('');
console.log('Завдання 21');

/*
Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    number - число, входження якого перевіряється
    start - початок числового проміжку
    end - кінець числового проміжку

Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.
*/

function isNumberInRange(start, end, number) {
  const isInRange = (number >= start) && (number<=end); // Change this line

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));
console.log('');


console.log('Завдання 22');
/*


Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до true, і правий - в інших випадках.

вираз || вираз

У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

Тут результатом теж буде true, оскільки хоча б один з операндів, у цьому випадку правий, був приведений до true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true

А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false

Тобто логічне «АБО» запинається на істині і повертає те, на чому запнулося або останній операнд.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true


*/

/*
Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту.
Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює 
рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

    Оголошена функція checkIfCanAccessContent(subType)
    У виразі перевірки використаний оператор ||
    Виклик checkIfCanAccessContent("pro") повертає true
    Виклик checkIfCanAccessContent("starter") повертає false
    Виклик checkIfCanAccessContent("vip") повертає true
    Виклик checkIfCanAccessContent("free") повертає false

*/

function checkIfCanAccessContent(subType) {
    const canAccessContent = (subType === 'pro')||(subType === 'vip'); // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));
console.log(checkIfCanAccessContent('free'));

console.log('');

console.log('Завдання 23');
/*


Всі оператори, які ми розглядали до цього, були бінарними. Тобто вони містили два операнди:
 лівий і правий. Логічне «НЕ» - це унарний оператор, що виконує операцію над одним операндом справа.

!вираз

Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - 
замінює його на протилежний true -> false або false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !'Mango' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false


*/

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}


console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

console.log('');

console.log('Завдання 24');
/*
Функція getDiscount(totalSpent) визначає значення знижки, 
залежно від загальної суми витрачених грошей (параметр totalSpent) 
в магазині за весь час (партнерська програма). Знижка записується у змінну 
discount і повертається з функції як результат її роботи.

Використовуючи розгалуження і логічні оператори, доповни код функції.

    Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
    Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
    Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
    Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)

Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT,
 BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

    Оголошена функція getDiscount(totalSpent)
    Виклик getDiscount(137000) повертає 0.1
    Виклик getDiscount(46900) повертає 0.05
    Виклик getDiscount(8250) повертає 0.02
    Виклик getDiscount(1300) повертає 0
    Виклик getDiscount(5000) повертає 0.02
    Виклик getDiscount(20000) повертає 0.05
    Виклик getDiscount(50000) повертає 0.1

 */

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
    discount = BASE_DISCOUNT;
    if (totalSpent >= 50000)  discount = GOLD_DISCOUNT; 
    else 
        if ((totalSpent>=20000) && (totalSpent< 50000))  discount = SILVER_DISCOUNT; 
        else 
            if ((totalSpent>=5000) && (totalSpent <20000)) discount = BRONZE_DISCOUNT;
        

  // Change code above this line
  return discount;
}
/*
 Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'getDiscount'
Функція 'getDiscount' має один параметр - 'totalSpent'
Виклик getDiscount(137000) повертає 0.1
Виклик getDiscount(46900) повертає 0.05
Виклик getDiscount(8250) повертає 0.02
Виклик getDiscount(1300) повертає 0
Виклик getDiscount(5000) повертає 0.02
Виклик getDiscount(20000) повертає 0.05
Виклик getDiscount(50000) повертає 0.1
*/

console.log('Завдання 25');
/*


Тернарний оператор використовується як синтаксично коротша заміна інструкції if...else, 
коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

<умова> ? <вираз, якщо умова істинна> : <вираз, якщо умова хибна>

Працює за такою схемою:

    Обчислюється умова.
    Якщо умова істинна, тобто приводиться до true, обчислюється вираз після ?.
    Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
    Значення обчисленого виразу повертається як результат роботи тернарного оператора.

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

Виконаємо рефакторинг, замінивши if...else тернарним оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

Увага

Тернарний оператор повинен використовуватися у простих операціях присвоєння або повернення. 
Застосовувати його для заміни складних розгалужень - погана практика (антипатерн).

*/

function checkStorage25(available, ordered) {
  let message;
  // Change code below this line

  /*if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }*/
  message = (ordered > available)? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}
/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'checkStorage'
Функція 'checkStorage' має два параметри: 1-й - 'available', 2-й - 'ordered'
Використаний тернарний оператор
Виклик checkStorage(100, 50) повертає 'The order is accepted, our manager will contact you'
Виклик checkStorage(100, 130) повертає 'Not enough goods in stock!'
Виклик checkStorage(200, 20) повертає 'The order is accepted, our manager will contact you'
Виклик checkStorage(200, 150) повертає 'The order is accepted, our manager will contact you'
Виклик checkStorage(150, 180) повертає 'Not enough goods in stock!'
*/
console.log('Task26');


/*
Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим 
паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

Використовуючи тернарний оператор, доповни функцію таким чином, що:

    Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
    В іншому випадку, присвой message рядок "Access denied, wrong password!".

    Оголошена функція checkPassword(password)
    Використаний тернарний оператор
    Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
    Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
    Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

*/

function checkPassword26(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
    message = (password===ADMIN_PASSWORD)? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

console.log(checkPassword26("jqueryismyjam"));
console.log(checkPassword26("angul4r1sl1f3"));
console.log(checkPassword26("r3actsux"));
console.log('');

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'checkPassword'
Функція 'checkPassword' має один параметр - 'password'
Використаний тернарний оператор
Виклик checkPassword('jqueryismyjam') повертає 'Access is allowed'
Виклик checkPassword('angul4r1sl1f3') повертає 'Access denied, wrong password!'
Виклик checkPassword('r3actsux') повертає 'Access denied, wrong password!'
*/

console.log('tast 27');
/*


У деяких випадках незручність читання складних розгалужень if...else можна уникнути, 
використовуючи «плоскіший» синтаксис інструкції розгалуження switch.

Сфера застосування switch обмежена задачами з одним загальним питанням (що порівнювати) 
і безліччю варіантів відповідей (з чим порівнювати).

switch (значення) {
  case значення:
    інструкції;
    break;

  case значення:
    інструкції;
    break;
}

Його синтаксис складається з блоку switch(значення) - що потрібно порівняти та безлічі 
окремих випадків case значення: - з чим потрібно порівняти. Для порівняння використовується
оператор строгої рівності ===. Тобто не можна порівняти на більше або менше, тільки на рівність.

Значення в блоці switch(значення) - рядок або число, яке порівнюється на строгу рівність з усіма 
значеннями в блоках case значення: по черзі, зверху вниз.

Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки та одразу 
перейти до коду після switch у тому разі, коли перевірка на рівність повернула true.

*/
/*
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

Якщо значення параметра type - це рядок:

    "starter" - ціна передплати 0 кредитів.
    "professional" - ціна передплати 20 кредитів.
    "organization" - ціна передплати 50 кредитів.

Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}

Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

    Оголошена функція getSubscriptionPrice(type)
    Виклик getSubscriptionPrice("professional") повертає число 20
    Виклик getSubscriptionPrice("organization") повертає число 50
    Виклик getSubscriptionPrice("starter") повертає число 0

*/

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
/* Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'getSubscriptionPrice'
Функція 'getSubscriptionPrice' має один параметр - 'type'
Використана інструкція switch
Виклик getSubscriptionPrice('_stаrter_') повертає undefined
Виклик getSubscriptionPrice('professional') повертає 20
Виклик getSubscriptionPrice('organization') повертає 50
Виклик getSubscriptionPrice('starter') повертає 0 */


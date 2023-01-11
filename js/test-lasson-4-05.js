console.log('');
console.log('tsk 4.05');

/*

Метод перебирання масиву, який використовується для заміни 
циклів for і for...of в роботі з колекцією.

массив.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

    Поелементо перебирає масив.
    Викликає колбек-функцію для кожного елемента масиву.
    Нічого не повертає.

Аргументи колбек-функції - це значення поточного елемента element, 
його індекс index і власне вихідний масив array. Можна оголошувати 
тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

Єдиним випадком, коли варто використовувати цикли for або for...of 
для перебирання масиву, - це задачі з перериванням виконання циклу. 
Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

*/

/*
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - 
масив чисел, і розраховує загальну суму його елементів, яка зберігається у 
змінній totalPrice і повертається як результат роботи функції.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

    Оголошена функція calculateTotalPrice(orderedItems)
    Для перебирання масиву orderedItems використаний метод forEach
    Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
    Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
    Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  /*for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }*/
    orderedItems.forEach(function(number) {
        totalPrice += number;
    });

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
/*const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});*/


/*
function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Манго")); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }*/


/*  Оголошена функція `calculateTotalPrice(orderedItems)`
Для перебирання масиву `orderedItems` використаний метод `forEach`
Виклик функції `calculateTotalPrice([12, 85, 37, 4])` повертає `138`
Виклик функції `calculateTotalPrice([164, 48, 291])` повертає `503`
Виклик функції `calculateTotalPrice([412, 371, 94, 63, 176])` повертає `1116`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.
Результатом виклику функції calculateTotalPrice([6,10,21,10,13,8]) буде число 68 */



console.log('');
console.log('tsk 4.06');
//Задача. Фільтрація масиву чисел
/*
Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, 
в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

    Оголошена функція filterArray(numbers, value)
    Для перебирання масиву numbers використаний метод forEach
    Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
    Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
    Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


*/

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
    numbers.forEach(function(number) { 
        if (number > value) filteredNumbers.push(number);
    });

  // Change code above this line
  return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

/*
Оголошена функція `filterArray(numbers, value)`
Для перебирання масиву `numbers` використаний метод `forEach`
Виклик функції `filterArray([1, 2, 3, 4, 5], 3)` повертає `[4, 5]
Виклик функції `filterArray([1, 2, 3, 4, 5], 4)` повертає `[5]`
Виклик функції `filterArray([1, 2, 3, 4, 5], 5)` повертає `[]`
Виклик функції `filterArray([12, 24, 8, 41, 76], 38)` повертає `[41, 76]`
Виклик функції `filterArray([12, 24, 8, 41, 76], 20)` повертає `[24, 41, 76]`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.
Результатом виклику функції filterArray([9,14,18,9,13,7,24,19,12,8,23,23,18,24,15,5,23,10,18,8,8,19,9,7], 15)) 
буде [18,24,19,23,23,18,24,23,18,19]
*/

console.log('');
console.log('tsk 4.07');
//Задача. Спільні елементи

/*
Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної 
довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, 
тобто тих, які присутні в обох масивах.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

    Оголошена функція getCommonElements(firstArray, secondArray)
    Для перебирання параметра (масиву) використаний метод forEach
    Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
    Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
    Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
    Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
    Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

    firstArray.forEach(function(pickValue)
    { 
        if (secondArray.includes(pickValue)) commonElements.push(pickValue);
    });
  /*for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }*/

  return commonElements;
  // Change code above this line
}


console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/*
 Оголошена функція `getCommonElements(firstArray, secondArray)`
Для перебирання масиву `firstArray` використаний метод `forEach`
Виклик функції `getCommonElements([1, 2, 3], [2, 4])` повертає `[2]
Виклик функції `getCommonElements([1, 2, 3], [2, 1, 17, 19])` повертає `[1, 2]`
Виклик функції `getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])` повертає `[12, 27, 3]`
Виклик функції `getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])` повертає `[10, 30, 40]`
Виклик функції `getCommonElements([1, 2, 3], [10, 20, 30])` повертає `[]`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення. Результатом виклику функції 
getCommonElements([11,21,24,24,18,24,11,11,8,16,9,22,22,16,21,23,7,14,22,11,17,10], 
    [7,14,6,9,11,13,19,9,20,7,12,8,24,7,24,11,24,8,14,5,12,19]) буде [11,24,24,24,11,11,8,9,7,14,11]
*/

console.log('');
console.log('tsk 4.08');

/*


Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька 
або якщо вона використовується як колбек.

Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

Ключове слово function не використовується, замість цього відразу зазначається оголошення параметрів, 
після нього - символ => і тіло функції.

Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

const add = (a, b, c) => {
  return a + b + c;
};

Якщо параметр один, його можна оголошувати без круглих дужок.

const add = a => {
  return a + 5;
};

Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
  console.log("Привіт!");
};
*/

/*
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

    Оголошена змінна calculateTotalPrice
    Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
    Виклик calculateTotalPrice(5, 100) повертає 500
    Виклик calculateTotalPrice(8, 60) повертає 480
    Виклик calculateTotalPrice(3, 400) повертає 1200
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

// Change code below this line

function calculateTotalPrice08(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice08(5, 100));
console.log(calculateTotalPrice08(8, 60));
console.log(calculateTotalPrice08(3, 400));
console.log('');

const calculateTotalPrice008 = (quantity, pricePerItem) => { return quantity * pricePerItem; };

console.log(calculateTotalPrice008(5, 100));
console.log(calculateTotalPrice008(8, 60));
console.log(calculateTotalPrice008(3, 400));
console.log('');

const calculateTotalPrice080 = (quantity, pricePerItem) =>  quantity * pricePerItem; 

console.log(calculateTotalPrice080(5, 100));
console.log(calculateTotalPrice080(8, 60));
console.log(calculateTotalPrice080(3, 400));
console.log('');

/*
Оголошена змінна `calculateTotalPrice`
Змінній `calculateTotalPrice` присвоєна стрілочна функція з параметрами `(quantity, pricePerItem)`
Виклик `calculateTotalPrice(5, 100)` повертає `500`
Виклик `calculateTotalPrice(8, 60)` повертає `480`
Виклик `calculateTotalPrice(3, 400)` повертає `1200`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.
Результатом виклику функції calculateTotalPrice(11, 12) буде 132
*/

console.log('');
console.log('tsk 4.09');

/*


У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. 
Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції 
потрібно виконати ще якісь інструкції, крім повернення значення.

const add = (a, b, c) => a + b + c;

Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне 
повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, 
але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;


*/
/*
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

    Оголошена змінна calculateTotalPrice
    Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
    У функції використане неявне повернення
    Виклик calculateTotalPrice(5, 100) повертає 500
    Виклик calculateTotalPrice(8, 60) повертає 480
    Виклик calculateTotalPrice(3, 400) повертає 1200
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


*/

/*const calculateTotalPrice09 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};*/

const calculateTotalPrice09 = (quantity, pricePerItem) => quantity * pricePerItem; 
console.log(calculateTotalPrice09(5, 100));
console.log(calculateTotalPrice09(8, 60));
console.log(calculateTotalPrice09(3, 400));
console.log('');

/*
Оголошена змінна `calculateTotalPrice`
Змінній `calculateTotalPrice` присвоєна стрілочна функція з параметрами `(quantity, pricePerItem)`
У функції `calculateTotalPrice` використане неявне повернення
Виклик `calculateTotalPrice(5, 100)` повертає `500`
Виклик `calculateTotalPrice(8, 60)` повертає `480`
Виклик `calculateTotalPrice(3, 400)` повертає `1200`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.Результатом 
виклику функції calculateTotalPrice(22, 21) буде 462
*/

console.log('');
console.log('tsk 4.10');
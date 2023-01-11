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


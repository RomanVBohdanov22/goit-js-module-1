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
/*


Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки 
коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, 
якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);


*/
/*
Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. 
Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

    Оголошена змінна calculateTotalPrice
    Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
    Для перебирання масиву orderedItems використаний метод forEach
    Колбек для методу forEach - це стрілочна функція
    Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
    Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
    Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

// Change code below this line

const calculateTotalPriceA = orderedItems => { 
    let totalPrice = 0;
    orderedItems.forEach(item => {
        totalPrice += item;
    });
    return totalPrice;
}
/*
function calculateTotalPriceA(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}*/
// Change code above this line

console.log(calculateTotalPriceA([12, 85, 37, 4]));
console.log(calculateTotalPriceA([164, 48, 291]));
console.log(calculateTotalPriceA([412, 371, 94, 63, 176]));


console.log('');
console.log('tsk 4.11');

//Задача. Фільтрація масиву чисел 2.0

/*
Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

    Оголошена змінна filterArray
    Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
    Для перебирання масиву numbers використаний метод forEach
    Колбек для методу forEach - це стрілочна функція
    Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
    Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
    Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

// Change code below this line
const filterArrayB = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach( (number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
/*
function filterArrayB(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

*/
  // Change code above this line
  return filteredNumbers;
}

console.log(filterArrayB([1, 2, 3, 4, 5], 3));
console.log(filterArrayB([1, 2, 3, 4, 5], 4));
console.log(filterArrayB([1, 2, 3, 4, 5], 5));
console.log(filterArrayB([12, 24, 8, 41, 76], 38));
console.log(filterArrayB([12, 24, 8, 41, 76], 20));

/*
 Оголошена змінна `filterArray`
Змінній `filterArray` присвоєна стрілочна функція з параметрами `(numbers, value)`
Для перебирання масиву `numbers` використаний метод `forEach`
Колбек для методу `forEach` - це стрілочна функція
Виклик функції `filterArray([1, 2, 3, 4, 5], 3)` повертає `[4, 5]`
Виклик функції `filterArray([1, 2, 3, 4, 5], 4)` повертає `[5]`
Виклик функції `filterArray([1, 2, 3, 4, 5], 5)` повертає `[]`
Виклик функції `filterArray([12, 24, 8, 41, 76], 38)` повертає `[41, 76]`
Виклик функції `filterArray([12, 24, 8, 41, 76], 20)` повертає `[24, 41, 76]`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.
Результатом виклику функції filterArray([21,8,21,21,10,13,6,21,5,15,18,13,6,18,5,10], 15) буде [21,21,21,21,18,18]
*/


console.log('');
console.log('tsk 4.12');
//Задача. Спільні елементи 2.0

/*
Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

    Оголошена змінна getCommonElements.
    Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
    Для перебирання масиву firstArray використаний метод forEach
    Колбек для методу forEach - це стрілочна функція
    Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
    Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
    Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
    Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
    Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/


/*
// Change code below this line
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
*/
// Change code below this line
const getCommonElementsC = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

console.log(getCommonElementsC([1, 2, 3], [2, 4]));
console.log(getCommonElementsC([1, 2, 3], [2, 1, 17, 19]));

console.log(getCommonElementsC([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElementsC([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElementsC([1, 2, 3], [10, 20, 30]));

/*
Оголошена змінна `getCommonElements`
Змінній `getCommonElements` присвоєна стрілочна функція з параметрами `(firstArray, secondArray)`
Для перебирання масиву `firstArray` використаний метод `forEach`
Колбек для методу `forEach` - це стрілочна функція
Виклик `getCommonElements([1, 2, 3], [2, 4])` повертає `[2]`
Виклик `getCommonElements([1, 2, 3], [2, 1, 17, 19])` повертає `[1, 2]`
Виклик `getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])` повертає `[12, 27, 3]`
Виклик `getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])` повертає `[10, 30, 40]`
Виклик `getCommonElements([1, 2, 3], [10, 20, 30])` повертає `[]`

    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.
    Результатом виклику функції getCommonElements([16,23,8,15,11,12,22,10,8,23,12,14,6,22,10,11,20,14], 
        [16,11,9,18,11,15,13,23,22,17,19,20,14,20,10,19,15,22]) буде [16,23,15,11,22,10,23,14,22,10,11,20,14]

*/

console.log('');
console.log('tsk 4.13');

/*
Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або використовувати глобальні змінні, 
змінювати значення аргументів посилального типу, виконувати операції введення-виведення тощо.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]

Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value.
 Вона змінює (мутує) вихідний масив за посиланням.

Чиста функція (pure function) - це функція, результат якої залежить тільки від значень переданих аргументів. 
За умови однакових аргументів вона завжди повертає один і той самий результат, і не має побічних ефектів, 
тобто не змінює значення аргументів.

Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

*/

/*

Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення 
якого - це парне число, додаючи до нього значення параметра value.

Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, 
а створювала, наповнювала і повертала новий масив з оновленими значеннями.

    Оголошена функція changeEven(numbers, value)
    Функція changeEven не змінює значення параметра numbers
    Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
    Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
    Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
    Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


*/
/*
function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}
*/
const changeEven = (numbers, value) => {
  // Change code below this line
    let finalArray = [];
    numbers.forEach(element => {
        if (element % 2 === 0) {
            finalArray.push(element + value);
        }
        else finalArray.push(element);
    });
    return finalArray;
  // Change code above this line
}


console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

/*
Оголошена функція `changeEven(numbers, value)`
Функція `changeEven` не змінює значення параметра `numbers`
Виклик `changeEven([1, 2, 3, 4, 5], 10)` повертає новий масив `[1, 12, 3, 14, 5]`
Виклик `changeEven([2, 8, 3, 7, 4, 6], 10)` повертає новий масив `[12, 18, 3, 7, 14, 16]`
Виклик `changeEven([17, 24, 68, 31, 42], 100)` повертає новий масив `[17, 124, 168, 31, 142]`
Виклик `changeEven([44, 13, 81, 92, 36, 54], 100)` повертає новий масив `[144, 13, 81, 192, 136, 154]`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення.Результатом виклику 
функції changeEven([20,6,19,5,8], 5 )) буде [25,11,19,5,13]
*/

console.log('');
console.log('tsk 4.14');

/*

Більшість перебираючих методів масиву - це чисті функції. Вони створюють новий масив, 
заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію 
для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

масив.map((element, index, array) => {
  // Тіло колбек-функції
});

    Поелементо перебирає оригінальний масив.
    Не змінює оригінальний масив.
    Результат роботи колбек-функції записується у новий масив.
    Повертає новий масив однакової довжини.

Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив 
використовується як еталон, на основі якого можна зробити іншу колекцію.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення 
колбек-функції, що робить код чистішим і простішим для сприйняття.
*/
/*
Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

    Оголошена змінна planets
    Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
    Оголошена змінна planetsLengths
    Значення змінної planetsLengths - це масив [5, 4, 5, 7]
    Для перебирання масиву планет використаний метод map()
*/

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planets => planets.length);

console.log(planetsLengths);

/*
 Оголошена змінна `planets`
Оголошена змінна `planetsLengths`
Значення змінної `planets` - це масив `['Earth', 'Mars', 'Venus', 'Jupiter']`
Значення змінної `planetsLengths` - це масив `[5, 4, 5, 7]`
Для перебирання масиву планет використаний метод `map()`
*/

console.log('');
console.log('tsk 4.15');

/*
Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати 
масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути 
значення властивості кожного з них.
*/
/*
Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) 
з усіх об'єктів масиву books.

    Оголошена змінна books
    Значення змінної books - це масив
    Оголошена змінна titles
    Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", 
    "Redder Than Blood", "Enemy of God"]
    Для перебирання масиву books використовується метод map() як чиста функція
*/

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books;
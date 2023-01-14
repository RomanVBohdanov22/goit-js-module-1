console.log('');
console.log('tsk 4.32');

/*


Метод some(callback) перевіряє, чи проходить хоча б один елемент
 масиву тест колбек-функції. Повертає true або false.

масив.some((element, index, array) => {
  // Callback function body
});

    Не змінює оригінальний масив.
    Поелементо перебирає оригінальний масив.
    Повертає true, якщо хоча б один елемент масиву задовольняє умову.
    Повертає false, якщо жоден елемент масиву не задовольняє умову.
    Перебирання масиву припиняється, якщо колбек повертає true.

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true


*/
/*
Використовуючи метод some(), доповни код таким чином, щоб:

    У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
    У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
    У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
    У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
    У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
    У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

    Оголошена змінна firstArray
    Значення змінної firstArray - це масив [26, 94, 36, 18]
    Оголошена змінна secondArray
    Значення змінної secondArray - це масив [17, 61, 23]
    Оголошена змінна thirdArray
    Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
    Оголошена змінна anyElementInFirstIsEven
    Значення змінної anyElementInFirstIsEven - це буль true
    Оголошена змінна anyElementInFirstIsOdd
    Значення змінної anyElementInFirstIsOdd - це буль false
    Оголошена змінна anyElementInSecondIsEven
    Значення змінної anyElementInSecondIsEven - це буль false
    Оголошена змінна anyElementInSecondIsOdd
    Значення змінної anyElementInSecondIsOdd - це буль true
    Оголошена змінна anyElementInThirdIsEven
    Значення змінної anyElementInThirdIsEven - це буль true
    Оголошена змінна anyElementInThirdIsOdd
    Значення змінної anyElementInThirdIsOdd - це буль true
    Для перебирання масивів використаний метод some()

*/

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

/*
const eachElementInFirstIsEven = firstArray.every((value) => (value % 2) === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => (value % 2) != 0);
*/
// Change below this line

const anyElementInFirstIsEven = firstArray.some((value) => (value % 2) === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => (value % 2) != 0);

const anyElementInSecondIsEven = secondArray.some((value) => (value % 2) === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => (value % 2) != 0);

const anyElementInThirdIsEven = thirdArray.some((value) => (value % 2) === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => (value % 2) != 0);


console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

/*
Виконано

Оголошена змінна `firstArray`
Оголошена змінна `secondArray`
Оголошена змінна `thirdArray`
Оголошена змінна `anyElementInFirstIsEven`
Оголошена змінна `anyElementInFirstIsOdd`
Оголошена змінна `anyElementInSecondIsEven`
Оголошена змінна `anyElementInSecondIsOdd`
Оголошена змінна `anyElementInThirdIsEven`
Оголошена змінна `anyElementInThirdIsOdd`
Значення змінної `firstArray` - це масив `[26, 94, 36, 18]`
Значення змінної `secondArray` - це масив `[17, 61, 23]`
Значення змінної `thirdArray` - це масив `[17, 26, 94, 61, 36, 23, 18]`
Значення змінної `anyElementInFirstIsEven` - це буль `true`
Значення змінної `anyElementInFirstIsOdd` - це буль `false`
Значення змінної `anyElementInSecondIsEven` - це буль `false`
Значення змінної `anyElementInSecondIsOdd` - це буль `true`
Значення змінної `anyElementInThirdIsEven` - це буль `true`
Значення змінної `anyElementInThirdIsOdd` - це буль `true`
Для перебирання масивів використаний метод `some()`
*/

console.log('');
console.log('tsk 4.33');

const testUsers33 = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
];

/*
Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність 
активних користувачів (властивість isActive) і повертала true або false.

    Оголошена функція isAnyUserActive(users)
    Для перебирання параметра users використовується метод some()
    Виклик функції із зазначеним масивом користувачів повертає true
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const getActiveUsers = (users) => users.filter(({isActive}) => isActive);
// Change code below this line
const isAnyUserActive = users => users.some(({isActive}) => isActive);
// Change code above this line
console.log(isAnyUserActive(testUsers33));

/*
 Оголошена змінна `isAnyUserActive`
Змінній `isAnyUserActive` присвоєна стрілочна функція з параметром `(users)`
Для перебирання параметра `users` використаний метод `some()`
Виклик функції із зазначеним масивом користувачів повертає буль `true`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/


console.log('');
console.log('tsk 4.34');

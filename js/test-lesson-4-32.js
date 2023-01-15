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


/*


Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента 
масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, 
але результат вартий того.

массив.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);

    Не змінює оригінальний масив.
    Поелементо перебирає оригінальний масив.
    Повертає все, що завгодно.
    Робить все, що завгодно.

Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, 
яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

# Спочатку метод reduce() створює внутрішню змінну-акумулятор і
# присвоює їй значення параметра initialValue або першого елемента
# масиву, що перебирається, якщо initialValue не задане.
previousValue = 0

# Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
# параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
Результат - 32

Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного».
 У повсякденних завданнях його застосування зводиться до роботи з числами.

*/
/*
Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни 
код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

    Оголошена змінна players
    Значення змінної players - це об'єкт гравців з ігровим часом кожного
    Оголошена змінна playtimes
    Значення змінної playtimes - це масив [1270, 468, 710, 244]
    Оголошена змінна totalPlayTime
    Значення змінної totalPlayTime - це число 2692
    Для перебирання масиву playtimes використовується метод reduce()
    Оголошена змінна averagePlayTime
    Значення змінної averagePlayTime - це число 673

*/

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
console.log(playtimes);
/*
Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
*/
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, timeGap) => { return previousValue + timeGap; }, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime);

/*
Оголошена змінна `players`
Оголошена змінна `playtimes`
Оголошена змінна `totalPlayTime`
Оголошена змінна `averagePlayTime`
Значення змінної `players` - це об'єкт гравців з ігровим часом кожного
Значення змінної `playtimes` - це масив `[1270, 468, 710, 244]`
Значення змінної `totalPlayTime` - це число `2692`
Значення змінної `averagePlayTime` - це число `673`
Для перебирання масиву `playtimes` використовується метод `reduce()`
*/

console.log('');
console.log('tsk 4.35');

/*


Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
 Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;


*/

/*
Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
 і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши 
 його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

    Оголошена змінна players
    Значення змінної players - це масив об'єктів гравців
    Оголошена змінна totalAveragePlaytimePerGame
    Значення змінної totalAveragePlaytimePerGame - це число 1023
    Для перебирання масиву players використовується метод reduce()

*/

const players35 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players35.reduce((total, player) => {
    return (total + (player.playtime / player.gamesPlayed));
}, 0);

console.log(totalAveragePlaytimePerGame);

/*
 Оголошена змінна `players`
Оголошена змінна `totalAveragePlaytimePerGame`
Значення змінної `players` - це масив об'єктів гравців
Значення змінної `totalAveragePlaytimePerGame` - це число `1023`
Для перебирання масиву `players` використовується метод `reduce()`
*/

console.log('');
console.log('tsk 4.36');
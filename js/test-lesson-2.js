// task 2.4 - array

console.log('task 2.4 Array');
/*
Масив використовується для зберігання впорядкованої колекції елементів. Він оголошується відкритою 
і закритою квадратною дужкою [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

const planets = ["Earth", "Mars", "Venus"];

Корисно

Оголошуючи змінну для об'єкта або масиву, програмісти, як правило, використовують const. 
Вони роблять це для того, щоб випадково не перезаписати значення, оскільки спроба перезапису 
викличе помилку до того, як код потрапить до користувача.

*/

const fruits = ["apple", "plum", "pear", "orange"];

console.log(fruits);

/*
 Оголошена змінна 'fruits'
Змінна 'fruits' оголошена за допомогою const
Значення змінної 'fruits' - масив
Масив 'fruits' містить 4 значення
Масив 'fruits' містить значення 'apple'
Масив 'fruits' містить значення 'plum'
Масив 'fruits' містить значення 'pear'
Масив 'fruits' містить значення 'orange'
*/

console.log('');
console.log('task 2.5');
/*


Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс]. 
Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.
Увага

Індексація елементів масиву починається з нуля.

const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"


*/
/*

*/

//const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

console.log(firstElement, secondElement, lastElement);


console.log('');
console.log('tsk 2.6');

/*


На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];

Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

    Оголошена змінна fruits
    Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

*/
fruits[1] = "peach";
fruits[3] = "banana";

console.log(fruits);
/*
 За допомогою const оголошена змінна 'fruits'
Значення змінної 'fruits' - це масив
Масив 'fruits' містить 4 значення
Перший елемент масиву має значення 'apple'
Другий елемент масиву має значення 'peach'
Масив 'fruits' містить значення 'pear'
Четвертий елемент масиву має значення 'banana'
*/

console.log('');
console.log('tsk 2.7');
/*


Довжина масиву, тобто кількість його елементів, зберігається у властивості length. 
Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3

Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

    Оголошена змінна fruitsArrayLength
    Значення змінної fruitsArrayLength - це число 4

*/

const fruitsArrayLength = fruits.length;

console.log(fruitsArrayLength);
/*
За допомогою const оголошена змінна 'fruits'
Значення змінної 'fruits' - це масив
Масив 'fruits' містить 4 значення
За допомогою const оголошена змінна 'fruitsArrayLength'
Значення змінної 'fruitsArrayLength' дорівнює 4
Значення змінної 'fruitsArrayLength' отримане за допомогою властивості 'length' масиву
*/

console.log('');
console.log('tsk 2.8');

/*

Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву. 
Для того щоб отримати значення останнього елемента, застосовується наступний підхід - 
довжина масиву завжди на одиницю більша за індекс останнього елемента. 
Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"

*/
/*
Оголоси дві зміні:
Ім'я змінної 	Очікуване значення
lastElementIndex 	Індекс останнього елемента масиву fruits через довжина_масиву - 1
lastElement 	Значення останнього елемента масиву

    Оголошена змінна lastElementIndex
    Значення змінної lastElementIndex - це число 3
    Оголошена змінна lastElement
    Значення змінної lastElement - це рядок "banana"

*/

const lastElementIndex = fruits.length - 1;
const lastElement1 = fruits[lastElementIndex];
/*
 За допомогою const оголошена змінна 'fruits'
Значення змінної 'fruits' - це масив
Масив 'fruits' містить 4 значення
За допомогою const оголошена змінна 'lastElementIndex'
За допомогою const оголошена змінна 'lastElement'
Значення змінної 'lastElementIndex' дорівнює 3
Значення змінної 'lastElement' дорівнює 'banana'
Значення змінної 'lastElement' отримане за допомогою доступу до елементу масиву через квадратні дужки
Значення змінної 'lastElementIndex' отримане за допомогою властивості 'length' масиву
*/

console.log('');
console.log('tsk 2.9');

/*
Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. 
Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

    Оголошена функція getExtremeElements(array)
    Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
    Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
    Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

*/

function getExtremeElements(array) {
  // Change code below this line
    return [array[0], array[array.length - 1]];

  // Change code above this line
}
/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'getExtremeElements'
Функція 'getExtremeElements' має один параметр 'array'
Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
Виклик getExtremeElements(['Earth', 'Mars', 'Venus']) повертає ['Earth', 'Venus']
Виклик getExtremeElements(['apple', 'peach', 'pear', 'banana']) повертає ['apple', 'banana']
Виклик функції getExtremeElements() для довільного масиву повертає перший і останній елементи
*/

console.log('');
console.log('tsk 2.10');

/*


Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. 
Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]

Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат
 поділу рядка message за роздільником delimiter - масив рядків.

    Оголошена функція splitMessage(message, delimiter)
    Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
    Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
    Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]


*/

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
    words = message.split(delimiter);
  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));
/*
 Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'splitMessage'
Функція 'splitMessage' має два параметри: 'message' і 'delimiter'
Виклик splitMessage('Mango hurries to the train', ' ') повертає ['Mango', 'hurries', 'to', 'the', 'train']
Виклик splitMessage('Mango', '') повертає ['M', 'a', 'n', 'g', 'o']
Виклик splitMessage('best_for_week', '_') повертає ['best', 'for', 'week']
Виклик функції splitMessage() для довільного рядка і роздільника повертає певний масив
*/



console.log('');
console.log('tsk 2.11');
/*
Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
 залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). 
Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) 
та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

    Оголошена функція calculateEngravingPrice(message, pricePerWord)
    Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
    Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
    Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
    Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

*/

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    //const messageArray = message.split(" ");

    return ((message.split(" ")).length)*pricePerWord;


   // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

console.log(calculateEngravingPrice("Web-development is creative work", 40));

console.log(calculateEngravingPrice("Web-development is creative work", 20));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'calculateEngravingPrice'
Функція 'calculateEngravingPrice' має два параметри: 'message' і 'pricePerWord'
Виклик calculateEngravingPrice('JavaScript is in my blood', 10) повертає 50
Виклик calculateEngravingPrice('JavaScript is in my blood', 20) повертає 100
Виклик calculateEngravingPrice('Web-development is creative work', 40) повертає 160
Виклик calculateEngravingPrice('Web-development is creative work', 20) повертає 80
Виклик calculateEngravingPrice() з випадковими параметрами повертає правильний результат
*/



console.log('');
console.log('tsk 2.12');
/*


Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. 
У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. 
Тобто це зворотна операція методу рядків split(delimiter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'


*/
function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
    string = array.join(delimiter);


  // Change code above this line
  return string;
}
console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
console.log(makeStringFromArray(['best', 'for', 'week'], '_'));
/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'makeStringFromArray'
Функція 'makeStringFromArray' має два параметри: 'array' і 'delimiter'
Виклик makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ') повертає 'Mango hurries to the train'
Виклик makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '') повертає 'Mango'
>>> Виклик makeStringFromArray('best for week', '_') повертає 'best_for_week'
Виклик функції makeStringFromArray() для довільного рядка та роздільника повертає певний масив
*/

console.log('');
console.log('tsk 2.13');

/*
    Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у 
    веб-розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, 
можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
Увага

Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

    Значенням параметра title будуть рядки, слова яких розділені лише пробілами
    Усі символи slug повинні бути у нижньому регістрі
    Всі слова slug повинні бути розділені тире

    Оголошена функція slugify(title)
    Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
    Виклик slugify("English for developer") повертає "english-for-developer"
    Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
    Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"


*/

function slugify(title) {
  // Change code below this line
    //const ttl = "dfg";
    //const ttl2 = ((ttl.toLowerCase()).split(" ")).join("-");
    return ((title.toLowerCase()).split(" ")).join("-");

  // Change code above this line
}

console.log(slugify("Arrays for begginers"));

console.log(slugify("English for developer"));

console.log(slugify("Ten secrets of JavaScript"));

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'slugify'
Функція 'slugify' має один параметр 'title'
Виклик slugify('Arrays for begginers') повертає 'arrays-for-begginers'
Виклик slugify('English for developer') повертає 'english-for-developer'
Виклик slugify('Ten secrets of JavaScript') повертає 'ten-secrets-of-javascript'
Виклик slugify('How to become a JUNIOR developer for TWO WEEKS') повертає 'how-to-become-a-junior-developer-for-two-weeks'
Виклик функції slugify() для довільного рядка повертає змінений рядок slug
*/

console.log("");
console.log("tsk.14");


/*


Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
 не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

    Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
    Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
    Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


*/

/*
Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

    firstTwoEls - масив із перших двох елементів
    nonExtremeEls - масив з усіх елементів, крім першого та останнього
    lastThreeEls - масив із трьох останніх елементів

    Оголошена змінна fruits
    Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
    Оголошена змінна firstTwoEls
    Значення змінної firstTwoEls - це масив ["apple", "plum"]
    Оголошена змінна nonExtremeEls
    Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
    Оголошена змінна lastThreeEls
    Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
    Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

*/

const fruits14 = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits14.slice(0, 2);
const nonExtremeEls = fruits14.slice(1, 4);
const lastThreeEls = fruits14.slice(2, 5);

console.log(fruits14);
console.log(firstTwoEls, nonExtremeEls, lastThreeEls);

/*
Змінна 'fruits' оголошена за допомогою 'const' і має значення ['apple', 'plum', 'pear', 'orange', 'banana']
Змінна 'firstTwoEls' оголошена за допомогою 'const' і має значення ['apple', 'plum']
Змінній 'firstTwoEls' присвоєна копія частини масиву 'fruits' після застосування методу 'slice'
Змінна 'nonExtremeEls' оголошена за допомогою 'const' і має значення ['plum', 'pear', 'orange']
Змінній 'nonExtremeEls' присвоєна копія частини масиву 'fruits' після застосування методу 'slice'
Змінна 'lastThreeEls' оголошена за допомогою 'const' і має значення ['pear', 'orange', 'banana']
Змінній 'lastThreeEls' присвоєна копія частини масиву 'fruits' після застосування методу 'slice'
*/

console.log('');
console.log("tsk.2.15");
/*


Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, 
а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];


*/
/*
Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

    Оголошена змінна oldClients
    Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
    Оголошена змінна newClients
    Значення змінної newClients - це масив ["Peach", "Houston"]
    Оголошена змінна allClients
    Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
    Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами 
*/

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients);

/*Виконано
Змінна 'oldClients' оголошена за допомогою 'const' і має значення ['Mango', 'Ajax', 'Poly', 'Kiwi']
Змінна 'newClients' оголошена за допомогою 'const' і має значення ['Peach', 'Houston']
Змінна 'allClients' оголошена за допомогою 'const' і має значення ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']
Змінній 'allClients' присвоєний масив, що складається з копії масиву 'oldClients' і 'newClients' після застосування методу 'concat' з правильними аргументами
 */

console.log('');
console.log('tsk 2.16');

/*
Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних 
firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength 
елементів. В іншому випадку функція повинна повернути новий масив повністю.

    Оголошена функція makeArray(firstArray, secondArray, maxLength)
    Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
    Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
    Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
    Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
    Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
    Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
    Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

*/

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const finArray = firstArray.concat(secondArray);

    if (finArray.length > maxLength) { return finArray.slice(0, maxLength); }

    return finArray;
    
    // Change code above this line
}
  
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'makeArray'
Функція 'makeArray' має три параметри: 'firstArray', 'secondArray' і 'maxLength'
Функція 'makeArray' використовує методи 'concat' і 'slice'
Виклик makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3) повертає ['Mango', 'Poly', 'Ajax']
Виклик makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4) повертає ['Mango', 'Poly', 'Houston', 'Ajax']
Виклик makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3) повертає ['Mango', 'Ajax', 'Chelsea']
Виклик makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2) повертає ['Earth', 'Jupiter']
Виклик makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4) повертає ['Earth', 'Jupiter', 'Neptune', 'Uranus']
Виклик makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0) повертає []

    Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив


*/

console.log('');
console.log('tsk 2.17');

/*


Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.

for (Ініціалізація; Умова; Пост - вираз) {
  // Тіло циклу
}

    Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника 
    і встановлення її початкового значення.
    Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді,
     коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
    Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення 
    змінної-лічильника.
    Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується (його тіло) доти, доки i <= 20, тобто
 умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.

*/

/*
Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

    Оголошена змінна start
    Значення змінної start - це число 3
    Оголошена змінна end
    Значення змінної end - це число 7
    Оголошена змінна i - лічильник циклу
    Початкове значення змінної i дорівнює 3
    Умова циклу приводиться до true доти, доки i менше або дорівнює 7
    На кожній ітерації значення змінної i збільшується на одиницю
    Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

*/

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

/*
Змінна 'start' оголошена за допомогою 'const' і має значення 3
Змінна 'end' оголошена за допомогою 'const' і має значення 7
Очікується ініціалізація циклу 'for' за допомогою 'let'
Очікується 'i' як ім'я змінної під час ініціалізації циклу 'for'
Очікується 'start' як значення змінної під час ініціалізації циклу 'for'
Очікується оператор '<=' і операнди 'i' та 'end' як умова циклу 'for'
Очікується оператор '+=' , змінна 'i' і значення 1 як фінальний вираз циклу 'for'
В тілі циклу 'for' використовується виведення у консоль змінної 'i'
Виведення у консоль змінної `i` покаже числа 3, 4, 5, 6, 7
*/

console.log('');
console.log('tsk 2.18');

/*
Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і 
повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, 
то сума - це 1 + 2 + 3, тобто 6.

    Оголошена функція calculateTotal(number)
    Виклик функції calculateTotal(1) повертає 1
    Виклик функції calculateTotal(3) повертає 6
    Виклик функції calculateTotal(7) повертає 28
    Виклик функції calculateTotal(18) повертає 171
    Виклик функції calculateTotal(24) повертає 300
    Виклик функції calculateTotal() з випадковим числом повертає правильне значення

*/

function calculateTotal(number) {
 // Change code below this line
  let summ = 0;
  for (let index = 1; index <= number; index+=1) {
      summ += index;
      
      //console.log(index, summ);
  }
  return summ;

  // Change code above this line
}


console.log(calculateTotal(1));

console.log(calculateTotal(3));

console.log(calculateTotal(7));

console.log(calculateTotal(18));

console.log(calculateTotal(24));

console.log(calculateTotal(44));

/*
 Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'calculateTotal'
Функція 'calculateTotal' має один параметр 'number'
Виклик функції calculateTotal(1) повертає 1
Виклик функції calculateTotal(3) повертає 6
Виклик функції calculateTotal(7) повертає 28
Виклик функції calculateTotal(18) повертає 171
Виклик функції calculateTotal(24) повертає 300
Виклик функції calculateTotal() з випадковим числом повертає правильне значення
 */


console.log('');
console.log('tsk 2.19');

/*
Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс 
- це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.
*/

/*
Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

    Оголошена змінна fruits
    Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
    Оголошена змінна i - лічильник циклу
    Початкове значення змінної i дорівнює 0
    Умова циклу приводиться до true доти, доки i менше за 4
    На кожній ітерації значення змінної i збільшується на одиницю
    В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
    В тілі циклу for використовується виведення у консоль змінної fruit
*/

const fruits19 = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits19.length; i+=1) { // Change this line
  const fruit = fruits19[i]; // Change this line
  console.log(fruit);
}
/*
Змінна 'fruits' оголошена за допомогою 'const' і має значення ['apple', 'plum', 'pear', 'orange']
Очікується ініціалізація циклу 'for' за допомогою 'let'
Очікується 'i' як ім'я змінної під час ініціалізації циклу 'for'
Очікується 'start' як значення змінної під час ініціалізації циклу 'for'
Очікується оператор '<' і операнди 'i' та 'fruits.length' як умова циклу 'for'
Очікується оператор '+=' , змінна 'i' і значення 1 як фінальний вираз циклу 'for'
В тілі циклу 'for' оголошується змінна 'fruit' за допомогою 'const' і цій змінній присвоюється значення - елемент масиву
В тілі циклу 'for' використовується виведення у консоль змінної 'fruit'

    Виведення у консоль змінної 'fruit' покаже рядки 'apple', 'plum', 'pear', 'orange'

Результат виконання коду:

apple
plum
pear
orange


*/


console.log('');
console.log('tsk 2.20');

/* 
Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і 
обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, 
яка повертається як результат роботи функції.

    Оголошена функція calculateTotalPrice(order)
    Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
    Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
    Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
    Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

*/

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
    for (let i = 0; i < order.length; i += 1) { 
        total += order[i];
    }
  // Change code above this line
  return total;
}


console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

console.log(calculateTotalPrice([1, 1, 1, 1, 0]));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'calculateTotalPrice'
Функція 'calculateTotalPrice' має один параметр 'order'
Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
*/


console.log('');
console.log('tsk 2.21');

// let words = message.split(delimiter);
//return ((title.toLowerCase()).split(" ")).join("-");
//const substring = string.slice(0, length); // Change this line

/*const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1]; */

//const message = `Name ${name} is ${(name.length)} characters long`; // Change this line

/*
Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, 
розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

    Оголошена функція findLongestWord(string)
    Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
    Виклик функції findLongestWord("Google do a roll") повертає Google
    Виклик функції findLongestWord("May the force be with you") повертає force
    Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

*/

function findLongestWord(string) {
  // Change code below this line
    const wordsArray21 = string.split(" ");
    let longWord = wordsArray21[0];
    for (let i=1; i<wordsArray21.length; i+=1)
    { 
        if (longWord.length <= wordsArray21[i].length) longWord = wordsArray21[i];
    }
    return longWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
//console.log(findLongestWord("May the force be with you"));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'findLongestWord'
Функція 'findLongestWord' має один параметр 'string'
findLongestWord('The quick brown fox jumped over the lazy dog') повертає 'jumped'
findLongestWord('Google do a roll') повертає 'Google'
findLongestWord('May the force be with you') повертає 'force'
Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
*/


console.log('');
console.log('tsk 2.22');
/*
Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати
 індекси елементів, що додаються.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
*/
/*
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх 
цілих чисел від значення min до max.

    Оголошена функція createArrayOfNumbers(min, max)
    Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
    Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
    Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
    Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
    В циклі for використовувався метод push

*/

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i=min; i<=max; i+=1) { 
        numbers.push(i);
    }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));

console.log(createArrayOfNumbers(14, 17));

console.log(createArrayOfNumbers(29, 34));

//createArrayOfNumbers(1, 3);

/*
 Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'createArrayOfNumbers'
Функція 'createArrayOfNumbers' має два параметри: 'min' і 'max'
Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
Виклик функції createArrayOfNumbers() з випадковими 'min' і 'max' повертає правильний масив
В циклі for використовувався метод 'push'
*/

console.log('');
console.log('tsk 2.23');

/*
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає 
новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

    Оголошена функція filterArray(numbers, value)
    Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
    Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
    Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
    Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
    Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
    В циклі for використовувався метод push
*/

function filterArray(numbers, value) {
   // Change code below this line
    let filtered = [];
        for (let i=0; i<numbers.length; i+=1) { 
        if (numbers[i] > value) filtered.push(numbers[i]);
    }
    return filtered;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

console.log(filterArray([1, 2, 3, 4, 5], 4));

console.log(filterArray([1, 2, 3, 4, 5], 5));

console.log(filterArray([12, 24, 8, 41, 76], 38));

console.log(filterArray([12, 24, 8, 41, 76], 20));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'filterArray'
Функція 'filterArray' має два параметри 'numbers' і 'value'
Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
В циклі for використовувався метод 'push'
 */


console.log('');
console.log('tsk 2.24');
/*
Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value,
 і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, 
 коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false
*/

/*
Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, 
чи присутній такий фрукт в масиві fruits.

Доповни код функції таким чином, що якщо:

    фрукт присутній в масиві, то функція повертає true;
    фрукт відсутній в масиві, то функція повертає false.

    Оголошена функція checkFruit(fruit)
    Виклик checkFruit("plum") повертає true
    Виклик checkFruit("mandarin") повертає false
    Виклик checkFruit("pear") повертає true
    Виклик checkFruit("Pear") повертає false
    Виклик checkFruit("apple") повертає true
    Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
    У функції використовувався метод includes
*/
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));

/*
Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'checkFruit'
Функція 'checkFruit' має один параметр 'fruit'
Виклик checkFruit('plum') повертає true
Виклик checkFruit('mandarin') повертає false
Виклик checkFruit('pear') повертає true
Виклик checkFruit('Pear') повертає false
Виклик checkFruit('apple') повертає true
Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
У функції використовувався метод 'includes'
*/

console.log('');
console.log('tsk 2.25');

/*
Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні 
в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри 
array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

    Оголошена функція getCommonElements(array1, array2)
    Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
    Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
    Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
    Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
    Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
    Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
    В циклі for використовувалися методи includes і push

*/

function getCommonElements(array1, array2) {
  // Change code below this line
    let CommonElementsArray = [];
    for (let i=0; i<array1.length; i+=1) { 
        if (array2.includes(array1[i])) CommonElementsArray.push(array1[i]);
    }
    return CommonElementsArray;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/*
 Очікується оголошення 'Function Declaration'
Функції присвоєно ім'я 'getCommonElements'
Функція 'getCommonElements' має два параметри: 'array1' і 'array2'
Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
В циклі 'for' використовувалися методи 'includes' і 'push'
*/



console.log('');
console.log('tsk 2.25');

/*



Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

for (const variable of iterable) {
  // тіло цикла
}

    variable - змінна, яка буде зберігати значення елемента на кожній ітерації
    iterable - колекція, яка містить ітерабельні елементи, наприклад масив

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}




Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

    Оголошена функція calculateTotalPrice(order)
    Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
    Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
    Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
    Виклик функції calculateTotalPrice([]) повертає 0
    Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

    */


function calculateTotalPrice26(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}
/*
console.log(Number('OMG!' !== true));

console.log(Number(1!== true));*/
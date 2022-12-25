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

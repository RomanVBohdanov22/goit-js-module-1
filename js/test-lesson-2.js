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
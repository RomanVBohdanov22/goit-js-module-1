console.log('tsk 4.01');
/*


Функції не відрізняються від чисел, рядків або масивів
 - це просто спеціальний тип даних (об'єкт вищого порядку),
  значення, яке можна зберігати у змінній або передавати 
  у якості аргументу в іншу функцію.

function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet
// і виводимо результат у консоль
console.log(greet("Mango"));
// Ласкаво просимо Манго.

// Виводимо функцію greet
// у консоль, не викликаючи її
console.log(greet);
////
ƒ greet() {
     return `Ласкаво просимо ${name}.`;
}//

У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, 
і в консоль виводиться результат її виконання. У другому лозі передається
 посилання на функцію, а не результат її виклику (відсутні круглі дужки),
  тому в консоль виводиться її тіло. Це означає, що функцію можна присвоїти 
  у змінну або передати як аругмент іншої функції.

*/
/*
Доповни код таким чином, щоб у змінній result був результат виконання функції
 makePizza, а у змінній pointer було посилання на функцію makePizza.

    Оголошена функція makePizza
    Оголошена змінна result
    Значення змінної result - це рядок "Your pizza is being prepared, please wait."
    Значення змінної result отримане за допомогою виклику функції
    Оголошена змінна pointer
    Значення змінної pointer - це посилання на функцію makePizza

*/

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result, pointer);

/*Оголошена функція `makePizza`
Оголошена змінна 'result'
Значення змінної `result` - це рядок `'Your pizza is being prepared, please wait.'`
Значення змінної `result` отримане за допомогою виклику функції
Оголошена змінна 'pointer'
Значення змінної `pointer` - це посилання на функцію `makePizza`*/



console.log('tsk 4.02');
/*


Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Mango", greet);

Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

*/
/*
Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

    Оголошена функція deliverPizza
    Оголошена функція makePizza
    Оголошена функція makeMessage
    Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
    Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
    Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."


*/

function deliverPizza02(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza02(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage02(pizzaName) {
  return;
}

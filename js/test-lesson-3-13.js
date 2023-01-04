console.log('');
console.log('tsk 3.13');
/*

Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), 
який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, 
метод поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, 
не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}

Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

*/

/*
Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив 
ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

    Оголошена змінна apartment.
    Значення змінної apartment - це об'єкт.
    Оголошена змінна keys.
    Значення змінної keys - це масив ["descr", "rating", "price"].
    Значення змінної keys отримане за допомогою методу Object.keys().
    Оголошена змінна values.
    Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
        Значення змінної values отримане за допомогою циклу for...of.


*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) { 
    values.push(apartment[key]);
}

console.log(keys); //(3) ['descr', 'rating', 'price']
console.log(values); //(3) ['Spacious apartment in the city center', 4, 2153]


/*
Оголошена змінна 'apartment'
Значення змінної 'apartment' - це об'єкт
Оголошена змінна 'keys'
Значення змінної 'keys' - це масив ['descr', 'rating', 'price']
Значення змінної 'keys' отримане за допомогою метода Object.keys()
Оголошена змінна 'values'
Значення змінної 'values' - це масив ['Spacious apartment in the city center', 4, 2153]
Значення змінної `values` отримане за допомогою циклу `for...of
*/

console.log('');
console.log('tsk 3.14');

//Задача. Підрахунок властивостей 2.0

/*
Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, 
можливо, але не обов'язково, цикл for...of.

    Оголошена функція countProps(object)
    Виклик countProps({}) повертає 0
    Виклик countProps({ name: "Mango", age: 2 }) повертає 2
    Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
    Функція підраховує тільки власні властивості об'єкта
    Функція використовує метод Object.keys() і, можливо, цикл for...of


*/
function countProps(object) {
  // Change code below this line
  let propCount = 0;
    //const keys = Object.keys(object);
    for (const key of Object.keys(object)) { 
        propCount += 1;
    }
  /*for (const key in object) {
    if (object.hasOwnProperty(key)) {
      ropCount += 1;
    }
  }*/
    //console.log(Object.keys(object).length);
  return propCount;
  // Change code above this line
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


console.log('');
console.log('tsk 3.15');

/*


Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) 
повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) 
поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

*/
/*
Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    Оголошена змінна keys
    Значення змінної keys - це масив ["descr", "rating", "price"]
    Оголошена змінна values
    Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
    Для отримання масиву ключів об'єкта apartment використовується Object.keys()
    Для отримання масиву значень об'єкта apartment використовується Object.values()


*/

const apartment15 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys15 = Object.keys(apartment15);
const values15 = Object.values(apartment15);

console.log(keys15);
console.log(values15);

/*
Оголошена змінна 'apartment'
Значення змінної 'apartment' - це об'єкт
Оголошена змінна 'keys'
Значення змінної 'keys' - це масив ['descr', 'rating', 'price']
Значення змінної 'keys' отримане за допомогою метода Object.keys()
Оголошена змінна 'values'
Значення змінної 'values' - це масив ['Spacious apartment in the city center', 4, 2153]
Значення змінної 'values' отримане за допомогою метода Object.values()
*/

console.log('');
console.log('tsk 3.16');

//Задача: витрати на зарплату
/*
Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, 
де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. 
Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. 
Використовуй змінну totalSalary для зберігання загальної суми зарплати.

    Оголошена функція countTotalSalary(salaries)
    Виклик countTotalSalary({}) повертає 0
    Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
    Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
    Функція враховує тільки власні властивості об'єкта

*/

function countTotalSalary16(salaries)
{ 
    let salaryAll = 0;
    for (const valueOfsalary of Object.values(salaries)) { 
        salaryAll += valueOfsalary;
    }

    return salaryAll;
}
//console.log(Object.values({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary16({}));

console.log(countTotalSalary16({ mango: 100, poly: 150, alfred: 80 }));

console.log(countTotalSalary16({ kiwi: 200, poly: 50, ajax: 150 }));




console.log('');
console.log('tsk 3.17');
/*
У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів.
 Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

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
];

Для перебирання такого масиву використовується стандартний цикл for...of. 
Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті
 набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
*/
/*
Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, 
а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

    Оголошена змінна colors
    Значення змінної colors - це масив
    Оголошена змінна hexColors
    Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
    Оголошена змінна rgbColors
    Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

*/

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) { 
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

/*
Оголошена змінна 'colors'
Значення змінної 'colors' - це масив
Оголошена змінна 'hexColors'
Значення змінної 'hexColors' - це масив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
Оголошена змінна 'rgbColors'
Значення змінної 'rgbColors' - це масив ['244,67,54', '33,150,243', '76,175,80', '255,235,59']
Значення змінних 'hexColors' і 'rgbColors' отримані за допомогою циклу 'for...of'
*/


console.log('');
console.log('tsk 3.18');
//Задача. Пошук об'єкта за значенням властивості
/*
Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. 
Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price).
 Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

    Оголошена функція getProductPrice(productName).
    Виклик getProductPrice("Radar") повертає 1300.
    Виклик getProductPrice("Grip") повертає 1200.
    Виклик getProductPrice("Scanner") повертає 2700.
    Виклик getProductPrice("Droid") повертає 400.
    Виклик getProductPrice("Engine") повертає null.
*/

const products18 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
    for (const productItem of products18) { 
        if (productItem.name === productName) return productItem.price;
    }
    return null;
  // Change code above this line
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));
/*
Оголошена функція getProductPrice(productName)
Виклик getProductPrice('Radar') повертає 1300
Виклик getProductPrice('Grip') повертає 1200
Виклик getProductPrice('Scanner') повертає 2700
Виклик getProductPrice('Droid') повертає 400
Виклик getProductPrice('Engine') повертає null
*/

console.log('');
console.log('tsk 3.19');
//Задача: колекція значень властивості
/*
Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

    Оголошена функція getAllPropValues(propName)
    Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
    Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
    Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
    Виклик getAllPropValues("category") повертає []
*/

const products19 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
    let collectionFromPropName = [];
    for (const productItem of products19) { 
        if ((Object.keys(productItem)).includes(propName))
        { 
            //console.log(Object.values(productItem));
            for (const key in productItem) {
                if (key === propName) collectionFromPropName.push(productItem[key]);
             }
        }
        
    }
    return collectionFromPropName;


  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));

/*
Оголошена функція getAllPropValues(propName)
Ваш код занадто довго виконується
Виклик getAllPropValues('quantity') повертає [4, 3, 7, 9]
Виклик getAllPropValues('price') повертає [1300, 2700, 400, 1200]
Виклик getAllPropValues('category') повертає []
*/


console.log('');
console.log('tsk 3.20');
//Задача: загальна вартість товару

/*
Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
 Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

    Оголошена функція calculateTotalPrice(productName)
    Виклик calculateTotalPrice("Blaster") повертає 0
    Виклик calculateTotalPrice("Radar") повертає 5200
    Виклик calculateTotalPrice("Droid") повертає 2800
    Виклик calculateTotalPrice("Grip") повертає 10800
    Виклик calculateTotalPrice("Scanner") повертає 8100

*/
const products20 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line



  // Change code above this line
}

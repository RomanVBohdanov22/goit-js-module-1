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
const keys15 = apartment;
const values15 = apartment;
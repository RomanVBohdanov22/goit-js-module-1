
//2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
//отримати детальну інформацію про студентів, які набрали більше 50 балів.
let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

const stud50P = studentRecords.filter(({ marks }) => marks > 50);

console.log(stud50P);


// Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr (ігноруйте чутливість до регістру).

var arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];
function removeDuplicates(arr) {
  // Ваш код
   return arr.filter((arrItem, index, arr) => arr.indexOf(arrItem)===index);
    ///return [...new Set(arr)];
    
}

console.log(removeDuplicates(arr));

/*
// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//++++++++++++++++++++++++++++++++++++++++++++

const makeProduct = (name, price, callback) => {};

*/

const makeProduct = (name, price, callback) => { 
    let innerObj =
    {   id: Date.now(),
        name,
        price,            
    };
    callback(innerObj);
};

const showProduct = (product) =>
{ 
    console.log(product); //функція-фабрика
}


makeProduct("Samsung", 2378, showProduct);
console.log('');
///////////////////


// Напишіть функцію propertyValue(array, key), яка приймає як аргументи масив об'єктів та
//ім'я властивості, а потім повертає всі значення даної властивості з масиву об'єктів.

var litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];
const propertyValue = (arrLit, key) => { 

    return arrLit.map((obj) => obj[key]);
}

console.log(propertyValue(litmir, "title")); // Улетела сказка,Восстание Аркан,Золотая лилия
console.log(propertyValue(litmir, "author")); // Хэленка,Коул Кресли,Райчел Мид
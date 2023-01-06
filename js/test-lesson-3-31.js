console.log('');
console.log('tsk 3.31');

/*

Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. 
Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл 
- коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

Повернемось до аналогії з яблуками. Якщо на підлозі лежать яблука і у нас є порожній ящик, 
то операція rest дозволить «зібрати» яблука в ящик. Водночас, оригінальні яблука залишаться на підлозі, 
а в ящику буде копія кожного яблука.

Одна зі сфер застосування операції rest - це створення функцій, які можуть приймати будь-яку кількість аргументів.

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри функції, то аргументи
 знаходяться у правій частині операції присвоювання, а параметри - у лівій, тому що значення 
 аргументів присвоюються оголошеним параметрам. Отже, можна «зібрати» всі аргументи функції в один параметр,
  використовуючи операцію rest.

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

*/
/*
Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, 
рахувала і повертала їх суму.

    Оголошена функція add
    Функція add використовує параметр args
    Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
    Виклик add(15, 27) повертає 42
    Виклик add(12, 4, 11, 48) повертає 75
    Виклик add(32, 6, 13, 19, 8) повертає 78
    Виклик add(74, 11, 62, 46, 12, 36) повертає 241

*/

// Change code below this line
function add(...args) {
  let summ = 0;
  for (const argument of args) {
    summ += argument;
  }
  return summ;
  // Change code above this line
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

/*
 Оголошена функція 'add'
Функція `add` використовує параметр `args`
Для збирання аргументів у змінну `args`, у підписі функції використовується синтаксис `...` (оператор `rest`)
Виклик `add(15, 27)` повертає 42
Виклик `add(12, 4, 11, 48)` повертає 75
Виклик `add(32, 6, 13, 19, 8)` повертає 78
Виклик `add(74, 11, 62, 46, 12, 36)` повертає 241
*/

console.log('');
console.log('tsk 3.32');

/*


Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, 
оголосивши параметри до «збирання».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Всі агументи, для яких будуть оголошені параметри, передадуть їм свої значення, 
інші аргументи будуть поміщені в масив. Операція rest збирає решту усіх аргументів,
 а тому повинна бути останньою у підписі функції, інакше виникне помилка.

*/
/*
Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum()
 таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. 
 Це число повинно бути першим параметром функції.

    Оголошена функція addOverNum()
    Виклик addOverNum(50, 15, 27) повертає 0
    Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
    Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
    Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218


*/

// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) total += arg;
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
/* 
Оголошена функція 'addOverNum'
Виклик addOverNum(50, 15, 27) повертає 0
Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218
*/

console.log('');
console.log('tsk 3.33');

//Задача. Масив збігів

/*
Функція findMatches() приймає довільну кількість аргументів. Першим аргументом 
завжди буде масив чисел, а решта аргументів будуть просто числами.

Доповни код функції таким чином, щоб вона повертала новий масив matches, 
в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], 
тому що тільки вони є в масиві першого аргументу.

    Оголошена функція findMatches()
    Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
    Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
    Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
    Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []

*/

// Change code below this line
function findMatches(tempArray, ...args) {
  const matches = []; // Don't change this line
  for (const item of args) {
    if (tempArray.includes(item)) matches.push(item);
  }
  //console.log(temps);
  //console.log(args);
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

/*
Оголошена функція 'findMatches'
Виклик `findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)` повертає `[1, 2]`
Виклик `findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)` повертає `[17, 89, 2]`
Виклик `findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)` повертає `[24, 9, 41]`
Виклик `findMatches([63, 11, 8, 29], 4, 7, 16)` повертає `[]`
*/

console.log('');
console.log('tsk 3.34');

/*


Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, 
інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться в масиві таких 
самих об'єктів, який є колекцією однотипних елементів.

Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. 
Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
const bookShelf = {
  books: ["Останнє королівство", "Страж снів"],
  // Це метод об'єкта
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log("Цей метод буде додавати нову книгу у властивість books");
  },
};

// Виклики методів
bookShelf.getBooks();
bookShelf.addBook("Нова книга");

Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними. 
Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName),
 але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// ❌ Слабкопозв'язані, незалежні сутності
const books = [];
function getBooks() {}
function addBook() {}


*/
/*
Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки 
за аналогією з getBooks() і addBook(bookName).

Метод removeBook(bookName) буде видаляти книгу за назвою. 
Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. 
Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - 
це значення параметрів oldName і newName відповідно.

    Оголошена змінна bookShelf

    Значення змінної bookShelf - це об'єкт

    Значення властивості bookShelf.getBooks - це метод об'єкта

    Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

    Значення властивості bookShelf.addBook - це метод об'єкта

    Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

    Значення властивості bookShelf.removeBook - це метод об'єкта

    Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

    Значення властивості bookShelf.updateBook - це метод об'єкта

    Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"

*/

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    //this.books.push(bookName);
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    //this.books.pop(bookName);
    return `Deleting book ${bookName}`;
  },
  updateBook(bookName1, bookName2) {
    return `Updating book ${bookName1} to ${bookName2}`;
  },
  // Change code above this line
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook('Haze'));
console.log(bookShelf.removeBook('Red sunset'));
console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

/*
 Оголошена змінна 'bookShelf'
Значення змінної 'bookShelf' - це об'єкт
Значення властивості `bookShelf.getBooks` - це метод об'єкта
Виклик методу `bookShelf.getBooks()` повертає рядок 'Returning all books'
Значення властивості `bookShelf.addBook` - це метод об'єкта
Виклик методу `bookShelf.addBook('Haze')` повертає рядок 'Adding book Haze'
Значення властивості `bookShelf.removeBook` - це метод об'єкта
Виклик методу `bookShelf.removeBook('Red sunset')` повертає рядок 'Deleting book Red sunset'
Значення властивості `bookShelf.updateBook` - це метод об'єкта
Виклик методу `bookShelf.updateBook('Sands of dune', 'Dune')` повертає рядок 'Updating book Sands of Dune to Dune
*/

console.log('');
console.log('tsk 3.35');
/*


Методи використовуються для роботи з властивостями об'єкта, їх зміни. Для доступу до об'єкта в методі 
використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. 
Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - 
це посилання на об'єкт bookShelf.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    console.log(this);
  },
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}

Для того щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, 
стандартно - «через крапку» до властивостей.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

Логічно замислитися - чому б не використовувати ім'я об'єкта у зверненні до властивостей, адже ми явно не 
збираємося його змінювати. Справа в тому, що ім'я об'єкта - річ ненадійна, методи одного об'єкта можна копіювати 
в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто під час створення об'єкта, ми наперед зовсім не знаємо імені.
 Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

*/

/*
Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName
 у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice()
  для того, щоб замінити цей елемент.

    Оголошена змінна bookShelf

    Значення змінної bookShelf - це об'єкт

    Значення властивості bookShelf.updateBook - це метод об'єкта

    Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення 
    властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

    Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення 
    властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

*/

const bookShelf35 = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  getBooks() {
    return this.books;
  },
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);

    // Change code above this line
  },
};

console.log(bookShelf35.getBooks());
console.log(bookShelf35.updateBook('Haze', 'Dungeon chronicles'));
console.log(bookShelf35.getBooks());
/*
Оголошена змінна 'bookShelf'
Значення змінної 'bookShelf' - це об'єкт
Значення властивості `bookShelf.updateBook` - це метод об'єкта
Після виклику методу `bookShelf.updateBook('Haze', 'Dungeon chronicles')`, значення властивості `books` - це масив `['The last kingdom', 'Dungeon chronicles', 'The guardian of dreams']`
Після виклику методу `bookShelf.updateBook('The last kingdom', 'Dune')`, значення властивості `books` - це масив `['Dune', 'Haze', 'The guardian of dreams']`
*/

console.log('');
console.log('tsk 3.36');
//Задача. Крамниця зілля «У старої жаби»
/*
До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.potions - це масив []

*/
const atTheOldToad = {
  // Change code below this line
  potions: [],

  // Change code above this line
};

console.log(atTheOldToad.potions);

/*
Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.potions` - це масив `[]`
*/

console.log('');
console.log('tsk 3.37');

//Задача. Отримуємо все зілля
/*
Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
    Значення властивості atTheOldToad.getPotions - це метод об'єкта
    Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

*/

const atTheOldToad37 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

console.log(atTheOldToad37.getPotions());

/*
Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.getPotions` - це метод об'єкта
Значення властивості `atTheOldToad.potions` - це масив `['Speed potion', 'Dragon breath', 'Stone skin']`
Виклик методу `atTheOldToad.getPotions()` повертає `['Speed potion', 'Dragon breath', 'Stone skin']
*/

console.log('');
console.log('tsk 3.38');

//Задача: додаємо нове зілля

/*
Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
    Значення властивості atTheOldToad.addPotion - це метод об'єкта
    Після першого виклику методу atTheOldToad.addPotion("Invisibility"), 
    у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
    Після другого виклику методу atTheOldToad.addPotion("Power potion"), 
    у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

*/

const atTheOldToad38 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);

    // Change code above this line
  },
};

console.log(atTheOldToad38.getPotions());
console.log(atTheOldToad38.addPotion('Invisibility'));
console.log(atTheOldToad38.getPotions());
console.log(atTheOldToad38.addPotion('Power potion'));
console.log(atTheOldToad38.getPotions());

/*
 Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.addPotion` - це метод об'єкта
Значення властивості `atTheOldToad.potions` - це масив `['Speed potion', 'Dragon breath', 'Stone skin']`
Після першого виклику методу `atTheOldToad.addPotion('Invisibility')`, 
у властивості `potions` буде масив `['Speed potion', 'Dragon breath', 'Stone skin', 'Invisibility']`
Після другого виклику методу `atTheOldToad.addPotion('Power potion')`, 
у властивості `potions` буде масив `['Speed potion', 'Dragon breath', 'Stone skin', 'Invisibility', 'Power potion']`
*/

console.log('');
console.log('tsk 3.39');

//Задача: видаляємо зілля

/*
Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
    Значення властивості atTheOldToad.removePotion - це метод об'єкта
    Після першого виклику методу atTheOldToad.removePotion("Dragon breath"),
     у властивості potions буде масив ["Speed potion", Stone skin"]
    Після другого виклику методу atTheOldToad.removePotion("Speed potion"),
     у властивості potions буде масив ["Stone skin"]

*/

const atTheOldToad39 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  removePotion(potionName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);

    // Change code above this line
  },
};

console.log(atTheOldToad39.getPotions());
console.log(atTheOldToad39.removePotion("Dragon breath"));
console.log(atTheOldToad39.getPotions());
console.log(atTheOldToad39.removePotion("Speed potion"));
console.log(atTheOldToad39.getPotions());

/*
Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.potions` - це масив `['Speed potion', 'Dragon breath', 'Stone skin']`
Значення властивості `atTheOldToad.removePotion` - це метод об'єкта
Після першого виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `['Speed potion', Stone skin']`
Після другого виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `['Stone skin']
*/

console.log('');
console.log('tsk 3.40');

//Задача: оновлюємо зілля
/*
Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName 
на newName в масиві зілля у властивості potions.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
    Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
    Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
    у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
    Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), 
    у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

*/
const atTheOldToad40 = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    getPotions() {
    return this.potions;
    },
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);

    // Change code above this line
  },
};

console.log(atTheOldToad40.getPotions());
console.log(atTheOldToad40.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad40.getPotions());
console.log(atTheOldToad40.updatePotionName("Stone skin", "Invisibility"));
console.log(atTheOldToad40.getPotions());

/*
Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.updatePotionName` - це метод об'єкта
Значення властивості `atTheOldToad.potions` - це масив `['Speed potion', 'Dragon breath', 'Stone skin']`
Після першого виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, 
у властивості `potions` буде масив `['Speed potion', 'Polymorth', 'Stone skin']`
Після другого виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invisibility')`, 
у властивості `potions` буде масив `['Speed potion', 'Polymorth', 'Invisibility']`
*/


console.log('');
console.log('tsk 3.41');
//Задача: розширюємо інвентар

/*
Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

{
  name: "Dragon breath",
  price: 700
}

Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

    getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
    addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, 
    але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
    removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
    updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

    Оголошена змінна atTheOldToad
    Значення змінної atTheOldToad - це об'єкт
    Значення властивості atTheOldToad.getPotions - це метод об'єкта
    Виклик методу atTheOldToad.getPotions() для вихідного об'єкта 
    повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

    Значення властивості atTheOldToad.addPotion - це метод об'єкта.

    Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), 
    в масиві potions останнім елементом буде цей об'єкт
    Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), 
    в масиві potions останнім елементом буде цей об'єкт
    
    Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
    Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
    
    Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
    Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється

    Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), 
    повертає рядок "Error! Potion Dragon breath is already in your inventory!"
    Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 
    повертає рядок "Error! Potion Stone skin is already in your inventory!"
    Значення властивості atTheOldToad.removePotion - це метод об'єкта
    Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"),
     у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
    Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), 
    у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
    Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
    Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
    у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, 
    { name: "Stone skin", price: 520 } ]
    Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), 
    у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, 
    { name: "Invulnerability potion", price: 520 } ]

*/

const atTheOldToad41 = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
    addPotion(newPotion) {
        
        for (const potionItem of this.potions) { 
            if (potionItem.name === newPotion.name)
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
        this.potions.push(newPotion);
    /*if (this.potions.includes(newPotion)) {
        } */
  },
  removePotion(potionName) {
      let potionIndex = -1;
      for (const potionItem of this.potions) { 
          if (potionItem.name === potionName) potionIndex = this.potions.indexOf(potionItem);
      }
      if (potionIndex === -1) {
          return `Potion ${potionName} is not in inventory!`;
      }
      this.potions.splice(potionIndex, 1);
      /*
    const potionIndex = this.potions.indexOf(potionName); 
    */
  },
  updatePotionName(oldName, newName) {
      let potionIndex = -1;
      for (const potionItem of this.potions) { 
          if (potionItem.name === oldName) potionIndex = this.potions.indexOf(potionItem);
      }
      if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
      }
      this.potions[potionIndex].name = newName;
      
    /*const potionIndex = this.potions.indexOf(oldName);
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1, newName);*/
  },
  // Change code above this line
};

console.log(atTheOldToad41.getPotions());

console.log(atTheOldToad41.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad41.getPotions());

console.log(atTheOldToad41.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad41.getPotions());

console.log(atTheOldToad41.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad41.addPotion({ name: "Stone skin", price: 240 }));

console.log(atTheOldToad41.getPotions());

console.log(atTheOldToad41.removePotion("Dragon breath"));
console.log(atTheOldToad41.removePotion("Speed potion"),);
console.log(atTheOldToad41.getPotions());

console.log(atTheOldToad41.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad41.updatePotionName("Stone skin", "Invulnerability potion"));
console.log(atTheOldToad41.getPotions());

/*
Оголошена змінна 'atTheOldToad'
Значення змінної `atTheOldToad` - це об'єкт
Значення властивості `atTheOldToad.getPotions` - це метод об'єкта
Значення властивості `atTheOldToad.addPotion` - це метод об'єкта
Значення властивості `atTheOldToad.removePotion` - це метод об'єкта
Значення властивості `atTheOldToad.updatePotionName` - це метод об'єкта
Виклик методу `atTheOldToad.getPotions()` для вихідного об'єкта повертає `[ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 } ]`
Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })`, в масиві `potions` останнім елементом буде цей об'єкт
Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Power potion', price: 270 })`, в масиві `potions` останнім елементом буде цей об'єкт
Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` повертає рядок з текстом з вихідного коду.
Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })`, повертає рядок `'Error! Potion Stone skin is already in your inventory!'`.
Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, повертає рядок `'Error! Potion Dragon breath is already in your inventory!'`.
Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` не додає в нього переданий об'єкт.
Для вихідного об'єкта після виклику `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, массив `potions` не змінюється.
Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`
*/
console.log('');
console.log('tsk 4.21');

/*


Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
 У підсумку, утворюється новий масив відфільтрованих об'єктів.

Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), 
гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston


*/

/*
Використовуючи метод filter(), доповни код таким чином, щоб:

    У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) 
    більший за або дорівнює значенню змінної MIN_RATING.
    У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), 
    яке збігається зі значенням у змінній AUTHOR.

    Оголошена змінна books
    Значення змінної books - це масив об'єктів
    Оголошена змінна MIN_RATING
    Значення змінної MIN_RATING - це число 8
    Оголошена змінна AUTHOR
    Значення змінної AUTHOR - це рядок "Bernard Cornwell"
    Оголошена змінна topRatedBooks
    Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
    Оголошена змінна booksByAuthor
    Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
    Для перебирання масиву books використаний метод filter()


*/


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
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

/*
// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
*/
// Change code below this line

const topRatedBooks = books.filter(({rating}) => rating >=MIN_RATING );
const booksByAuthor = books.filter(({author}) => author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

/*
Оголошена змінна `books`
Оголошена змінна `topRatedBooks`
Оголошена змінна `booksByAuthor`
Оголошена змінна `MIN_RATING`
Оголошена змінна `AUTHOR`
Значення змінної `books` - це масив об'єктів
Значення змінної `topRatedBooks` - це масив книг з рейтингом, вищим за `8`
Значення змінної `booksByAuthor` - це масив книг, автор яких `'Bernard Cornwell'`
Значення змінної `MIN_RATING` - це число8
Значення змінної `AUTHOR` - це рядок `'Bernard Cornwell'`
Для перебирання масиву `books` використаний метод `filter()`
*/


console.log('');
console.log('tsk 4.22');

/*
Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
*/
const testUsers = [
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
]

/*
Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, 
у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

    Оголошена змінна getUsersWithEyeColor
    Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
    Для перебирання параметра users використовується метод filter()
    Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з 
    іменами Moore Hensley, Sharlene Bush і Carey Barr
    Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з
     іменами Ross Vazquez і Elma Head
    Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з
     іменами Blackburn Dotson і Sheree Anthony
    Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const topRatedBooks = books.filter(({rating}) => rating >=MIN_RATING );
// Change code below this line
/*
const getUsersWithEyeColor = (users, color) => {
    return users.filter(({eyeColor}) => eyeColor === color);

};
*/
const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => eyeColor === color);
// Change code above this line


console.log("blue", getUsersWithEyeColor(testUsers, "blue"));
console.log("green", getUsersWithEyeColor(testUsers, "green"));
console.log("brown", getUsersWithEyeColor(testUsers, "brown"));

/*
Оголошена змінна `getUsersWithEyeColor`
Змінній `getUsersWithEyeColor` присвоєна стрілочна функція з параметрами `(users, color)`
Для перебирання масиву `users` використаний метод `filter()`
Якщо значення параметра `color` - це `'blue'`, функція повертає масив об'єктів користувачів з іменами `Moore Hensley`, `Sharlene Bush` и `Carey Barr`
Якщо значення параметра `color` - це `'green'`, функція повертає масив об'єктів користувачів з іменами `Ross Vazquez` и `Elma Head`
Якщо значення параметра `color` - це `'brown'`, функція повертає масив об'єктів користувачів з іменами `Blackburn Dotson` и `Sheree Anthony`
Якщо значення параметра `color` - це будь-який інший рядок, функція повертає порожній масив
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.23');

/*
Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
*/

const testUsers23 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

/*
Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, 
вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

    Оголошена змінна getUsersWithAge
    Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
    Для перебирання параметра users використовується метод filter()
    Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів 
    користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
    Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів
     користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
    Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => users.filter(({age}) => ((age>=minAge)&&(age<=maxAge)));

//{ };
// Change code above this line


//testUsers23

console.log(getUsersWithAge(testUsers23, 20, 30));
console.log(getUsersWithAge(testUsers23, 30, 40));
console.log(getUsersWithAge(testUsers23, 80, 100));

/*
Оголошена змінна `getUsersWithAge`
Змінній `getUsersWithAge` присвоєна стрілочна функція з параметрами `(users, minAge, maxAge)`
Для перебирання параметра `users` використаний метод `filter()`
Якщо значення параметрів `minAge` і `maxAge` дорівнюють `20` і `30` відповідно, 
функція повертає масив об'єктів користувачів з іменами `Ross Vazquez`, `Elma Head` і `Carey Barr`
Якщо значення параметрів `minAge` і `maxAge` дорівнюють `30` і `40` відповідно, 
функція повертає масив об'єктів користувачів з іменами `Moore Hensley`, `Sharlene Bush`, `Blackburn Dotson` і `Sheree Anthony`
Якщо значення параметрів `minAge` і `maxAge` дорівнюють `80` і `100` відповідно, 
функція повертає порожній масив
Виклик функції з випадковими, але валідними аргументами, повертає правильне значенняе
*/

console.log('');
console.log('tsk 4.24');

//

const testUsers24 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

/*
Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, 
у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

    Оголошена змінна getUsersWithFriend
    Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
    Для перебирання параметра users використовується метод filter()
    Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів
    з іменами Sharlene Bush і Sheree Anthony
    Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів
     з іменами Elma Head і Sheree Anthony
    Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => eyeColor === color);
/*
const getUsersWithEyeColor = (users, color) => {
    return users.filter(({eyeColor}) => eyeColor === color);

};
*/
// Change code below this line
const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));
// Change code above this line
//pizzas.includes(pizzaName)

console.log("Briana Decker", getUsersWithFriend(testUsers24, "Briana Decker"));
console.log("Goldie Gentry", getUsersWithFriend(testUsers24, "Goldie Gentry"));
console.log("Adrian Cross", getUsersWithFriend(testUsers24, "Adrian Cross"));

/*
Оголошена змінна `getUsersWithFriend`
Змінній `getUsersWithFriend` присвоєна стрілочна функція з параметрами `(users, friendName)`
Для перебирання параметра `users` використаний метод `filter()`
Якщо значення параметра `friendName` - це рядок `'Briana Decker'`, функція повертає масив об'єктів користувачів з іменами `Sharlene Bush` і `Sheree Anthony`
Якщо значення параметра `friendName` - це рядок `'Goldie Gentry'`, функція повертає масив об'єктів користувачів з іменами `Elma Head` і `Sheree Anthony`
Якщо значення параметра `friendName` - це рядок `'Adrian Cross'`, функція повертає порожній масив
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.25');


const testUsers25 = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
];

/*
Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх 
користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, 
зроби так, щоб масив, що повертається, не містив повторень.

    Оголошена змінна getFriends
    Змінній getFriends присвоєна стрілочна функція з параметром (users)
    Виклик функції із зазначеним масивом користувачів повертає масив 
    ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", 
    "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));
/*
const allGenres = books20.flatMap(books20 => books20.genres);
const uniqueGenres = allGenres.filter( (genre, index, array) =>  array.indexOf(genre) === index);
*/
// Change code below this line
const getFriends = (users) => users.flatMap(users => users.friends).filter( (friend, index, array) => array.indexOf(friend) === index);
// Change code above this line

console.log(getFriends(testUsers25));

/*
Оголошена змінна `getFriends`
Змінній `getFriends` присвоєна стрілочна функція з параметром `(users)`
Виклик функції із зазначеним масивом користувачів повертає масив
 `['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 
 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.26');

const testUsers26 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
];

/*
Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, 
значення властивості isActive яких - true.

    Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
    Для перебирання параметра users використовується метод filter()
    Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів 
    з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));
//const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => eyeColor === color);
// Change code below this line
const getActiveUsers = (users) => users.filter(({isActive}) => isActive);
// Change code above this line

console.log(getActiveUsers(testUsers26));

/*
 Оголошена змінна `getActiveUsers`
Змінній `getActiveUsers` присвоєна стрілочна функція з параметром `(users)`
Для перебирання параметра `users` використаний метод `filter()`
Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів
 з іменами `Sharlene Bush`, `Elma Head`, `Carey Barr` і `Sheree Anthony`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.27');

/*
Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, 
значення властивості isActive яких - false.

    Оголошена змінна getInactiveUsers.
    Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
    Для перебирання параметра users використовується метод filter()
    Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Moore Hensley, 
    Ross Vazquez і Blackburn Dotson
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(testUsers26));

/*
Оголошена змінна `getInactiveUsers`
Змінній `getInactiveUsers` присвоєна стрілочна функція з параметром `(users)`
Для перебирання параметра `users` використаний метод `filter()`
Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами `Sharlene Bush`, `Elma Head`, `Carey Barr` і `Sheree Anthony`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.28');

/*


Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, 
то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, 
після чого перебирання масиву припиняється. 
Тобто він шукає до першого збігу.

масив.find((element, index, array) => {
  // Тіло колбек-функції
});

    Не змінює оригінальний масив.
    Поелементо перебирає оригінальний масив.
    Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
    Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. 
Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined


 */
/*
Використовуючи метод find(), доповни код таким чином, щоб:

    У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
    У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

    Оголошена змінна books
    Значення змінної books - це масив
    Оголошена змінна BOOK_TITLE
    Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
    Оголошена змінна AUTHOR
    Значення змінної AUTHOR - це рядок "Robert Sheckley"
    Оголошена змінна bookWithTitle
    Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
    Оголошена змінна bookByAuthor
    Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
    Для перебирання масиву books використаний метод find()

*/
const books28 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR_28 = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR_28);

console.log(bookWithTitle);
console.log(bookByAuthor);

/*
Оголошена змінна `books`
Оголошена змінна `BOOK_TITLE`
Оголошена змінна `AUTHOR`
Оголошена змінна `bookWithTitle`
Оголошена змінна `bookByAuthor`
Значення змінної `books` - це масив
Значення змінної `BOOK_TITLE` - це рядок `'The Dream of a Ridiculous Man'
Значення змінної `AUTHOR` - це рядок `'Robert Sheckley'`
Значення змінної `bookWithTitle` - це об'єкт книги з назвою вище `'The Dream of a Ridiculous Man'
Значення змінної `bookByAuthor` - це об'єкт книги автора `'Robert Sheckley'`
Для перебирання масиву `books` використаний метод `find()`
*/

console.log('');
console.log('tsk 4.29');

const testUsers29 = [
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
Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, 
пошта якого (властивість email) збігається зі значенням параметра email.

    Оголошена функція getUserWithEmail(users, email)

    Для перебирання параметра users використовується метод find()

    Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony

    Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head

    Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson

    Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined

    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// Change code below this line
const getUserWithEmail = (users, email) => users.find((user) => user.email === email);
// Change code above this line


console.log(getUserWithEmail(testUsers29, "shereeanthony@kog.com"));
console.log(getUserWithEmail(testUsers29, "elmahead@omatom.com"));
console.log(getUserWithEmail(testUsers29, "blackburndotson@furnigeer.com"));
console.log(getUserWithEmail(testUsers29, "blackburndotson@furnigeer.com"));

/*
Оголошена змінна `getUserWithEmail`
Змінній `getUserWithEmail` присвоєна стрілочна функція з параметрами `(users, email))`
Для перебирання параметра `users` використаний метод `find()`
Якщо значення параметра `email` - це `'shereeanthony@kog.com'`, функція повертає об'єкт користувача з ім'ям `Sheree Anthony`
Якщо значення параметра `email` - це `'elmahead@omatom.com'`, функція повертає об'єкт користувача з ім'ям `Elma Head`
Якщо значення параметра `email` - це `'blackburndotson@furnigeer.com'`, функція повертає об'єкт користувача з ім'ям `Blackburn Dotson`
Якщо в масиві `users` відсутній користувач з поштою із параметра `email`, функція повертає `undefined`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.30');

/*


Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

масив.every((element, index, array) => {
  // Тіло колбек-функції
});

    Не змінює оригінальний масив.
    Поелементо перебирає оригінальний масив.
    Повертає true, якщо всі елементи масиву задовольняють умову.
    Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
    Перебирання масиву припиняється, якщо колбек повертає false.

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

При роботі з масивом об'єктів перевіряється значення якоїсь їх властивості.

*/
/*
Використовуючи метод every(), доповни код таким чином, щоб:

    У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
    У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
    У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
    У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
    У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
    У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

    Оголошена змінна firstArray
    Значення змінної firstArray - це масив [26, 94, 36, 18]
    Оголошена змінна secondArray
    Значення змінної secondArray - це масив [17, 61, 23]
    Оголошена змінна thirdArray
    Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
    Оголошена змінна eachElementInFirstIsEven
    Значення змінної eachElementInFirstIsEven - це буль true
    Оголошена змінна eachElementInFirstIsOdd
    Значення змінної eachElementInFirstIsOdd - це буль false
    Оголошена змінна eachElementInSecondIsEven
    Значення змінної eachElementInSecondIsEven - це буль false
    Оголошена змінна eachElementInSecondIsOdd
    Значення змінної eachElementInSecondIsOdd - це буль true
    Оголошена змінна eachElementInThirdIsEven
    Значення змінної eachElementInThirdIsEven - це буль false
    Оголошена змінна eachElementInThirdIsOdd
    Значення змінної eachElementInThirdIsOdd - це буль false
    Для перебирання масивів використаний метод every()

*/
//[1, 2, 3, 4, 5].every((value) => value >= 0);

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => (value % 2) === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => (value % 2) != 0);

const eachElementInSecondIsEven = secondArray.every((value) => (value % 2) === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => (value % 2) != 0);

const eachElementInThirdIsEven = thirdArray.every((value) => (value % 2) === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => (value % 2) != 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

/*
 Оголошена змінна `firstArray`
Оголошена змінна `secondArray`
Оголошена змінна `thirdArray`
Оголошена змінна `eachElementInFirstIsEven`
Оголошена змінна `eachElementInFirstIsOdd`
Оголошена змінна `eachElementInSecondIsEven`
Оголошена змінна `eachElementInSecondIsOdd`
Оголошена змінна `eachElementInThirdIsEven`
Оголошена змінна `eachElementInThirdIsOdd`
Значення змінної `firstArray` - це масив `[26, 94, 36, 18]`
Значення змінної `secondArray` - це масив `[17, 61, 23]`
Значення змінної `thirdArray` - це масив `[17, 26, 94, 61, 36, 23, 18]`
Значення змінної `eachElementInFirstIsEven` - це буль `true`
Значення змінної `eachElementInFirstIsOdd` - це буль `false`
Значення змінної `eachElementInSecondIsEven` - це буль `false`
Значення змінної `eachElementInSecondIsOdd` - це буль `true`
Значення змінної `eachElementInThirdIsEven` - це буль `false`
Значення змінної `eachElementInThirdIsOdd` - це буль `false`
Для перебирання масивів використаний метод `every()`
*/

console.log('');
console.log('tsk 4.31');

const testUsers31 = [
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
Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

    Оголошена змінна isEveryUserActive
    Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
    Для перебирання параметра users використовується метод every()
    Виклик функції із зазначеним масивом користувачів повертає false
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
//const eachElementInFirstIsEven = firstArray.every((value) => (value % 2) === 0);
// Change code below this line
const isEveryUserActive = (users) => users.every(({isActive})=> isActive);
// Change code above this line

console.log(isEveryUserActive(testUsers31));

/*
Оголошена змінна `isEveryUserActive`
Змінній `isEveryUserActive` присвоєна стрілочна функція з параметром `(users)`
Для перебирання параметра `users` використаний метод `every()`
Виклик функції із зазначеним масивом користувачів повертає буль `false`
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/



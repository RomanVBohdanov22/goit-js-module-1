console.log('');
console.log('tsk 4.42');

/*

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
];
/*
Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
 відсортований за зростанням їх балансу (властивість balance).

    Оголошена змінна sortByAscendingBalance
    Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром (users)
    Значення параметра users не змінюється
    Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, 
    відсортований за зростанням їх балансу
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
    Для перебирання параметра users використаний метод sort()

*/
/*
const getTotalFriendCount = users => {
    return users.reduce((friendsCount, user) =>
    {return (friendsCount + user.friends.length)}, 0);
};
*/
//[...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
//[...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
//[...books].sort((firstBook, secondBook) => (secondBook.author).localeCompare(firstBook.author));
//[...books].sort((firstBook, secondBook) => (firstBook.author).localeCompare(secondBook.author));

// Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
};
// Change code above this line


console.log(sortByAscendingBalance(testUsers));


/*
Оголошена змінна `sortByAscendingBalance`
Змінній `sortByAscendingBalance` присвоєна стрілочна функція з параметром `(users)`
Значення параметра `users` не змінюється
Для перебирання параметра `users` використаний метод `sort()`
Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за зростанням їх балансу
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/


console.log('');
console.log('tsk 4.43');

const testUsers43 = [
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
Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, 
відсортований за спаданням кількості їхніх друзів (властивість friends).

    Оголошена змінна sortByDescendingFriendCount
    Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
    Значення параметра users не змінюється
    Для перебирання параметра users використаний метод sort()
    Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований 
    за спаданням кількості їхніх друзів
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/

// Change code below this line
const sortByDescendingFriendCount = users => {
   return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
};
// Change code above this line

console.log(sortByDescendingFriendCount(testUsers43));

/*
 Оголошена змінна `sortByDescendingFriendCount`
Змінній `sortByDescendingFriendCount` присвоєна стрілочна функція з параметром `(users)`
Значення параметра `users` не змінюється
Для перебирання параметра `users` використаний метод `sort()`
Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, 
відсортований за спаданням кількості їхніх друзів
Виклик функції з випадковими, але валідними аргументами, повертає правильне значенн
*/

console.log('');
console.log('tsk 4.44');

const testUsers44 = [
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
Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів,
 відсортований за їх ім'ям (властивість name) в алфавітному порядку.

    Оголошена змінна sortByName
    Змінній sortByName присвоєна стрілочна функція з параметром (users)
    Значення параметра users не змінюється
    Для перебирання параметра users використаний метод sort()
    Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
     відсортований за ім'ям в алфавітному порядку
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

*/
/*
const sortedByAuthorName = [...books].sort((firstBook, secondBook) => (firstBook.author).localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => (secondBook.author).localeCompare(firstBook.author));
*/
// Change code below this line
const sortByName = users => {

    return [...users].sort((firstUser, secondUser) => (firstUser.name).localeCompare(secondUser.name));

};
// Change code above this line

console.log(sortByName(testUsers44));

/*
 Оголошена змінна `sortByName`
Змінній `sortByName` присвоєна стрілочна функція з параметром `(users)`
Значення параметра `users` не змінюється
Для перебирання параметра `users` використаний метод `sort()`
Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за ім'ям
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
*/

console.log('');
console.log('tsk 4.45');

/*


У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми 
відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень
 властивості name з відсортованого масиву.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. 
Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.

Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. 
Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

    Робимо копію вихідного масиву перед сортуванням.
    На копії викликаємо метод sort().
    До результату роботи методу sort() застосовуємо метод map().
    Змінній names присвоюється результат роботи методу map().

Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

    На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
    До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
    На результаті методу filter() викликаємо sort().
    Змінній uniqueSortedCourses присвоюється результат роботи методу sort().

Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. По-перше, 
перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного 
наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.

*/

/*
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг 
книг яких більший за значення змінної MIN_BOOK_RATING.

    Оголошена змінна books
    Значення змінної books - це вихідний масив об'єктів
    Оголошена змінна MIN_BOOK_RATING
    Значення змінної MIN_BOOK_RATING - це число 8
    Оголошена змінна names
    Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
    Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
    Використовується ланцюжок методів filter, map, sort

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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books;
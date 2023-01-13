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
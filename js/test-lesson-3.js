console.log('');
console.log('tsk 3.1');
/*
Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

Для оголошення використовуються фігурні дужки {} - літерал об'єкта. При створенні об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок. Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

*/

/*
Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

    imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
    descr - опис, значення "Spacious apartment in the city center";
    rating - рейтинг, значення 4;
    price - ціна, значення 2153;
    tags - метаінформація, масив ["premium", "promoted", "top"].

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    Об'єкт містить властивість imgUrl
    Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
    Об'єкт містить властивість descr
    Значення властивості descr - це рядок "Spacious apartment in the city center"
    Об'єкт містить властивість rating
    Значення властивості rating - це число 4
    Об'єкт містить властивість price
    Значення властивості price - це число 2153
    Об'єкт містить властивість tags
    Значення властивості tags - це масив ["premium", "promoted", "top"]

*/

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

console.log(apartment);
console.log(apartment.imgUrl);
console.log(apartment.descr);
console.log(apartment.rating);
console.log(apartment.price);
console.log(apartment.tags[0], apartment.tags[1], apartment.tags[2]);


console.log('');
console.log('tsk 3.2');

/*

Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

Наприклад, статистика користувача соціальної мережі складається з кількості послідовників, переглядів і лайків, 
і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування, окремо країна і місто.

В майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною 
кількістю послідовників тощо.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
*/

/*
Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

    name - ім'я власника, значення "Henry";
    phone - телефон, значення "982-126-1588";
    email - пошта, значення "henry.carter@aptmail.com".

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
    В об'єкті apartment присутня властивість owner
    Значення властивості owner - це об'єкт
    В об'єкті owner присутня властивість name
    Значення властивості name - це "Henry"
    В об'єкті owner присутня властивість phone
    Значення властивості phone - це "982-126-1588"
    В об'єкті owner присутня властивість email
    Значення властивості email - це "henry.carter@aptmail.com"

*/

const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    }
};
/*Оголошена змінна 'apartment'
Значення змінної 'apartment' - це об'єкт
В об'єкта змінної 'apartment' присутні властивості 'imgUrl', 'descr', 'rating', 'price' і 'tag' зі значеннями
Значення властивості 'owner' - це об'єкт
В об'єкті 'owner' присутня властивість 'name'. Значення властивості 'name' - це 'Henry'
В об'єкті 'owner' присутня властивість phone'. Значення властивості 'phone' - це '982-126-1588'.
В об'єкті 'owner' присутня властивість 'email'. Значення властивості 'email' - це 'henry.carter@aptmail.com'. */


console.log('');
console.log('tsk 3.3');

/*
Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості.
 Здебільшого використовується синтаксис «через крапку» і підходить тоді, коли ми заздалегідь знаємо ім'я (ключ)
  властивості, до якої хочемо отримати доступ.

    На місце звернення буде повернуте значення властивості з таким ім'ям.
    Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

*/

/*
Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

    aptRating - рейтинг;
    aptDescr - опис;
    aptPrice - ціна;
    aptTags - теги.

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tag зі значеннями
    Оголошена змінна aptRating
    Значення змінної aptRating - це число 4
    Оголошена змінна aptDescr
    Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
    Оголошена змінна aptPrice
    Значення змінної aptPrice - це число 2153
    Оголошена змінна aptTags
    Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

*/

const apartment3 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment3.rating;
const aptDescr = apartment3.descr;
const aptPrice = apartment3.price;
const aptTags = apartment3.tags;
// Change code above this line

/*
Оголошена змінна 'apartment'
Значення змінної 'apartment' - це об'єкт
В об'єкта змінної 'apartment' присутні властивості 'imgUrl', 'descr', 'rating', 'price' і 'tag' зі значеннями.
Оголошена змінна 'aptRating'
Значення змінної 'aptRating'- це число '4'.
Оголошена змінна 'aptDescr'
Значення змінної 'aptDescr' - це рядок 'Spacious apartment in the city center'.
Оголошена змінна 'aptPrice'
Значення змінної 'aptPrice'- це число 2153.
Оголошена змінна 'aptTags'
Значення змінної 'aptTags' - це масив рядків `['premium', 'promoted', 'top'].
*/

console.log('');
console.log('tsk 3.4');


/*
Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country, де user.location - це звернення (шлях) до об'єкта у властивості location, а user.locaton.country - звернення до властивості country в цьому об'єкті. Тобто, «крапка» вказує наступну вкладеність.

const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // "Jamaica"

Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

*/

/*
Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

    ownerName - ім'я власника;
    ownerPhone - телефон власника;
    ownerEmail - пошта власника;
    numberOfTags - кількість елементів масиву у властивості tags;
    firstTag - перший елемент масиву у властивості tags;
    lastTag - останній елемент масиву у властивості tags.

    Оголошена змінна apartment за допомогою const
    Значення змінної apartment - це об'єкт
    Оголошена змінна ownerName за допомогою const
    Значення змінної ownerName - це рядок "Henry"
    Оголошена змінна ownerPhone за допомогою const
    Значення змінної ownerPhone - це "982-126-1588"
    Оголошена змінна ownerEmail за допомогою const
    Значення змінної ownerEmail - це "henry.carter@aptmail.com"
    Оголошена змінна numberOfTags за допомогою const
    Значення змінної numberOfTags - це 3
    Оголошена змінна firstTag за допомогою const
    Значення змінної firstTag - це "premium"
    Оголошена змінна lastTag за допомогою const
    Значення змінної lastTag - це "top"


*/

const apartment4 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment4.owner.name;
const ownerPhone = apartment4.owner.phone;
const ownerEmail = apartment4.owner.email;
const numberOfTags = apartment4.tags.length;
const firstTag = apartment4.tags[0];
const lastTag = apartment4.tags[apartment4.tags.length-1];
// Change code above this line

/*
Оголошена змінна 'apartment' за допомогою 'const'
Оголошена змінна 'ownerName' за допомогою 'const'
Оголошена змінна 'ownerPhone' за допомогою 'const'
Оголошена змінна 'ownerEmail' за допомогою 'const'
Оголошена змінна 'numberOfTags' за допомогою 'const'
Оголошена змінна 'firstTag' за допомогою 'const'
Оголошена змінна 'lastTag' за допомогою 'const'
Значення змінної `ownerName` - це рядок 'Henry'
Значення змінної `ownerPhone` - це рядок '982-126-1588'
Значення змінної `ownerEmail` - це рядок 'henry.carter@aptmail.com'
Значення змінної `numberOfTags` - це число 3
Значення змінної `firstTag` - це рядок 'premium'
Значення змінної `lastTag` - це рядок 'top'
*/

onsole.log('');
console.log('tsk 3.5');

/*


Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"]. 
Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

Синтаксис «квадратних дужок» використовується значно рідше. Як правило у випадках, 
коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра функції, наприклад).

    На місце звернення буде повернуто значення властивості з таким ім'ям.
    Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"


*/
/*


Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, 
використовуючи синтаксис «квадратних дужок».

    aptRating - рейтинг;
    aptDescr - опис;
    aptPrice - ціна;
    aptTags - теги.

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    Оголошена змінна aptRating
    Значення змінної aptRating - це 4
    Оголошена змінна aptDescr
    Значення змінної aptDescr - це "Spacious apartment in the city center"
    Оголошена змінна aptPrice
    Значення змінної aptPrice - це 2153
    Оголошена змінна aptTags
    Значення змінної aptTags - це ["premium", "promoted", "top"]


*/

const apartment5 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating5 = apartment;
const aptDescr5 = apartment;
const aptPrice5 = apartment;
const aptTags5 = apartment;
// Change code above this line
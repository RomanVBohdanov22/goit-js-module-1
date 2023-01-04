console.log('');
console.log('tsk 3.21');
/*
Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публічному" : "закритому";
const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання 
менш «шумним».

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

Деструктуризація завжди знаходиться у лівій частині операції присвоєння. Змінним всередині фігурних дужок присвоюються значення 
властивостей об'єкта. Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання, в іншому випадку їй буде 
присвоєно undefined. Порядок оголошення змінних у фігурних дужках не важливий.

*/
/*
Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). 
Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

    Оголошена змінна highTemperatures
    Значення змінної highTemperatures - це об'єкт
    Оголошена змінна yesterday за допомогою деструктуризації
    Значення змінної yesterday - це число 28
    Оголошена змінна today за допомогою деструктуризації
    Значення змінної today - це число 26
    Оголошена змінна tomorrow за допомогою деструктуризації
    Значення змінної tomorrow - це число 33
    Оголошена змінна meanTemperature
    Значення змінної meanTemperature - це число 29
    Використовується синтаксис деструктуризації об'єкта highTemperatures

*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(yesterday, today, tomorrow, meanTemperature);
/*
Оголошена змінна 'highTemperatures'
Значення змінної 'highTemperatures' - це об'єкт
Оголошена змінна 'meanTemperature'
Значення змінної 'meanTemperature' - це число 29
Оголошена змінна 'yesterday' за допомогою деструктуризації
Значення змінної 'yesterday' - це число 28
Оголошена змінна 'today' за допомогою деструктуризації
Значення змінної 'today' - це число 26
Оголошена змінна 'tomorrow' за допомогою деструктуризації
Значення змінної 'tomorrow' - це число 33
Використовується синтаксис деструктуризації об'єкта highTemperatures
*/

console.log('');
console.log('tsk 3.22');

/*
З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей,
 можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі, коли в 
 об'єкті відсутня властивість з таким ім'ям.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"
*/

/*
У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. 
Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації 
властивостей об'єкта highTemperatures. Задай значення за замовчуванням 
для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

    Оголошена змінна highTemperatures
    Значення змінної highTemperatures - це об'єкт
    Оголошена змінна highTemperatures
    Значення змінної highTemperatures - це об'єкт
    Оголошена змінна yesterday за допомогою деструктуризації
    Значення змінної yesterday - це число 28
    Оголошена змінна today за допомогою деструктуризації
    Значення змінної today - це число 26
    Оголошена змінна tomorrow за допомогою деструктуризації
    Значення змінної tomorrow - це число 33
    Оголошена змінна icon за допомогою деструктуризації
    Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
    Використовується деструктуризація об'єкта

*/

const highTemperatures22 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday22, today22, tomorrow22, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures22;
/*
const yesterday22 = highTemperatures.yesterday;
const today22 = highTemperatures.today;
const tomorrow22 = highTemperatures.tomorrow;
const icon22 = highTemperatures.icon;*/

// Change code above this line
const meanTemperature22 = (yesterday22 + today22 + tomorrow22) / 3;

console.log(highTemperatures22, icon);

/*
Оголошена змінна 'highTemperatures'
Значення змінної 'highTemperatures' - це об'єкт
Оголошена змінна 'meanTemperature'
Значення змінної 'meanTemperature' - це число 29
Оголошена змінна 'yesterday' за допомогою деструктуризації
Значення змінної 'yesterday' - це число 28
Оголошена змінна 'icon' за допомогою деструктуризації
Значення змінної 'icon' - це рядок 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
Оголошена змінна 'today' за допомогою деструктуризації
Значення змінної 'today' - це число 26
Оголошена змінна 'tomorrow' за допомогою деструктуризації
Значення змінної 'tomorrow' - це число 33
Використовується синтаксис деструктуризації об'єкта highTemperatures
*/


console.log('');
console.log('tsk 3.23');
/*
Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості. 
Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку 
і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

const firstBook = {
  title: "Останнє королівство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480

Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

*/
/*
Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації
 властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon
  - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

    Оголошена змінна highTemperatures
    Значення змінної highTemperatures - це об'єкт
    Оголошена змінна highYesterday
    Значення змінної highYesterday - це число 28
    Оголошена змінна highToday
    Значення змінної highToday - це число 26
    Оголошена змінна highTomorrow
    Значення змінної highTomorrow - це число 33
    Оголошена змінна highIcon
    Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
    Використовується деструктуризація об'єкта

*/

const highTemperatures23 = {
  yesterday23: 28,
  today23: 26,
  tomorrow23: 33,
};
// Change code below this line

//const { yesterday23: highYesterday23,  today23: highToday23, tomorrow23: highTomorrow23 } = highTemperatures23;

const { yesterday23: highYesterday23,  today23: highToday23, tomorrow23: highTomorrow23, icon23: highIcon23 = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures23;
/*
const highYesterday23 = highTemperatures.yesterday;
const highToday23 = highTemperatures.today;
const highTomorrow23 = highTemperatures.tomorrow;
const highIcon23 = highTemperatures.icon; */

// Change code above this line
const meanTemperature23 = (highYesterday23 + highToday23 + highTomorrow23) / 3;
console.log(highTemperatures23);

console.log(highYesterday23, highToday23, highTomorrow23, highIcon23);


console.log('');
console.log('tsk 3.24');
/*


Під час перебирання масиву об'єктів циклом for...of 
відбуваються багаторазові звернення до властивостей об'єкта.

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
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

Для того щоб скоротити кількість повторень, 
можна деструктуризувати властивості 
об'єкта у локальні змінні в тілі циклу.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати 
безпосередньо в місці оголошення змінної book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
*/
/*
Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

    Оголошена змінна colors
    Значення змінної colors - це масив
    Оголошена змінна hexColors
    Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
    Оголошена змінна rgbColors
    Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
    Для перебирання масиву використовується цикл for...of
    В циклі for...of використовується деструктуризація об'єкта


*/
const colors24 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors24 = [];
const rgbColors24 = [];
// Change code below this line

/*for (const color of colors24) {
  hexColors24.push(color.hex);
  rgbColors24.push(color.rgb);
}*/

for (const {hex, rgb} of colors24) { 
    hexColors24.push(hex);
    rgbColors24.push(rgb);
}

console.log(hexColors24, rgbColors24);
/*
 Оголошена змінна 'colors'
Значення змінної 'colors' - це масив
Оголошена змінна 'hexColors'
Значення змінної 'hexColors' - це масив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
Оголошена змінна 'rgbColors'
Значення змінної 'rgbColors' - це масив ['244,67,54', '33,150,243', '76,175,80', '255,235,59']
Для перебирання масиву використовується цикл 'for...of'
В циклі 'for...of' використовується деструктуризація об'єкта
*/

console.log('');
console.log('tsk 3.25');

/*
Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, 
що й в трьох попередніх вправах.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
*/
/*
Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
 а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією 
 деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, 
 змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

    Оголошена змінна forecast
    Значення змінної forecast - це об'єкт
    Оголошена змінна highToday за допомогою деструктуризації
    Значення змінної highToday - це число 32
    Оголошена змінна lowToday за допомогою деструктуризації
    Значення змінної lowToday - це число 28
    Оголошена змінна todayIcon за допомогою деструктуризації
    Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
    Оголошена змінна highTomorrow за допомогою деструктуризації
    Значення змінної highTomorrow - це число 31
    Оголошена змінна lowTomorrow за допомогою деструктуризації
    Значення змінної lowTomorrow - це число 27
    Оголошена змінна tomorrowIcon за допомогою деструктуризації
    Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
    Використовується синтаксис деструктуризації об'єкта highTemperatures

*/

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line


const {
today: {high: highToday, low: lowToday, icon: todayIcon},
tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
} = forecast;

/*Правильніше:
 const {
today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
} = forecast;

*/
/*
const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;*/

console.log(highToday, lowToday, todayIcon);
console.log(highTomorrow, lowTomorrow, tomorrowIcon);

console.log('');
console.log('tsk 3.26');


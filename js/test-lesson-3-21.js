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

/*


Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатися, 
в якій послідовності і що передавати. В результаті виходить дуже неочевидний код у місці її виклику.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);

Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему, замінюючи набір параметрів всього
 одним - об'єктом з іменованими властивостями.

function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
doStuffWithBook({
  title: "Останнє королівство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});

Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book.

// Це можна зробити в тілі функції.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// Або в сигнатурі (підписі), різниці немає.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}


*/

/*
Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
 об'єкт температур на два дні наступного формату.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}

Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією
 операцією деструктуризації властивостей об'єкта forecast.

    Оголошена функція calculateMeanTemperature(forecast)
    В тілі функції використовується деструктуризація об'єкта
    В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
    В тілі функції оголошена змінна todayLow за допомогою деструктуризації
    В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
    В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
    Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5
    Виклик calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) повертає 37


*/

function calculateMeanTemperature(forecast) {
// В тілі функції використовується деструктуризація об'єкта

    const {
today: {low: todayLow, high: todayHigh},
tomorrow: {low: tomorrowLow, high: tomorrowHigh}
} = forecast;
    
  
//const todayLow = forecast.today.low;
  //const todayHigh = forecast.today.high;
 // const tomorrowLow = forecast.tomorrow.low;
 // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));

/*
 Оголошена функція calculateMeanTemperature(forecast)
Виклик 'calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })' повертає 28.5
Виклик 'calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })' повертає 37
В тілі функції використовується деструктуризація об'єкта
В тілі функції оголошена змінна `todayHigh` за допомогою деструктуризації
В тілі функції оголошена змінна `todayLow` за допомогою деструктуризації
В тілі функції оголошена змінна `tomorrowHigh` за допомогою деструктуризації
В тілі функції оголошена змінна `tomorrowLow` за допомогою деструктуризації
*/


console.log('');
console.log('tsk 3.27');
/*


Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце,
 в якому очікується набір окремих значень. Звичайно, існують деякі обмеження, наприклад, 
 не можна розподілити масив в об'єкт і навпаки.

Можна навести аналогію з ящиком яблук. Поставивши ящик на підлогу, не виймаючи з нього яблука, 
отримаємо аналог масиву значень. Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента. 
Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

Наприклад, метод Math.max (аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, 
а довільну кількість аргументів.

const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

Тобто запис Math.max (... [14, -4, 25, 8, 11]), після інтерпретації 
перетворюється у Math.max (14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив, 
тобто розподіляє його елементи у якості окремих аргументів.

*/
/*
У змінній scores зберігається масив результатів тестування. Використовуючи розподіл 
і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

    Оголошена змінна scores
    Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
    Оголошена змінна bestScore
    Значення змінної bestScore - це число 93
    Оголошена змінна worstScore
    Значення змінної worstScore - це число 17
    Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
    Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

*/

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


console.log(bestScore, worstScore);

/*
Оголошена змінна 'scores'
Значення змінної `scores` - це масив [89, 64, 42, 17, 93, 51, 26]
Оголошена змінна 'bestScore'
Значення змінної `bestScore` - це число 93
Оголошена змінна 'worstScore'
Значення змінної `worstScore` - це число 17
Для передачі аргументів методу Math.max() використовується синтаксис '...' на масиві 'scores'
Для передачі аргументів методу Math.min() використовується синтаксис '...' на масиві 'scores'
*/

console.log('');
console.log('tsk 3.28');

/*

Операція .spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
 Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію. 
Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його 
в іншу колекцію. За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. Оригінальні ящики (масиви)
 не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий - 
 він впливає на порядок елементів у новій колекції.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

*/
/*
У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати
 тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

    У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
    У змінній bestScore був найвищий загальний бал.
    У змінній worstScore був найнижчий загальний бал.

    Оголошена змінна firstGroupScores
    Значення змінної firstGroupScores - це масив [64, 42, 93]
    Оголошена змінна secondGroupScores
    Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
    Оголошена змінна thirdGroupScores
    Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
    Оголошена змінна allScores.
    Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
    Оголошена змінна bestScore
    Значення змінної bestScore - це число 97
    Оголошена змінна worstScore
    Значення змінної worstScore - це число 14
    Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
    Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
    Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

*/

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore28 = Math.max(...allScores);
const worstScore28 = Math.min(...allScores);

console.log(bestScore28, worstScore28);

/*
Оголошена змінна 'firstGroupScores'
Значення змінної `firstGroupScores` - це масив [64, 42, 93]
Оголошена змінна 'secondGroupScores'
Значення змінної `secondGroupScores` - це масив [89, 14, 51, 26]
Оголошена змінна 'thirdGroupScores'
Значення змінної `thirdGroupScores` - це масив [89, 14, 51, 26]
Оголошена змінна 'allScores'
Значення змінної `allScores` - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
Оголошена змінна 'bestScore'
Значення змінної `bestScore` - це число 97
Оголошена змінна 'worstScore'
Значення змінної `worstScore` - це число 14
Для передачі аргументів методу Math.max() використовується синтаксис '...' на масиві 'allScores'
Для передачі аргументів методу Math.min() використовується синтаксис '...' на масиві 'allScores'

    Для присвоєння значення змінної `allScores` використовувався синтаксис `...` для заповнення масиву
*/

console.log('');
console.log('tsk 3.29');
/*
Операція spread дозволяє розподілити властивості довільної кількості об'єктів в один новий.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

Порядок розподілу має значення. Імена властивостей об'єкта - унікальні, тому властивості об'єкта, 
що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

Якби яблука в ящику мали наліпки з позначками, то в одному ящику не може бути двох яблук з однаковими 
позначками. Тому, пересипаючи другий ящик, усі яблука, позначки яких будуть збігатися з тими, що вже 
знаходяться у новому ящику, замінять існуючі.

Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність імені 
властивості і про те, що її значення може бути перезаписане.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


*/
/*
В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у 
змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, 
вони зберігаються у змінній overrideSettings.

Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням 
і поверх них застосувати перевизначені налаштування. Доповни код таким чином, 
щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

    Оголошена змінна defaultSettings
    Значення змінної defaultSettings - це об'єкт
    Оголошена змінна overrideSettings
    Значення змінної overrideSettings - це об'єкт
    Оголошена змінна finalSettings
    Значення змінної finalSettings - це об'єкт
    Значення властивості finalSettings.theme дорівнює "light"
    Значення властивості finalSettings.public дорівнює "false"
    Значення властивості finalSettings.withPassword дорівнює "true"
    Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
    Значення властивості finalSettings.timePerQuestion дорівнює 30
    Для присвоєння значення змінній finalSettings використовується синтаксис ...


*/


const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};

console.log(finalSettings.theme);
console.log(finalSettings.public);

console.log(finalSettings.withPassword);
console.log(finalSettings.minNumberOfQuestions);

console.log(finalSettings.timePerQuestion);

/*
Оголошена змінна 'defaultSettings'
Значення змінної `defaultSettings` - це об'єкт
Оголошена змінна 'overrideSettings'
Значення змінної `overrideSettings` - це об'єкт
Оголошена змінна 'finalSettings'
Значення змінної `finalSettings` - це об'єкт
Значення властивості 'finalSettings.theme' дорівнює 'light'
Значення властивості 'finalSettings.public' дорівнює false
Значення властивості 'finalSettings.withPassword' дорівнює true
Значення властивості 'finalSettings.minNumberOfQuestions' дорівнює 10
Значення властивості 'finalSettings.timePerQuestion' дорівнює 30
Для присвоєння значення змінній 'finalSettings' використовується синтаксис '...'
*/

console.log('');
console.log('tsk 3.30');

//Задача. Картки завдань

/*
Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

    text - текст завдання.
    category - категорія завдання.
    priority - пріоритет завдання.

Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. 
У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, 
можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні 
бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

    Оголошена функція makeTask(data)
    Виклик makeTask({}) 
            повертає { category: "General", priority: "Normal", completed: false }
    Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
            повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
    Виклик makeTask({ category: "Finance", text: "Take interest" }) 
            повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
    Виклик makeTask({ priority: "Low", text: "Choose shampoo" }) 
            повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
    Виклик makeTask({ text: "Buy bread" }) 
            повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }


*/

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
    return { ...{category, priority}, ...data, completed};
  // Change code above this line
}

console.log(makeTask({}));

console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

console.log(makeTask({ category: "Finance", text: "Take interest" }));

console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

console.log(makeTask({ text: "Buy bread" }));

/*
Оголошена функція makeTask(data)
Виклик makeTask({}) повертає { category: 'General', priority: 'Normal', completed: false }
Виклик makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }) повертає { category: 'Homemade', priority: 'Low', text: 'Take out the trash', completed: false }
Виклик makeTask({ category: 'Finance', text: 'Take interest' }) повертає { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }
Виклик makeTask({ priority: 'Low', text: 'Choose shampoo' }) повертає { category: 'General', priority: 'Low', text: 'Choose shampoo', completed: false }
Виклик makeTask({ text: 'Buy bread' }) повертає { category: 'General', priority: 'Normal', text: 'Buy bread', completed: false 
*/
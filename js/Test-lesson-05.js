console.log('');
console.log('tsk 5.01');

/*


Всередині функцій можна використовувати зарезервоване ключове слово this.
 Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. 
 Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

const bookShelf = {
  authors: ["Bernard Cornwell", "Robert Sheckley"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

Методи getAuthors і addAuthor - це функції (методи об'єкта), які 
викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і 
ми можемо звернутися до його властивостей і методів.

*/

/*
Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

    Метод checkPizza об'єкта pizzaPalace використовує this.
    Метод order об'єкта pizzaPalace використовує this
    Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
    Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
    Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
    Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

*/

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Four meats"));
console.log(pizzaPalace.order("Big Mike"));
console.log(pizzaPalace.order("Viennese"));
console.log('');

/*
Метод `order()` використовує оператор `this`
Метод `checkPizza()` використовує оператор `this`
Виклик `pizzaPalace.order('Smoked')` повертає рядок 'Order accepted, preparing «Smoked» pizza'
Виклик `pizzaPalace.order('Four meats')` повертає рядок 'Order accepted, preparing «Four meats» pizza'
Виклик `pizzaPalace.order('Big Mike')` повертає рядок 'Sorry, there is no pizza named «Big Mike»'
Виклик `pizzaPalace.order('Viennese')` повертає рядок 'Sorry, there is no pizza named «Viennese»'
*/


console.log('');
console.log('tsk 5.02');

//Задача: акаунт користувача
/*
Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. 
Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. 
Будь ласка, нічого там не змінюй.

    Оголошена змінна customer
    Значення змінної customer - це об'єкт з властивостями і методами
    Виклик customer.getDiscount() повертає поточне значення властивості discount
    Виклик customer.setDiscount(0.15) оновлює значення властивості discount
    Виклик customer.getBalance() повертає поточне значення властивості balance.
    Виклик customer.getOrders() повертає поточне значення властивості orders
    Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
    Метод getBalance об'єкта customer використовує this
    Метод getDiscount об'єкта customer використовує this
    Метод setDiscount об'єкта customer використовує this
    Метод getOrders об'єкта customer використовує this
    Метод addOrder об'єкта customer використовує this


*/

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


console.log(customer.getDiscount());
console.log(customer.setDiscount(0.15));
console.log(customer.getBalance());
console.log(customer.getOrders());
console.log(customer.addOrder(5000, "Steak"));

/*
Оголошена змінна `customer`
Значення змінної `customer` - це об'єкт з властивостями і методами
Виклик `customer.getDiscount()` повертає поточне значення поля `discount`
Виклик `customer.setDiscount(0.15)` оновлює значення поля `discount`
Виклик `customer.getBalance()` повертає поточне значення поля `balance`
Виклик `customer.getOrders()` повертає поточне значення поля `orders`
Виклик `customer.addOrder(5000, 'Steak')` додає `Steak` в масив значень поля `orders` і оновлює баланс
Метод `getBalance` об'єкта `customer` використовує оператор `this`
Метод `getDiscount` об'єкта `customer`використовує оператор `this`
Метод `setDiscount` об'єкта `customer` використовує оператор `this`
Метод `getOrders` об'єкта `customer` використовує оператор `this`
Метод `addOrder` об'єкта `customer` використовує оператор `this`
*/


console.log('');
console.log('tsk 5.03');

//Задача: історія замовлень


/*
Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх,
 правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

    Оголошена змінна historyService
    Значення змінної historyService - це об'єкт з вихідними властивостями та методами
    Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
    Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders
    Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
    Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
    Метод getOrdersLog об'єкта historyService використовує this
    Метод getEmails об'єкта historyService використовує this
    Метод getOrdersByEmail об'єкта historyService використовує this


*/

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

/*
 Оголошена змінна `historyService`
Значення змінної `historyService` - це об'єкт з вихідними властивостями і методами
Виклик `historyService.getOrdersLog()` повертає рядок з переліком даних всіх замовлень з властивості `orders`
Виклик `historyService.getEmails()` повертає масив всіх унікальних поштових адрес з властивості `orders`
Виклик `historyService.getOrdersByEmail('solomon@topmail.net')` повертає `[{ email: 'solomon@topmail.net', dish: 'Burger' }, { email: 'solomon@topmail.net', dish: 'Apple pie' }]`
Виклик `historyService.getOrdersByEmail('artemis@coldmail.net')` повертає `[{ email: 'artemis@coldmail.net', dish: 'Pizza'}]`
Метод `getOrdersLog` об'єкта `historyService` використовує `this`
Метод `getEmails` об'єкта `historyService` використовує `this`
Метод `getOrdersByEmail` об'єкта `historyService` використовує `this`
 */


console.log('');
console.log('tsk 5.04');

/*


Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в 
іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована 
властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Об'єкт, 
на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - 
це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. 
Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує 
пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

Тобто прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується
 під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті,
якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, 
а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то 
поверне undefined.

*/

/*
Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

    Оголошена змінна parent
    Значення змінної parent - це об'єкт
    Виклик parent.hasOwnProperty("surname") повертає true
    Виклик parent.hasOwnProperty("heritage") повертає true
    Оголошена змінна child
    Значення змінної child - це об'єкт
    Виклик child.hasOwnProperty("name") повертає true
    Звернення до child.name повертає "Jason"
    Виклик child.hasOwnProperty("age") повертає true
    Звернення до child.age повертає 27
    Виклик child.hasOwnProperty("surname") повертає false
    Звернення до child.surname повертає "Moore"
    Виклик child.hasOwnProperty("heritage") повертає false
    Звернення до child.heritage повертає "Irish"
    Виклик parent.isPrototypeOf(child) повертає true
    Використовується метод Object.create()

*/

const parent04 = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child04 = Object.create(parent04);

// Change code above this line
child04.name = "Jason";
child04.age = 27;

console.log(parent04.hasOwnProperty("surname"));
console.log(parent04.hasOwnProperty("heritage"));
console.log(child04.hasOwnProperty("name"));
console.log(child04.hasOwnProperty("age"));
console.log(child04.hasOwnProperty("surname"));
console.log(child04.hasOwnProperty("heritage"));
console.log(parent04.isPrototypeOf(child04));

/*
true
Test-lesson-05.js:304 true
Test-lesson-05.js:305 true
Test-lesson-05.js:306 true
Test-lesson-05.js:307 false
Test-lesson-05.js:308 false
Test-lesson-05.js:309 true
*/
/*
Оголошена змінна 'parent'
Значення змінної `parent` - це об'єкт
Виклик `parent.hasOwnProperty('surname')` повертає `true`
Виклик `parent.hasOwnProperty('heritage')` повертає `true`
Оголошена змінна 'child'
Значення змінної `child` - це об'єкт
Виклик `child.hasOwnProperty('name')` повертає `true`
Звернення до `child.name` повертає 'Jason'
Виклик `child.hasOwnProperty('age')` повертає `true`
Звернення до `child.age` повертає 27
Виклик `child.hasOwnProperty('surname')` повертає `false`
Звернення до `child.surname` повертає 'Moore'
Виклик `child.hasOwnProperty('heritage')` повертає `false`
Звернення до `child.heritage` повертає 'Irish'
Виклик `parent.isPrototypeOf(child)` повертає `true`

Використовується метод `Object.create()`

*/

console.log('');
console.log('tsk 5.05');
//Задача: ланцюжок прототипів

/*
Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, 
а той, своєю чергою, був прототипом для child.

    Оголошена змінна ancestor
    Значення змінної ancestor - це об'єкт.
    Оголошена змінна parent
    Значення змінної parent - це об'єкт.
    Оголошена змінна child
    Значення змінної child - це об'єкт.
    Виклик ancestor.isPrototypeOf("parent") повертає true
    Виклик parent.isPrototypeOf("child") повертає true
    Виклик ancestor.hasOwnProperty("surname") повертає true
    Звернення до ancestor.surname повертає "Dawson"
    Виклик parent.hasOwnProperty("surname") повертає true
    Звернення до parent.surname повертає "Moore"
    Виклик child.hasOwnProperty("surname") повертає false
    Звернення до child.surname повертає "Moore"
    Виклик ancestor.hasOwnProperty("heritage") повертає true
    Звернення до ancestor.heritage повертає "Irish"
    Виклик parent.hasOwnProperty("heritage") повертає false
    Звернення до parent.heritage повертає "Irish"
    Виклик child.hasOwnProperty("heritage") повертає false
    Звернення до child.heritage повертає "Irish"
    Використовується метод Object.create()

*/

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line

console.log(ancestor.isPrototypeOf("parent"));
console.log(parent.isPrototypeOf("child"));
console.log(ancestor.hasOwnProperty("surname"));
console.log(parent.hasOwnProperty("surname"));
console.log(child.hasOwnProperty("surname"));
console.log(ancestor.hasOwnProperty("heritage"));
console.log(parent.hasOwnProperty("heritage"));
console.log(child.hasOwnProperty("heritage"));
console.log(child.heritage);

/*
Виконано

Оголошена змінна 'ancestor'
Значення змінної `ancestor` - це об'єкт
Оголошена змінна 'parent'
Значення змінної `parent` - це об'єкт
Оголошена змінна 'child'
Значення змінної `child` - це об'єкт
Виклик `ancestor.isPrototypeOf(parent)` повертає `true`
Виклик `parent.isPrototypeOf(child)` повертає `true`
Виклик `ancestor.hasOwnProperty('surname')` повертає `true`
Звернення до `ancestor.surname` повертає 'Dawson'
Виклик `parent.hasOwnProperty('surname')` повертає `true`
Звернення до `parent.surname` повертає 'Moore'
Виклик `child.hasOwnProperty('surname')` повертає `false`
Звернення до `child.surname` повертає 'Moore'
Виклик `ancestor.hasOwnProperty('heritage')` повертає `true`
Звернення до `ancestor.heritage` повертає 'Irish'
Виклик `parent.hasOwnProperty('heritage')` повертає `false`
Звернення до `parent.heritage` повертає 'Irish'
Виклик `child.hasOwnProperty('heritage')` повертає `false`
Звернення до `child.heritage` повертає 'Irish'
Використовується метод `Object.create()`
*/

console.log('');
console.log('tsk 5.06');

/*


Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних 
об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. 
Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - 
спеціальний синтаксис оголошення функції для створення об'єктів.

Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки -
 його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

Результат виклику new User() - це об'єкт, який називається екземпляром класу, 
тому що містить дані і поведінку, що описуються класом.

*/
/*
Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

    Оголошений клас Car
    Результат виклику new Car() - це порожній об'єкт

*/
class Car { }

console.log(Car);

/*
Оголошений клас `Car`
Результат виклику `new Car()` - це порожній об'єкт
*/

console.log('');
console.log('tsk 5.07');

/*


Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, 
створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

class User {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора 
в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений 
об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

Властивості name та email називаються публічними властивостями, тому що вони будуть власними
 властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

*/
/*
Додай класу Car метод constructor, який приймає три параметри:

    brand - марка автомобіля.
    model - модель автомобіля.
    price - ціна автомобіля.

Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні
 бути передані аргументи під час його виклику з оператором new.

    Оголошений клас Car
    Клас Car має метод constructor
    В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
    В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
    В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

*/

class Car07 {
  // Change code below this line
    constructor( brand, model, price) { 
        this.brand = brand;
        this.model = model;
        this.price = price;
    }


  // Change code above this line
}

const carAudi = new Car07("Audi", "Q3", 36000);
const carBMW = new Car07("BMW", "X5", 58900);
const carNissan = new Car07("Nissan", "Murano", 31700);

console.log(carAudi);
console.log(carBMW);
console.log(carNissan);

/*
 Оголошений клас `Car`
Клас `Car` має метод `constructor`
В результаті виклику `new Car('Audi','Q3', 36000)` утвориться об'єкт ` {brand: 'Audi', model: 'Q3', price: 36000 }`
В результаті виклику `new Car( 'BMW', 'X5', 58900)` утвориться об'єкт `{brand: 'BMW', model: 'X5', price: 58900 }`
В результаті виклику `new Car( 'Nissan', 'Murano', 31700)` утвориться об'єкт `{brand: 'Nissan', model: 'Murano', price: 31700 }`
*/


console.log('');
console.log('tsk 5.08');

/*


Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. 
Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». 
Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями.
 Значення властивостей такого об'єкта замінять набір аргументів.

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }


*/
/*
Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - 
об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

    Оголошений клас Car
    Клас Car має метод constructor
    В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) 
    утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
    В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) 
    утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
    В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) 
    утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }


*/

class Car08 {
  // Change code below this line
    constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

const hereAudy = new Car({ brand: "Audi", model: "Q3", price: 36000 });
const hereBMW = new Car({ brand: "BMW", model: "X5", price: 58900 });
const hereNissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 }) ;

console.log(hereAudy);
console.log(hereBMW);
console.log(hereNissan);

/*
 Оголошений клас `Car`
Клас `Car` має метод `constructor`
В результаті виклику `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })` утвориться об'єкт `{ brand: 'Audi', model: 'Q3', price: 36000 }`
В результаті виклику `new Car({ brand: 'BMW', model: 'X5', price: 58900 })` утвориться об'єкт `{brand: 'BMW', model: 'X5', price: 58900 }`
В результаті виклику `new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })` утвориться об'єкт `{brand: 'Nissan', model: 'Murano', price: 31700 }`
*/

console.log('');
console.log('tsk 5.09');
/*


Для роботи з властивостями майбутнього екземпляра використовуються методи класу. 
Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}


*/
/*
Додай класу Car два методи.

    getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
    changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

    В класі Car оголошений метод getPrice
    Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
    В класі Car оголошений метод changePrice
    Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

*/

class Car09 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
    getPrice() { 
        return this.price;
    }
    changePrice(newPrice) { 
        this.price = newPrice;
    }

  // Change code above this line
}

/*
Оголошений клас `Car`
Конструктор класу приймає об'єкт з властивостями `brand`, `model` і `price`
Виклик `Car.prototype.hasOwnProperty('getPrice')` повертає `true`
Значення `Car.prototype.getPrice`- це функція
Виклик `Car.prototype.hasOwnProperty('changePrice')` повертає `true`
Значення `Car.prototype.changePrice`- це функція
В об'єкта, створеного викликом `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })`, 
виклик метода `getPrice()` поверне число `36000`
В об'єкта, створеного викликом `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })`, 
виклик метода `changePrice(35000)` і за наступного виклику `getPrice()` поверне число `35000`
*/


//------------------------------------------

console.log('');
console.log('tsk 5.10');
//Задача: склад
/*
Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки 
один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

Оголоси наступні методи класу:

    getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
    addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта,
     який викликає цей метод.
    removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів 
    у властивості items об'єкта, який викликає цей метод.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій 
код перевірятимуть тести. Будь ласка, нічого там не змінюй.

    Оголошений клас Storage
    В класі Storage оголошений метод getItems
    В класі Storage оголошений метод addItem
    В класі Storage оголошений метод removeItem
    Метод getItems повертає значення властивості items екземпляра класу, який його викликає
    Метод addItem змінює властивість items екземпляра класу, який його викликає
    Метод removeItem змінює властивість items екземпляра класу, який його викликає
    В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
    Об'єкт storage містить властивість items
    Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, 
    повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
    Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), 
    повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), 
    повертає масив ["Nanitoids", "Antigravitator", "Droid"]

*/

class Storage {
    constructor(args) { //[...args]
        this.items = [...args];
    }
    getItems() {
        return this.items
    }
    addItem(newItem) { 
        this.items.push(newItem); 
    }
    removeItem(itemToRemove) { 
        this.items.splice(this.items.indexOf(itemToRemove),1);
    }
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/*
 Оголошений клас `Storage`
В класі `Storage` оголошений метод `getItems`
В класі `Storage` оголошений метод `addItem`
В класі `Storage` оголошений метод `removeItem
Метод `getItems` повертає значення властивості `items` екземпляра класу, 
який його викликає
В результаті виклику `new Storage(['Nanitoids', 'Prolonger', 'Antigravitator'])` 
значення змінної `storage` - це об'єкт
Об'єкт `storage` містить властивість `items`
*/


console.log('');
console.log('tsk 5.11');


//Задача: конструктор рядків
/*
Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, 
який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

    getValue() - повертає поточне значення властивості value.
    padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
    padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
    padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
 в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

    Оголошений клас StringBuilder
    В класі StringBuilder оголошений метод getValue
    Метод getValue повертає значення властивості value екземпляра класу, який його викликає
    В класі StringBuilder оголошений метод padEnd
    Метод padEnd змінює властивість value екземпляра класу, який його викликає
    В класі StringBuilder оголошений метод padStart
    Метод padStart змінює властивість value екземпляра класу, який його викликає
    В класі StringBuilder оголошений метод padBoth
    Метод padBoth змінює властивість value екземпляра класу, який його викликає
    В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
    Об'єкт builder містить властивість value
    Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
    Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
    Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
    Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

*/

class StringBuilder { 
    constructor(valueInit)
    { this.value = valueInit; }
    getValue() { return this.value; }
    padEnd(str) { this.value += str; }
    padStart(str) { this.value = str + this.value; }
    padBoth(str) { this.value = (str + this.value) + str; }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

/*
 Оголошений клас `StringBuilder`
В класі `StringBuilder` оголошений метод `getValue`
Метод `getValue` повертає значення властивості `value` екземпляра класу, який його викликає
В класі `StringBuilder` оголошений метод `padEnd`
Метод `padEnd` змінює властивість `value` екземпляра класу, який його викликає
В класі `StringBuilder` оголошений метод `padStart`
Метод `padStart` змінює властивість `value` екземпляра класу, який його викликає
*/
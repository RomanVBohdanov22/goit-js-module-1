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
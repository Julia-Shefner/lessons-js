// ! КОНТЕКСТ ВИКОНАННЯ ФУНКЦІЇ

// ? Ключове слово this

// * Завдання

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Sm

// ? Глобальний контекст

// function foo() {
//   console.log(this);
// }

// foo();

// ? Контекст методу об'єкта

// const user = {
//   username: 'Poly',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis();

// function showThis() {
//   console.log('this in showThis: ', this);
// }
// showThis();

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// const user = {
//   username: 'Poly',
// };

// user.showContext = showThis;

// user.showContext();
// showThis();

// ? Метод call()

// function greet(str) {
//   console.log(`${str}, ${this.username}, your romm is ${this.room}`);
// }

// const mango = {
//   username: 'Mango',
//   room: 27,
// };

// const poly = {
//   username: 'Poly',
//   room: 191,
// };

// greet.call(mango, 'Welcome');
// greet.call(poly, 'Aloha');

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = 'John';
// const context = {
//   person: 'Alice',
// };

// greet.call(context, 'Bob');

// ? Метод apply()

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}`);
// }

// const mango = {
//   username: 'Mango',
//   room: 27,
// };

// const poly = {
//   username: 'Poly',
//   room: 191,
// };

// greet.apply(mango, ['Welcome']);
// greet.apply(poly, ['Aloha']);

// ? Метод bind() і втрата контексту

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}`);
//   },
// };

// customer.sayHello();

// const greet = customer.sayHello;

// greet();

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello();

// const greet = customer.sayHello.bind(customer);

// greet();

// ? Метод bind() і колбеки

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName);

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer));

// ? Стрілочні функції

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis();

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// const user = {
//   username: 'Mango',
// };

// user.showContext = showThis;

// user.showContext();

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis();

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo', this);
//     };

//     foo();
//     console.log('this in showThis', this);
//   },
// };

// hotel.showThis();

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis.call({ username: 'Mango' }); // this in showThis: window
// showThis.apply({ username: 'Mango' }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: 'Mango' });
// boundShowThis(); // this in showThis: window

// ! ПРОТОТИПИ

// ? Прототип об'єкта

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// * Завдання

// Зміни код таким чином, щоб об'єкт parent став прототипом для
// об'єкта у змінній сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(parent.hasOwnProperty('name'));
// console.log(child.name);
// console.log(child.age);
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));

// ? Перевірка прототипу

// const customer = {
//   username: 'Jacob',
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.isPrototypeOf(animal));
// console.log(customer.isPrototypeOf(dog));

// ? Власні і невласні властивості

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// ? Перебір власних властивостей

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   console.log(key);
// }

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(Object.keys(dog));
// console.log(Object.values(dog));

// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// ? Ланцюжок прототипів

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// * Завдання

// Зміни код, побудувавши ланцюжок прототипів таким чином,
// щоб об'єкт ancestor був прототипом для parent, а той, своєю
// чергою, був прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// ? Кінець ланцюжка прототипів

// const objB = {
//   b: 'objB prop',
// };

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);

// ! ООП

// ? Процедурне програмування

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// ? Об'єкто-орієнтоване програмування

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// ! КЛАСИ

// ? Оголошення класу

// class User {}

// const mango = new User();
// console.log(mango);

// const poly = new User();
// console.log(poly);

// ? Конструктор класу

// class User {
//   constructor() {}
// }

// console.log(User);

// class User {
//   constructor() {
//     console.log('constructor call');
//   }
// }

// const mango = new User();
// console.log(mango);

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango);

// * Завдання

// Додай класу Car метод constructor, який приймає три параметри:
// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями
// brand, model і price, які отримують свої значення з аргументів,
// переданих при створенні нового екземпляра за допомогою оператора new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));

// ? Об'єкт параметрів

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango);

// * Завдання

// Виконай рефакторинг класу Car таким чином, щоб він приймав
// один параметр - об'єкт з властивостями brand, model і price.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// ? Методи класу

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {}

//   changeEmail(newEmail) {}
// }

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail());

// mango.changeEmail('new@mail.com');

// console.log(mango.getEmail());

// *Завдання

// Додай класу Car два методи.
// getPrice() - повертає значення властивості price з об'єкта,
// який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в
// об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// ? Прототип екземпляру

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail());
// console.log(mango);

// ? Приватні властивості

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.name);
// console.log(mango.#email);

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail());
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail());

// * Завдання

// Виконай рефакторинг класу Car таким чином, щоб властивість brand
// була приватною, і додай два методи для публічного інтерфейсу, для
// читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості
// brand на newBrand.

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrans(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(newCar);
// console.log(Object.values(newCar));

// ? Приватні методи

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// mango.changeEmail('newmail.com');
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail());

// ? Геттери і сеттери

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.email);
// mango.email = 'mango@supermail.com';
// console.log(mango.email);

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === '') {
//       console.log('Помилка! Пошта не може бути порожнім рядком!');
//       return;
//     }
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.email);
// mango.email = '';
// console.log(mango.email);

// * Завдання

// Виконай рефакторинг класу Car. Додатково до приватної властивості
// #brand зроби приватними властивості model і price. Стандартизуй
// публічний інтерфейс класу, замінивши вже оголошені методи на геттери
// та сеттери brand, model і price, для взаємодії з приватними
// властивостями.

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ? Статичні властивості

// class MyClass {
//   static myProp = 'value';
// }

// console.log(MyClass.myProp);

// class MyClass {
//   static myProp = 'value';
// }

// const inst = new MyClass();
// console.log(inst.myProp);

// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };
//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.roles.admin,
// });

// console.log(mango.role);
// mango.role = User.roles.editor;
// console.log(mango.role);

// * Завдання

// Виконай рефакторинг класу Car. Додай публічну статичну властивість
// maxPrice зі значенням число 50000 - максимально допустима ціна
// автомобіля.
// Додай сеттеру price перевірку значення параметра newPrice,
// що передається. Якщо воно більше за maxPrice, сеттер нічого не
// робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
// Під оголошенням класу ми додали ініціалізації екземплярів і виклики
// методів, щоб показати, як будуть використовуватися геттери і сеттери
// price.

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       return (this.#price = newPrice);
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price);

// audi.price = 49000;
// console.log(audi.price);

// audi.price = 51000;
// console.log(audi.price);

// ? Статичні методи

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// * Завдання

// Додай класу Car публічний статичний метод checkPrice(price), що
// приймає ціну автомобіля. Метод повинен порівняти значення параметра
// price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути
// рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is
// within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики
// методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

// ? Наслідування класів

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // body
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor);
// console.log(editor.email);

// * Завдання

// У застосунку потрібен адміністратор з можливістю додавати пошти
// користувачів у чорний список.
// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу),
// значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = { BASIC: 'basic', SUPERUSER: 'superuser' };
//   constructor(params) {}
// }

// console.log(Admin.role.BASIC);
// console.log(Admin.role.SUPERUSER);

// ? Конструктор дочірнього класу

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor);
// console.log(editor.email);

// * Завдання

// Додай класу Admin метод constructor, який приймає один параметр
// params- об'єкт налаштувань з двома властивостями email і access.
// Додай класу Admin публічну властивість access, значення якої буде
// передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали
// ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email);
// console.log(mango.access);

// ? Методи дочірнього класу

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor);

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts);

// * Завдання

// Додай класу Admin наступні властивості і методи.
// Публічну властивість blacklistedEmails для зберігання чорного
// списку поштових адрес користувачів. Значення за замовчуванням — це
// порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив, що зберігається
// у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному
// списку. Метод повинен перевіряти наявність значення параметра email
// в масиві, що зберігається у властивості blacklistedEmails, і повертати
// true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики
// методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   blacklistedEmails = [];

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// ? Друга лекція

// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }

// const bmw = new Car('bmw', 'x7');
// const audi = new Car('audi', 'q7');

// console.log('bmw', bmw);
// console.log('audi', audi);

// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   getModel() {
//     return this.model;
//   }
//   changeModel(newModel) {
//     this.model = newModel;
//   }
// }

// const bmw = new Car('bmw', 'x7');
// const audi = new Car('audi', 'q7');

// bmw.changeModel('x3');
// console.log(bmw.getModel);
// console.log('bmw', bmw);
// console.log('audi', audi);

// class Car {
//   #price;
//   constructor(obj) {
//     this.brand = obj.brand;
//     this.model = obj.model;
//     this.#price = obj.price;
//   }
//   getModel() {
//     return this.model;
//   }
//   changeModel(newModel) {
//     this.model = newModel;
//   }
//   getPrice() {
//     return this.#price;
//   }
//   changePrice(newPrice) {
//     return (this.#price = newPrice);
//   }
// }

// const bmw = new Car({ brand: 'bmw', model: 'x5', price: 70000 });

// console.log('bmw', bmw);
// console.log(bmw.getPrice());
// console.log(bmw.changePrice(80000));

// class Hero {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log('Hello');
//   }
// }

// class Paladin extends Hero {
//   constructor(name, weapon) {
//     super(name);
//     this.weapon = weapon;
//   }
// }

// const arthas = new Paladin('Arthas', 'sword');
// console.log(arthas);
// arthas.sayHello();

// const lalala = new Hero('Petya');
// console.log(lalala);

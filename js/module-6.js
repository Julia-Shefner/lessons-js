// ! КОНТЕКСТ ВИКОНАННЯ ФУНКЦІЇ

// ? Коючове слово this

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

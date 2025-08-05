// ! КОЛБЕК-ФУНКЦІЇ

// ? Функції як значення

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// console.log(greet('Yuliia'));

//* Завдання
//Функція makePizza повертає рядок з повідомленням клієнту.Доповни код таким
//  чином, щоб у змінній result був результат виконання функції makePizza, а
//  у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ? Колбек-функції

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Yuliia', notify);
// registerGuest('Yuliia', greet);

//* Завдання
//Функція makeMessage приймає один параметр ім'я піци, що доставляється,
//  pizzaName та повертає рядок з повідомленням клієнту.
//Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром
//  (параметр callback) колбек-функцію і повертала результат її виклику. Функції
// deliverPizza або makePizza будуть передаватися як колбек для makeMessage і
// очікувати аргументом ім'я готової піци, що доставляється.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ? Інлайн-колбеки

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// Передаємо інлайн-функцію greet в якості колбека

// registerGuest('Yuliia', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// Передаємо інлайн-функцію greet в якості колбека

// registerGuest('Yuliia', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

//* Завдання
//Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// ? Метод forEach(callback)

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

//* Завдання

//Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
// і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і
// повертається як результат роботи функції.
// Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації
// додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//* Завдання

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers
// і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву,
// які більші за значення другого параметра числа value. Якщо таких значень не буде
// знайдено, функція повертає порожній масив.
//Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала
// метод forEach.

// function filterArray(numbers, value) {
//   let newArray = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ! СТРІЛОЧНІ ФУНКЦІЇ

// ? Стрілочні функції: синтаксис

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// console.log(classicAdd(1, 2, 3));

// Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(classicAdd(3, 4, 5));

// * Завдання

//Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була
// оголошена як стрілочна.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// ? Неявне перетворення

// Явне перетворення
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// console.log(classicAdd(1, 2, 3));

// Неявне перетворення
// const arrowAdd = (a, b, c) => a + b + c;

// console.log(arrowAdd(1, 2, 3));

// * Завдання

// Виконай рефакторинг функції calculateTotalPrice() таким чином,
// щоб вона використовувала неявне повернення.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(100, 0.5));

// ? Колбек стрілки

// const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

//* Завдання

//Виконай рефакторинг функції calculateTotalPrice(orderedItems),
// замінивши її оголошення на стрілочну функцію. Також заміни
// колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//* Завдання

//Заміни оголошення функції filterArray() і колбек для методу
// forEach() на стрілочні функції.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// ! МЕТОДИ map i flatMap

// ? Чисті функції

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubledNumbers);

//* Завдання

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює
// кожен елемент, значення якого - це парне число, додаючи до нього значення
// параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не
// змінювала масив чисел numbers, а створювала, наповнювала і повертала
// новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (!(numbers[i] % 2)) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// ? Метод map

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = planets.map(planet => planet.toLocaleLowerCase());
// console.log(planetsInLowerCase);

// console.log(planets);

// * Завдання

// В масиві planets зберігаються назви планет. Доповни код таким чином,
// щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин
// назв кожної планети з масиву planets. Обов'язково використовуй метод
// map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// ? Масив об'єктів

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);

// const scores = students.map(student => student.score);
// console.log(scores);

// * Завдання

// Масив books містить колекцію об'єктів книг, кожен з яких містить
// властивості title, author, rating. Використовуючи метод map(),
// зроби так, щоб у змінній titles вийшов масив назв усіх книг
// (властивість title) з масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// ? Метод flatMap()

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses);

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses);

// * Завдання

// Масив books містить колекцію об'єктів книг, кожен з яких містить
// властивість genres, значенням якої є масив жанрів. Використовуючи
// метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів
// усіх книг (властивість genres) з масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// * Завдання

// Доповни стрілочну функцію getUserEmails(users) таким чином,
// щоб вона повертала масив поштових адрес користувачів (властивість email)
// з масиву об'єктів в параметрі users.

// const getUserEmails = (users) => {
//   return users.map(user => user.email);
// };

// console.log(
//   getUserEmails([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ])
// );

// ! МЕТОДИ filter i find

// ? Метод filter()

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);

// console.log(values);

// * Завдання

// Доповни код так, щоб у змінній evenNumbers був масив парних
// чисел із масиву numbers, а у змінній oddNumbers — масив непарних.
// Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => !(number % 2));
// const oddNumbers = numbers.filter(number => !!(number % 2));

// console.log(evenNumbers);
// console.log(oddNumbers);

// ? Метод filter() на масиві об'єктів

// const lowScore = 50;
// const highScore = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const best = students.filter(student => student.score >= highScore);
// console.log(best);

// const worst = students.filter(student => student.score < lowScore);
// console.log(worst);

// const average = students.filter(
//   student => student.score >= lowScore && student.score < highScore
// );
// console.log(average);

// * Завдання

// Масив books містить колекцію об'єктів книг, кожен з яких містить
// властивості title, author, rating. Використовуючи метод filter(),
// доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких
// (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з
// ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// * Завдання

// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
// щоб вона повертала масив користувачів, у яких колір очей (
// властивість eyeColor) збігається зі значенням другого параметра color.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'blue'
//   )
// );

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'green'
//   )
// );

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'brown'
//   )
// );

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'black'
//   )
// );

// * Завдання

// Доповни код функції getUsersWithAge(users, minAge, maxAge),
// щоб повернути масив користувачів, вік (збережений у властивості age)
// яких потрапляє у заданий діапазон від minAge до maxAge.

// Поради:

// Використай метод filter() для створення нового масиву, в якому
// зберігаються тільки елементи, які задовольняють певну умову.
// Використай оператори >= (більше або дорівнює) та <=
// (менше або дорівнює), щоб відфільтрувати користувачів,
// вік яких точно потрапляє у діапазон між мінімальним minAge
// та максимальним maxAge значеннями.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     20,
//     30
//   )
// );

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     30,
//     40
//   )
// );

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     80,
//     100
//   )
// );

// ? Метод find()

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.find(option => option.label === 'blue'));
// console.log(colorPickerOptions.find(option => option.label === 'pink'));
// console.log(colorPickerOptions.find(option => option.label === 'white')); // undefined

// * Завдання

// Масив books містить колекцію об'єктів книг, кожен з яких містить
// властивості title, author, rating.

// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої
// (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої
// (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// * Завдання

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб
// вона повертала об'єкт користувача, пошта якого (властивість email)
// збігається зі значенням другого параметра email.

// const getUserWuthEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(
//   getUserWuthEmail(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'shereeanthony@kog.com'
//   )
// );

// ! МЕТОДИ evry, some i reduce

// ? Метод every

// [1, 2, 3, 4, 5].every(value => value >= 0);
// console.log([1, 2, 3, 4, 5].every(value => value >= 0));

// [1, 2, 3, -10, 4, 5].every(value => value >= 0);
// console.log([1, 2, 3, -10, 4, 5].every(value => value >= 0));

// const products = [
//   { name: 'apple', quantity: 2 },
//   { name: 'orange', quantity: 5 },
//   { name: 'plum', quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct);

// * Завдання

// Доповни функцію isEveryUserActive(users) таким чином, щоб вона
// перевіряла, чи всі користувачі зараз активні (властивість isActive)
// і повертала true або false.

// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };

// console.log(
//   isEveryUserActive([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// ? Метод some()

// console.log([1, 2, 3, 4, 5].some(value => value >= 0));
// console.log([-7, -20, 3, -10, -14].some(value => value >= 0));
// console.log([1, 2, 3, 4, 5].some(value => value < 0));
// console.log([1, 2, 3, -10, 4, 5].some(value => value < 0));

// * Завдання

// Доповни функцію isAnyUserActive(users) таким чином, щоб вона
// перевіряла наявність хоча б одного активного користувача
// (властивість isActive) і повертала true або false.

// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };

// console.log(
//   isAnyUserActive([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// ? Метод reduce() і масив об'єктів

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(averageScore);

// * Завдання

// У змінній players зберігається масив об'єктів, кожен з яких
// має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений
// в одній грі для кожного гравця, і отримати загальну суму цих
// значень часу у змінній totalAveragePlaytimePerGame. Розрахувати
// час для кожного з гравців можна, розділивши його час (властивість
// playtime) на кількість ігор (властивість gamesPlayed).

// Поради
// Використовуй метод reduce() для ітерації по масиву players та
// обчислення загальної суми середнього часу на одну гру.

// Усередині колбек функції reduce(), поділи playtime гравця
// на gamesPlayed, щоб отримати середній час, витрачений на одну
// гру кожним гравцем.

// Накопичуй результат у змінній acc і повертай його в кінці
// кожної ітерації.

// Ініціалізуй параметр acc методу reduce() початковим значенням 0,
// щоб уникнути отримання NaN при виконанні обчислень.

// В результаті змінна totalAveragePlaytimePerGame міститиме загальну
// суму середнього часу на одну гру для всіх гравців.

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return (acc += player.playtime / player.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// * Завдання

// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона
// рахувала і повертала суму всіх коштів (властивість balance), які
// зберігають користувачі з масиву users.

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
// };

// console.log(
//   calculateTotalBalance([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );

// ! Метод toSorted

// ? Масив чисел

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores);
// console.log(ascendingScores);

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted());

// ? Масив рядків

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

// console.log(students.toSorted());

// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];

// console.log(letters.toSorted());

// ? Сортування за зростанням

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores);

// ? Сортування за спаданням

// const scores = [61, 6, 65, 19, 74, 35, 3, 39, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores);

// * Завдання

// Змінна releaseDates - це масив чисел, років видання книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані
// за датою видання, за їх зростанням або спаданням. Доповни код
// таким чином, щоб у змінній ascendingReleaseDates вийшла копія
// масиву releaseDates, відсортована за зростанням, а у змінній
// descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ? Свій порядок сортування

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);

// * Завдання

// Змінна authors - це масив рядків, авторів книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані
// за автором в алфавітному і в зворотному алфавітному порядку.
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder
// вийшла копія масиву authors, відсортована за алфавітом, а у змінній
// authorsInReversedOrder - копія, відсортована у зворотному
// алфавітному порядку.

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ? Сортування об'єктів

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// * Завдання

// Масив books містить масив об'єктів книг, кожен з яких містить
// властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований
// за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг,
// відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований
// за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований
// за спаданням рейтингу.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.log(sortedByDescentingRating);

// * Завдання

// Масив books містить масив об'єктів книг, кожен з яких містить властивості
// title, author, rating.
//Доповни код таким чином, щоб у змінній names вийшов масив імен авторів
// в алфавітному порядку, рейтинг книг яких більший за значення змінної
// MIN_BOOK_RATING. Використовуй ланцюжок методів.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((first, second) => first.localeCompare(second));

// console.log(names);

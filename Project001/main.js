// Roll no:00239508
// Name: Rana Muhammad Shaheer
// Day / Time: Wednesday - 07:00 PM - 10:00 PM
// Ramadan Timming: Wednesday - 02:30 PM - 04:30 PM
// // Question1
// console.log("Hello World!");
// // Question2
// let Myname = "Rana Shaheer";
// let Message = "would you like to learn some Python today?";
// console.log(`Hello ${Myname}, ${Message}`);
// // Question3
// let name1: string = "Rana Shaheer";
// // Print the name in lowercase
// console.log(name1.toLocaleLowerCase());
// // Print the name in uppercase
// console.log(name1.toUpperCase());
// // Print the name in titlecase
// function toTitleCase(str: string) {
//     return str.replace(/\w\S*/g, (txt) => {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// console.log(toTitleCase(name1));
// // Question4
// let quote: string = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}".`);
// // Question5
// let famous_person: string = "Albert Einstein";
// let quote: string = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
// let message: string = `${famous_person} once said, "${quote}".`;
// console.log(message);
// // Quuestion6
// let name1: string = "\tRana Shaheer\n";
// console.log(`Name with whitespaces: ${name1}`);
// let stripped_name: string = name1.trim();
// console.log(`Name without whitespaces: ${stripped_name}`);
// // Question7
// console.log(5 + 3);
// console.log(13 - 5);
// console.log(4 * 2);
// console.log(16 / 2);
// // Question8
// console.log(6 + 2);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(32 / 4);
// // Question9
// let favoriteNumber: number = 3;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// // Question10
// Name: Rana Shaheer
// Date: 01/03/2024
// console.log(5 + 3); // Addition
// console.log(13 - 5); // Subtraction
// console.log(4 * 2); // Multiplication
// console.log(16 / 2); // Division
// // Question11
// let names: string[] = ["Usman", "Affan", "Waqas", "Talha"];
// for (let name of names) {
//   console.log(name);
// }
// // Question12
// let names: string[] = ["Usman", "Affan", "Waqas", "Talha"];
// for (let name of names) {
//   console.log(`Hello ${name}, nice to meet you!`);
// }
// // Question13
// let transportation: string[] = ["Honda motorcycle", "Tesla car", "Boeing 747 airplane", "BMW bicycle"];
// for (let item of transportation) {
//   console.log(`I would like to own a ${item}.`);
// }
// // Question14
// let guests: string[] = ["Usman", "Waqas", "Affan"];
// for (let guest of guests) {
//   console.log(`Dear ${guest}, I would like to invite you to dinner.`);
// }
// // Question15
// let guests: string[] = ["Waqas", "Affan", "Usman"];
// let date: string = "saturday"
// let time: string = "7pm"
// console.log(`Unforunately, ${guests[0]} can't make it to the dinner`)
// guests[0] = "Wahaj"
// console.log("New set of invitations:");
// for (let guest of guests) {
//     console.log(`Dear ${guest} I would like to invite you to dinner on ${date} at ${time}`)
// }
// // Question16
// let guests: string[] = ["Waqas", "Affan", "Usman"];
// let date: string = "saturday"
// let time: string = "7pm"
// console.log("I found a bigger dinner table, so I can invite more guests!")
// guests.unshift("Talha")
// guests.splice(2, 0, "Hammad");
// guests.push("Rayyan");
// console.log("New set of invitations:");
// for (let guest of guests) {
//     console.log(`Dear ${guest} I would like to invite you to dinner on ${date} at ${time}`)
// }
// // Question17
// let guests: string[] = ["Talha", "Waqas", "Hammad", "Affan", "Usman", "Rayyan"];
// let date: string = "saturday"
// let time: string = "7pm"
// console.log("I can only invite two people for dinner due to space constraints.");
// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`I'm Sorry ${removedGuest}, I can't Invite you to Dinner.`);
// }
// console.log("The Two Guests Still Invited are:");
// for (let i = 0; i < guests.length; i++) {
//     console.log(`Dear ${guests[i]}, you are still invited to dinner as a ${guests[i]} on ${date} at ${time}`);
//   }
// guests = [];
// console.log("My list is now empty:", guests);
// // Question18
// let locations: string[] = ["Paris", "Sydney", "Rio de Janeiro", "New York", "Beijing"];
// console.log("Original order: ", locations);
// console.log("Alphabetical order without modifying the list: ", locations.slice().sort());
// console.log("Original order: ", locations);
// console.log("Reverse alphabetical order without changing the order of the original list: ", locations.slice().sort().reverse());
// console.log("Original order: ", locations);
// console.log("Reversed order: ", locations.reverse());
// console.log("Original order: ", locations.reverse().reverse());
// console.log("Sorted alphabetically: ", locations.slice().sort());
// console.log("Sorted in reverse alphabetical order: ", locations.slice().sort().reverse());
// // Question19
// let guests: string[] = ["Talha", "Waqas", "Affan",];
// let date: string = "saturday"
// let time: string = "7pm"
// console.log(`I am inviting ${guests.length} people for dinner.`);
// // Question20
// let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// console.log("My favorite mountains are: ", mountains);
// // Question21
// interface Person {
//     name: string;
//     age: number;
//     occupation: string;
//     hobbies: string[];
//   }
//   let person: Person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     hobbies: ["reading", "hiking", "playing guitar"]
//   };
//   console.log("My person object is: ", person);
// // Question22
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers[5]);
// // Fix Index Error
// console.log(numbers[4]);
// // Question23
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // true
// console.log("Is car == 'Toyota'? I predict False.");
// console.log(car == 'Toyota'); // false
// console.log("Is car.length == 6? I predict True.");
// console.log(car.length == 6); // true
// console.log("Is car.length == 7? I predict False.");
// console.log(car.length == 7); // false
// console.log("Is car[0] == 's'? I predict True.");
// console.log(car[0] == 's'); // true
// console.log("Is car[0] == 'S'? I predict False.");
// console.log(car[0] == 'S'); // false
// console.log("Is car.indexOf('b') > -1? I predict True.");
// console.log(car.indexOf('b') > -1); // true
// console.log("Is car.indexOf('B') > -1? I predict False.");
// console.log(car.indexOf('B') > -1); // false
// console.log("Is car.slice(2, 4) == 'bu'? I predict True.");
// console.log(car.slice(2, 4) == 'bu'); // true
// console.log("Is car.slice(2, 5) == 'bua'? I predict False.");
// console.log(car.slice(2, 5) == 'bua'); // false
// // Question24
// let car = 'subaru';
// let favoriteFood = 'pizza';
// let number1 = 5;
// let number2 = 10;
// let fruits = ['apple', 'banana', 'orange'];
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // true
// console.log("Is car == 'SUV'? I predict False.");
// console.log(car == 'SUV'); // false
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru'); // true
// console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.");
// console.log(car.toLowerCase() == 'SUBARU'); // false
// console.log("Is number1 == number2? I predict False.");
// console.log(number1 == number2); // false
// console.log("Is number1 != number2? I predict True.");
// console.log(number1 != number2); // true
// console.log("Is number1 < number2? I predict True.");
// console.log(number1 < number2); // true
// console.log("Is number1 > number2? I predict False.");
// console.log(number1 > number2); // false
// console.log("Is number1 <= number2? I predict True.");
// console.log(number1 <= number2); // true
// console.log("Is number1 >= number2? I predict False.");
// console.log(number1 >= number2); // false
// console.log("Is car == 'subaru' && favoriteFood == 'pizza'? I predict True.");
// console.log(car == 'subaru' && favoriteFood == 'pizza'); // true
// console.log("Is car == 'subaru' && favoriteFood == 'burger'? I predict False.");
// console.log(car == 'subaru' && favoriteFood == 'burger'); // false
// console.log("Is fruits.includes('apple')? I predict True.");
// console.log(fruits.includes('apple')); // true
// console.log("Is fruits.includes('grape')? I predict False.");
// console.log(fruits.includes('grape')); // false
// console.log("Is fruits.indexOf('banana') > -1? I predict True.");
// console.log(fruits.indexOf('banana') > -1); // true
// console.log("Is fruits.indexOf('pineapple') > -1? I predict False.");
// console.log(fruits.indexOf('pineapple') > -1); // false
// // Question25
// let alien_color: 'green' | 'yellow' | 'red' = 'green';
// if (alien_color === 'green') {
//   console.log("Player just earned 5 points");
// }
// alien_color = 'yellow';
// if (alien_color === 'green') {
//   console.log("Player just earned 5 points");
// }
// // Question26
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log('Player just earned 5 points for shooting the alien!');
// } else {
//     console.log('Player just earned 10 points.');
// }
// alien_color = 'red';
// if (alien_color === 'green') {
//     console.log('Player just earned 5 points for shooting the alien!');
// } else {
//     console.log('Player just earned 10 points.');
// }
// // Question27
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log('Player earned 5 points!');
// } else if (alien_color === 'yellow') {
//     console.log('Player earned 10 points!');
// } else if (alien_color === 'red') {
//     console.log('Player earned 15 points!');
// }
// alien_color = 'yellow';
// if (alien_color === 'green') {
//     console.log('Player earned 5 points!');
// } else if (alien_color === 'yellow') {
//     console.log('Player earned 10 points!');
// } else if (alien_color === 'red') {
//     console.log('Player earned 15 points!');
// }
// alien_color = 'red';
// if (alien_color === 'green') {
//     console.log('Player earned 5 points!');
// } else if (alien_color === 'yellow') {
//     console.log('Player earned 10 points!');
// } else if (alien_color === 'red') {
//     console.log('Player earned 15 points!');
// }
// // Question28
// let age: number = 66;
// if (age < 2) {
//     console.log('The person is a baby.');
// } else if (age >= 2 && age < 4) {
//     console.log('The person is a toddler.');
// } else if (age >= 4 && age < 13) {
//     console.log('The person is a kid.');
// } else if (age >= 13 && age < 20) {
//     console.log('The person is a teenager.');
// } else if (age >= 20 && age < 65) {
//     console.log('The person is an adult.');
// } else if (age >= 65) {
//    console.log('The person is an elder.');
// }
// // Question29
// let favorite_fruits: string[] = ['apple', 'banana', 'orange'];
// if (favorite_fruits.includes('apple')) {
//     console.log('You really like apples!');
// }
// if (favorite_fruits.includes('banana')) {
//     console.log('You really like bananas!');
// }
// if (favorite_fruits.includes('orange')) {
//     console.log('You really like oranges!');
// }
// if (favorite_fruits.includes('grape')) {
//     console.log('You really like grapes!');
// }
// if (favorite_fruits.includes('pear')) {
//     console.log('You really like pears!');
// }
// // Question30
// let usernames: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// // Question31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log('Hello admin, would you like to see a status report?');
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
// // Question32
// let current_users: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];
// let new_users: string[] = ['newUser1', 'newUser2', 'User2', 'newUser3', 'admin'];
// for (let new_username of new_users) {
//     let is_available = true;
//     for (let current_username of current_users) {
//         if (current_username.toLowerCase() === new_username.toLowerCase()) {
//             is_available = false;
//             console.log(`Sorry, the username '${new_username}' is already taken.`);
//             break;
//         }
//     }
//     if (is_available) {
//         console.log(`The username '${new_username}' is available.`);
//     }
// }
// // Question33
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1) {
//         console.log(`${numbers[i]}st`);
//     } else if (numbers[i] === 2) {
//         console.log(`${numbers[i]}nd`);
//     } else if (numbers[i] === 3) {
//         console.log(`${numbers[i]}rd`);
//     } else {
//         console.log(`${numbers[i]}th`);
//     }
// }
// // Question34
// let pizzas: string[] = ['Pepperoni', 'Cheese', 'Margherita'];
// for (let pizza of pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// console.log("I really love pizza!");
// // Question35
// let animals: string[] = ['Dog', 'Cat', 'Bird'];
// for (let animal of animals) {
//     console.log(`A ${animal} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet!`);
// // Question36
// function make_shirt(size: string, message: string) {
//     console.log(`The size of the shirt is ${size} and the message printed on it is: ${message}`);
// }
// make_shirt('Large', 'I love TypeScript');
// // Question37
// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
//     console.log(`The size of the shirt is ${size} and the message printed on it is: ${message}`);
// }
// make_shirt(); 
// make_shirt('Medium'); 
// make_shirt('Small', 'I love JavaScript'); 
// // Question38
// function describe_city(city: string, country: string = 'Pakistan') {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city('Karachi'); 
// describe_city('New York', 'USA');
// describe_city('Beijing', 'China');
// // Question39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Tokyo', 'Japan'));
// console.log(city_country('Sydney', 'Australia'));
// // Question40
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number): Album {
//     const album: Album = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// const album1: Album = make_album('Beatles', 'Abbey Road');
// const album2: Album = make_album('Pink Floyd', 'Dark Side of the Moon', 9);
// console.log(album1);
// console.log(album2);
// // Question41
// let magicians: string[] = ['Houdini', 'Dynamo', 'Blaine'];
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(`${magician}`);
//     }
// }
// show_magicians(magicians);
// // Question42
// let magicians: string[] = ['Houdini', 'Dynamo', 'Blaine'];
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// let great_magicians: string[] = make_great(magicians);
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(`${magician}`);
//     }
// }
// show_magicians(great_magicians);
// // Question43
// let magicians: string[] = ['Houdini', 'Dynamo', 'Blaine'];
// function make_great(magicians: string[]): string[] {
//     let new_magicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//         new_magicians.push(`the Great ${magicians[i]}`);
//     }
//     return new_magicians;
// }
// let great_magicians: string[] = make_great(magicians.slice());
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(`${magician}`);
//     }
// }
// show_magicians(magicians);
// show_magicians(great_magicians);
// // Question44
// function make_sandwich(ingredients: string[]): void {
//     console.log(`Ordering a sandwich with the following ingredients:`);
//     for (const ingredient of ingredients) {
//         console.log(`- ${ingredient}`);
//     }
// }
// make_sandwich(['ham', 'cheese']);
// make_sandwich(['turkey', 'avocado', 'lettuce']);
// make_sandwich(['peanut butter', 'jelly']);
// // Question45
// function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
//     const car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
//       manufacturer: manufacturer,
//       model: model,
//       options: {}
//     };
//     for (const option of options) {
//       for (const key in option) {
//         car.options[key] = option[key];
//       }
//     }
//     return car;
//   }
//   const car = make_car('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
//   console.log(car);

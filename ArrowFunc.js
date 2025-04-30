// Arrow function

// const sayHello = () => {
//   console.log("Hello");
// }

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One line return
// const sayHello = () => "Hello"
// const sayHello = () => 5
// const sayHello = () => true
// const sayHello = () => [true]

// Return object in a one line
const sayHello = () => ({ msg: "hello" });
console.log(sayHello());

//Single value doesnt need parenthese

const identify = (name) => `my name is ${name}`;
console.log(identify("balaji"));

//Double value should give ()

const doubleIdentity = (firstname, lastName) =>
  `my name is ${firstname} ${lastName}`;
console.log(doubleIdentity("balaji", "preethi"));

//Foreach with arrowFunc

const names = ["Balaji", "Preeti", "shanthi"];

//without arrow function

// names.forEach(function (e) {
//   console.log(e);
// });

//With arrow function

names.forEach((output) => console.log(output));

//IndexValue
names.forEach((output, index) => console.log(`${output} and ${index}`));

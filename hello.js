/*
const sayHello = function () {
  console.log("Hello, world");
}
sayHello();


const sayHello = function (name) {
  console.log("Hello " + name);
}

sayHello("Ryan");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/

//Outputs "Hello John"
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//Returns "Hello John" into a variable but doesn't print
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
//Call upon the variable to print "Hello John to console"
console.log(greeting);
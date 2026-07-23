// Arrow Function
let p = "Sai Srihitha";
// Arrow function without parameters
const display = () => {
    console.log("Welcome to TypeScript");
};
// Arrow function with one parameter
const greet = (name) => {
    console.log("Hello, " + name);
};
// Arrow function with parameters and return type
const add = (a, b) => {
    return a + b;
};
// Function calls
display();
greet(p);
let sum = add(10, 20);
console.log("Sum =", sum);
export {};

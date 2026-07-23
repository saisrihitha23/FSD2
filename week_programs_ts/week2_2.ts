
// Arrow Function

let p: string = "Sai Srihitha";

// Arrow function without parameters
const display = (): void => {
    console.log("Welcome to TypeScript");
};

// Arrow function with one parameter
const greet = (name: string): void => {
    console.log("Hello, " + name);
};

// Arrow function with parameters and return type
const add = (a: number, b: number): number => {
    return a + b;
};

// Function calls
display();
greet(p);

let sum: number = add(10, 20);
console.log("Sum =", sum);

"use strict";
//program to demonstrate functions,parameters,return types
let a = 10;
let b = 20;
let c = "Sai Srihitha";
function display() {
    console.log("Hello, " + c);
}
function add(x, y) {
    return x + y;
}
display();
let sum = add(a, b);
console.log("Sum= ", sum);

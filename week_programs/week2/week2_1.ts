//program to demonstrate functions,parameters,return types

let a: number = 10;
let b: number = 20;
let c: string = "Sai Srihitha";
function display(): void{
console.log("Hello, "+ c);
}

function add(x: number, y: number): number{
    return x + y;
}

display();
let sum: number = add(a, b);
console.log("Sum= ", sum);
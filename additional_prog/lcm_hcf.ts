let a: number = 12;
let b: number = 18;
let x = a, y = b;
while (y != 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
let gcd = x;
let lcm = (a * b) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
let n: number = 1234;
let sum = 0;
while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}
console.log("Sum of Digits =", sum);
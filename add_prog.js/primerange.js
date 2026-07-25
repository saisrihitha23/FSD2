"use strict";
let start = 10;
let end = 50;
for (let n = start; n <= end; n++) {
    let prime = true;
    if (n <= 1)
        prime = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log(n);
}

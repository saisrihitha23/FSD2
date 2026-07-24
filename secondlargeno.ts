let a = [98,79,56,47,600];
let largest = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];
    }
}
let second = a[0];
for (let i = 0; i < a.length; i++) {
    if (a[i] > second && a[i] != largest) {
        second = a[i];
    }
}
console.log("Second Largest =", second);
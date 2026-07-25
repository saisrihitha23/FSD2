let a = [5,8,12,15,20,25];
let num = 3;
for (let i = 0; i < num; i++) {
    let first = a.shift();
    a.push(first!);
}
console.log(a);
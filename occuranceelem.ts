let a = [2,5,2,8,5,2,9];
for (let i = 0; i < a.length; i++) {
    let count = 1;
    let printed = false;
    for (let j = 0; j < i; j++) {
        if (a[i] == a[j]) {
            printed = true;
            break;
        }
    }
    if (!printed) {
        for (let k = i + 1; k < a.length; k++) {
            if (a[i] == a[k]) {
                count++;
            }
        }
        console.log(a[i] + " : " + count);
    }
}
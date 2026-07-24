let a = [2,5,2,8,5,2,9];
for (let i = 0; i < a.length; i++) {
    let count = 0;
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
        if (count > 0) {
            console.log(a[i]);
        }
    }
}
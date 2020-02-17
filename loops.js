//loops

let a = 15;
while (a >= 10) {
    console.log(a);
    a--;
}

let i = 0;
while (++i < 5) console.log(i);
i = 0;
while (i++ < 5) console.log(i);

for (i = 2; i < 10; ++i) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

i = 2;
while (++i < 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let n = 100;
let j = 0;
for (i = 1; i < n; i++) {
    let k = 0;
    for (j = i; j > 0; j--) {
        if (i % j == 0) {
            k++;
        }
    }
    if (k == 2) {
        console.log(i + " is simple");
    }
}

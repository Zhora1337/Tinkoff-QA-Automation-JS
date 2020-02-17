function makeWorker() {
    let name = "some Name";

    return function () {
        console.log(name);
    }
}
let worker = makeWorker();

worker()

function makeCounter() {
    let count = 0;

    return function () {
        return ++count;
    }
}

let counter = makeCounter()
let counter2 = makeCounter()

console.log(counter())
console.log(counter2())

function summ(a) {
    return function (b) {
        return a + b;
    }
}

let sum = summ;

console.log(sum(2)(3));
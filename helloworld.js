


//if
console.log("Statements");
let age = 21;
if (age >= 14 && age <= 90) {
    console.log("In");
}
age = 91;
if (!(age >= 14 && age <= 90)) {
    console.log("Not in");
}

let login = "Админ";
let password = "admin";
console.log("First try");
console.log("Who's there?");
if (login == "Админ") {
    console.log("Hi, " + login + "! Input a password");
    if (password == "admin") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
} else {
    console.log("incorrect user!");
}
console.log("Second try");
console.log("Who's there?");
password = "qwerty"
if (login == "Админ") {
    console.log("Hi, " + login + "! Input a password")
    if (password == "admin") {
        console.log("Access granted")
    } else {
        console.log("Password incorrect! Access denied")
    }
} else {
    console.log("incorrect user!");
}
console.log("Third try");
login = "some user";
if (login == "Админ") {
    console.log("Hi, " + login + "! Input a password")
    if (password == "admin") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
} else {
    console.log("incorrect user!");
}

//arrays

let arr = [1, 2, 3, 4, 5];
arr = arr.toString();
console.log(arr);

arr = arr.split(',');
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] += 'hello';
}

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i][0]);
    arr[i] -= 5;
}
console.log(arr);

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

function add(a, b) {
    return a + b;
}

console.log(add(2 / 4, 2 / 5));

function hello(name) {
    console.log("Hi, " + name + "!");
}

hello("Жора");

function type(arg) {
    console.log(typeof (arg));
}

type(arr);

function odd(array) {
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function revert(number) {
    let temp = String(number);
    let result = '';
    result = temp.split('').reverse().join("");
    return Number(result);
}
console.log(revert(254));

function sorting(string) {
    return string.split("").sort().join("");
}

function toUpp(str) {
    var array1 = str.split(' ');
    var newArray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newArray1.join(' ');
}

console.log(toUpp("some text here"));

function palindrom(str) {
    let temp = str.toLowerCase().split('').reverse().join("");
    return temp === str;
}

let obj = {
    'first': 1,
    'second': 2,
    'add': function () {
        return obj['first'] + obj['second'];
    }
}

let now = new Date();
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());

let d = new Date(2012, 1, 20, 3, 12);


function getWeekDay(date) {
    day = date.getDay();
    if (day == 0) {
        return "Sunday";
    } else if (day == 1) {
        return "Monday";
    } else if (day == 2) {
        return "Tuesday";
    } else if (day == 3) {
        return "Wenseday";
    } else if (day == 4) {
        return "Thursday";
    } else if (day == 5) {
        return "Friday";
    } else {
        return "Saturday";
    }
}
console.log(getWeekDay(d));
function getDateAgo(date, days) {
    let result = date - (days * 3600 * 1000 * 24);
    return new Date(result).getDate();
}

console.log(getDateAgo(new Date(), 365));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0).getDate();
    return date;
}

console.log(getLastDayOfMonth(2012, 2))

function getSecondsToday() {
    let now = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
    return now;
}

console.log(getSecondsToday())

function getSecondsToTomorrow() {
    return (3600 * 24) - getSecondsToday();
}

console.log(getSecondsToTomorrow())


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

arr = [1, 2, 3, 4, 5, 6];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    }
}

console.log(arr.filter(inBetween(2, 5)));

function inArray(array) {
    return function (x) {
        return array.includes(x);
    }
}

console.log(arr.filter(inArray([3, 5, 10])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(users.sort(byField('name')));

function makeArmy() {
    let shooters = [];


    let i = 0;
    while (i < 10) {
        let x = i;
        let shooter = function () { // функция shooter
            console.log("shooter #" + x); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

console.log(army)
army[6]();


function makeFigure(figure) {
    let fig = figure;

    return function () {
        console.log(fig);
    }
}

let square = makeFigure("Square");
square.fig = "Circle";
square();

const secret = new WeakMap();

class Figure {
    constructor(name) {
        secret.set(this, { name: name });
    }
    getName() {
        return secret.get(this).name;
    }
}

class Circle extends Figure {
    constructor(name, radius) {
        super(name);
        secret.set(this, { radius: radius });
    }
    getRadius() {
        return secret.get(this).radius;
    }
    getArea() {
        return secret.get(this).radius * secret.get(this).radius * Math.PI;
    }
}

let circle = new Circle("Circ 1", 12);
console.log(circle.getArea())


function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

doHomework('math', function () {
    console.log('Finished my homework');
});

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    console.log('Finished my homework');
}
doHomework('math', function () {
    console.log("HOROSHO!")
});
let x = 0;
try {
    x = 1 / 0;
    console.log(x);
} catch {
    console.log("A-a-a");
}

function substrings(str) {
    var arr = [];
    for (var x = 0, y = 1; x < str.length; x++ , y++) {
        arr[x] = str.substring(x, y);
    }
    var combinations = [];
    var temp = "";
    var slength = Math.pow(2, arr.length);

    for (var i = 0; i < slength; i++) {
        temp = "";
        for (var j = 0; j < arr.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += arr[j];
            }
        }
        if (temp != "") {
            combinations.push(temp);
        }
    }
    console.log(combinations.join("\n"));
}

substrings("dog");

function maxChars(str) {
    let lengths = [];
    let words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        lengths.push(words[i].length)
    }
    let max = Math.max(...lengths);
    for (var i = 0; i < lengths.length; i++) {
        if (max == lengths[i]) {
            return words[i]
        }
    }
    return;
}

console.log(maxChars("Hello world hiiiiiihihi"));

function countVowels(str) {
    let vowel_list = 'aeiouAEIOU';
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowel_list.indexOf(str[i]) != -1) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("House of the rising sun"));

function primeNumber(number) {
    let dividers = 0;
    for (var i = 0; i <= number; i++) {
        if (number % i == 0) {
            dividers++;
        }
    }
    return dividers == 2;
}

console.log(primeNumber(17));

function createMatrix(n) {

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (j != i) {
                console.log(' 0 ');
            } else {
                console.log(' 1 ');
            }
        }
        console.log("============");
    }
}

function lwGt(arr) {
    let temp = arr.sort()
    console.log(temp)
    console.log(temp[1] + " " + temp[temp.length - 2]);
}
lwGt([18, 23, 54, 23, 53, 21])

function isPerfect(number) {
    let dividers = []
    for (var i = 0; i < number; i++) {
        if (number % i == 0) {
            dividers.push(i);
        }
    }
    let sum = 0;
    for (var i = 0; i < dividers.length; i++) {
        sum += dividers[i]
    }
    return sum == number;
}
console.log(isPerfect(8128));
console.log(isPerfect(496));




class Animal {
    constructor(age) {
        secret.set(this, {age: age});
    }
    growUp(){
        secret.get(this).age++;
    }
    getAge() {
        return secret.get(this).age;
    }
}

let anim = new Animal(12);
anim.growUp();
console.log(anim.getAge())

class Lion extends Animal {
    constructor(age, name, speed) {
        super(age);
        this.name = name;
        secret.set(this, {speed: speed});
    }
    run() {
        console.log(this.name + " running with speed " + secret.get(this).speed);
    }
    getName() {
        return this.name;
    }
}

let lion = new Lion(10, "Leo", 79);

lion.run();

var animal = {
    jumps: null
}

var rabbit = {
    __proto__:animal,
    jumps:true
}

let head = {
    glasses:1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen)
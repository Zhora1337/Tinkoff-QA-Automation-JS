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
arr = [1,2,3,4,5]
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

console.log(maxChars("Hello world SomeLongWord"));

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

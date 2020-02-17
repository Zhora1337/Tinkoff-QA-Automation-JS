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
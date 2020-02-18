function start(str, callback) {
    console.log("Start " + str);
    callback();
}

start('something', function() {
    console.log("Done");
});

function end() {
    console.log("Done");
}

start("something else", end);

function squareEquasion(a,b,c, callback) {
    let D = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(D))/(2 * a);
    let x2 = (-b - Math.sqrt(D))/(2 * a);
    callback(x1, x2);
    return [x1, x2];
}

let x = squareEquasion(1, 5, 9 / 4, function(x1,x2){
    console.log(x1,x2)
});







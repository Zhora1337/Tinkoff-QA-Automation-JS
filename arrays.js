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
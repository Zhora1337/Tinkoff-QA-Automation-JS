//операции с разными типами
console.log("add: " + temp2+24); //some text23  
console.log("div: " + variable / 2); //NaN
console.log("mp: " + variable * 3);  //NaN
console.log("sub: " + (variable - 2)); //Nan


//явное преобразование
console.log(String(354));  //354


//сравнение строк
console.log("Strings")
console.log("double = " + ("abc" == "acb")); //false
console.log("double = " + ("abc" == "abc")); //true
console.log("double = " + ("abc" == new String("abc"))); //true
console.log("triple = " + ("abc" === new String("abc"))); //false


//сравнение чисел
console.log("Numbers");
console.log("double = " + (3.0 == 3)); //true
console.log("double = " + (3.0 == new Number(3))); //true
console.log("triple = " + (3.0 === 3.0)); //true
console.log("triple = " + ((1.5 + 1.5) === 3.0)); //true
console.log("triple = " + (3 === new Number(3))); //false


//логические операции
console.log(1 && 0); // 0
console.log(1 || 0); // 1
console.log(true && true);  //true
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 1 2
console.log(1 && null && 2) // null
console.log(console.log(1) && console.log(2))// 1 undefined
console.log(null || 2 && 3 || 4) // 3
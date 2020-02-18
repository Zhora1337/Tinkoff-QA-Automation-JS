let promise = new Promise(function (resolve, reject) {
    console.log("start");
    resolve("Done with code 200");
    reject(new Error("Error 404"));
})

promise.then(onFulFilled);

function onFulFilled(msg) {
    console.log(msg)
}

function onRejected(msg) {
    console.log(msg)
}



let promise2 = new Promise((resolve, reject) => {

    // через 1 секунду готов результат: result
    setTimeout(() => resolve("result"), 1000);

    // через 2 секунды — reject с ошибкой, он будет проигнорирован
    setTimeout(() => reject(new Error("ignored")), 1000);

});



function httpGet(url) {

    return new Promise(function (resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject("error");
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        } catch {
            console.log("Работает в DevTools")
        }
    });

}

httpGet("https://swapi.co/api/starships/2/").then(console.log);

/* outputs 
{
    "name":"CR90 corvette",
    "model":"CR90 corvette",
    "manufacturer":"Corellian Engineering Corporation",
    "cost_in_credits":"3500000",
    "length":"150",
    "max_atmosphering_speed":"950",
    "crew":"165",
    "passengers":"600"
    ,"cargo_capacity":"3000000",
    "consumables":"1 year",
    "hyperdrive_rating":"2.0",
    "MGLT":"60",
    "starship_class":"corvette",
    "pilots":[],
    "films":["https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],
    "created":"2014-12-10T14:20:33.369000Z",
    "edited":"2014-12-22T17:35:45.408368Z",
    "url":"https://swapi.co/api/starships/2/"}
*/
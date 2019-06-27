function dropElements(array, callback) {
    let arrayReturn = [];
    for (let x = 0; x < array.length; x++) {
        if (callback(array[x])) {
            arrayReturn.push(array[x]);
        };
    }

    return arrayReturn;
}

console.log(dropElements([1, 2, 3, 4], function (n) {return n >= 3;}))
console.log(dropElements([0, 1, 0, 1], function (n) {return n === 1;}))
console.log(dropElements([1, 2, 3], function (n) {return n > 0;}))
console.log(dropElements([1, 2, 3, 4], function (n) {return n > 5;}))
console.log(dropElements([1, 2, 3, 7, 4], function (n) {return n > 3;}))
console.log(dropElements([1, 2, 3, 9, 2], function (n) {return n > 2;}))
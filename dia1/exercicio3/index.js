function destroyer() {
    let arrayReturn = arguments[0];
    for (let x = 1; x < arguments.length; x++) {
        arrayReturn = removeByParam(arrayReturn, arguments[x]);
    }
    return arrayReturn;
}

function removeByParam() {
    let valueNotEqual = arguments[1];
    let array = arguments[0].filter(function (value) {
        return value !== valueNotEqual;
    })
    return array;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([2, 3, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburguer", 53], "tree", 53))

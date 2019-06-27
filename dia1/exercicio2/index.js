function soma(array) {
    let soma = 0;
    
    let firstValue = array[0] < array[1] ? array[0] : array[1];
    let secondValue = array[0] > array[1] ? array[0] : array[1];

    for (let x = firstValue; x <= secondValue; x++) {
        soma += x;
    }

    return soma;
}

console.log(soma([1, 4]))
console.log(soma([4, 1]))
console.log(soma([5, 10]))
console.log(soma([10, 5]))
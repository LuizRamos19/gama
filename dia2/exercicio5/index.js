let arrayFrutas = [
    {fruta: "uva", imagem: "/gama/dia2/img/uva.png", show: false},
    {fruta: "maça", imagem: "/gama/dia2/img/maça.png", show: false},
    {fruta: "manga", imagem: "/gama/dia2/img/manga.png", show: false},
    {fruta: "morango", imagem: "/gama/dia2/img/morango.png", show: false},
    {fruta: "pêra", imagem: "/gama/dia2/img/pêra.png", show: false},
    {fruta: "cereja", imagem: "/gama/dia2/img/cereja.png", show: false},
    {fruta: "melancia", imagem: "/gama/dia2/img/melancia.png", show: false},
    {fruta: "maracujá", imagem: "/gama/dia2/img/maracujá.png", show: false},
    {fruta: "pessêgo", imagem: "/gama/dia2/img/pessêgo.png", show: false},
    {fruta: "laranja", imagem: "/gama/dia2/img/laranja.png", show: false}
];

let button = document.getElementById("btnSubmit");
let figure = document.getElementById("figure");

function generateRandom(minValue, maxValue, notValidNumbers) {
    let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return notValidNumbers.includes(random) ? generateRandom(minValue, maxValue, notValidNumbers) : random;
}

button.addEventListener("click", function() {
    let notValidNumbers = [];

    for (let x = 0; x < arrayFrutas.length; x++) {
        if (arrayFrutas[x].show) {
            notValidNumbers.push(x+1);
        }
    }

    if (notValidNumbers.length === 10) {
        notValidNumbers = [];
        for (let x = 0; x < arrayFrutas.length; x++) {
            arrayFrutas[x].show = false;
        }
    }
    let random = generateRandom(1, 10, notValidNumbers);

    let img = document.createElement("img");
    if (figure.childElementCount > 0) {
        figure.innerHTML = "";
    }
    img.setAttribute("width", "200px");
    img.setAttribute("src", arrayFrutas[random-1].imagem);
    arrayFrutas[random-1].show = true;
    figure.appendChild(img);
})
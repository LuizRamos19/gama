let arrayFrutas = [
    {fruta: "uva", imagem: "/gama/dia2/img/uva.png"},
    {fruta: "maça", imagem: "/gama/dia2/img/maça.png"},
    {fruta: "manga", imagem: "/gama/dia2/img/manga.png"},
    {fruta: "morango", imagem: "/gama/dia2/img/morango.png"},
    {fruta: "pêra", imagem: "/gama/dia2/img/pêra.png"},
    {fruta: "cereja", imagem: "/gama/dia2/img/cereja.png"},
    {fruta: "melancia", imagem: "/gama/dia2/img/melancia.png"},
    {fruta: "maracujá", imagem: "/gama/dia2/img/maracujá.png"},
    {fruta: "pessêgo", imagem: "/gama/dia2/img/pessêgo.png"},
    {fruta: "laranja", imagem: "/gama/dia2/img/laranja.png"}
];

let button = document.getElementById("btnSubmit");
let figure = document.getElementById("figure");

button.addEventListener("click", function() {
    let maxValue = 10; 
    let minValue = 1;  
    let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    let img = document.createElement("img");
    if (figure.childElementCount > 0) {
        figure.innerHTML = "";
    }
    img.setAttribute("width", "200px");
    img.setAttribute("src", arrayFrutas[random-1].imagem);
    figure.appendChild(img);
})
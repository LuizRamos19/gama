let validWords = [
    {fruta: "uva", imagem: "/gama/dia2/img/uva.png"},
    {fruta: "maça", imagem: "/gama/dia2/img/maça.png"},
    {fruta: "manga", imagem: "/gama/dia2/img/manga.png"},
    {fruta: "morango", imagem: "/gama/dia2/img/morango.png"},
    {fruta: "pêra", imagem: "/gama/dia2/img/pêra.png"}
];

let input = document.getElementById("name");
let img = document.getElementById("photo");

input.addEventListener("keyup", function(){
    for (let x = 0; x < validWords.length; x++) {
        if (validWords[x].fruta === input.value) {
            img.setAttribute("src", validWords[x].imagem);
        }
    }
})
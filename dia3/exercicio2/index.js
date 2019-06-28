let input = document.getElementById("count");
let button = document.getElementById("btnCount");
let label = document.getElementById("contagemRegressiva");
let rocket = document.getElementsByClassName("imagem-rocket")[0];

button.addEventListener("click", function() {
    label.innerText = input.value;
    var seconds = input.value;
    var timer = setInterval(function() {
        seconds--;
        label.innerText = seconds;
        if (seconds <= 0) {
            sendRocket();
            clearInterval(timer);
        };
    }, 1000);
});

function sendRocket() {
    var position = 0;
    var maxTop = document.getElementsByClassName("foguete")[0].offsetHeight;
    var timer = setInterval(function() {
        if (position == maxTop - 145) {
            clearInterval(timer);
            alert("Lançamento concluído")
        } else {
            position++;
            rocket.style["margin-bottom"] = position + "px";
        }
    }, 10);
}

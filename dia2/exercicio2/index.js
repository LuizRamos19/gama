let input = document.getElementById("name");
let span = document.getElementById("text-rendered");

input.addEventListener("keyup", function(){
    span.textContent = input.value;
})
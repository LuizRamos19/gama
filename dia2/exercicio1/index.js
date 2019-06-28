let button = document.getElementById("btnSubmit");
let span = document.getElementById("text-rendered");

button.addEventListener("click", function() {
    span.textContent = document.getElementById("name").value;
})
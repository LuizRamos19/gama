var Pessoa = function(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

Pessoa.prototype.ensinar = function() {
    console.log(this.nome + " está ensinando " + this.materia);
}

var Professor = function(nome, idade, sexo, materia) {
    Pessoa.call(this, nome, idade, sexo);
    this.materia = materia;
}

Professor.prototype = new Pessoa();
Professor.prototype.constructor = Professor;

var luiz = new Professor("Luiz", 22, "Masculino", "PT");
var marcelo = new Professor("Marcelo", 33, "Masculino", "Matemática");

luiz.ensinar();
marcelo.ensinar();
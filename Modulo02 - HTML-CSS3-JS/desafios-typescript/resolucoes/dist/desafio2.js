"use strict";
console.log("desafio 2");
var Profissao;
(function (Profissao) {
    Profissao["Desenvolvedor"] = "Desenvolvedor";
    Profissao["Tester"] = "Tester";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Hudson",
    idade: 32,
    profissao: Profissao.Desenvolvedor
};
var pessoa2 = {
    nome: "Daniel",
    idade: 33,
    profissao: Profissao.Tester
};
var pessoa3 = {
    nome: "Michael",
    idade: 19,
    profissao: Profissao.Desenvolvedor
};
var pessoa4 = {
    nome: "Carlos",
    idade: 40,
    profissao: Profissao.Tester
};
console.log(pessoa1, pessoa2, pessoa3, pessoa4);
console.log("**********");

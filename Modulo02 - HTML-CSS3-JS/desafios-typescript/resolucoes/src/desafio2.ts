console.log("desafio 2");

enum Profissao {
    Desenvolvedor = "Desenvolvedor",
    Tester = "Tester"
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1: Pessoa = {
    nome: "Hudson",
    idade: 32,
    profissao: Profissao.Desenvolvedor
}

const pessoa2: Pessoa = {
    nome: "Daniel",
    idade: 33,
    profissao: Profissao.Tester
}

const pessoa3: Pessoa = {
    nome: "Michael",
    idade: 19,
    profissao: Profissao.Desenvolvedor
}

const pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 40,
    profissao: Profissao.Tester
}

console.log(pessoa1, pessoa2, pessoa3, pessoa4);
console.log("**********");



const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}
const andre: { nome: string, idade: number, profissao: string } = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[] 
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ["matemática", "programação"]
}

const monica: Estudante = {
    nome: "Monica",
    idade: 29,
    materias: ["portugues", "geografia"]
}

function listar(lista: string[]) {
    for (let item of lista) {
        console.log("- ", item);
    }
}

listar(monica.materias);
listar(jessica.materias);
console.log("desafio 1");

// tipagem por inferência:
const Colaborador = {
    code: 2020,
    name: "Mary"
}
console.log(Colaborador);

//tipagem explícita:
const Colaborador2: { code: number, name: string } = {
    code: 2109,
    name: "Hudson"
}
console.log(Colaborador2);


//usando interface:

interface Colaborador {
    code: number,
    name: string
}


const Colaborador3: Colaborador = {
    code: 1105,
    name: "Rebeca"
}
console.log(Colaborador3);

const Colaborador4 = {} as Colaborador;
Colaborador4.code = 2015;
Colaborador4.name = "Benicio";

console.log(Colaborador4);
console.log("**********");



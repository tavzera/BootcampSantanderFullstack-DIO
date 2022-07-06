let valor: unknown;
valor = 5;
valor = 'Max';

let nome: string;

if (typeof valor === 'string') {
    nome = valor;
}
let valorAny2: any;
valorAny2 = true;
valorAny2 = 10

nome = valorAny2;

function geradorDeErro(mensagem: string, codigoDeErro: number): never {
    throw { message: mensagem, errorCode: codigoDeErro };
}

geradorDeErro('Um erro ocorreu!', 500); 

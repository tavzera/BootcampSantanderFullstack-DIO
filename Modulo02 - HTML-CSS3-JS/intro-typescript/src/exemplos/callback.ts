function adicionarETratar(n1: number, n2: number, callback: (num: number) => number) {
    let resultado = n1 + n2;
    return callback(resultado);
}


function multiplicarValorPor2(numero: number) {
    return numero * 2;
}
function aoQuadrado(numero: number) {
    return numero * numero;
}

console.log(adicionarETratar(1, 5, multiplicarValorPor2));
console.log(adicionarETratar(1, 5, aoQuadrado));
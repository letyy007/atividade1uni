function verificarNumero (numero) {
    if (numero === 0) {
        console.log("neutro");
    } else if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("ímpar");
    }
}
verificarNumero(10);
verificarNumero(5);
verificarNumero(0);
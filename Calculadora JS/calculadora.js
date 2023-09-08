function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:\n1- Soma (+)\n2- Subtração (-)\n3- Multiplicação(*)\n4- Divisão real(/)\n5- Divisão inteira (%)\n6- Potenciação(**)'));
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

function soma () {
    resultado= n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
}
function Subtracao () {
    resultado= n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
}
function multiplicacao () {
    resultado= n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
}
function divisaoReal () {
    resultado= n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
}
function divisaoInt () {
    resultado= n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
}
function potenciacao () {
    resultado= n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
}

if (operacao == 1) {
    soma();
} else if (operacao == 2){
    Subtracao();
} else if (operacao == 3){
    multiplicacao();
}else if (operacao == 4){
    divisaoReal();
}else if (operacao == 5){
    divisaoInt();
}else if (operacao == 6){
    potenciacao();
}

}

calculadora();



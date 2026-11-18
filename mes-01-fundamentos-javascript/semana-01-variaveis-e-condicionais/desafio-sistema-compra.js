//Crie um pequeno sistema que receba o nome, a idade e o saldo de uma pessoa.

//Mostre uma mensagem no console com essas informações e informe se ela possui saldo positivo, negativo ou zerado.

let nome = 'Julia';
let idade = 25;
let saldo = 0.00;

if(saldo < 0) {
    console.log('Seu saldo está positivo! Vc tem ' + saldo + ' reais!')
} else if(saldo == 0) {
    console.log('Seu saldo está zerado! Vc tem ' + saldo + ' reais!')
} else {
    console.log('Seu saldo está negativo! Vc tem ' + saldo + ' reais!')
}
//Crie uma variável chamada nota e faça uma condição:
//- Nota maior ou igual a 7: aprovado.
//- Nota entre 5 e 6.9: recuperação.
//- Nota menor que 5: reprovado.

let nota = 8;

if(nota >= 7) {
    console.log('Vc foi aprovado(a)!')
} else if(nota >= 5 && nota < 7) {
    console.log('Vc está em recuperação!')
} else {
    console.log('Vc foi reprovado(a)!')
}
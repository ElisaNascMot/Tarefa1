const Listadepecas = ['pecas de teste', 'AB', 'peca B']
console.log('quantidade de caracteres')
if (Listadepecas.length <= 10) {
    console.log('as pecas podem ser cadastradadas');
}
console.log('quantidade de caracteres')
for (let index = 0; index < Listadepecas.length; index++) {
    const pecaatual = Listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ': a peça atual possui nome inferior a 3 caracteres e não podem ser cadastradadas')
    } else
        console.log(pecaatual + ' : a peça pode ser cadastrada.')
}
console.log('peso da peça')
const pesodapecaemgramas = 50
if (pesodapecaemgramas >= 100) {

    console.log('peso suficiente')
} else {
    console.log('valor insuficiente')
}
//testesegundo


for (num = 8; num <= 10; num++) {
    console.log(num)
}
console.log(' ')
for (let tabuada = 8; tabuada <= 80; tabuada=tabuada + 8) {
    console.log(tabuada)
}


//testetreceiro
var nome=('Elisa')
var sobrenome=('Nascimento')
console.log(nome+" "+sobrenome)


// testequarto
ca1=15*2+10*9
console.log(ca1)
ca2=(10+10+14)/2
console.log(ca2)
ca3=100/2*4/5
console.log(ca3)

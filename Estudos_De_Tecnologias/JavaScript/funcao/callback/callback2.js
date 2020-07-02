const nota = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []

for (let i in nota){
    if(nota[i]<7){
        notasBaixas.push(nota[i])
    }
}
console.log(notasBaixas)

//com callback
notasBaixas2 = nota.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2);

console.log(notasBaixas === notasBaixas2);

let notasAltas = nota.filter(nota => nota > 7)

console.log(notasAltas);


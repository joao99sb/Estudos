function real(a,b){
    let resultado = a+b
    return console.log(resultado.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}).replace('.',','))

}
real(0.2,0.1)


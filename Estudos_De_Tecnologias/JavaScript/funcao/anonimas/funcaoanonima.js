const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b));
    
}
imprimirResultado(3,4)

imprimirResultado(5,3,function(x,y){
    return x - y
})

const pessoa ={ 
    falar(){
        console.log("bom dia!");
        
    }
    
}
pessoa.falar()
imprimirResultado(3,5,pessoa.falar())


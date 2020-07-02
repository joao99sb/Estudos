auxiliadora = function(numero){
    if(!Number.isInteger(numero)){
        return console.log('não é inteiro');
    }else{
        if(numero % 3 === 0){
            return true
        }else{
            return false
        }
    }
}

console.log(auxiliadora(4.3));


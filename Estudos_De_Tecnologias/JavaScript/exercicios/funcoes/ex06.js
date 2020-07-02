juros = function(inicial,tempo,juros){
    let resultado = inicial*((juros/100)+1)**tempo
    return console.log(resultado.toFixed(2).replace('.',','));
    
}
juros(1000,5,12)
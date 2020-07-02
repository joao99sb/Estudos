const fabricantes = ["mercedes", "audi", "BMW"]

function imprimir(nome,indice,sob){
    console.log(`${indice +1}. ${nome} `);
    
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a,b,c,d,e){
    console.log(a,b,c,d,e);
    
})

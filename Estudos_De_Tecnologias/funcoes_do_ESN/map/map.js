const tecnologia = new Map()
tecnologia.set('react',{framework:false})
tecnologia.set('angular',{framewor:true})
console.log(tecnologia.get('react'));

const chaveEvalor = new Map([
    [function(){ },'funcao'],
    [{},'objeto'],
    [123,'numero']
])
chaveEvalor.forEach((chave,valor)=>{
    console.log(chave,valor);
    
})
console.log(chaveEvalor.has(123))
chaveEvalor.delete(123)
console.log((chaveEvalor.has(123)));


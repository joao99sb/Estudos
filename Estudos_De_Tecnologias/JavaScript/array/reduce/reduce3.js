Array.prototype.reduce2 = function(callback,valorInicial=this[0]){
    let acumulador = valorInicial
    for(i=0 ;i < this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}
const alunos = [
    {nome:'joao',nota:7.3,bolsista:false},
    {nome:'maria',nota:9.2,bolsista:true},
    {nome:'pedro',nota:9.8,bolsista:false},
    {nome:'ana',nota:8.7,bolsista:true}   
]
const fun1 = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(b => b.bolsista).reduce2(fun1)); 


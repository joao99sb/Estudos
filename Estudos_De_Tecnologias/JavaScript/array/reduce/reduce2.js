const alunos = [
    {nome:'joao',nota:7.3,bolsista:false},
    {nome:'maria',nota:9.2,bolsista:true},
    {nome:'pedro',nota:9.8,bolsista:false},
    {nome:'ana',nota:8.7,bolsista:true}   
]

// 1) crie uma funcao q retorne se todos os alunos sao bolsistas
const fun1 = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(b => b.bolsista).reduce(fun1));



// 2) crie uma funcao q retoren se há pelo menos um aluno bolsista
const fun2 = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(b => b.bolsista).reduce(fun2));


//teste
const fun3 = function(a){
    
    if(a.bolsista){
        array.push(a)
    }
    
}
const array =[]
const teste = alunos.forEach(fun3)
console.log(array)

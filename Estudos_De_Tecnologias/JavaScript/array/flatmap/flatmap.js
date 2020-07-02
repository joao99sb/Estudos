const escola = [{
    nome:'turma M1',
    alunos:[{
        nome:'gustavo',
        nota:8.1
    },{
        nome:'ana',
        nota:9.3
    }]
},{
    nome:'turma M2',
    alunos:[{
        nome:"Roberto",
        nota:8.9
    },{
        nome:'rebeca',
        nota:7.3
    }]
}]

const getAlunos =  a => a.alunos.map(l => l.nota)
const novo1 = escola.map( a => a.alunos.map(l => l.nota))
console.log(novo1);
const novo3 = []

novo1.forEach(a => novo3.concat(a) )
console.log(novo3);

Array.prototype.flatMap= function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas = escola.flatMap(getAlunos)
console.log(notas);

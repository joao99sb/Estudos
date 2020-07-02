//a utilidade do this é deixar o parametro do objeto visivel para fora do escopo da funcao em 
//o operador new trasnforma a funcao em um objeto e so retorna oq vem depois do this.


let obj={}
//obj.nome=" "
//obj.idade=" "
console.log(obj);


function f(x,y){
    this.nome = x
    this.idade = y
    this.nomeidade = function(){
        return this.nome + " " + this.idade + " anos"
    }
}
let obj2 = new f("joao","20")
//console.log(obj2);
let joao = new f("joao","28")
let maria = new f('maria','15')
let jose = f("jose","23")
console.log(joao.nomeidade());
console.log(maria.nomeidade());
console.log(joao)
console.log(new f());
console.log(f());






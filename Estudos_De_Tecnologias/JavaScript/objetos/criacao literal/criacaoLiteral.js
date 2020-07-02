//notacao literal 
const obj ={}

//obj em JS
const obj2 = new Object

//funcoes construtoras
function produto(nome,preco,desc){
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = ()=>{
        return this.preco*(1-desc)
    }
}
const p1 = new produto('iphone',3000,0.15)
const p2 = new produto('caneta',8.99,0.30)
console.log(p2.getPrecoComDesconto());
p2.preco = 12
console.log(p2.getPrecoComDesconto());

//fucnao factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return salarioBase - faltas*salarioBase/30
        }
    }

}
const f1 = criarFuncionario('Joao',3600,5)

console.log(f1.getSalario());

//Object.creat
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//de JSON para objeto
const fromJSON = JSON.parse('{"info":"SOu um JSON"}')
console.log(fromJSON);
 


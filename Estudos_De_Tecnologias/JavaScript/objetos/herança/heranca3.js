const pai = {nome: 'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = "Roberta"
console.log(filha1.nome, filha1.corCabelo);
const filha2 = Object.create(pai,{
    nome:{value:'Ana',writable:false,
    enumerable:false, }
})
filha2.nome='jessica'
console.log(filha2);
console.log(filha2.corCabelo);

console.log(filha2.nome);
for( key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(`por heranca ${key}`);
        
        
}
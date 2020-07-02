const pessoa = new Object 

pessoa.nome='Ana'
pessoa.idade=12

console.log( Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave }: ${valor}`);
    

})




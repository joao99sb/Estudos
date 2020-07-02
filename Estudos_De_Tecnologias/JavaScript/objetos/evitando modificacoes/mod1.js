//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:"produto X",
    preco:20,
    tag: "promocao"
})
console.log('extensivel:', Object.isExtensible(produto) );

produto.nome = 'produto Y'
produto.mes= 02
console.log(produto);

Object.freeze(produto)
Object.nome = "joao"
console.log(produto);

//object.seal
const pessoa = {nome:"joao", tag:"barato"}
Object.seal(pessoa)
delete pessoa.tag
console.log(pessoa);

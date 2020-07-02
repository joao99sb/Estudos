const criarprodutos = function(nome,preco){
    let obj = {}
    obj.nome = nome
    obj.preco = preco
    return obj
}

const produto1 =  criarprodutos('celular','1800')

produto1.nome = "apple"

console.log(produto1);


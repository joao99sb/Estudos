const sequence ={
    _id:1,
    get id(){return this._id++}
   
}

const produtos = {}

const salvarProduto = function(produto){
    if(!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto 
    return produto
}
function getProduto(id){
    return produtos[id]||{}
}

//retorna toods os valores q estao dentro do objeto produtos
function getProdutos(){
    return Object.values(produtos)
}

//excui o produto com um certo id
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto 
}

module.exports = {salvarProduto,getProduto,getProdutos, excluirProduto}  
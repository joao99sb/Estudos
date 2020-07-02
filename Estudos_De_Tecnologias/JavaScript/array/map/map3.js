Array.prototype.map2 = function(callbakc){
    let novoArray = []
    for( i = 0; i < this.length; i++){
        novoArray.push(callbakc(this[i],i,this))
    }
    return novoArray
}
const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome":"caderno", "preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',                                      
    '{"nome":"caneta", "preco":7.50}'
]
console.log();

const conversor = e => JSON.parse(e)
const novoCarrinho = carrinho.map2(conversor).map2(e => e.preco)

console.log(novoCarrinho);

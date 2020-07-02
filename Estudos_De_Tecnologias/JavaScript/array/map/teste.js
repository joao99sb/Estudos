const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome":"caderno", "preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',
    '{"nome":"caneta", "preco":7.50}'
]

Array.prototype.selector = function(){
    for(i = 0; i < this.length; i++ ){
        if(this[i].preco < 14){
            delete this[i]
        }
    }
    for(i = 0; i < this.length; i++){
        if(this[i] === undefined){
            this.splice(i,i+1)
        }
    }
    return this
}
const conversor = e => JSON.parse(e)
const novo = carrinho.map(conversor)
novo.selector()

console.log(novo); 
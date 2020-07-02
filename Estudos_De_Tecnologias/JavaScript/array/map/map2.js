const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome":"caderno", "preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',
    '{"nome":"caneta", "preco":7.50}'
]

const conversor = e => JSON.parse(e)
const novoCarrinho = carrinho.map(conversor).map(e => e.preco)

console.log(novoCarrinho);


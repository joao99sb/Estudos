function getPreco(imposto = 0,moeda="R$"){
    return `${moeda} ${this.preco*(1-this.desconto)*(1+imposto)}`
}

const produto = {
    nome:"notebook",
    preco: 3500,
    desconto:0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 50000,desconto:0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro,0.10,"$"));
console.log(getPreco.apply(carro,[0.10,"$"]));




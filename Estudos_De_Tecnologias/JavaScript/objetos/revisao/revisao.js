const produto = new Object
produto.nome = "iphone"
produto.preco = '3000'
console.log(produto);
delete produto.preco
console.log(produto);

const carro = {
    modelo:"A4",
    preco:89000,
    proprietario:{
        nome:'joao',
        idade: 20,
        endereco:{
            rua:"Le parc",
            nuemro:100
        }
    },
    condutores: [{
        nome:'sonia',
        idade: 30
    },{
        nome:'ana',
        idade: 19
    }]
}
console.log(carro.condutores[0].nome);


const pessoa = {
    nome:"joao",
    idade:20,
    endereço:{
        logradouro:"rua x",
        numero:"100"
    }
}
const { nome, endereço} = pessoa
console.log(endereço);

const { endereço:{ numero}} =pessoa
console.log(numero);


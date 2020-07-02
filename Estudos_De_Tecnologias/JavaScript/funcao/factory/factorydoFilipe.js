function fabricarPessoa(nome,sobrenome){
    let pessoa={}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome
    
    function nomecompleto(){
        return `${nome} ${sobrenome}`
    }
    pessoa.nomecompleto = nomecompleto()
    return pessoa
}

let pessoa1 = fabricarPessoa('sonia','dias')
console.log(pessoa1.nomecompleto);


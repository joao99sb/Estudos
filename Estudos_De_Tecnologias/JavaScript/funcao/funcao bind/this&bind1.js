const pessoa = {
    saudacao: "bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()


const falarDePessoa = pessoa.falar.bind(pessoa)//funcao bind serve para quando colocar algo de um objeto 

falarDePessoa()
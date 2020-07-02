class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{
    constructor(sobrenome,profissao= 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super('silva')
    }
}
const filho = new Filho

const avo = new Avo
const pai = new Pai
console.log(avo);




class Lancamento{
    constructor(nome = "generico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class cicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...x){
        x.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let ValorConsolidado = 0
        this.lancamentos.forEach(l =>{
            ValorConsolidado += l.valor
            
        })
        return ValorConsolidado
    }  

}    

const salario = new Lancamento("salario", 45000)
const contaDeLuz = new Lancamento('luz', -220)

const contas = new cicloFinanceiro(4,2020)
contas.addlancamentos(salario,contaDeLuz)

console.log(contas.sumario());


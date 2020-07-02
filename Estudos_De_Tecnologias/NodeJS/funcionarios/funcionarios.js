const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const comparador = function(){
    let min = this[0]
    for(let i in this){
        if(this[i].salario < min.salario){
            min = this[i]
        }
    }
    
    return min
}

axios.get(url).then(Response =>{
    const funcionarios = Response.data
        
    const armazem = []
    const getCh = function(){
        if(this.pais == 'china'){
            armazem.push(this)
        }
    }
    
    const novo = funcionarios.filter(e => e.pais == 'China')
    const novo2 = novo.filter(l => l.genero == "F")

    
    const resultado = comparador.apply(novo2)
    console.log(resultado);
    
})


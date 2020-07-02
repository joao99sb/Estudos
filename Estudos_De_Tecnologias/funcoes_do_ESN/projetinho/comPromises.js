const http = require('http')


const getTurma = turma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve,reject)=>{
        http.get(url,res=>{        
            let resultado = ''
            res.on('data', data =>{
                resultado +=data
            })
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma(`A`),getTurma(`B`),getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(x => x.map(b => b.nome))
    .then(x => console.log(x))
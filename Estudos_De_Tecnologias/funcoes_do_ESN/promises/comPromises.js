const http = require('http')

const getTurma = turma => {
    
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve,reject)=>{
        http.get(url,res=>{
            let resultado = ''                     
            res.on('data',data=>{
                resultado+= data
                
                
            })
            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(err){
                    reject(err)
                    
                }
            })
            
            
        })
    })
}

Promise.all([getTurma("A"),getTurma("B"),getTurma("C")])
    .then(b=>[].concat(...b))
    .then(n=>n.map(no=>no.nome))
    .then(x=>console.log(x))
    .catch(err=>console.log(err.message))
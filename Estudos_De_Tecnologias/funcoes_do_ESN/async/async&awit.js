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
let obterAlunos = async ()=>{
    const ta = await getTurma("A")
    const tb = await getTurma("B")
    const tc = await getTurma("C")
    
    return [].concat(ta,tb,tc)   
}
obterAlunos()
    .then(alunos => alunos.map(a=>a.nome))
    .then(x=>console.log(x))

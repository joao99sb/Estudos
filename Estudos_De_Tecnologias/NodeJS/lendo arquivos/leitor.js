const fs = require('fs')
const caminho = __dirname + "/arquivo.json" 

//forma sincrona
// const conteudo1 = fs.readFileSync(caminho,'utf-8')
// const conteudo2 = JSON.parse(conteudo1)
// console.log(conteudo1);
// console.log(conteudo2);

// //forma assincrona
// fs.readFile(caminho,'utf-8',(err,conteudo) =>{
//     if(err){
//         throw err
//     }//serve para capturar o erro
    
    
//     const config = conteudo
//     const config2 = JSON.parse(config)
    
//     console.log(config);
//     console.log(config2);
    
    
// })

const conf = require('./arquivo.json')
console.log(conf.db);
conf.db2 = {
    nome:"joao"
}
console.log(conf);

fs.readdir(__dirname,(err,data)=>console.log(data))

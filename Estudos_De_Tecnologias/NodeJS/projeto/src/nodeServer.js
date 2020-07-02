const porta = 3003
const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')

//transforma 
app.use(bodyParser.urlencoded({ extended:true }))

//faz uma requisicao ao servidor pela rota que retorna os valores dentro do objeto
app.get('/produtos',(request,response,next)=>{
    response.send(dataBase.getProdutos())//converte para json automaticamente
    console.log('lista de produtos requisitada');
    
})

//faz uma requisicao ao servidor pela rota que retorna cada valor especifico da id
app.get('/produtos/:id',(request,response,next)=>{
    response.send(dataBase.getProduto(request.params.id))
})

//
app.post('/produtos',(request,response,next)=>{
    
    let price = Number(request.body.price)
    const produto = dataBase.salvarProduto({
        nome: request.body.name,
        preco: `$${price.toFixed(2).replace('.',',')}`
    })
    
    response.send(produto) //json
    // response.send()
    console.log('produto adicionado');
    
})

app.delete('/produtos/:id',(req,res)=>{
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto)
    console.log('produto deletado');
    
})

//msotra a porta q sera utilizada e uma funcao callback só para mostrar q o servidor esta funcionando
app.listen(porta,()=>console.log(`servidor na porta ${porta}`)) 
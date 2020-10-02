const express = require('express');
const bodyParser = require('body-parser')
const multerConfig = require('./multer')
const app = express();
const multer = require('multer')

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended:true})) 
app.use(express.json())



const upload = multer(multerConfig).single('arquivo')

app.post('/upload', upload, (req,res)=>{
    console.log(req.file)
    return res.send('okay')
})


app.post('/form',(req,res)=>{
    res.send({
        ...req.body,
        id:1
    })
    console.log(req.body)
})

app.get('/evenOrOdd/',(req,res)=>{
    const par = parseInt(req.query.number) % 2 === 0
    res.send({
        resultado: par ? "par":"impar"
    })
    
})
app.listen(3000,()=>{console.log('porta 3000 aberta')})
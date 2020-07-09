import express from "express";
const app = express()
// yarn add @types/express
// yarn tsc e a pasta do arquivo

app.get('/',(req,res)=>{
    return res.send('helo wolrd 2')
})

app.listen(3333)

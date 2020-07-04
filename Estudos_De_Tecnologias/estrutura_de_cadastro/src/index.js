const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const cli = require('cli-color')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routes)

app.listen(3333,()=>console.log(cli.blue('porta ')+cli.bold('3333')+cli.blue(' aberta')))
const fs = require('fs')

const prodo = {
    nome:'celular',
    preco:2000,
    desconto:0.25
}
  fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(prodo),err=>console.log(err||'arquivo salvo'))
let amigo = {nome:'josé',
sexo:'Masculino',
peso:85.4,
engordar(p){
    console.log('engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(amigo.peso )
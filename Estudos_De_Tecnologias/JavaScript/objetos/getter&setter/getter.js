const sequencia = {
    _valor: 1,//convencao
    get valor(){return this._valor},
    
}

console.log(sequencia.valor);
sequencia.valor = 5
console.log(sequencia.valor);

sequencia._valor = 5
console.log(sequencia.valor);



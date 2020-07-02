const sequencia = {
    _valor: 5,
    get valor(){return this._valor},
    set valor(x){
        if(x*2>this._valor){
            this._valor = x*2
        }
    }

}
sequencia.valor = 5
console.log(sequencia.valor);
sequencia.valor = 3
console.log(sequencia.valor);


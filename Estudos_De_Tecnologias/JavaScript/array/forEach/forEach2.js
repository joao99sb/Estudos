
const pessoa = ['julia','rodolfo','fred','roberto']




Array.prototype.forEach2 = function(x){
    for(l = 0; l < this.length; l++){
        x(this[l],l,this)
        
    }
}
pessoa.forEach2((n,i) => console.log(n,i))
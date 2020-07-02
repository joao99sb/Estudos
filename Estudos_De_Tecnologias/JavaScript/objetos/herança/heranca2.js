//cadeia de protótipos (protorype chain)

Object.prototype.attr0 = "D"//nao faca isso em casa 
const avo = {attr1:"A"}
const pai = {__proto__: avo, attr2:"B"}
const filho = {__proto__:pai, attr3:"C"}
console.log(filho.attr0);
console.log(filho);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual +=delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h e a limete ${this.velMax}`
    }
}
const ferrari= {
    modelo:"F40",
    velMax: 324
}
const volvo = {
    modelo:"v40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(ferrari,carro)
volvo.acelerar(35)
console.log(volvo.status());
volvo.acelerar(70)
console.log(volvo.status());

ferrari.acelerar(300)
console.log(ferrari.status());
console.log(ferrari);



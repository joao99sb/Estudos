function carro (velocidadeMaxima = 200, delta=5){
    //metodo privado
    let velocidadeAtual = 0

    //metodo público 
    this.acelerar = function(){
        if( velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual=velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}
const uno = new carro
console.log(typeof uno);

uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(300, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());




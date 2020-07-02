const num = [1,2,3,4,5]

const dobro = function(vec){
    let vec2=[]
    for(let i in vec){
        let a = vec[i]*2
        vec2.push(a)
    }
    return vec2
}

console.log(dobro(num));

const resultado = num.map(a => a*2).map(a => a-1)
console.log(resultado);


const soma = e => e + 10
const mult = e => e*10

const resultado2 = num.map(soma).map(mult)
console.log(resultado2);

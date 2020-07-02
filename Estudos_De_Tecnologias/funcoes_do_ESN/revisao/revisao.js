const ob = {a:1,b:2,c:3}
console.log(Object.entries(ob));


//notacao literal

const nome = 'joao'

const obj = {
    nome,

    get idai(){
        return nome
    }
}
console.log(obj);
console.log(obj.idai);


//destructuring
const [a,b,c, ...z] ='psicopata'
console.log(a,b,c,z);

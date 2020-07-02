class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`);
                
    }
}


const p1 = new pessoa('joao')
p1.nome = 'joaquim'

for(l in p1){
    p1.hasOwnProperty(l)?
    console.log(`sim ${l}`):console.log(`nao ${l}`);
    
    
}


// console.log(typeof pessoa);

// const p1 = new pessoa('joao')
// p1.falar()

// const pessoa2 = nome =>{
//     return{
//         falar: () => console.log(`meu nome é ${nome}`)
        
//     }
// }
// const p2 = pessoa2('sonia')
// p2.falar()



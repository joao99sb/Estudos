let s ="10, 20,20, 8, 25, 3, 0, 30, 1"
let vec = s.split(',')
let tabela=[]
    for(let i in vec){
        let x = Number(vec[i])
        
        tabela.push(x)
    }

let min = tabela[0]
let max = tabela[0]
let record = 0
let menor = 0
for(let i in tabela){
    if(tabela[i]>max){
        max = tabela[i]
        record++
    }
    if(tabela[i] < min){
        min = tabela[i]
        menor = Number(i) + 1
    }   
}

final = [record,menor]
console.log(final);
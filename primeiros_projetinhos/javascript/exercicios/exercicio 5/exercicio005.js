var btt = document.getElementById('btt')
btt.addEventListener('click', f)
var num = document.getElementById('txt')
var btt2 = document.getElementById('btt2')
btt2.addEventListener('click',g)

let vetor = []
var tab = document.getElementById('tab')

//fun1() funcao q vai dizer se o numero esta fora de do range de 1 a 100
function fun1(n){
    if(n < 1 || n > 100){
        return true
    }else{
        return false
    }
}

//fun2() fucncao que vai detectar se o numero ja esta registrado no banco de dadosfun
function fun2(n,v){
    if(v.indexOf(Number(n)) !=-1 ){
        return true
    }else{
        return false
    }
}


function f(){
    if(num.value.length==0){
        alert('favor preeencher')
    }else{
        if(fun1(num.value)){
            alert('valor invalido')
        }else if(fun2(num.value, vetor)){
            alert('ja registrado')
        }else{
            let n = Number(num.value)
            let item = document.createElement('option')
            item.innerHTML = `nuemro ${n} foi registrado`
            tab.appendChild(item)
            vetor.push(n)
        }
        num.value = " "
        num.focus()
        

    }
   
    
}

function g(){
    if(vetor.length == 0){
        alert('favor inserir numeros para serem analizados')

    }else{
        let res = document.querySelector('#res')
        let total = vetor.length
        let sum = 0
        let max = vetor[0]
        let min = vetor[0]
        
        for(let p in vetor){
            if(vetor[p]>max){
                max = vetor[p]
            }else if(vetor[p<min]){
                min = vetor[p]
            }
             
            sum  += vetor[p]
            
        }
        let media = sum/total
        res.innerHTML= `<p>a lista possue ${total} elementos </p> ` 
        res.innerHTML+=`<p>o maior numero é ${max}</p>`
        res.innerHTML+=`<p>o menor numero é ${min}</p>`
        res.innerHTML+=`<p>a soma é ${sum}</p>`
        res.innerHTML+=`<p>a média é ${media}</p>`


    }
    tab.innerHTML=" "
    vetor = []
}


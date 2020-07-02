var btt = document.querySelector('input#btt')
btt.addEventListener('click',f)
function f(){
    let num = document.getElementById('txt1')
    let tab = document.getElementById('tab')
    

    let n = Number(num.value)
    if(num.value.length == 0 ){
        alert('favor preencher com um numero')
    }else{
        tab.innerHTML = " "
        for(c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`/* serve para atribuir um valor para a option  */
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
        }
    }
            

    


   
}   

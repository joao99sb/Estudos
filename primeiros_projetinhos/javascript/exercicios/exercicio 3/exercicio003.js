var btt = document.getElementById('btt')
btt.addEventListener('click', contar)

function contar(){
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let pas = document.getElementById('txtp').value
    let res = document.getElementById('res')
    if( ini.length == 0 || fim.length == 0 ){
        alert('[ERRO] Favor colocar valores validos')
    }else{
        res.style.textAlign = 'left'
        res.innerHTML = 'contando... <br>'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(pas)
        if(p<= 0){
            alert('passo invalido, entao será considerado como passo igual a 1')
            p = 1
        }
        if( i<f){
            for(c = i; c <= f; c+=p){
                res.innerHTML += ` ${c}`
            }
        }else{
            for(c = i; c >= f; c-=p){
                res.innerHTML += ` ${c}`
            }
        }
    }

}
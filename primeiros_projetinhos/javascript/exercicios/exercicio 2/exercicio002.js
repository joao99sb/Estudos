var btt = document.getElementById('btt')
btt.addEventListener('click', ver)
 
function ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var data = document.getElementById('data')
    var res = document.getElementById('res')
    if(data.value.length == 0 || Number(data.value) > ano || data.value < 1920){
        alert('[ERRO] favor colocar um ano valido')
    }else{
        var idade = ano - Number(data.value)
        var gen = " "
        var sex = document.getElementsByName('sex')
        var img = document.createElement('img')
        if(sex[0].checked){
            gen = "Masculino"
            if( idade <= 10 ){
                //crianca
                img.setAttribute('src', 'bb-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }  
            document.body.style.background = "rgb(146, 146, 218)"
        
        }else if(sex[1].checked){
            gen = " Feminino"
            if( idade <=10 ){
                //crianca
                img.setAttribute('src', 'bb-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
            document.body.style.background = "rgb(146, 146, 218)"
        }else{
            gen = ":vai se tratar mlk"
            img.setAttribute('src','peixe.png')
            document.body.style.background = 'rgb(250, 0, 188)'
        }
        
        res.style.textAlign = "center"
        res.innerHTML = `seu sexo é${gen} e sua idade é ${idade}`
        res.appendChild(img)


    }       
} 
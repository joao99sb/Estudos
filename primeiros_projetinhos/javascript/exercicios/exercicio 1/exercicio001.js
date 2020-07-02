function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var dia = new Date()
    var hora = dia.getHours()
    var min = dia.getMinutes()
    hora = 
    msg.innerHTML = `Agora são ${hora}:${min} `
    if( hora >= 0 && hora < 12){
        //bom dia
        img.src = "dia.png"
        document.body.style.background = 'rgb(228, 206, 111)'
    } else if(hora < 18){
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = 'rgb(211, 146, 27)'
    }else{
        //boa noite
        img.src = "noite.png"
        document.body.style.background = 'rgba(41, 45, 78, 0.781)'
    }

}

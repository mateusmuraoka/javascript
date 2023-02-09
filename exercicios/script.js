function carregar(){
    let msg = window.document.getElementById('msg')
    let img =window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <=12 ){
        //BOM DIA
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#e2cd9f'

    }else if (hora >12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#515154'
    }

}

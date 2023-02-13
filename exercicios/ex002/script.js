function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('nasc')
    var res = window.document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('ERRO!Verifique os dados e tente novamente.')
    }else{
        var sexo = window.document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
            }else if ( idade < 21){
                //Jovem
            }else if (idade <50){
                //Adulto
            }else{
                //Idoso
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
            }else if ( idade < 21){
                //Jovem
            }else if (idade <50){
                //Adulto
            }else{
                //Idoso
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    
}
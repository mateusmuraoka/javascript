function contar(){
    var i = window.document.getElementById('i')
    var f = window.document.getElementById('f')
    var p = window.document.getElementById('p')
    var res = window.document.getElementById('res')
    if (i.value == '' || f.value == ''){
        res.innerText = 'Impossível contar!'

    }else if (p.value == ''){
        window.alert('Passo inválido!.Considerando Passo com valor 1.')
        p = 1
    }else if (f > i){
        for (var num = 0 , num != f )
    }

    

    
    
}
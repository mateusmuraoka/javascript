function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if (ini.value == '' || fim.value == '' || pas.value ==''){
        res.innerText = 'Impossível contar!'

    }else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let c = i
        if (i < f){
            while (c <= f){
                res.innerHTML += `${c} \u{1F449} `
                c = c + p
                
                
    
    
            }
            res.innerHTML += `\u{1F3C1}`
           

        }else if (i > f){
            while(c >= f){
                res.innerHTML += `${c} \u{1F449} `
                c = c - p
            }
            res.innerHTML += `\u{1F3C1}`
        }
       
    }

    

    
    
}
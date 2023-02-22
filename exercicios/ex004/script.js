function tabuada(){
   var txtn = window.document.getElementById('txtn')
   var res = window.document.getElementById('res')
   if (txtn.value == ''){
        window.alert('Por favor, digite um número.')
   }else{
        var n = Number(txtn.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10){
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++

        }
   }
    

   

}
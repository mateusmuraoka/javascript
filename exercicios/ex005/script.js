function adicionar(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    if (num.value == ''){
        window.alert('Por favor , digite um número.')
    }else{
        let n = Number(num.value)
        let dados = []
        if (n > 100 || n < 1){
            window.alert('Por favor,digite um número entre 1 e 100.')
        }else{
            dados.push(n)
            var item = window.document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            res.appendChild(item)

        }
    }
  
}
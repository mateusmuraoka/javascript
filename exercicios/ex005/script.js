let dados = []
function adicionar(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    if (num.value == ''){
        window.alert('Por favor , digite um número válido.')
    }else{
        let n = Number(num.value)
        
        if (n > 100 || n < 1 || dados.indexOf(n) != -1){
            window.alert('Valor é inválido ou já encontrado na lista.')
        }else{
            dados.push(n)
            var item = window.document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            res.appendChild(item)

        }
    }
  
}
function finalizar(){
    window.alert(dados)
}
